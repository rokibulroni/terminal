import { useState, useMemo } from 'react';
import { Check, Copy, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Command } from '@/types/tool';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface CommandCardProps {
  command: Command;
  /** URL slug / JSON filename (stable identifier) */
  toolName: string;
  /** Human-readable label from JSON (optional) */
  toolDisplayName?: string;
  category: string;
}

export function CommandCard({ command, toolName, toolDisplayName, category }: CommandCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const { globalIP } = useGlobalIP();

  const displayCommand = useMemo(() => {
    if (!globalIP) return command.command;
    return command.command.replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b|<ip>|\[ip\]|<target_ip>/gi, globalIP);
  }, [command.command, globalIP]);

  const displayExample = useMemo(() => {
    if (!command.example) return command.example;
    if (!globalIP) return command.example;
    return command.example.replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b|<ip>|\[ip\]|<target_ip>/gi, globalIP);
  }, [command.example, globalIP]);

  // IMPORTANT: use the tool slug (URL param) so favorites match reliably
  const favoriteId = `${category}-${toolName}-${command.id}`;
  const isStarred = isFavorite(favoriteId);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayCommand);
      setCopied(true);
      toast.success('Command copied to clipboard', {
        duration: 2000,
        position: 'bottom-center',
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy command');
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: favoriteId,
      toolName,
      toolDisplayName,
      category,
      command: command.command,
      explanation: command.explanation,
    });

    if (!isStarred) {
      toast.success('Added to favorites', { duration: 1500 });
    }
  };

  return (
    <div 
      id={`cmd-${command.id}`}
      className={cn(
        "terminal-card p-4 hover-lift animate-fade-in group",
        "border-l-2 border-transparent hover:border-primary/50 transition-all"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-mono opacity-60">#{command.id}</span>
          <span className="category-badge">{command.category}</span>
        </div>
        <div className="flex items-center gap-1">
          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleFavorite}
            className={cn(
              "h-8 w-8 p-0 transition-colors",
              "opacity-100",
              isStarred && "bg-warning/10"
            )}
            aria-label={isStarred ? "Remove from favorites" : "Add to favorites"}
          >
            <Star
              className={cn(
                "h-4 w-4 transition-colors",
                isStarred ? "fill-warning text-warning" : "text-muted-foreground"
              )}
            />
          </Button>
          
          {/* Copy Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className={cn(
              "h-8 px-2 transition-all",
              copied && "text-success bg-success/10"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                <span className="text-xs">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Command */}
      <div className="command-block mb-3 relative group/cmd break-words">
        <code className="text-primary whitespace-pre-wrap break-all text-sm">{displayCommand}</code>
      </div>

      {/* Explanation (always visible) */}
      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{command.explanation}</p>

      {/* Expand for Example */}
      {displayExample && displayExample !== displayCommand && (
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3 w-3" />
                Hide example
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3" />
                Show example
              </>
            )}
          </button>

          {expanded && (
            <div className="mt-2 p-3 rounded-md bg-accent/5 border border-accent/20 animate-fade-in">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Example:</p>
              <code className="font-mono text-sm text-accent whitespace-pre-wrap break-all">{displayExample}</code>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
