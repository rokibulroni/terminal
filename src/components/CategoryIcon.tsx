import {
  Activity, Box, Bug, CircuitBoard, Cloud, Cpu, Eye, FileSearch, GitBranch, Globe, Key, Network,
  Radio, Search, Smartphone, TerminalSquare, Wifi, Wrench, Building2, Waypoints, Folder, type LucideProps,
} from 'lucide-react';

const ICONS = {
  Activity, Box, Bug, CircuitBoard, Cloud, Cpu, Eye, FileSearch, GitBranch, Globe, Key, Network,
  Radio, Search, Smartphone, TerminalSquare, Wifi, Wrench, Building2, Waypoints,
} as const;

export function CategoryIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = ICONS[name as keyof typeof ICONS] ?? Folder;
  return <Icon aria-hidden="true" {...props} />;
}
