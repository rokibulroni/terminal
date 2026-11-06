import { useMemo } from 'react';
import { useSearchIndex } from '@/lib/data';

export interface Challenge {
  /** Stable id: `<slug>-<commandId>` */
  id: string;
  tool: string;
  toolName: string;
  category: string;
  section: string;
  command: string;
  explanation: string;
}

/** Commands that make sense as practice prompts (single line, not just a menu keyword). */
function isPracticable(command: string) {
  return !command.includes('\n') && command.length <= 160 && /\s/.test(command.trim());
}

/**
 * Practice challenges derived from the shared search index (one request,
 * cached). Order is shuffled with a seed that changes every hour so the
 * queue feels fresh but stays stable within a session.
 */
export function usePracticeChallenges() {
  const { data, isLoading, error, refetch } = useSearchIndex(true);

  const challenges = useMemo<Challenge[]>(() => {
    if (!data) return [];
    const all: Challenge[] = [];
    for (const [ti, id, command, explanation, section] of data.commands) {
      if (!isPracticable(command)) continue;
      const [slug, category, name] = data.tools[ti];
      all.push({ id: `${slug}-${id}`, tool: slug, toolName: name, category, section, command, explanation });
    }
    return shuffleWithSeed(all, Math.floor(Date.now() / 3_600_000));
  }, [data]);

  return {
    challenges,
    isLoading,
    error: error ? (error as Error).message || 'Failed to load challenges' : null,
    retry: refetch,
  };
}

/** Deterministic Fisher–Yates shuffle (mulberry32 PRNG). */
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const out = [...array];
  let s = seed >>> 0;
  const random = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
