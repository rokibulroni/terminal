import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCategory, manifest } from '@/lib/data';
import { GUIDES } from '@/data/guides';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Seo } from '@/components/Seo';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { breadcrumbLd, itemListLd } from '@/lib/structured-data';
import NotFound from '@/pages/NotFound';

export function CategoryPage() {
  const { category } = useParams();
  const cat = getCategory(category);
  if (!cat) return <NotFound what="category" />;

  const path = `/category/${cat.id}`;
  const allTools = [...new Set(cat.groups.flatMap((g) => g.tools))].map((s) => manifest.tools[s]).filter(Boolean);
  const guides = GUIDES.filter((g) => g.steps.some((s) => s.tool && allTools.some((t) => t.slug === s.tool))).slice(0, 4);
  const others = manifest.categories.filter((c) => c.id !== cat.id);

  return (
    <div className="animate-fade-in">
      <Seo
        title={`${cat.name} tools & commands`}
        description={`${cat.description} ${cat.toolCount} tools and ${cat.commandCount.toLocaleString('en-US')} explained commands: ${allTools
          .slice(0, 8)
          .map((t) => t.name)
          .join(', ')} and more.`}
        path={path}
        jsonLd={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: cat.name, path },
          ]),
          itemListLd(
            `${cat.name} tools`,
            allTools.map((t) => ({ name: t.name, path: `/tool/${t.category}/${t.slug}` })),
          ),
        ]}
      />

      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: cat.name }]} />

      <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <CategoryIcon name={cat.icon} className="h-7 w-7" />
        </span>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{cat.name}</h1>
          <p className="max-w-3xl text-[15px] leading-7 text-muted-foreground">{cat.intro}</p>
          <p className="font-mono text-xs tabular-nums text-muted-foreground">
            {cat.toolCount} tools · {cat.commandCount.toLocaleString('en-US')} commands
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {cat.groups.map((group) => (
          <section key={group.name} aria-labelledby={`g-${group.name}`}>
            <h2 id={`g-${group.name}`} className="eyebrow mb-4">
              {group.name}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.tools.map((slug) => {
                const t = manifest.tools[slug];
                if (!t) return null;
                const crossListed = t.category !== cat.id;
                return (
                  <li key={slug}>
                    <Link to={`/tool/${t.category}/${t.slug}`} className="surface-interactive group flex h-full flex-col p-5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-mono text-[15px] font-semibold">{t.name}</h3>
                        <ArrowRight className="h-4 w-4 -translate-x-1 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                      </div>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">{t.description}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] tabular-nums text-muted-foreground">{t.commandCount} commands</span>
                        {crossListed && (
                          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                            in {getCategory(t.category)?.name}
                          </span>
                        )}
                        {t.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {guides.length > 0 && (
        <section aria-labelledby="cat-guides" className="mt-16">
          <h2 id="cat-guides" className="mb-4 text-lg font-semibold tracking-tight">Guides using these tools</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link to={`/guide/${g.slug}`} className="surface-interactive block p-4">
                  <p className="font-medium">{g.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{g.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav aria-labelledby="other-cats" className="mt-16 border-t border-border pt-8">
        <h2 id="other-cats" className="eyebrow mb-4">
          Other categories
        </h2>
        <ul className="flex flex-wrap gap-2">
          {others.map((c) => (
            <li key={c.id}>
              <Link to={`/category/${c.id}`} className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm transition-colors hover:border-primary/40 hover:text-primary">
                <CategoryIcon name={c.icon} className="h-3.5 w-3.5" />
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
