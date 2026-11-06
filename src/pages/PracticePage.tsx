import { useEffect, useMemo, useRef, useState, type FormEvent, type MouseEvent as ReactMouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, AlertCircle, Trophy, RotateCcw, SkipForward, Check, X, Lightbulb, Flame, ArrowRight } from 'lucide-react';
import { usePracticeChallenges, type Challenge } from '@/hooks/usePracticeChallenges';
import { createPersistentStore } from '@/lib/persistent-store';
import { checkAnswer, type Verdict } from '@/lib/practice';
import { manifest, getCategory } from '@/lib/data';
import { Seo } from '@/components/Seo';
import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === 'string');
const EMPTY: string[] = [];
const masteredStore = createPersistentStore('practice_completed_ids', EMPTY, isStringArray);

type Phase = 'answering' | 'revealed';

export default function PracticePage() {
  const { challenges, isLoading, error, retry } = usePracticeChallenges();
  const mastered = masteredStore.useStore();
  const masteredSet = useMemo(() => new Set(mastered), [mastered]);

  const [categoryFilter, setCategoryFilter] = useState('all');
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const [answer, setAnswer] = useState('');
  const [phase, setPhase] = useState<Phase>('answering');
  const [result, setResult] = useState<{ verdict: Verdict; missing: string[] } | null>(null);
  const [hint, setHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [confirmReset, setConfirmReset] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pool = useMemo(
    () => (categoryFilter === 'all' ? challenges : challenges.filter((c) => c.category === categoryFilter)),
    [challenges, categoryFilter],
  );
  const remaining = pool.filter((c) => !masteredSet.has(c.id));
  const current: Challenge | undefined = remaining.find((c) => !skipped.has(c.id)) ?? remaining[0];
  const doneInPool = pool.length - remaining.length;

  const reset = () => {
    setAnswer('');
    setPhase('answering');
    setResult(null);
    setHint(false);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  useEffect(reset, [categoryFilter]);

  const submit = (e: FormEvent | ReactMouseEvent) => {
    e.preventDefault();
    if (!current || !answer.trim()) return;
    const r = checkAnswer(answer, current.command);
    setResult(r);
    setPhase('revealed');
    if (r.verdict === 'exact') {
      setStreak((s) => s + 1);
    } else setStreak(0);
  };

  const markMastered = () => {
    if (!current) return;
    masteredStore.write([...new Set([...masteredStore.read(), current.id])]);
    reset();
  };

  const skip = () => {
    if (!current) return;
    setSkipped((s) => new Set(s).add(current.id));
    setStreak(0);
    reset();
  };

  const firstToken = current?.command.split(/\s+/)[0] ?? '';

  return (
    <div className="animate-fade-in">
      <Seo
        title="Practice terminal commands"
        description="Flashcard-style practice for cybersecurity and Linux commands: read what a command does, type it, and get instant feedback. Progress is saved in your browser."
        path="/practice"
      />
      <PageHeader
        eyebrow="Practice"
        title="Learn commands by typing them"
        description="Read what a command does and type it from memory. Flag order doesn’t matter, and any IP, URL or interface counts as a match."
      />

      {isLoading && (
        <div className="flex flex-col items-center gap-3 py-20 text-muted-foreground" role="status">
          <Loader2 className="h-6 w-6 animate-spin text-primary" aria-hidden="true" />
          Loading {manifest.totals.commands.toLocaleString('en-US')} commands…
        </div>
      )}

      {error && (
        <EmptyState
          icon={AlertCircle}
          tone="error"
          title="Couldn’t load the practice set"
          description={error}
          action={<Button onClick={() => retry()}>Try again</Button>}
        />
      )}

      {!isLoading && !error && challenges.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-[1fr_16rem]">
          <div className="min-w-0 space-y-4">
            {/* Category filter */}
            <div className="custom-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="radiogroup" aria-label="Category">
              {[{ id: 'all', name: 'All' }, ...manifest.categories].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="radio"
                  aria-checked={categoryFilter === c.id}
                  onClick={() => setCategoryFilter(c.id)}
                  className={cn(
                    'shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    categoryFilter === c.id ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {!current ? (
              <EmptyState
                icon={Trophy}
                title="You’ve mastered this set"
                description={`All ${pool.length.toLocaleString('en-US')} commands in ${categoryFilter === 'all' ? 'the reference' : getCategory(categoryFilter)?.name} are marked as mastered.`}
                action={
                  categoryFilter !== 'all' ? (
                    <Button variant="outline" onClick={() => setCategoryFilter('all')}>
                      Practise everything
                    </Button>
                  ) : undefined
                }
              />
            ) : (
              <section aria-labelledby="prompt" className="surface overflow-hidden">
                <div className="space-y-4 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Link to={`/tool/${current.category}/${current.tool}`} className="rounded-md bg-primary/10 px-2 py-0.5 font-mono font-medium text-primary hover:underline">
                      {current.toolName}
                    </Link>
                    <span className="text-muted-foreground">{current.section}</span>
                  </div>
                  <h2 id="prompt" className="text-lg font-medium leading-8 sm:text-xl">
                    {current.explanation.split('\n')[0]}
                  </h2>
                  {current.explanation.includes('\n') && (
                    <p className="text-sm leading-6 text-muted-foreground">{current.explanation.split('\n').slice(1).join(' ')}</p>
                  )}
                  {hint && phase === 'answering' && (
                    <p className="text-sm text-muted-foreground" role="status">
                      Hint: it starts with <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">{firstToken}</code> and has{' '}
                      {current.command.split(/\s+/).length} parts.
                    </p>
                  )}
                </div>

                <form onSubmit={submit} className="border-t border-border bg-[hsl(var(--terminal-bg))] p-4 sm:p-5">
                  <label htmlFor="practice-input" className="sr-only">
                    Your command
                  </label>
                  <div className="flex items-center gap-3 font-mono text-[15px]">
                    <span className="select-none text-[hsl(var(--terminal-text))]" aria-hidden="true">
                      $
                    </span>
                    <input
                      id="practice-input"
                      ref={inputRef}
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      disabled={phase === 'revealed'}
                      autoComplete="off"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck={false}
                      placeholder="type the command…"
                      className="min-w-0 flex-1 bg-transparent text-white caret-[hsl(var(--terminal-text))] outline-none placeholder:text-white/30 disabled:opacity-70"
                    />
                  </div>
                </form>

                {phase === 'revealed' && result && (
                  <div className="space-y-4 border-t border-border p-5 sm:p-7" role="status" aria-live="polite">
                    <p
                      className={cn(
                        'flex items-center gap-2 font-medium',
                        result.verdict === 'exact' && 'text-success',
                        result.verdict === 'close' && 'text-warning',
                        result.verdict === 'different' && 'text-destructive',
                      )}
                    >
                      {result.verdict === 'exact' ? <Check className="h-5 w-5" aria-hidden="true" /> : result.verdict === 'close' ? <Lightbulb className="h-5 w-5" aria-hidden="true" /> : <X className="h-5 w-5" aria-hidden="true" />}
                      {result.verdict === 'exact' ? 'Correct!' : result.verdict === 'close' ? 'Very close' : 'Not quite'}
                    </p>
                    <div>
                      <p className="eyebrow mb-1.5">Reference</p>
                      <pre className="whitespace-pre-wrap break-words rounded-lg bg-[hsl(var(--command-bg))] px-3.5 py-2.5 font-mono text-sm">
                        <code>{current.command}</code>
                      </pre>
                      {result.verdict !== 'exact' && result.missing.length > 0 && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          Missing or different: {result.missing.slice(0, 6).map((m) => <code key={m} className="mr-1 rounded bg-muted px-1 py-0.5">{m}</code>)}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border bg-muted/20 px-5 py-3">
                  {phase === 'answering' ? (
                    <>
                      {!hint && (
                        <Button type="button" variant="ghost" size="sm" onClick={() => setHint(true)} className="mr-auto text-muted-foreground">
                          <Lightbulb className="mr-1.5 h-4 w-4" aria-hidden="true" /> Hint
                        </Button>
                      )}
                      <Button type="button" variant="ghost" size="sm" onClick={skip} className="text-muted-foreground">
                        <SkipForward className="mr-1.5 h-4 w-4" aria-hidden="true" /> Skip
                      </Button>
                      <Button type="button" size="sm" disabled={!answer.trim()} onClick={submit}>
                        Check <span className="ml-2 hidden text-[11px] opacity-70 sm:inline">↵</span>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button type="button" variant="ghost" size="sm" onClick={() => { setPhase('answering'); setResult(null); requestAnimationFrame(() => inputRef.current?.focus()); }}>
                        <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" /> Try again
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={skip}>
                        Next <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                      </Button>
                      <Button type="button" size="sm" onClick={markMastered} autoFocus>
                        <Check className="mr-1.5 h-4 w-4" aria-hidden="true" /> {result?.verdict === 'exact' ? 'Mastered — next' : 'I knew it — next'}
                      </Button>
                    </>
                  )}
                </div>
              </section>
            )}
          </div>

          <aside className="space-y-4" aria-label="Progress">
            <div className="surface space-y-3 p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-medium">Mastered</p>
                <p className="font-mono text-sm tabular-nums text-muted-foreground">
                  {doneInPool.toLocaleString('en-US')} / {pool.length.toLocaleString('en-US')}
                </p>
              </div>
              <Progress value={pool.length ? (doneInPool / pool.length) * 100 : 0} className="h-1.5" aria-label="Mastery progress" />
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Flame className={cn('h-4 w-4', streak > 0 ? 'text-warning' : 'opacity-50')} aria-hidden="true" />
                Streak: <span className="font-mono tabular-nums text-foreground">{streak}</span>
              </p>
            </div>
            <div className="surface p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-medium text-foreground">How it works</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Press Enter to check your answer.</li>
                <li>Mark a card mastered to retire it.</li>
                <li>Skipped cards come back later.</li>
                <li>Progress stays in this browser.</li>
              </ul>
            </div>
            {mastered.length > 0 &&
              (confirmReset ? (
                <div className="flex items-center gap-2 text-sm" role="alert">
                  <span className="text-muted-foreground">Reset all progress?</span>
                  <Button size="sm" variant="ghost" onClick={() => setConfirmReset(false)}>
                    No
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      masteredStore.write([]);
                      setSkipped(new Set());
                      setConfirmReset(false);
                    }}
                  >
                    Reset
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setConfirmReset(true)}>
                  <RotateCcw className="mr-1.5 h-4 w-4" aria-hidden="true" /> Reset progress
                </Button>
              ))}
          </aside>
        </div>
      )}
    </div>
  );
}
