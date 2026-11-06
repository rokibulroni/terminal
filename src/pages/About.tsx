import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/common/StaticPage';
import { manifest } from '@/lib/data';
import { SITE } from '@/data/registry';

export function AboutPage() {
  const { tools, commands, categories } = manifest.totals;
  return (
    <StaticPage
      seo={{ title: 'About', description: `Terminal is a free, open-source reference of ${commands.toLocaleString('en-US')} explained commands for security work, built by ${SITE.author.name}.`, path: '/about' }}
      eyebrow="About"
      title="A reference you can actually read"
      lead="Terminal collects the commands security people reach for every day and explains each one in plain English — so you understand what you are about to run, not just how to type it."
    >
      <h2>What’s here</h2>
      <p>
        {commands.toLocaleString('en-US')} commands across {tools} tools in {categories} categories, from network discovery and web testing to memory forensics,
        cloud auditing and everyday Linux. Every command has a copy-ready form, an example and an explanation. <Link to="/guides">Guides</Link> string tools into
        complete workflows, the <Link to="/glossary">glossary</Link> defines the jargon, and <Link to="/practice">practice mode</Link> helps it stick.
      </p>

      <h2>Who it’s for</h2>
      <ul>
        <li>Penetration testers and red teamers who want a fast, searchable cheat sheet.</li>
        <li>SOC analysts, incident responders and blue teamers who need to know what an attacker’s command does.</li>
        <li>Students and CTF players building muscle memory.</li>
        <li>System administrators and DevSecOps engineers working in the terminal all day.</li>
      </ul>

      <h2>Principles</h2>
      <ul>
        <li><strong>Explain, don’t just list.</strong> A command without context is a liability.</li>
        <li><strong>Fast and private.</strong> No accounts, no tracking, no ads. Favourites and settings stay in your browser.</li>
        <li><strong>Open.</strong> The content and code are MIT-licensed, and every page is also available as <Link to="/developers">JSON and Markdown</Link>.</li>
        <li><strong>Responsible.</strong> Everything here is for learning and authorised testing — see the <Link to="/disclaimer">disclaimer</Link>.</li>
      </ul>

      <h2>Who builds it</h2>
      <p>
        Terminal is created and maintained by <a href={SITE.author.url} target="_blank" rel="noopener noreferrer">{SITE.author.name}</a>, with contributions from the
        community on <a href={SITE.repo} target="_blank" rel="noopener noreferrer">GitHub</a>. Found an error or want to add a tool? <Link to="/contribute">Here’s how</Link>.
      </p>
    </StaticPage>
  );
}
