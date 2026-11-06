import { Mail, Github, Globe, Linkedin, Bug } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SITE } from '@/data/registry';

// Assembled at runtime so the address isn't sitting in the HTML for scrapers.
const emailParts = ['hello', 'rokibulroni.com'];

export function ContactPage() {
  const channels = [
    { icon: Bug, title: 'Report a mistake', body: 'Wrong flag, broken link or outdated command? Open an issue.', href: `${SITE.repo}/issues/new`, cta: 'Open an issue' },
    { icon: Github, title: 'Contribute', body: 'Send a pull request with new tools, commands or fixes.', href: SITE.repo, cta: 'View the repository' },
    { icon: Linkedin, title: 'LinkedIn', body: 'Connect with the author.', href: SITE.author.linkedin, cta: 'Open LinkedIn' },
    { icon: Globe, title: 'Website', body: 'More projects and writing.', href: SITE.author.url, cta: 'rokibulroni.com' },
  ];
  return (
    <div className="animate-fade-in">
      <Seo title="Contact" description="Report a mistake, suggest a tool or get in touch with the maintainer of Terminal." path="/contact" />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} />
      <header className="mb-10 max-w-2xl space-y-3">
        <p className="eyebrow">Contact</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get in touch</h1>
        <p className="text-lg leading-8 text-muted-foreground">The fastest way to fix something is a GitHub issue. For anything else, email works too.</p>
      </header>

      <div className="grid max-w-3xl gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => (window.location.href = `mailto:${emailParts.join('@')}`)}
          className="surface-interactive flex flex-col items-start p-5 text-left sm:col-span-2"
        >
          <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="mt-3 font-semibold">Email</span>
          <span className="mt-1 text-sm text-muted-foreground">hello [at] rokibulroni [dot] com — usually answered within a few days.</span>
        </button>
        {channels.map((c) => (
          <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="surface-interactive flex flex-col items-start p-5">
            <c.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="mt-3 font-semibold">{c.title}</span>
            <span className="mt-1 flex-1 text-sm text-muted-foreground">{c.body}</span>
            <span className="mt-3 text-sm font-medium text-primary">{c.cta} →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
