import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

/** Pre-formatted code with an optional label and a copy button. */
export function CodeBlock({ children, label, className }: { children: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      toast.success('Copied', { duration: 1200 });
      setTimeout(() => setCopied(false), 1400);
    } catch {
      toast.error('Couldn’t copy');
    }
  };
  return (
    <div className={cn('group relative rounded-xl border border-border bg-[hsl(var(--command-bg))]', className)}>
      {label && <div className="border-b border-border px-4 py-2 font-mono text-xs text-muted-foreground">{label}</div>}
      <pre className="custom-scrollbar overflow-x-auto p-4 pr-12 text-[13px] leading-6 text-foreground">
        <code className="!rounded-none !bg-transparent !p-0 !text-[13px]">{children}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        className={cn(
          'absolute right-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          label ? 'top-11' : 'top-2',
        )}
      >
        {copied ? <Check className="h-4 w-4 text-primary" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      </button>
    </div>
  );
}
