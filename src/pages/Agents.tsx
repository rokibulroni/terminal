import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { StaticPage } from '@/components/common/StaticPage';
import { CodeBlock } from '@/components/common/CodeBlock';
import { CategoryIcon } from '@/components/CategoryIcon';
import { manifest } from '@/lib/data';
import { SITE } from '@/data/registry';
import { ALL_SKILLS_ARCHIVE, MASTER_SKILL, MCP_PATH, SKILL_INSTALLER_PATH, skillName, skillZipPath } from '@/data/routes';

const MCP_URL = SITE.url + MCP_PATH;
const INSTALLER = SITE.url + SKILL_INSTALLER_PATH;

const MCP_CLIENTS: { name: string; where: string; code: string }[] = [
  { name: 'Claude Code', where: 'Terminal', code: `claude mcp add --transport http ${MASTER_SKILL} ${MCP_URL}` },
  {
    name: 'Cursor',
    where: '~/.cursor/mcp.json',
    code: JSON.stringify({ mcpServers: { [MASTER_SKILL]: { url: MCP_URL } } }, null, 2),
  },
  {
    name: 'VS Code (Copilot)',
    where: '.vscode/mcp.json',
    code: JSON.stringify({ servers: { [MASTER_SKILL]: { type: 'http', url: MCP_URL } } }, null, 2),
  },
  { name: 'Codex CLI', where: '~/.codex/config.toml', code: `[mcp_servers.${MASTER_SKILL}]\nurl = "${MCP_URL}"` },
  {
    name: 'Clients that only support stdio',
    where: 'Any MCP config',
    code: JSON.stringify({ mcpServers: { [MASTER_SKILL]: { command: 'npx', args: ['-y', 'mcp-remote', MCP_URL] } } }, null, 2),
  },
];

const MCP_TOOLS: [string, string][] = [
  ['search_commands', 'Full-text search across every command, optionally filtered by category or tool.'],
  ['get_tool', 'A tool’s full Markdown reference, or just one section of it.'],
  ['list_categories / list_tools', 'Browse what is available.'],
  ['list_guides / get_guide', 'Step-by-step workflows with copy-ready commands.'],
  ['define_term', 'Glossary lookup for security and networking terms.'],
];

export function AgentsPage() {
  const { totals, categories } = manifest;
  const { hash } = useLocation();
  // ScrollToTop leaves #hash navigations to the page.
  useEffect(() => {
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [hash]);
  return (
    <StaticPage
      seo={{
        title: 'Use with AI agents',
        description: `Add ${totals.commands.toLocaleString('en-US')} copy-ready security and terminal commands to Claude Code, Claude, Codex, Cursor or VS Code — as Agent Skills or through a free remote MCP server.`,
        path: '/agents',
      }}
      eyebrow="AI agents"
      title="Use Terminal inside your agent"
      lead={`Give Claude Code, Codex, Cursor or any MCP-capable agent the whole reference — ${totals.commands.toLocaleString('en-US')} commands across ${totals.tools} tools — as installable skills or a remote MCP server. Free, no key, read-only.`}
    >
      <p>
        Pick one: <a href="#skills">Agent Skills</a> work offline and load only the tools a task needs; the <a href="#mcp">MCP server</a> always has the
        latest data and adds search. You can use both.
      </p>

      <h2 id="skills">Agent Skills</h2>
      <p>
        Skills follow the open <a href="https://agentskills.io" target="_blank" rel="noopener noreferrer">Agent Skills</a> format: a folder with a{' '}
        <code>SKILL.md</code> and reference files the agent reads only when needed. There is one skill per category plus <code>{MASTER_SKILL}</code>, a
        small router that knows every tool, the guides and the glossary.
      </p>

      <h3>Claude Code — install everything</h3>
      <CodeBlock>{`curl -fsSL ${INSTALLER} | sh`}</CodeBlock>
      <p>
        Installs into <code>~/.claude/skills</code>. Start a new session and ask something like “enumerate SMB shares on 10.10.10.5” — Claude loads the right
        skill on its own.
      </p>

      <h3>Only some skills, or per project</h3>
      <CodeBlock>{`# just the master skill and the web category, into ./.claude/skills
curl -fsSL ${INSTALLER} | sh -s -- --project ${MASTER_SKILL} ${skillName('web')}

# other agents: --target codex (~/.codex/skills) or --target agents (~/.agents/skills)
curl -fsSL ${INSTALLER} | sh -s -- --target codex

# any folder
curl -fsSL ${INSTALLER} | sh -s -- --dir ~/my-agent/skills`}</CodeBlock>
      <p>
        Run it again any time to update. Prefer to read it first? <a href={SKILL_INSTALLER_PATH}>View the script</a> — it only downloads archives from
        this site and extracts them into the folder you choose.
      </p>

      <h3>Claude.ai and Claude Desktop</h3>
      <p>
        Download a skill’s <code>.zip</code> below, then go to <strong>Settings → Capabilities → Skills → Upload skill</strong>. Start with{' '}
        <code>{MASTER_SKILL}</code> plus the categories you use most.
      </p>

      <h3>Download a skill</h3>
      <ul className="!list-none !space-y-0 !pl-0">
        <li className="mb-2">
          <a
            href={skillZipPath(ALL_SKILLS_ARCHIVE)}
            download
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 !no-underline transition-colors hover:border-primary/50"
          >
            <span>
              <span className="block font-medium text-foreground">All skills</span>
              <span className="text-sm text-muted-foreground">
                {categories.length + 1} skills in one archive — for tools that accept a folder of skills
              </span>
            </span>
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </li>
      </ul>
      <div className="grid gap-2 sm:grid-cols-2">
        {[{ id: '', name: 'Router: every category', icon: 'TerminalSquare', toolCount: totals.tools, commandCount: totals.commands }, ...categories].map((c) => {
          const name = c.id ? skillName(c.id) : MASTER_SKILL;
          return (
            <a
              key={name}
              href={skillZipPath(name)}
              download
              className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3 py-2.5 !no-underline transition-colors hover:border-primary/50"
            >
              <CategoryIcon name={c.icon} className="h-4 w-4 shrink-0 text-primary" />
              <span className="min-w-0 flex-1">
                <span className="block truncate font-mono text-[13px] text-foreground">{name}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {c.name} · {c.toolCount} tools · {c.commandCount.toLocaleString('en-US')} commands
                </span>
              </span>
              <Download className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="sr-only">Download {name}.zip</span>
            </a>
          );
        })}
      </div>
      <p className="text-sm">
        Machine-readable list: <a href="/skills/index.json"><code>/skills/index.json</code></a>.
      </p>

      <h2 id="mcp">Remote MCP server</h2>
      <p>
        A stateless, read-only <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">Model Context Protocol</a> server over
        Streamable HTTP. No sign-in or API key.
      </p>
      <CodeBlock label="Server URL">{MCP_URL}</CodeBlock>
      {MCP_CLIENTS.map((c) => (
        <div key={c.name} className="space-y-2">
          <h3>{c.name}</h3>
          <CodeBlock label={c.where}>{c.code}</CodeBlock>
        </div>
      ))}
      <h3>Claude.ai and Claude Desktop</h3>
      <p>
        <strong>Settings → Connectors → Add custom connector</strong>, name it <code>Terminal</code> and paste the server URL.
      </p>
      <h3>Tools it provides</h3>
      <ul>
        {MCP_TOOLS.map(([n, d]) => (
          <li key={n}>
            <code>{n}</code> — {d}
          </li>
        ))}
      </ul>

      <h2 id="context">Plain context</h2>
      <p>No skills or MCP support? Point the agent at a URL or paste the Markdown:</p>
      <ul>
        <li>
          <a href="/llms.txt"><code>/llms.txt</code></a> — overview with links to every tool’s Markdown.
        </li>
        <li>
          <a href="/llms-full.txt"><code>/llms-full.txt</code></a> — every command, guide and glossary term in one file.
        </li>
        <li>
          <code>/api/v1/tools/&#123;category&#125;/&#123;slug&#125;.md</code> — one tool, e.g.{' '}
          <a href="/api/v1/tools/network/nmap.md">nmap.md</a>. See <Link to="/developers">Developers</Link> for the full API.
        </li>
      </ul>

      <h2>Use responsibly</h2>
      <p>
        Every skill and the MCP server tell agents to substitute real values for placeholders and to suggest intrusive commands only for systems you own
        or are authorised to test. Review commands before running them — see the <Link to="/disclaimer">disclaimer</Link>.
      </p>
    </StaticPage>
  );
}
