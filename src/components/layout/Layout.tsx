import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';
import { Terminal, Shield, Mail, Info, Github, Heart, Linkedin, Globe, BookOpen, FileText, AlertTriangle, GitPullRequest, Scale } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface LayoutProps {
  children: React.ReactNode;
}

// Email obfuscation to protect from bots
const getEmail = () => {
  const parts = ['hello', 'rokibulroni', 'com'];
  return `${parts[0]}@${parts[1]}.${parts[2]}`;
};

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmail()}`;
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col w-full max-w-[100vw] overflow-x-hidden">
      <Header
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        isSidebarOpen={sidebarOpen}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main
        className={cn(
          "transition-all duration-300 pt-4 pb-8 flex-1",
          "lg:ml-64"
        )}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {children}
        </div>
      </main>

      {/* Professional Footer */}
      <footer className={cn(
        "border-t border-border bg-card transition-all duration-300",
        "lg:ml-64"
      )}>
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono font-bold text-xl text-foreground">Terminal</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your comprehensive cybersecurity command reference hub. Built for security professionals and enthusiasts.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-2">
                <a 
                  href="https://github.com/rokibulroni/terminal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/50 border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/rokibulroni" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/50 border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://rokibulroni.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-muted/50 border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <button 
                  onClick={handleEmailClick}
                  className="p-2.5 rounded-lg bg-muted/50 border border-border hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col space-y-2.5">
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <Info className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  About Us
                </Link>
                <Link to="/how-to-use" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <BookOpen className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  How to Use
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <Mail className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  Contact
                </Link>
                <Link to="/contribute" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <GitPullRequest className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  Contribute
                </Link>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col space-y-2.5">
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <Shield className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <FileText className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  Terms of Service
                </Link>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <AlertTriangle className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  Disclaimer
                </Link>
                <Link to="/license" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group">
                  <Scale className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                  License
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Resources</h4>
              <nav className="flex flex-col space-y-2.5">
                <Link to="/favorites" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Saved Commands
                </Link>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse Categories
                </Link>
                <span className="text-xs text-muted-foreground/60 pt-2">
                  For educational purposes only
                </span>
              </nav>
            </div>
          </div>

          <Separator className="bg-border/50" />

          {/* Bottom Bar */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Terminal. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
              Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> for the security community
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
