/** Answer checking for the practice mode. */

const IPV4 = /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;
const IFACE = /\b(?:eth|wlan|ens|enp|tun|tap|docker|vboxnet)\d+(?:mon)?\b/g;
const URL = /\bhttps?:\/\/[^\s'"]+/g;
const PLACEHOLDER = /<[^<>\s][^<>]*>|\[[A-Za-z_][^\]]*\]/g;

function normalise(cmd: string): string[] {
  return cmd
    .trim()
    .replace(URL, '{URL}')
    .replace(IPV4, '{IP}')
    .replace(IFACE, '{IFACE}')
    .replace(PLACEHOLDER, '{ARG}')
    .replace(/(['"])(.*?)\1/g, '$2')
    .split(/\s+/)
    .filter(Boolean);
}

export type Verdict = 'exact' | 'close' | 'different';

/**
 * Compare an answer with the reference command. Flag order doesn't matter and
 * concrete values (IPs, URLs, interfaces, <placeholders>) are treated as
 * interchangeable, so `nmap -p 80 -sV 10.0.0.1` matches `nmap -sV -p 80 <ip>`.
 */
export function checkAnswer(answer: string, expected: string): { verdict: Verdict; score: number; missing: string[] } {
  const a = normalise(answer);
  const e = normalise(expected);
  if (!a.length) return { verdict: 'different', score: 0, missing: e };
  const sortedA = [...a].sort().join(' ');
  const sortedE = [...e].sort().join(' ');
  if (sortedA === sortedE) return { verdict: 'exact', score: 1, missing: [] };

  const pool = [...a];
  let hits = 0;
  const missing: string[] = [];
  for (const tok of e) {
    const i = pool.indexOf(tok);
    if (i >= 0) {
      hits++;
      pool.splice(i, 1);
    } else missing.push(tok);
  }
  const score = (2 * hits) / (a.length + e.length);
  const sameTool = a[0] === e[0];
  return { verdict: sameTool && score >= 0.7 ? 'close' : 'different', score, missing };
}
