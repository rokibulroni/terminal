import { BookOpen, Search, Star, Copy, Keyboard, FolderTree, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useDeviceOS } from '@/hooks/useDeviceOS';

export function HowToUsePage() {
  const { getShortcutText } = useDeviceOS();

  const steps = [
    {
      icon: FolderTree,
      title: 'Browse Categories',
      description: 'Use the sidebar to navigate through 18 security categories including Cloud, Mobile, Reverse Engineering, Network, Web, and more. Each category contains multiple tools representing over 9,391 completely automated commands.',
    },
    {
      icon: Search,
      title: 'Global Search',
      description: `Press ${getShortcutText()} to open the command palette. Search across all tools and commands instantly with fuzzy matching.`,
    },
    {
      icon: Terminal,
      title: 'View Commands',
      description: 'Click on any tool to see its complete command reference. Each command includes the syntax, a practical example, and a clear explanation.',
    },
    {
      icon: Copy,
      title: 'Copy Commands',
      description: 'Click the "Copy" button on any command to copy it to your clipboard. You\'ll see a confirmation toast when the command is copied.',
    },
    {
      icon: Star,
      title: 'Save Favorites',
      description: 'Click the star icon on any command to save it to your favorites. Access all your bookmarked commands quickly from the Favorites page.',
    },
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Use arrow keys to navigate search results, Enter to select, and Escape to close dialogs. The interface is fully keyboard accessible.',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono">How to Use Terminal</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A quick guide to getting the most out of your cybersecurity command reference
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="terminal-card p-5 flex gap-4 hover-lift">
            <div className="shrink-0">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                <h3 className="font-semibold">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Keyboard Shortcuts */}
      <div className="terminal-card p-6 space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Keyboard className="h-5 w-5 text-primary" />
          Keyboard Shortcuts
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
            <span className="text-sm">Open search</span>
            <kbd className="px-2 py-1 rounded border border-border bg-background font-mono text-xs">{getShortcutText()}</kbd>
          </div>
          <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
            <span className="text-sm">Close dialog</span>
            <kbd className="px-2 py-1 rounded border border-border bg-background font-mono text-xs">ESC</kbd>
          </div>
          <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
            <span className="text-sm">Navigate results</span>
            <div className="flex gap-1">
              <kbd className="px-2 py-1 rounded border border-border bg-background font-mono text-xs">↑</kbd>
              <kbd className="px-2 py-1 rounded border border-border bg-background font-mono text-xs">↓</kbd>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
            <span className="text-sm">Select result</span>
            <kbd className="px-2 py-1 rounded border border-border bg-background font-mono text-xs">↵</kbd>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Link to="/">
          <Button size="lg" className="font-mono">
            <Terminal className="h-4 w-4 mr-2" />
            Start Exploring
          </Button>
        </Link>
      </div>
    </div>
  );
}
