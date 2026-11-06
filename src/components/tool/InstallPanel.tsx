import { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import type { InstallMethods } from '@/data/types';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const LABELS: Record<keyof InstallMethods, string> = {
  apt: 'Debian / Kali',
  dnf: 'Fedora / RHEL',
  pacman: 'Arch',
  brew: 'macOS',
  pip: 'pip',
  pipx: 'pipx',
  go: 'Go',
  cargo: 'Cargo',
  npm: 'npm',
  docker: 'Docker',
  windows: 'Windows',
  other: 'Other',
};

export function InstallPanel({ install, name }: { install: InstallMethods; name: string }) {
  const methods = (Object.keys(LABELS) as (keyof InstallMethods)[]).filter((k) => install[k]);
  const [active, setActive] = useState(methods[0]);
  const [copied, setCopied] = useState(false);
  if (!methods.length || !active) return null;
  const cmd = install[active]!;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(true);
      toast.success('Install command copied', { duration: 1400 });
      setTimeout(() => setCopied(false), 1400);
    } catch {
      toast.error('Couldn’t copy');
    }
  };

  return (
    <section aria-labelledby="install-h" className="mb-8 rounded-xl border border-border bg-card/60 p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h2 id="install-h" className="flex items-center gap-2 text-sm font-semibold">
          <Download className="h-4 w-4 text-primary" aria-hidden="true" />
          Install {name}
        </h2>
        <div role="tablist" aria-label="Install method" className="flex flex-wrap gap-1">
          {methods.map((m) => (
            <button
              key={m}
              role="tab"
              type="button"
              id={`install-tab-${m}`}
              aria-selected={m === active}
              aria-controls="install-panel"
              onClick={() => setActive(m)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs font-medium transition-colors',
                m === active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {LABELS[m]}
            </button>
          ))}
        </div>
      </div>
      <div id="install-panel" role="tabpanel" aria-labelledby={`install-tab-${active}`} className="flex items-start gap-2">
        <pre className="custom-scrollbar min-w-0 flex-1 overflow-x-auto whitespace-pre-wrap break-words rounded-lg bg-[hsl(var(--command-bg))] px-3.5 py-2.5 font-mono text-[13px] leading-6">
          <code>{cmd}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          aria-label="Copy install command"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </section>
  );
}
