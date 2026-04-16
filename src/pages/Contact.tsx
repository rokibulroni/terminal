import { Mail, Github, Globe, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCallback } from 'react';

// Email obfuscation to protect from bots (similar to Cloudflare email protection)
const getEmail = () => {
  const parts = ['hello', 'rokibulroni', 'com'];
  return `${parts[0]}@${parts[1]}.${parts[2]}`;
};

const getEmailDisplay = () => {
  return 'hello [at] rokibulroni [dot] com';
};

export function ContactPage() {
  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${getEmail()}`;
  }, []);

  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Mail className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with the Terminal team</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <button 
          onClick={handleEmailClick}
          className="terminal-card p-6 hover-lift flex flex-col items-center text-center space-y-3 group cursor-pointer w-full"
        >
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">Email</h3>
          <p className="text-sm text-muted-foreground">{getEmailDisplay()}</p>
        </button>

        <a 
          href="https://github.com/rokibulroni/terminal" 
          target="_blank" 
          rel="noopener noreferrer"
          className="terminal-card p-6 hover-lift flex flex-col items-center text-center space-y-3 group"
        >
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Github className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">GitHub</h3>
          <p className="text-sm text-muted-foreground">Report issues & contribute</p>
        </a>

        <a 
          href="https://rokibulroni.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="terminal-card p-6 hover-lift flex flex-col items-center text-center space-y-3 group"
        >
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">Website</h3>
          <p className="text-sm text-muted-foreground">rokibulroni.com</p>
        </a>

        <a 
          href="https://linkedin.com/in/rokibulroni" 
          target="_blank" 
          rel="noopener noreferrer"
          className="terminal-card p-6 hover-lift flex flex-col items-center text-center space-y-3 group"
        >
          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Linkedin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold">LinkedIn</h3>
          <p className="text-sm text-muted-foreground">Connect professionally</p>
        </a>
      </div>

      <div className="terminal-card p-6 text-center space-y-4">
        <h2 className="text-lg font-semibold">Want to Contribute?</h2>
        <p className="text-muted-foreground">
          Terminal is open for contributions! If you'd like to add new tools, fix errors, 
          or improve the documentation, feel free to submit a pull request on GitHub.
        </p>
        <Button className="font-mono" asChild>
          <a href="https://github.com/rokibulroni/terminal" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
}