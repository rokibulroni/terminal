import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/common/StaticPage';

const SHORTCUTS: [string, string][] = [
  ['⌘ K / Ctrl K', 'Open search from anywhere'],
  ['/', 'Open search (when not typing in a field)'],
  ['↑ ↓', 'Move through search results'],
  ['Enter', 'Open the selected result'],
  ['Esc', 'Close search or the menu'],
];

export function HowToUsePage() {
  return (
    <StaticPage
      seo={{ title: 'How to use', description: 'Search, filter, copy commands with your own target, save favourites and practise — a quick tour of Terminal.', path: '/how-to-use' }}
      eyebrow="Help"
      title="How to use Terminal"
      lead="A two-minute tour of the features that save the most time."
    >
      <h2>1. Find a command</h2>
      <p>
        Press <kbd className="kbd">⌘ K</kbd> (or <kbd className="kbd">Ctrl K</kbd>) and type a tool, a flag or a task — <code>nmap -sV</code>,{' '}
        <code>subdomain</code>, <code>reverse shell</code>. Results include tools and individual commands; pick one to jump straight to it. Or browse the{' '}
        <Link to="/">categories</Link> on the home page.
      </p>

      <h2>2. Filter within a tool</h2>
      <p>
        Every tool page has a filter box that narrows its commands as you type, and an “On this page” list to jump between sections. Each command has a link
        button so you can share exactly that command.
      </p>

      <h2>3. Set your target once</h2>
      <p>
        Click the crosshair icon in the header and enter an IP address or hostname. Example addresses and placeholders such as <code>&lt;ip&gt;</code> or{' '}
        <code>&lt;target&gt;</code> are replaced everywhere (highlighted so you can see what changed) and the Copy button copies the personalised version.
        Loopback, netmask, broadcast and CIDR network addresses are left alone.
      </p>

      <h2>4. Save favourites</h2>
      <p>
        Star any command to keep it on the <Link to="/favorites">Favorites</Link> page. Favourites are stored in your browser only — use Export and Import to move
        them between devices.
      </p>

      <h2>5. Follow a guide</h2>
      <p>
        <Link to="/guides">Guides</Link> walk through complete workflows — recon, web enumeration, privilege-escalation checks, incident triage — with the exact
        commands at each step.
      </p>

      <h2>6. Practise</h2>
      <p>
        <Link to="/practice">Practice mode</Link> shows what a command does and asks you to type it. Flag order doesn’t matter and any IP or URL counts, so you
        are tested on the part that matters.
      </p>

      <h2>Keyboard shortcuts</h2>
      <ul>
        {SHORTCUTS.map(([k, v]) => (
          <li key={k}>
            <kbd className="kbd">{k}</kbd> — {v}
          </li>
        ))}
      </ul>

      <h2>Make it yours</h2>
      <p>Switch between light and dark mode with the sun/moon button, and choose an accent colour (Harvest, Crimson or Forest) from the palette menu.</p>
    </StaticPage>
  );
}
