import { Link } from 'react-router-dom';
import { Github, Linkedin, Globe, Terminal } from 'lucide-react';
import { manifest } from '@/lib/data';
import { SITE } from '@/data/registry';

const COLUMNS: { title: string; links: { to: string; label: string; external?: boolean }[] }[] = [
  {
    title: 'Explore',
    links: [
      { to: '/guides', label: 'Guides' },
      { to: '/practice', label: 'Practice' },
      { to: '/glossary', label: 'Glossary' },
      { to: '/favorites', label: 'Favorites' },
    ],
  },
  {
    title: 'Project',
    links: [
      { to: '/about', label: 'About' },
      { to: '/how-to-use', label: 'How to use' },
      { to: '/contribute', label: 'Contribute' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'For developers',
    links: [
      { to: '/developers', label: 'API & data' },
      { to: '/llms.txt', label: 'llms.txt', external: true },
      { to: '/sitemap.xml', label: 'Sitemap', external: true },
      { to: SITE.repo, label: 'Source code', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/disclaimer', label: 'Disclaimer' },
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
      { to: '/license', label: 'License' },
    ],
  },
];

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-foreground';

export function Footer() {
  const topCategories = manifest.categories.slice(0, 6);
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:grid-cols-6">
          <div className="col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <Terminal className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="font-mono text-[15px] font-semibold">Terminal</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              {manifest.totals.commands.toLocaleString('en-US')} explained commands across {manifest.totals.tools} tools. Free and open source, for learning and authorised testing.
            </p>
            <div className="flex gap-1.5">
              {[
                { href: SITE.repo, label: 'GitHub repository', icon: Github },
                { href: SITE.author.linkedin, label: 'LinkedIn', icon: Linkedin },
                { href: SITE.author.url, label: 'Author website', icon: Globe },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="space-y-3">
              <h2 className="eyebrow">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    {l.external ? (
                      <a href={l.to} className={linkClass} {...(l.to.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} className={linkClass}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <nav aria-label="Popular categories" className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border/60 py-5">
          {topCategories.map((c) => (
            <Link key={c.id} to={`/category/${c.id}`} className="text-xs text-muted-foreground hover:text-foreground">
              {c.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()}{' '}
            <a href={SITE.author.url} className="hover:text-foreground" target="_blank" rel="noopener noreferrer">
              {SITE.author.name}
            </a>
            . Content and code under the MIT License.
          </p>
          <p>For education and authorised security testing only.</p>
        </div>
      </div>
    </footer>
  );
}
