import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Network, Globe, Search, Bug, Key, GitBranch, Wifi, FileSearch, Activity, Cloud, Radio, Wrench, Home, Star, Info, BookOpen, Mail, FileText, AlertTriangle, Shield, Smartphone, Box, Cpu, Eye, TerminalSquare, CircuitBoard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCategoryTools } from '@/hooks/useCategoryTools';
import { useFavorites } from '@/hooks/useFavorites';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDesktopOpen?: boolean;
  onCloseDesktop?: () => void;
  isPinned?: boolean;
}

const CATEGORY_CONFIG = [
  { id: 'network', name: 'Network', icon: Network },
  { id: 'web', name: 'Web', icon: Globe },
  { id: 'enumeration', name: 'Enumeration', icon: Search },
  { id: 'exploitation', name: 'Exploitation', icon: Bug },
  { id: 'credentials', name: 'Credentials', icon: Key },
  { id: 'lateral', name: 'Lateral', icon: GitBranch },
  { id: 'wireless', name: 'Wireless', icon: Wifi },
  { id: 'forensics', name: 'Forensics', icon: FileSearch },
  { id: 'monitoring', name: 'Monitoring', icon: Activity },
  { id: 'cloud', name: 'Cloud', icon: Cloud },
  { id: 'traffic', name: 'Traffic', icon: Radio },
  { id: 'utilities', name: 'Utilities', icon: Wrench },
  { id: 'osint', name: 'OSINT', icon: Eye },
  { id: 'mobile', name: 'Mobile', icon: Smartphone },
  { id: 'containers', name: 'Containers', icon: Box },
  { id: 'reversing', name: 'Reversing', icon: Cpu },
  { id: 'linux', name: 'Linux OS', icon: TerminalSquare },
  { id: 'iot', name: 'IoT / Hardware', icon: CircuitBoard },
];

const PAGE_LINKS = [
  { to: '/how-to-use', label: 'How to Use', icon: BookOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
  { to: '/privacy', label: 'Privacy Policy', icon: Shield },
  { to: '/terms', label: 'Terms', icon: FileText },
  { to: '/disclaimer', label: 'Disclaimer', icon: AlertTriangle },
];

interface CategoryItemProps {
  category: typeof CATEGORY_CONFIG[0];
  isActive: boolean;
  activeTool: string | undefined;
  onToolClick: () => void;
}

function CategoryItem({ category, isActive, activeTool, onToolClick }: CategoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(isActive);
  const { groups, totalCount } = useCategoryTools(category.id);
  const Icon = category.icon;

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
          "hover:bg-sidebar-accent/80",
          isActive && "bg-sidebar-accent text-sidebar-primary"
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">{category.name}</span>
        <span className="text-xs text-muted-foreground font-mono">{totalCount}</span>
        <div className={cn(
          "transition-transform duration-200",
          isExpanded && "rotate-90"
        )}>
          <ChevronRight className="h-4 w-4 shrink-0" />
        </div>
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-200",
        isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="ml-4 mt-1 space-y-2 border-l border-sidebar-border pl-3 py-1">
          {groups.map((group) => (
            <div key={group.groupName} className="space-y-0.5">
              <div className="px-2 pt-3 pb-1.5 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest gradient-text opacity-90">
                  {group.groupName}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
              {group.tools.map((tool) => (
                <Link
                  key={tool}
                  to={`/tool/${category.id}/${tool}`}
                  onClick={onToolClick}
                  className={cn(
                    "block px-2 py-1.5 text-sm rounded-md transition-all font-mono",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    activeTool === tool && "bg-primary/10 text-primary font-medium border-l-2 border-primary -ml-px pl-[7px]"
                  )}
                >
                  {tool}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ isOpen, onClose, isDesktopOpen = true, onCloseDesktop, isPinned = false }: SidebarProps) {
  const location = useLocation();
  const params = useParams();
  const currentCategory = params.category;
  const currentTool = params.tool;
  const { count: favoritesCount } = useFavorites();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-sidebar-border bg-sidebar/95 backdrop-blur-xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isDesktopOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto py-4 px-3 pb-20 custom-scrollbar">
          {/* Desktop Controls */}
          {onCloseDesktop && (
            <div className="hidden lg:flex items-center justify-between px-3 pb-2 mb-2 border-b border-sidebar-border">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                {isPinned ? (
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Pinned</span>
                ) : (
                  "Auto-Hide Mode"
                )}
              </span>
              <button
                onClick={onCloseDesktop}
                className="p-1 rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-primary transition-colors"
                aria-label="Collapse Sidebar"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Navigation Links */}
          <div className="space-y-1 mb-4">
            <Link
              to="/"
              onClick={onClose}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-sidebar-accent",
                location.pathname === "/" && "bg-sidebar-accent text-sidebar-primary"
              )}
            >
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/favorites"
              onClick={onClose}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-sidebar-accent",
                location.pathname === "/favorites" && "bg-sidebar-accent text-sidebar-primary"
              )}
            >
              <Star className="h-4 w-4" />
              <span>Favorites</span>
              {favoritesCount > 0 && (
                <span className="ml-auto text-xs bg-warning/20 text-warning px-1.5 py-0.5 rounded-full font-mono">
                  {favoritesCount}
                </span>
              )}
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className={cn(
                "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                "hover:bg-sidebar-accent",
                location.pathname === "/about" && "bg-sidebar-accent text-sidebar-primary"
              )}
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-sidebar-border my-4" />

          {/* Categories Section */}
          <div className="mb-3 px-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Categories
            </h3>
          </div>

          {/* Category List */}
          {CATEGORY_CONFIG.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              isActive={currentCategory === category.id}
              activeTool={currentTool}
              onToolClick={onClose}
            />
          ))}

          {/* Divider */}
          <div className="border-t border-sidebar-border my-4" />

          {/* Pages Section */}
          <div className="mb-3 px-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Pages
            </h3>
          </div>

          <div className="space-y-1">
            {PAGE_LINKS.map(link => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all",
                    "hover:bg-sidebar-accent",
                    location.pathname === link.to && "bg-sidebar-accent text-sidebar-primary font-medium"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-6 px-3 py-4 border-t border-sidebar-border">
            <p className="text-[10px] text-muted-foreground text-center font-mono">
              terminal.rokibulroni.com
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
