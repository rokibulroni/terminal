import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Terminal, Command as CommandIcon, ArrowRight, Loader2, X } from 'lucide-react';
import { useGlobalSearch, SearchResult } from '@/hooks/useGlobalSearch';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { search, isLoading } = useGlobalSearch();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2 ? search(query) : [];

  // Reset on open
  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Scroll selected into view
  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const selected = listRef.current.children[selectedIndex] as HTMLElement;
      selected?.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex, results.length]);

  const handleSelect = useCallback((result: SearchResult) => {
    if (result.type === 'tool') {
      navigate(`/tool/${result.category}/${result.tool}`);
    } else {
      navigate(`/tool/${result.category}/${result.tool}#cmd-${result.commandId}`);
    }
    onOpenChange(false);
  }, [navigate, onOpenChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(i => Math.min(i + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case 'Escape':
        onOpenChange(false);
        break;
    }
  }, [results, selectedIndex, handleSelect, onOpenChange]);

  // Highlight matched text
  const highlightMatch = (text: string, searchQuery: string) => {
    if (!searchQuery) return text;
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/30 text-primary rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden bg-popover border-border" aria-describedby={undefined}>
        <VisuallyHidden>
          <DialogTitle>Search Tools and Commands</DialogTitle>
        </VisuallyHidden>
        {/* Search Input */}
        <div className="flex items-center border-b border-border px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground mr-3" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search tools and commands..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg placeholder:text-muted-foreground"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-muted rounded"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
          <kbd className="ml-2 hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border border-border bg-muted px-2 font-mono text-xs text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[400px] overflow-y-auto custom-scrollbar">
          {isLoading && query.length >= 2 && (
            <div className="flex items-center justify-center py-8 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              Building search index...
            </div>
          )}

          {!isLoading && query.length >= 2 && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <Search className="h-8 w-8 mb-3 opacity-50" />
              <p>No results found for "{query}"</p>
              <p className="text-sm">Try a different search term</p>
            </div>
          )}

          {query.length < 2 && (
            <div className="py-8 px-4 text-center text-muted-foreground">
              <Terminal className="h-8 w-8 mx-auto mb-3 text-primary opacity-50" />
              <p className="text-sm">Type at least 2 characters to search</p>
              <div className="flex justify-center gap-4 mt-4 text-xs">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted">ESC</kbd>
                  Close
                </span>
              </div>
            </div>
          )}

          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.category}-${result.tool}-${result.commandId || ''}`}
              onClick={() => handleSelect(result)}
              className={cn(
                "w-full flex items-start gap-3 px-4 py-3 text-left transition-colors",
                index === selectedIndex
                  ? "bg-primary/10 border-l-2 border-primary"
                  : "hover:bg-muted/50 border-l-2 border-transparent"
              )}
            >
              <div className={cn(
                "shrink-0 p-1.5 rounded-md mt-0.5",
                result.type === 'tool' ? "bg-primary/10" : "bg-accent/10"
              )}>
                {result.type === 'tool' ? (
                  <Terminal className="h-4 w-4 text-primary" />
                ) : (
                  <CommandIcon className="h-4 w-4 text-accent" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-medium">
                    {highlightMatch(result.tool, query)}
                  </span>
                  <span className="text-xs text-muted-foreground capitalize">
                    {result.category}
                  </span>
                </div>
                {result.type === 'command' && (
                  <div className="mt-1">
                    <code className="text-sm text-primary/80 line-clamp-1">
                      {highlightMatch(result.command || '', query)}
                    </code>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {result.explanation}
                    </p>
                  </div>
                )}
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-xs text-muted-foreground">
          <span>Terminal - Cybersecurity Command Reference</span>
          <span className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">⌘K</kbd>
            to open
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
