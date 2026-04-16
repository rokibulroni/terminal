import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Terminal, ChevronRight } from 'lucide-react';
import { CATEGORY_TOOLS } from '@/hooks/useCategoryTools';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

// Category metadata
const CATEGORY_META: Record<string, { name: string; description: string }> = {
  network: { name: 'Network', description: 'Port scanning, host discovery, and network mapping tools' },
  web: { name: 'Web', description: 'Web application testing, directory enumeration, and vulnerability scanning' },
  enumeration: { name: 'Enumeration', description: 'Service enumeration, SMB, LDAP, and directory discovery' },
  exploitation: { name: 'Exploitation', description: 'Exploit frameworks, payload generation, and attack tools' },
  credentials: { name: 'Credentials', description: 'Password cracking, hash attacks, and wordlist generation' },
  lateral: { name: 'Lateral Movement', description: 'Network pivoting, remote execution, and lateral movement' },
  wireless: { name: 'Wireless', description: 'WiFi auditing, WPA/WPA2 cracking, and wireless analysis' },
  forensics: { name: 'Forensics', description: 'Memory analysis, disk forensics, and evidence recovery' },
  monitoring: { name: 'Monitoring', description: 'IDS/IPS, log analysis, and intrusion detection' },
  cloud: { name: 'Cloud', description: 'AWS, GCP, Azure security, and container analysis' },
  traffic: { name: 'Traffic', description: 'Packet capture, protocol analysis, and network traffic inspection' },
  utilities: { name: 'Utilities', description: 'Essential command-line tools and data processing utilities' },
};

interface ToolInfo {
  name: string;
  slug: string;
  commandCount: number;
  description: string;
}

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [tools, setTools] = useState<ToolInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryTools = CATEGORY_TOOLS[category || ''] || [];
  const categoryMeta = CATEGORY_META[category || ''] || { name: category, description: '' };

  useEffect(() => {
    async function loadToolsInfo() {
      if (!category || categoryTools.length === 0) {
        setLoading(false);
        return;
      }
      
      const toolPromises = categoryTools.map(async (toolSlug) => {
        try {
          const response = await fetch(`/jsons/${category}/${toolSlug}.json`);
          const data = await response.json();
          return {
            name: data.tool || toolSlug,
            slug: toolSlug,
            commandCount: data.commands?.length || 0,
            description: data.description || '',
          };
        } catch {
          return {
            name: toolSlug,
            slug: toolSlug,
            commandCount: 0,
            description: 'Tool information unavailable',
          };
        }
      });
      
      const toolInfos = await Promise.all(toolPromises);
      setTools(toolInfos);
      setLoading(false);
    }
    
    loadToolsInfo();
  }, [category]);

  if (!category || !CATEGORY_TOOLS[category]) {
    return (
      <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
            <Terminal className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-2xl font-bold">Category Not Found</h2>
          <p className="text-muted-foreground max-w-md">
            The requested category does not exist.
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
        <span className="text-foreground font-medium capitalize">{categoryMeta.name}</span>
      </nav>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text">{categoryMeta.name}</span>
          </h1>
          <Badge variant="secondary" className="font-mono text-sm">
            {categoryTools.length} tools
          </Badge>
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {categoryMeta.description}
        </p>
      </div>

      {/* Tools Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryTools.map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-muted rounded w-1/2 mb-2" />
                <div className="h-4 bg-muted rounded w-full" />
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              to={`/tool/${category}/${tool.slug}`}
              className="group"
            >
              <Card className={cn(
                "h-full transition-all duration-300 border-2",
                "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
              )}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-mono text-primary group-hover:text-primary/80 transition-colors">
                      {tool.name}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {tool.commandCount} cmds
                      </Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                  <CardDescription className="line-clamp-2 mt-2">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Back Button */}
      <div className="pt-4">
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
