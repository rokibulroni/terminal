/**
 * "Global IP" substitution: lets a user set their target once and see it in
 * every command. Only placeholder tokens and example host addresses are
 * replaced — never loopback, wildcard, netmask, broadcast or CIDR network
 * addresses, which would change the meaning of the command.
 */

const PLACEHOLDER = /<\s*(?:target[_ -]?ip|target[_ -]?host|target|rhost|ip[_ -]?address|ip|host[_ -]?ip)\s*>|\[\s*(?:target[_ -]?ip|target|ip)\s*\]|\{\s*(?:target[_ -]?ip|target|ip)\s*\}|\bTARGET_IP\b/gi;
const IPV4 = /(?<![\w.:/-])((?:\d{1,3}\.){3}\d{1,3})(?![\w.]|\/\d)/g;

const isExampleHost = (ip: string) => {
  const o = ip.split('.').map(Number);
  if (o.some((n) => n > 255)) return false;
  const last = o[3];
  if (last === 0 || last === 255) return false; // network / broadcast
  const [a, b, c] = o;
  return (
    a === 10 ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0 && c === 2) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113)
  );
};

export interface Segment {
  text: string;
  replaced?: boolean;
}

/** Split a command into segments, marking the ones replaced by the target. */
export function applyTarget(command: string, target: string): Segment[] {
  if (!target) return [{ text: command }];
  const ranges: [number, number][] = [];
  for (const m of command.matchAll(PLACEHOLDER)) ranges.push([m.index!, m.index! + m[0].length]);
  for (const m of command.matchAll(IPV4)) if (isExampleHost(m[1])) ranges.push([m.index!, m.index! + m[1].length]);
  if (!ranges.length) return [{ text: command }];
  ranges.sort((x, y) => x[0] - y[0]);
  const out: Segment[] = [];
  let pos = 0;
  for (const [s, e] of ranges) {
    if (s < pos) continue; // overlapping match
    if (s > pos) out.push({ text: command.slice(pos, s) });
    out.push({ text: target, replaced: true });
    pos = e;
  }
  if (pos < command.length) out.push({ text: command.slice(pos) });
  return out;
}

export const withTarget = (command: string, target: string) =>
  applyTarget(command, target).map((s) => s.text).join('');

/** Accepts IPv4, IPv6 or a hostname. */
export function isValidTarget(value: string): boolean {
  const v = value.trim();
  if (!v || v.length > 253) return false;
  const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)$/;
  const ipv6 = /^[0-9a-f:]+(?:%[\w.]+)?$/i;
  const host = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  return ipv4.test(v) || (v.includes(':') && ipv6.test(v)) || host.test(v);
}
