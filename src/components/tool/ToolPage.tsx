import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, FileJson, ChevronRight, ChevronLeft, ListTree } from 'lucide-react';
import { useToolData } from '@/hooks/useToolData';
import { useRecentTools } from '@/hooks/useFavorites';
import { CommandCard } from './CommandCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { createPortal } from 'react-dom';

export function ToolPage() {
  const { category, tool: toolName } = useParams<{ category: string; tool: string }>();
  const { tool, loading, error } = useToolData(category || '', toolName || '');
  const { addRecent } = useRecentTools();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Auto-scroll Drawer to active category when opened
  useEffect(() => {
    if (drawerOpen && activeCategory) {
      setTimeout(() => {
        const activeItem = document.getElementById(`drawer-item-${activeCategory}`);
        if (activeItem) {
          activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200); // wait for drawer animation to finish (vaul uses ~150-200ms)
    }
  }, [drawerOpen, activeCategory]);

  // Track recent view
  useEffect(() => {
    if (category && toolName && tool) {
      addRecent(category, toolName);
    }
  }, [category, toolName, tool, addRecent]);

  // Group commands by category based on search
  const groupedCommands = useMemo(() => {
    if (!tool) return {};
    
    const filtered = tool.commands.filter(cmd => {
      return searchQuery === '' || 
        (cmd.command || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cmd.explanation || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cmd.category || '').toLowerCase().includes(searchQuery.toLowerCase());
    });

    const groups: Record<string, typeof tool.commands> = {};
    filtered.forEach(cmd => {
      if (!groups[cmd.category]) groups[cmd.category] = [];
      groups[cmd.category].push(cmd);
    });
    
    return groups;
  }, [tool, searchQuery]);

  // Extract ordered categories
  const displayCategories = useMemo(() => {
    return Object.keys(groupedCommands).sort();
  }, [groupedCommands]);

  // Initialize first category as active by default if none clicked
  useEffect(() => {
    if (displayCategories.length > 0 && !activeCategory) {
      setActiveCategory(`category-${displayCategories[0].replace(/[^a-zA-Z0-9]/g, '-')}`);
    }
  }, [displayCategories, activeCategory]);

  if (loading) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-4 w-96" />
        <div className="flex gap-4">
          <Skeleton className="h-10 flex-1" />
        </div>
        <div className="grid gap-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error || !tool) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <FileJson className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold">Tool Not Found</h2>
          <p className="text-muted-foreground max-w-md">
            {error || 'The requested tool could not be loaded. Make sure the JSON file exists in the correct location.'}
          </p>
          <Link to="/">
            <Button variant="outline" className="mt-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in relative">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
          Home
        </Link>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground capitalize">{category}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground font-medium font-mono">{tool.tool}</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono">
            <span className="gradient-text">{tool.tool}</span>
          </h1>
          <Badge variant="secondary" className="font-mono text-sm">
            {tool.total_commands} commands
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">{tool.description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start relative">
        <div className="flex-1 w-full min-w-0 space-y-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search in commands or explanations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/30"
            />
          </div>

          {/* Mobile TOC - Edge Floating Drawer Trigger */}
          {displayCategories.length > 0 && typeof document !== 'undefined' && createPortal(
            <div className="lg:hidden fixed top-1/2 right-0 z-[100] -translate-y-1/2">
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <button 
                    className="p-2.5 bg-sidebar border border-sidebar-border border-r-0 rounded-l-xl shadow-2xl hover:bg-sidebar-accent transition-colors group flex items-center justify-center outline-none"
                    aria-label="Expand Table of Contents"
                  >
                    <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[85vh]">
                  <DrawerHeader className="border-b border-border/50 pb-4 text-left">
                    <DrawerTitle>On this page</DrawerTitle>
                    <DrawerDescription>Jump directly to a specific command category.</DrawerDescription>
                  </DrawerHeader>
                  <div className="overflow-y-auto p-4 custom-scrollbar">
                    <div className="grid gap-2 mb-8">
                       {displayCategories.map(cat => {
                         const catId = `category-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`;
                         const isActive = activeCategory === catId;

                         return (
                           <DrawerClose key={cat} asChild>
                             <Button 
                               id={`drawer-item-${catId}`}
                               variant="outline"
                               className={cn(
                                 "justify-between w-full h-auto py-3.5 px-4 transition-all shadow-sm",
                                 isActive 
                                   ? "bg-primary/10 text-primary border-primary/50 border-l-4 font-bold" 
                                   : "font-normal hover:bg-primary/10 hover:text-primary border-border bg-card"
                               )}
                               onClick={() => {
                                 setActiveCategory(catId);
                                 setTimeout(() => {
                                   document.getElementById(catId)?.scrollIntoView({ behavior: 'smooth' });
                                 }, 150);
                               }}
                             >
                               <span className="truncate pr-4 text-sm">{cat}</span>
                               <Badge variant={isActive ? "default" : "secondary"} className="shrink-0">
                                 {groupedCommands[cat].length}
                               </Badge>
                             </Button>
                           </DrawerClose>
                         );
                       })}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>,
            document.body
          )}

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            {searchQuery && (
              <span>
                Found {Object.values(groupedCommands).reduce((acc, cmds) => acc + cmds.length, 0)} commands matching your search
              </span>
            )}
          </div>

          {/* Content Grouped by Category */}
          <div className="space-y-12">
            {displayCategories.length === 0 ? (
              <div className="text-center py-12 border rounded-xl bg-card/50">
                <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No commands match your search.</p>
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery('')}
                  className="mt-2"
                >
                  Clear search
                </Button>
              </div>
            ) : (
              displayCategories.map(cat => (
                <div key={cat} id={`category-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`} className="scroll-mt-24 space-y-4">
                  <h2 className="text-xl font-bold font-mono pb-2 border-b border-border text-foreground">
                    <span className="text-primary mr-2">#</span>{cat}
                  </h2>
                  <div className="grid gap-4">
                    {groupedCommands[cat].map(cmd => (
                      <CommandCard 
                        key={cmd.id} 
                        command={cmd} 
                        toolName={toolName || ''}
                        toolDisplayName={tool.tool}
                        category={category || ''}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Sidebar TOC - Hidden on Mobile */}
        {displayCategories.length > 0 && (
          <div className="hidden lg:block w-64 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pb-8">
            <div className="p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-widest text-muted-foreground">
                On this page
              </h3>
              <nav className="space-y-1">
                {displayCategories.map(cat => {
                  const catId = `category-${cat.replace(/[^a-zA-Z0-9]/g, '-')}`;
                  const isActive = activeCategory === catId;

                  return (
                    <a 
                      key={cat} 
                      href={`#${catId}`}
                      className={cn(
                        "group flex gap-2 items-center px-2 py-1.5 text-sm rounded-md transition-colors",
                        isActive 
                          ? "bg-primary/10 text-primary font-bold relative after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-1.5 after:bg-primary after:rounded-r-md"
                          : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(catId);
                        document.getElementById(catId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <ChevronRight className={cn(
                        "h-3 w-3 transition-all",
                        isActive ? "opacity-100 ml-0" : "opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0"
                      )} />
                      <span className="flex-1 truncate">{cat}</span>
                      <Badge variant={isActive ? "default" : "secondary"} className="text-[10px] px-1.5 py-0 min-w-5 justify-center">
                        {groupedCommands[cat].length}
                      </Badge>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
