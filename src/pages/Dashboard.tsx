import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Terminal, Network, Globe, Search, Bug, Key, GitBranch, Wifi, FileSearch, Activity, Cloud, Radio, Wrench, ArrowRight, Zap, Star, Clock, Sparkles, Shield, Code2 } from 'lucide-react';
import { getTotalToolCount, CATEGORY_TOOLS } from '@/hooks/useCategoryTools';
import { useFavorites, useRecentTools } from '@/hooks/useFavorites';
import { useCommandCount } from '@/hooks/useCommandCount';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Category-specific styles with visible gradients
const CATEGORY_STYLES: Record<string, { bg: string; border: string }> = {
  network: {
    bg: 'bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 dark:from-blue-950/50 dark:via-cyan-950/30 dark:to-blue-950/40',
    border: 'hover:border-blue-400 dark:hover:border-blue-500',
  },
  web: {
    bg: 'bg-gradient-to-br from-purple-100 via-pink-50 to-violet-50 dark:from-purple-950/50 dark:via-pink-950/30 dark:to-violet-950/40',
    border: 'hover:border-purple-400 dark:hover:border-purple-500',
  },
  enumeration: {
    bg: 'bg-gradient-to-br from-emerald-100 via-teal-50 to-green-50 dark:from-emerald-950/50 dark:via-teal-950/30 dark:to-green-950/40',
    border: 'hover:border-emerald-400 dark:hover:border-emerald-500',
  },
  exploitation: {
    bg: 'bg-gradient-to-br from-red-100 via-orange-50 to-rose-50 dark:from-red-950/50 dark:via-orange-950/30 dark:to-rose-950/40',
    border: 'hover:border-red-400 dark:hover:border-red-500',
  },
  credentials: {
    bg: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-50 dark:from-amber-950/50 dark:via-yellow-950/30 dark:to-orange-950/40',
    border: 'hover:border-amber-400 dark:hover:border-amber-500',
  },
  lateral: {
    bg: 'bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-50 dark:from-indigo-950/50 dark:via-violet-950/30 dark:to-purple-950/40',
    border: 'hover:border-indigo-400 dark:hover:border-indigo-500',
  },
  wireless: {
    bg: 'bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-50 dark:from-sky-950/50 dark:via-blue-950/30 dark:to-cyan-950/40',
    border: 'hover:border-sky-400 dark:hover:border-sky-500',
  },
  forensics: {
    bg: 'bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-50 dark:from-slate-900/50 dark:via-gray-950/30 dark:to-zinc-950/40',
    border: 'hover:border-slate-400 dark:hover:border-slate-500',
  },
  monitoring: {
    bg: 'bg-gradient-to-br from-teal-100 via-emerald-50 to-cyan-50 dark:from-teal-950/50 dark:via-emerald-950/30 dark:to-cyan-950/40',
    border: 'hover:border-teal-400 dark:hover:border-teal-500',
  },
  cloud: {
    bg: 'bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 dark:from-orange-950/50 dark:via-amber-950/30 dark:to-yellow-950/40',
    border: 'hover:border-orange-400 dark:hover:border-orange-500',
  },
  traffic: {
    bg: 'bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 dark:from-rose-950/50 dark:via-pink-950/30 dark:to-red-950/40',
    border: 'hover:border-rose-400 dark:hover:border-rose-500',
  },
  utilities: {
    bg: 'bg-gradient-to-br from-lime-100 via-green-50 to-emerald-50 dark:from-lime-950/50 dark:via-green-950/30 dark:to-emerald-950/40',
    border: 'hover:border-lime-400 dark:hover:border-lime-500',
  },
};

const CATEGORY_CONFIG = [
  { id: 'network', name: 'Network', icon: Network, description: 'Port scanning, host discovery, network mapping' },
  { id: 'web', name: 'Web', icon: Globe, description: 'Web application testing, directory brute-forcing' },
  { id: 'enumeration', name: 'Enumeration', icon: Search, description: 'Service enumeration, SMB, LDAP discovery' },
  { id: 'exploitation', name: 'Exploitation', icon: Bug, description: 'Exploit frameworks, payload generation' },
  { id: 'credentials', name: 'Credentials', icon: Key, description: 'Password cracking, hash attacks' },
  { id: 'lateral', name: 'Lateral Movement', icon: GitBranch, description: 'Network pivoting, remote execution' },
  { id: 'wireless', name: 'Wireless', icon: Wifi, description: 'WiFi auditing, WPA/WPA2 cracking' },
  { id: 'forensics', name: 'Forensics', icon: FileSearch, description: 'Memory analysis, disk forensics' },
  { id: 'monitoring', name: 'Monitoring', icon: Activity, description: 'IDS/IPS, log analysis, detection' },
  { id: 'cloud', name: 'Cloud', icon: Cloud, description: 'AWS, GCP, Azure, container security' },
  { id: 'traffic', name: 'Traffic', icon: Radio, description: 'Packet capture, protocol analysis' },
  { id: 'utilities', name: 'Utilities', icon: Wrench, description: 'Essential tools, data processing' },
];

export function Dashboard() {
  const totalTools = getTotalToolCount();
  const { count: favoritesCount } = useFavorites();
  const { recent } = useRecentTools();
  const { totalCommands, loading: commandsLoading } = useCommandCount();
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-border">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Terminal className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute inset-0 blur-xl bg-primary/30 -z-10" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold font-mono tracking-tight">
                  <span className="gradient-text">Terminal</span>
                </h1>
                <p className="text-muted-foreground mt-1 font-mono text-sm">
                  Cybersecurity Command Reference Hub
                </p>
              </div>
            </div>

            <Link to="/practice">
              <Button
                size="lg"
                className="font-mono border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.2)] animate-pulse hover:animate-none transition-all"
                variant="outline"
              >
                <Terminal className="mr-2 h-4 w-4" />
                Practice Terminal
              </Button>
            </Link>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
            Your centralized command reference for cybersecurity tools.
            Searchable, categorized, and built for security professionals.
            <span className="text-primary"> Press ⌘K to search.</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Zap className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Tools</span>
              </div>
              <span className="text-3xl font-bold">{totalTools}</span>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Code2 className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider text-foreground">Commands</span>
              </div>
              <span className="text-3xl font-bold text-foreground">
                {commandsLoading ? '...' : totalCommands.toLocaleString()}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-success mb-1">
                <Shield className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Categories</span>
              </div>
              <span className="text-3xl font-bold">{CATEGORY_CONFIG.length}</span>
            </div>
            <div className="p-4 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
              <div className="flex items-center gap-2 text-warning mb-1">
                <Star className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Favorites</span>
              </div>
              <span className="text-3xl font-bold">{favoritesCount}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      {recent.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Recently Viewed</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {recent.map((item) => (
              <Link
                key={`${item.category}-${item.tool}`}
                to={`/tool/${item.category}/${item.tool}`}
                className={cn(
                  "px-3 py-1.5 rounded-lg font-mono text-sm transition-all",
                  "bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30",
                  "hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                )}
              >
                {item.tool}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Browse by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORY_CONFIG.map(category => {
            const Icon = category.icon;
            const toolCount = CATEGORY_TOOLS[category.id]?.length || 0;
            const style = CATEGORY_STYLES[category.id];

            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group"
              >
                <Card className={cn(
                  "h-full transition-all duration-300 overflow-hidden relative border-2",
                  "hover:shadow-xl hover:-translate-y-1",
                  style?.bg,
                  style?.border
                )}>
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "p-2.5 rounded-lg transition-all duration-300",
                          "bg-background/80 group-hover:bg-primary/20 group-hover:scale-110",
                          "border border-border group-hover:border-primary/30"
                        )}>
                          <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="font-mono transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary">
                        {toolCount}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="line-clamp-2">
                      {category.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      Explore tools
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Popular Tools */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-warning" />
          <h2 className="text-lg font-semibold">Popular Tools</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {['nmap', 'gobuster', 'john', 'metasploit', 'sqlmap', 'hydra', 'nikto', 'wireshark-cli', 'burpsuite', 'hashcat', 'nuclei', 'ffuf'].map(tool => {
            const category = Object.entries(CATEGORY_TOOLS).find(([_, tools]) =>
              tools.includes(tool)
            )?.[0] || 'network';

            return (
              <Link
                key={tool}
                to={`/tool/${category}/${tool}`}
                className={cn(
                  "px-4 py-2 rounded-lg font-mono text-sm transition-all",
                  "bg-card hover:bg-primary/10 border border-border hover:border-primary/50",
                  "hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] hover:-translate-y-0.5"
                )}
              >
                {tool}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="terminal-card p-6">
        <h2 className="text-lg font-semibold mb-4">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-3">
            <kbd className="px-2 py-1 rounded border border-border bg-muted font-mono text-xs">⌘K</kbd>
            <span className="text-muted-foreground">Search</span>
          </div>
          <div className="flex items-center gap-3">
            <kbd className="px-2 py-1 rounded border border-border bg-muted font-mono text-xs">/</kbd>
            <span className="text-muted-foreground">Quick search</span>
          </div>
          <div className="flex items-center gap-3">
            <kbd className="px-2 py-1 rounded border border-border bg-muted font-mono text-xs">↑↓</kbd>
            <span className="text-muted-foreground">Navigate</span>
          </div>
          <div className="flex items-center gap-3">
            <kbd className="px-2 py-1 rounded border border-border bg-muted font-mono text-xs">ESC</kbd>
            <span className="text-muted-foreground">Close</span>
          </div>
        </div>
      </section>
    </div>
  );
}
