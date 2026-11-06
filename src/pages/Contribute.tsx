import { StaticPage } from '@/components/common/StaticPage';
import { SITE } from '@/data/registry';

const EXAMPLE = `{
  "tool": "nmap",
  "name": "Nmap",
  "description": "Network scanner for host discovery, port scanning and service detection.",
  "tags": ["port scanning", "service detection"],
  "homepage": "https://nmap.org",
  "docs": "https://nmap.org/book/man.html",
  "install": { "apt": "sudo apt install nmap", "brew": "brew install nmap" },
  "related": ["masscan", "RustScan"],
  "total_commands": 1,
  "commands": [
    {
      "id": 1,
      "category": "Service Detection",
      "command": "nmap -sV <target>",
      "example": "nmap -sV 10.10.11.5",
      "explanation": "Probes open ports to identify the service and version behind each one."
    }
  ]
}`;

export function ContributePage() {
  return (
    <StaticPage
      seo={{ title: 'Contribute', description: 'How to add tools and commands to Terminal, the data format, quality bar and the pull-request workflow.', path: '/contribute' }}
      eyebrow="Open source"
      title="Contribute to Terminal"
      lead="Every command on this site lives in a plain JSON file. If you can edit JSON, you can improve the reference."
    >
      <h2>Ways to help</h2>
      <ul>
        <li><strong>Fix a mistake</strong> — a wrong flag, a typo or an outdated command.</li>
        <li><strong>Improve an explanation</strong> — say what the command does and when you would use it.</li>
        <li><strong>Add a tool</strong> — create a new file and list it in the registry.</li>
        <li><strong>Write a guide</strong> — a workflow that strings tools together (<code>src/data/guides.ts</code>).</li>
        <li><strong>Improve the app</strong> — accessibility, performance or new features in React/Tailwind.</li>
      </ul>

      <h2>Where the data lives</h2>
      <p>
        Tools live in <code>data/tools/&lt;category&gt;/&lt;slug&gt;.json</code>. The file name is the URL slug. Categories, their groups and the order tools appear in
        are defined in <code>src/data/registry.ts</code>.
      </p>
      <pre className="custom-scrollbar overflow-x-auto rounded-xl border border-border bg-[hsl(var(--command-bg))] p-4 text-[13px] leading-6 text-foreground">
        <code className="bg-transparent p-0">{EXAMPLE}</code>
      </pre>

      <h2>Quality bar</h2>
      <ul>
        <li>Commands must be accurate for the current release of the tool. Check the official documentation.</li>
        <li>Use placeholders like <code>&lt;target&gt;</code> in <code>command</code> and realistic values in <code>example</code>. Use private or documentation IP ranges (10.x, 192.168.x, 192.0.2.x).</li>
        <li>Explanations start with what the command does in one sentence. Add a second line for when or why to use it.</li>
        <li>Group commands under clear section names, ordered from basic to advanced.</li>
        <li>Keep <code>id</code> values stable — favourites and deep links depend on them. Add new commands with new ids.</li>
      </ul>

      <h2>Check your change</h2>
      <p>The build validates every file against the schema and the registry, and fails with a clear message if something is off:</p>
      <pre className="overflow-x-auto rounded-xl border border-border bg-[hsl(var(--command-bg))] p-4 text-[13px] leading-6 text-foreground">
        <code className="bg-transparent p-0">{`npm install\nnpm run data:check   # validate data only\nnpm run dev          # preview locally`}</code>
      </pre>

      <h2>Submit</h2>
      <ol className="list-decimal space-y-1.5 pl-5">
        <li>Fork <a href={SITE.repo} target="_blank" rel="noopener noreferrer">the repository</a> and create a branch.</li>
        <li>Make your change and run <code>npm run data:check</code>.</li>
        <li>Open a pull request describing what changed and how you verified it.</li>
      </ol>
      <p>By contributing you agree that your contribution is released under the project’s MIT License.</p>
    </StaticPage>
  );
}
