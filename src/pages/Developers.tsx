import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/common/StaticPage';
import { manifest } from '@/lib/data';
import { SITE } from '@/data/registry';

const Code = ({ children }: { children: string }) => (
  <pre className="custom-scrollbar overflow-x-auto rounded-xl border border-border bg-[hsl(var(--command-bg))] p-4 text-[13px] leading-6 text-foreground">
    <code className="bg-transparent p-0">{children}</code>
  </pre>
);

const ENDPOINTS: [string, string][] = [
  ['/api/v1/manifest.json', 'Every category and tool: names, summaries, tags, install methods, related tools, section names and counts.'],
  ['/api/v1/tools/{category}/{slug}.json', 'A full tool: metadata plus every command with its example and explanation.'],
  ['/api/v1/tools/{category}/{slug}.md', 'The same tool as Markdown — ideal for LLM context windows.'],
  ['/api/v1/search-index.json', 'A compact index of every tool and command (used by the site’s own search).'],
  ['/api/openapi.json', 'OpenAPI 3.1 description of the endpoints above.'],
  ['/llms.txt', 'An llms.txt overview with links to every tool’s Markdown.'],
  ['/llms-full.txt', 'Every command on the site in a single Markdown file.'],
  ['/sitemap.xml', 'All indexable pages with last-modified dates.'],
];

export function DevelopersPage() {
  const nmap = manifest.tools.nmap;
  return (
    <StaticPage
      seo={{ title: 'Developers & AI agents', description: 'Free, read-only JSON and Markdown access to every tool and command on Terminal — plus llms.txt, OpenAPI and sitemap for crawlers and AI agents.', path: '/developers' }}
      eyebrow="Developers"
      title="Open data for scripts and AI agents"
      lead={`Everything on this site — ${manifest.totals.commands.toLocaleString('en-US')} commands across ${manifest.totals.tools} tools — is available as static JSON and Markdown. No key, no sign-up.`}
    >
      <h2>Endpoints</h2>
      <p>All endpoints are static files served from <code>{SITE.url}</code> over HTTPS, with CORS enabled for <code>GET</code>.</p>
      <ul>
        {ENDPOINTS.map(([path, what]) => (
          <li key={path}>
            <a href={path.includes('{') ? undefined : path}>
              <code>{path}</code>
            </a>{' '}
            — {what}
          </li>
        ))}
      </ul>

      <h2>Examples</h2>
      <p>List every tool in a category:</p>
      <Code>{`curl -s ${SITE.url}/api/v1/manifest.json \\
  | jq -r '.categories[] | select(.id=="web") | .groups[].tools[]'`}</Code>
      <p>Fetch all {nmap?.name ?? 'Nmap'} commands in a section:</p>
      <Code>{`curl -s ${SITE.url}/api/v1/tools/network/nmap.json \\
  | jq -r '.commands[] | select(.category=="Service Detection") | .command'`}</Code>
      <p>Give an agent the context for one tool:</p>
      <Code>{`curl -s ${SITE.url}/api/v1/tools/network/nmap.md`}</Code>

      <h2>Every page has alternates</h2>
      <p>
        Tool pages declare <code>&lt;link rel="alternate" type="text/markdown"&gt;</code> and <code>type="application/json"</code> in their head, and link to
        them visibly. Pages include schema.org structured data (<code>TechArticle</code>, <code>HowTo</code>, <code>BreadcrumbList</code>,{' '}
        <code>DefinedTermSet</code>).
      </p>

      <h2>Fair use</h2>
      <ul>
        <li>Cache responses — data changes at most a few times a week. Files send <code>Cache-Control</code> headers.</li>
        <li>Prefer one manifest or search-index request over crawling every HTML page.</li>
        <li>Identify your client with a descriptive <code>User-Agent</code>.</li>
        <li>Excessive request rates may be throttled at the edge.</li>
      </ul>

      <h2>Licence</h2>
      <p>
        Data is MIT-licensed like the rest of the project — reuse it freely, keep the notice. See the <Link to="/license">license</Link> and{' '}
        <a href={SITE.repo} target="_blank" rel="noopener noreferrer">source repository</a>.
      </p>
    </StaticPage>
  );
}
