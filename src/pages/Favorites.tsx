import { Link } from 'react-router-dom';
import { Star, Trash2, Copy, ArrowRight, Terminal } from 'lucide-react';
import { useFavorites, FavoriteCommand } from '@/hooks/useFavorites';
import { useGlobalIP } from '@/hooks/useGlobalIP';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();
  const { globalIP } = useGlobalIP();

  const getDisplayCommand = (cmd: string) => {
    if (!globalIP) return cmd;
    return cmd.replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b|<ip>|\[ip\]|<target_ip>/gi, globalIP);
  };

  const handleCopy = async (command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      toast.success('Command copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy command');
    }
  };

  const handleRemove = (id: string) => {
    removeFavorite(id);
    toast.success('Removed from favorites');
  };

  type FavoriteGroup = { category: string; tool: string; toolDisplayName?: string; commands: FavoriteCommand[] };

  const groupedByTool = favorites.reduce((acc, fav) => {
    const key = `${fav.category}/${fav.toolName}`;
    if (!acc[key]) {
      acc[key] = {
        category: fav.category,
        tool: fav.toolName,
        toolDisplayName: fav.toolDisplayName,
        commands: [],
      };
    }
    acc[key].commands.push(fav);
    return acc;
  }, {} as Record<string, FavoriteGroup>);

  const groups = Object.entries(groupedByTool) as [string, FavoriteGroup][];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10">
            <Star className="h-6 w-6 text-warning fill-warning" />
          </div>
          <h1 className="text-3xl font-bold">Favorites</h1>
          <span className="text-muted-foreground">({favorites.length} saved)</span>
        </div>
        <p className="text-muted-foreground">
          Your bookmarked commands for quick access. Favorites are stored locally in your browser.
        </p>
      </div>

      {/* Content */}
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mb-4">
            <Star className="h-10 w-10 text-muted-foreground/50" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-muted-foreground max-w-md mb-6">
            Click the star icon on any command to add it to your favorites for quick access.
          </p>
          <Link to="/">
            <Button>
              <Terminal className="h-4 w-4 mr-2" />
              Browse Tools
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map(([key, group]) => (
            <div key={key} className="terminal-card p-4 space-y-4">
              {/* Tool Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-lg text-primary">
                    {group.toolDisplayName || group.tool}
                  </span>
                  <span className="text-xs text-muted-foreground capitalize bg-muted px-2 py-0.5 rounded">
                    {group.category}
                  </span>
                </div>
                <Link to={`/tool/${group.category}/${group.tool}`}>
                  <Button variant="ghost" size="sm">
                    View all
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {/* Commands */}
              <div className="space-y-3">
                {group.commands.map((fav) => (
                  <div 
                    key={fav.id}
                    className="group flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <code className="text-sm text-primary font-mono block truncate">
                        {getDisplayCommand(fav.command)}
                      </code>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {fav.explanation}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleCopy(getDisplayCommand(fav.command))}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive"
                        onClick={() => handleRemove(fav.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
