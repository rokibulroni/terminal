export interface Command {
  id: number;
  category: string;
  command: string;
  example: string;
  explanation: string;
}

export interface Tool {
  tool: string;
  description: string;
  total_commands: number;
  commands: Command[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  tools: string[];
}

export const CATEGORIES: Category[] = [
  { id: 'network', name: 'Network', icon: 'Network', tools: [] },
  { id: 'web', name: 'Web', icon: 'Globe', tools: [] },
  { id: 'enumeration', name: 'Enumeration', icon: 'Search', tools: [] },
  { id: 'exploitation', name: 'Exploitation', icon: 'Bug', tools: [] },
  { id: 'credentials', name: 'Credentials', icon: 'Key', tools: [] },
  { id: 'lateral', name: 'Lateral', icon: 'GitBranch', tools: [] },
  { id: 'wireless', name: 'Wireless', icon: 'Wifi', tools: [] },
  { id: 'forensics', name: 'Forensics', icon: 'FileSearch', tools: [] },
  { id: 'monitoring', name: 'Monitoring', icon: 'Activity', tools: [] },
  { id: 'cloud', name: 'Cloud', icon: 'Cloud', tools: [] },
  { id: 'traffic', name: 'Traffic', icon: 'Radio', tools: [] },
  { id: 'utilities', name: 'Utilities', icon: 'Wrench', tools: [] },
  { id: 'osint', name: 'OSINT', icon: 'Eye', tools: [] },
  { id: 'mobile', name: 'Mobile', icon: 'Smartphone', tools: [] },
  { id: 'containers', name: 'Containers', icon: 'Box', tools: [] },
  { id: 'reversing', name: 'Reversing', icon: 'Cpu', tools: [] },
  { id: 'linux', name: 'Linux OS', icon: 'TerminalSquare', tools: [] },
  { id: 'iot', name: 'IoT / Hardware', icon: 'CircuitBoard', tools: [] },
];
