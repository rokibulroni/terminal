import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { Check, Copy, ChevronDown, Star, Link2 } from 'lucide-react';
import type { Command } from '@/data/types';
import { useFavorites } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { applyTarget, withTarget, type Segment } from '@/lib/target';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface CommandCardProps {
  command: Command;
  /** URL slug (stable identifier) */
  toolName: string;
  toolDisplayName?: string;
  category: string;
  highlighted?: boolean;
}

function Segments({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((s, i) =>
        s.replaced ? (
          <mark key={i} className="rounded-sm bg-primary/15 px-0.5 text-inherit ring-1 ring-primary/30" title="Your target">
            {s.text}
          </mark>
        ) : (
          <span key={i}>{s.text}</span>
        ),
      )}
    </>
  );
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  // Fallback for non-secure contexts.
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand('copy');
  ta.remove();
  if (!ok) throw new Error('copy failed');
}

export const CommandCard = memo(function CommandCard({ command, toolName, toolDisplayName, category, highlighted }: CommandCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { globalIP } = useGlobalIP();
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const commandSegments = useMemo(() => applyTarget(command.command, globalIP), [command.command, globalIP]);
  const exampleSegments = useMemo(() => applyTarget(command.example, globalIP), [command.example, globalIP]);
  const hasExample = !!command.example && command.example.trim() !== command.command.trim();

  const favoriteId = `${category}-${toolName}-${command.id}`;
  const starred = isFavorite(favoriteId);
  const anchor = `cmd-${command.id}`;
  const exampleId = `${anchor}-example`;

  const handleCopy = async (text: string, label = 'Command copied') => {
    try {
      await copyText(text);
      setCopied(true);
      toast.success(label, { duration: 1600 });
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      toast.error('Couldn’t copy — select the text and copy manually.');
    }
  };

  const handleFavorite = () => {
    toggleFavorite({
      id: favoriteId,
      toolName,
      toolDisplayName,
      category,
      command: command.command,
      explanation: command.explanation,
    });
    toast(starred ? 'Removed from favorites' : 'Saved to favorites', { duration: 1400 });
  };

  const paragraphs = command.explanation.split('\n').filter(Boolean);

  return (
    <article
      id={anchor}
      aria-labelledby={`${anchor}-cmd`}
      className={cn(
        'group/card relative scroll-mt-36 rounded-xl border border-border bg-card p-4 transition-[border-color,box-shadow] duration-200 sm:p-5',
        'hover:border-primary/35 hover:shadow-[0_6px_24px_-14px_hsl(var(--primary)/0.4)]',
        highlighted && 'border-primary/60 ring-2 ring-primary/25',
      )}
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <pre
            id={`${anchor}-cmd`}
            className="custom-scrollbar overflow-x-auto whitespace-pre-wrap break-words rounded-lg border border-border/70 bg-[hsl(var(--command-bg))] px-3.5 py-2.5 font-mono text-[13px] leading-6 text-foreground sm:text-sm"
          >
            <code>
              <span className="mr-2 select-none text-primary/70" aria-hidden="true">$</span>
              <Segments segments={commandSegments} />
            </code>
          </pre>
        </div>
        <div className="flex shrink-0 items-center gap-0.5 pt-0.5">
          <button
            type="button"
            onClick={handleFavorite}
            aria-pressed={starred}
            aria-label={starred ? 'Remove from favorites' : 'Save to favorites'}
            title={starred ? 'Remove from favorites' : 'Save to favorites'}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              starred && 'text-warning hover:text-warning',
            )}
          >
            <Star className={cn('h-4 w-4', starred && 'fill-warning')} />
          </button>
          <button
            type="button"
            onClick={() => handleCopy(withTarget(command.command, globalIP))}
            aria-label="Copy command"
            title="Copy command"
            className={cn(
              'flex h-9 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              copied && 'text-success hover:text-success',
            )}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="hidden sm:inline" aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1.5 text-sm leading-6 text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? 'text-foreground/90' : undefined}>
            {p}
          </p>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        {hasExample && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={exampleId}
            className="inline-flex items-center gap-1 rounded text-xs font-medium text-primary hover:underline"
          >
            <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', expanded && 'rotate-180')} aria-hidden="true" />
            {expanded ? 'Hide example' : 'Show example'}
          </button>
        )}
        <a
          href={`#${anchor}`}
          onClick={(e) => {
            e.preventDefault();
            const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
            window.history.replaceState(null, '', `#${anchor}`);
            handleCopy(url, 'Link copied');
          }}
          className="inline-flex items-center gap-1 rounded text-xs text-muted-foreground opacity-100 transition-opacity hover:text-foreground sm:opacity-0 sm:focus-visible:opacity-100 sm:group-hover/card:opacity-100"
          aria-label={`Copy link to command ${command.id}`}
        >
          <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
          Link
        </a>
        <span className="ml-auto font-mono text-[11px] tabular-nums text-muted-foreground/70" aria-hidden="true">
          #{command.id}
        </span>
      </div>

      {hasExample && (
        <div id={exampleId} hidden={!expanded} className="mt-3 rounded-lg border border-accent/25 bg-accent/5 p-3">
          <div className="mb-1.5 flex items-center justify-between">
            <p className="eyebrow">Example</p>
            <button
              type="button"
              onClick={() => handleCopy(withTarget(command.example, globalIP), 'Example copied')}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Copy
            </button>
          </div>
          <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-6 text-foreground">
            <code>
              <Segments segments={exampleSegments} />
            </code>
          </pre>
        </div>
      )}
    </article>
  );
});
