/**
 * Remote MCP server (Streamable HTTP, stateless, read-only) served by
 * Cloudflare Pages Functions at /mcp. All data comes from the static API
 * under /api/v1 via the ASSETS binding, so the function never drifts from
 * the site.
 *
 * Spec: https://modelcontextprotocol.io/specification/2025-06-18
 */

interface Env {
  ASSETS: { fetch: (input: Request | string | URL, init?: RequestInit) => Promise<Response> };
}
interface Ctx {
  request: Request;
  env: Env;
}

type Json = null | boolean | number | string | Json[] | { [k: string]: Json };
interface RpcRequest {
  jsonrpc: '2.0';
  id?: string | number | null;
  method: string;
  params?: Record<string, unknown>;
}

// Mirrors src/data/types.ts (kept local so the function bundles standalone).
interface ToolSummary {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  commandCount: number;
  sections: string[];
}
interface Manifest {
  totals: { categories: number; tools: number; commands: number };
  categories: { id: string; name: string; description: string; groups: { name: string; tools: string[] }[]; toolCount: number; commandCount: number }[];
  tools: Record<string, ToolSummary>;
}
interface SearchIndex {
  tools: [slug: string, category: string, name: string, description: string, keywords: string][];
  commands: [toolIndex: number, id: number, command: string, explanation: string, section: string][];
}
interface FullTool extends ToolSummary {
  commands: { id: number; category: string; command: string; example: string; explanation: string }[];
}
interface GuideSummary {
  slug: string;
  title: string;
  description: string;
  level: string;
  minutes: number;
  tags: string[];
}
interface Term {
  term: string;
  slug: string;
  definition: string;
  tools?: string[];
  see?: string[];
}

const SERVER = { name: 'terminal-hub', title: 'Terminal command reference', version: '1.0.0' };
const PROTOCOLS = ['2025-06-18', '2025-03-26', '2024-11-05'];
const MAX_RESULTS = 50;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version, Last-Event-ID',
  'Access-Control-Expose-Headers': 'Mcp-Session-Id, Mcp-Protocol-Version',
  'Access-Control-Max-Age': '86400',
};
const baseHeaders = { ...CORS, 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' };

// ───────────────────────────── Data (cached per isolate) ─────────────────────────────
const cache = new Map<string, Promise<unknown>>();
function asset<T>(env: Env, origin: string, path: string, as: 'json' | 'text' = 'json'): Promise<T> {
  const key = `${as}:${path}`;
  let p = cache.get(key) as Promise<T> | undefined;
  if (!p) {
    p = env.ASSETS.fetch(new URL(path, origin)).then(async (r) => {
      if (!r.ok) throw new NotFound(path);
      return (as === 'json' ? r.json() : r.text()) as Promise<T>;
    });
    p.catch(() => cache.delete(key));
    cache.set(key, p);
  }
  return p;
}
class NotFound extends Error {}
class BadInput extends Error {}

// ───────────────────────────── Tools ─────────────────────────────
const str = (args: Record<string, unknown>, key: string, required = true): string | undefined => {
  const v = args[key];
  if (v === undefined || v === null || v === '') {
    if (required) throw new BadInput(`Missing required argument "${key}".`);
    return undefined;
  }
  if (typeof v !== 'string') throw new BadInput(`Argument "${key}" must be a string.`);
  if (v.length > 200) throw new BadInput(`Argument "${key}" is too long.`);
  return v.trim();
};
const num = (args: Record<string, unknown>, key: string, def: number) => {
  const v = args[key];
  if (v === undefined || v === null) return def;
  const n = Number(v);
  if (!Number.isFinite(n)) throw new BadInput(`Argument "${key}" must be a number.`);
  return Math.max(1, Math.min(MAX_RESULTS, Math.floor(n)));
};
const norm = (s: string) => s.toLowerCase();

const TOOLS = [
  {
    name: 'search_commands',
    title: 'Search commands',
    description:
      'Full-text search across every command in the reference. Returns matching commands with their tool, section and explanation. Use for "how do I … with <tool>" or task-based questions.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'What to look for, e.g. "smb share enumeration" or "nmap udp scan".' },
        category: { type: 'string', description: 'Optional category id to restrict results (see list_categories).' },
        tool: { type: 'string', description: 'Optional tool slug to restrict results (see list_tools).' },
        limit: { type: 'integer', minimum: 1, maximum: MAX_RESULTS, default: 10 },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_tool',
    title: 'Get tool reference',
    description: 'Get the full Markdown reference for one tool: description, install commands and every command with example and explanation. Optionally only one section.',
    inputSchema: {
      type: 'object',
      properties: {
        tool: { type: 'string', description: 'Tool slug or name, e.g. "nmap".' },
        section: { type: 'string', description: 'Optional section name to return only that part (case-insensitive substring).' },
      },
      required: ['tool'],
    },
  },
  {
    name: 'list_categories',
    title: 'List categories',
    description: 'List every category with its id, description and tool/command counts.',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'list_tools',
    title: 'List tools',
    description: 'List the tools in a category (or all tools) with slug, name, description and section names.',
    inputSchema: { type: 'object', properties: { category: { type: 'string', description: 'Category id; omit for every tool.' } } },
  },
  {
    name: 'list_guides',
    title: 'List guides',
    description: 'List step-by-step workflow guides (e.g. network recon, web app testing).',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'get_guide',
    title: 'Get guide',
    description: 'Get a workflow guide as Markdown, with ordered steps and copy-ready commands.',
    inputSchema: { type: 'object', properties: { slug: { type: 'string', description: 'Guide slug from list_guides.' } }, required: ['slug'] },
  },
  {
    name: 'define_term',
    title: 'Define term',
    description: 'Look up a security or networking term in the glossary.',
    inputSchema: { type: 'object', properties: { term: { type: 'string', description: 'Term or abbreviation, e.g. "kerberoasting".' } }, required: ['term'] },
  },
].map((t) => ({ ...t, annotations: { readOnlyHint: true, openWorldHint: false } }));

async function findTool(env: Env, origin: string, q: string) {
  const m = await asset<Manifest>(env, origin, '/api/v1/manifest.json');
  const key = norm(q);
  const all = Object.values(m.tools);
  return all.find((t) => norm(t.slug) === key) ?? all.find((t) => norm(t.name) === key) ?? null;
}

async function callTool(name: string, args: Record<string, unknown>, env: Env, origin: string): Promise<string> {
  switch (name) {
    case 'search_commands': {
      const query = str(args, 'query')!;
      const category = str(args, 'category', false);
      const toolQ = str(args, 'tool', false);
      const limit = num(args, 'limit', 10);
      const idx = await asset<SearchIndex>(env, origin, '/api/v1/search-index.json');
      const terms = norm(query).split(/\s+/).filter(Boolean);
      if (!terms.length) throw new BadInput('Query is empty.');
      const toolKey = toolQ ? norm(toolQ) : undefined;
      const toolText = idx.tools.map(([slug, cat, nm, desc, kw]) => ({ slug, cat, name: norm(nm), meta: norm(`${slug} ${nm} ${kw}`), desc: norm(desc) }));
      const hits: { score: number; i: number }[] = [];
      idx.commands.forEach(([ti, , cmd, expl, section], i) => {
        const t = toolText[ti];
        if (category && t.cat !== category) return;
        if (toolKey && norm(t.slug) !== toolKey && t.name !== toolKey) return;
        const c = norm(cmd);
        const e = norm(expl);
        const s = norm(section);
        let score = 0;
        for (const term of terms) {
          let ts = 0;
          if (t.meta.includes(term)) ts += 4;
          if (c.includes(term)) ts += 3;
          if (s.includes(term)) ts += 2;
          if (e.includes(term)) ts += 1;
          if (!ts) return; // every term must match somewhere
          score += ts;
        }
        // Reward the whole query appearing as a phrase, and shorter (more basic) commands.
        if (terms.length > 1) {
          const phrase = terms.join(' ');
          if (s.includes(phrase)) score += 6;
          if (e.includes(phrase)) score += 4;
          if (c.includes(phrase)) score += 4;
        }
        score -= Math.min(2, c.length / 200);
        hits.push({ score, i });
      });
      hits.sort((a, b) => b.score - a.score || a.i - b.i);
      if (!hits.length) return `No commands matched "${query}". Try fewer or broader words, or list_tools to browse.`;
      const out = [`${hits.length} match(es) for "${query}"; showing ${Math.min(limit, hits.length)}.`, ''];
      for (const { i } of hits.slice(0, limit)) {
        const [ti, , cmd, expl, section] = idx.commands[i];
        const [slug, cat, nm] = idx.tools[ti];
        out.push(`## ${nm} — ${section}`, `Tool: ${slug} (category: ${cat})`, '```bash', cmd, '```', expl, '');
      }
      out.push('Use get_tool for the full reference of a tool. Replace placeholders (e.g. <target>, TARGET_IP) with real values, and only test systems you are authorised to.');
      return out.join('\n');
    }
    case 'get_tool': {
      const q = str(args, 'tool')!;
      const section = str(args, 'section', false);
      const t = await findTool(env, origin, q);
      if (!t) throw new NotFound(`Unknown tool "${q}". Use list_tools or search_commands to find the right slug.`);
      if (!section) return asset<string>(env, origin, `/api/v1/tools/${t.category}/${t.slug}.md`, 'text');
      const full = await asset<FullTool>(env, origin, `/api/v1/tools/${t.category}/${t.slug}.json`);
      const key = norm(section);
      const cmds = full.commands.filter((c) => norm(c.category).includes(key));
      if (!cmds.length) return `No section of ${t.name} matches "${section}". Sections: ${t.sections.join(', ')}.`;
      const out = [`# ${t.name} — ${section}`, ''];
      let cur = '';
      for (const c of cmds) {
        if (c.category !== cur) out.push(`## ${(cur = c.category)}`, '');
        out.push('```bash', c.command, '```');
        if (c.example && c.example !== c.command) out.push('Example:', '```bash', c.example, '```');
        out.push(c.explanation, '');
      }
      return out.join('\n');
    }
    case 'list_categories': {
      const m = await asset<Manifest>(env, origin, '/api/v1/manifest.json');
      return [
        `${m.totals.categories} categories, ${m.totals.tools} tools, ${m.totals.commands} commands.`,
        '',
        ...m.categories.map((c) => `- ${c.id} — ${c.name}: ${c.description} (${c.toolCount} tools, ${c.commandCount} commands)`),
      ].join('\n');
    }
    case 'list_tools': {
      const category = str(args, 'category', false);
      const m = await asset<Manifest>(env, origin, '/api/v1/manifest.json');
      const cats = category ? m.categories.filter((c) => c.id === category) : m.categories;
      if (!cats.length) throw new NotFound(`Unknown category "${category}". Use list_categories.`);
      const out: string[] = [];
      for (const c of cats) {
        out.push(`## ${c.name} (${c.id})`, '');
        for (const s of new Set(c.groups.flatMap((g) => g.tools))) {
          const t = m.tools[s];
          if (t) out.push(`- ${t.slug} — ${t.name}: ${t.description} (${t.commandCount} commands; sections: ${t.sections.slice(0, 10).join(', ')})`);
        }
        out.push('');
      }
      return out.join('\n');
    }
    case 'list_guides': {
      const gs = await asset<GuideSummary[]>(env, origin, '/api/v1/guides/index.json');
      return gs.map((g) => `- ${g.slug} — ${g.title} (${g.level}, ~${g.minutes} min): ${g.description}`).join('\n');
    }
    case 'get_guide': {
      const slug = str(args, 'slug')!;
      if (!/^[a-z0-9-]+$/.test(slug)) throw new BadInput('Invalid guide slug.');
      try {
        return await asset<string>(env, origin, `/api/v1/guides/${slug}.md`, 'text');
      } catch {
        throw new NotFound(`Unknown guide "${slug}". Use list_guides.`);
      }
    }
    case 'define_term': {
      const q = norm(str(args, 'term')!);
      const terms = await asset<Term[]>(env, origin, '/api/v1/glossary.json');
      const exact = terms.find((t) => t.slug === q || norm(t.term) === q || norm(t.term).replace(/\s*\(.*\)$/, '') === q || norm(t.term).includes(`(${q})`));
      const matches = exact ? [exact] : terms.filter((t) => norm(t.term).includes(q) || norm(t.definition).includes(q)).slice(0, 5);
      if (!matches.length) return `No glossary entry for "${q}".`;
      return matches
        .map((t) => [`## ${t.term}`, t.definition, t.tools?.length ? `Tools: ${t.tools.join(', ')}` : '', t.see?.length ? `See also: ${t.see.join(', ')}` : ''].filter(Boolean).join('\n'))
        .join('\n\n');
    }
    default:
      throw new UnknownTool(name);
  }
}
class UnknownTool extends Error {}

// ───────────────────────────── JSON-RPC ─────────────────────────────
const rpcResult = (id: RpcRequest['id'], result: unknown) => ({ jsonrpc: '2.0', id: id ?? null, result });
const rpcError = (id: RpcRequest['id'], code: number, message: string) => ({ jsonrpc: '2.0', id: id ?? null, error: { code, message } });
const reply = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(body === null ? null : JSON.stringify(body), {
    status,
    headers: { ...baseHeaders, ...(body === null ? {} : { 'Content-Type': 'application/json' }), ...extra },
  });

async function handle(msg: RpcRequest, env: Env, origin: string): Promise<unknown> {
  const { id, method } = msg;
  const params = (msg.params ?? {}) as Record<string, unknown>;
  switch (method) {
    case 'initialize': {
      const requested = typeof params.protocolVersion === 'string' ? params.protocolVersion : '';
      return rpcResult(id, {
        protocolVersion: PROTOCOLS.includes(requested) ? requested : PROTOCOLS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER,
        instructions:
          'Read-only reference of security, networking, forensics, cloud and Linux CLI commands. Start with search_commands for task questions, or get_tool when you know the tool. Commands contain placeholders such as <target> or TARGET_IP — substitute real values. Only suggest intrusive commands for systems the user is authorised to test.',
      });
    }
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, { tools: TOOLS });
    case 'tools/call': {
      const name = typeof params.name === 'string' ? params.name : '';
      const args = params.arguments && typeof params.arguments === 'object' ? (params.arguments as Record<string, unknown>) : {};
      try {
        const text = await callTool(name, args, env, origin);
        return rpcResult(id, { content: [{ type: 'text', text }] });
      } catch (e) {
        if (e instanceof UnknownTool) return rpcError(id, -32602, `Unknown tool: ${name}`);
        if (e instanceof BadInput || e instanceof NotFound) return rpcResult(id, { content: [{ type: 'text', text: e.message }], isError: true });
        return rpcResult(id, { content: [{ type: 'text', text: 'Internal error while reading the reference data.' }], isError: true });
      }
    }
    case 'resources/list':
      return rpcResult(id, { resources: [] });
    case 'prompts/list':
      return rpcResult(id, { prompts: [] });
    default:
      return rpcError(id, -32601, `Method not found: ${method}`);
  }
}

export const onRequestOptions = () => new Response(null, { status: 204, headers: CORS });

export const onRequestGet = ({ request }: Ctx) => {
  // No server-initiated stream: clients fall back to plain POST request/response.
  if ((request.headers.get('Accept') ?? '').includes('text/event-stream')) return reply(null, 405, { Allow: 'POST, OPTIONS' });
  return reply(
    { name: SERVER.name, description: 'MCP server (Streamable HTTP). POST JSON-RPC 2.0 messages to this URL.', docs: new URL('/agents', request.url).href },
    200,
  );
};

export const onRequestDelete = () => reply(null, 405, { Allow: 'POST, OPTIONS' });

export async function onRequestPost({ request, env }: Ctx): Promise<Response> {
  const origin = new URL(request.url).origin;
  const len = Number(request.headers.get('Content-Length') ?? 0);
  if (len > 64 * 1024) return reply(rpcError(null, -32600, 'Request too large'), 413);
  let msg: unknown;
  try {
    msg = await request.json();
  } catch {
    return reply(rpcError(null, -32700, 'Parse error'), 400);
  }
  if (Array.isArray(msg)) return reply(rpcError(null, -32600, 'Batch requests are not supported'), 400);
  if (!msg || typeof msg !== 'object' || (msg as RpcRequest).jsonrpc !== '2.0' || typeof (msg as RpcRequest).method !== 'string') {
    // Responses or malformed messages from the client: acknowledge without a body if it looks like a response.
    if (msg && typeof msg === 'object' && ('result' in msg || 'error' in msg)) return reply(null, 202);
    return reply(rpcError(null, -32600, 'Invalid request'), 400);
  }
  const rpc = msg as RpcRequest;
  if (rpc.id === undefined) return reply(null, 202); // notification (e.g. notifications/initialized)
  return reply((await handle(rpc, env, origin)) as Json);
}
