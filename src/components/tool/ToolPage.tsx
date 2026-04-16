import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, FileJson, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToolData } from '@/hooks/useToolData';
import { useRecentTools } from '@/hooks/useFavorites';
import { CommandCard } from './CommandCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

const ITEMS_PER_PAGE = 20;

export function ToolPage() {
  const { category, tool: toolName } = useParams<{ category: string; tool: string }>();
  const { tool, loading, error } = useToolData(category || '', toolName || '');
  const { addRecent } = useRecentTools();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showRawJson, setShowRawJson] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Track recent view
  useEffect(() => {
    if (category && toolName && tool) {
      addRecent(category, toolName);
    }
  }, [category, toolName, tool, addRecent]);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Reset filters when switching to a new tool
  useEffect(() => {
    setSelectedCategory('all');
    setSearchQuery('');
  }, [toolName]);

  // Get unique categories from commands
  const commandCategories = useMemo(() => {
    if (!tool) return [];
    const cats = new Set(tool.commands.map(cmd => cmd.category));
    return Array.from(cats).sort();
  }, [tool]);

  // Filter commands
  const filteredCommands = useMemo(() => {
    if (!tool) return [];
    
    return tool.commands.filter(cmd => {
      const matchesSearch = searchQuery === '' || 
        cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [tool, searchQuery, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredCommands.length / ITEMS_PER_PAGE);
  const paginatedCommands = filteredCommands.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
          <Skeleton className="h-10 w-48" />
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
    <div className="space-y-6 animate-fade-in">
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

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Filter commands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-muted/30"
          />
        </div>

        {/* Category Filter */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-fit sm:min-w-[200px] sm:max-w-[400px] bg-muted/30">
            <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {commandCategories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Raw JSON Toggle */}
        <Button
          variant={showRawJson ? "default" : "outline"}
          onClick={() => setShowRawJson(!showRawJson)}
          className="shrink-0"
        >
          <FileJson className="h-4 w-4 mr-2" />
          JSON
        </Button>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing {paginatedCommands.length} of {filteredCommands.length} commands
          {filteredCommands.length !== tool.total_commands && ` (filtered from ${tool.total_commands})`}
        </span>
        {totalPages > 1 && (
          <span>Page {currentPage} of {totalPages}</span>
        )}
      </div>

      {/* Content */}
      {showRawJson ? (
        <div className="terminal-card p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-foreground">
            {JSON.stringify(tool, null, 2)}
          </pre>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {paginatedCommands.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">No commands match your filters.</p>
                <Button 
                  variant="link" 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              paginatedCommands.map(cmd => (
                <CommandCard 
                  key={cmd.id} 
                  command={cmd} 
                  toolName={toolName || ''}
                  toolDisplayName={tool.tool}
                  category={category || ''}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-9"
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
