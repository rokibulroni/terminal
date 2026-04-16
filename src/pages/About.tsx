import { Link } from 'react-router-dom';
import { Terminal, Github, ExternalLink, Shield, Zap, Heart, Code2, Users, GitPullRequest } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="relative p-4 rounded-2xl bg-primary/10 border border-primary/20">
            <Terminal className="h-12 w-12 text-primary" />
            <div className="absolute inset-0 blur-xl bg-primary/20 -z-10" />
          </div>
        </div>
        <h1 className="text-4xl font-bold font-mono gradient-text">Terminal</h1>
        <p className="text-xl text-muted-foreground">
          Cybersecurity Command Reference Hub
        </p>
      </div>

      {/* Description */}
      <div className="terminal-card p-6 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Terminal</strong> is a professional-grade cybersecurity command reference 
          website designed for security students, professionals, red teamers, blue teamers, 
          SOC analysts, and DevSecOps engineers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Built with a cyberpunk hacker aesthetic while maintaining professional readability, 
          Terminal serves as your centralized hub for discovering, learning, and referencing 
          security tool commands.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="terminal-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-primary">
            <Zap className="h-5 w-5" />
            <h3 className="font-semibold">Fast Search</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Fuzzy search across all tools and commands with keyboard navigation support.
          </p>
        </div>
        
        <div className="terminal-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-accent">
            <Code2 className="h-5 w-5" />
            <h3 className="font-semibold">JSON Driven</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            All content loaded from structured JSON files. Easy to extend and maintain.
          </p>
        </div>
        
        <div className="terminal-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-success">
            <Shield className="h-5 w-5" />
            <h3 className="font-semibold">18 Categories</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Organized coverage of Cloud, IoT, Mobile, Reverse Engineering, OSINT, and more.
          </p>
        </div>
        
        <div className="terminal-card p-5 space-y-2">
          <div className="flex items-center gap-2 text-warning">
            <Heart className="h-5 w-5" />
            <h3 className="font-semibold">Favorites</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Bookmark frequently used commands for quick access. Stored locally.
          </p>
        </div>
      </div>

      {/* Target Audience */}
      <div className="terminal-card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Built For</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            'Penetration Testers',
            'Security Researchers',
            'SOC Analysts',
            'Red Team Operators',
            'Blue Team Defenders',
            'DevSecOps Engineers',
            'CTF Players',
            'Security Students',
          ].map(role => (
            <span 
              key={role}
              className="px-3 py-1.5 rounded-full bg-muted text-sm border border-border"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Contribute Section */}
      <div className="terminal-card p-8 border-l-4 border-l-accent flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GitPullRequest className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-bold">Open Source & Community Driven</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-lg">
            Terminal is fully open-source and welcomes contributions! Learn how you can append new command arrays or build upon the frontend architecture to support the cybersecurity community.
          </p>
        </div>
        <Link to="/contribute" className="shrink-0">
          <Button variant="outline" className="font-mono">
            <Code2 className="h-4 w-4 mr-2" />
            How to Contribute
          </Button>
        </Link>
      </div>

      {/* Footer CTA */}
      <div className="text-center space-y-4">
        <Link to="/">
          <Button size="lg" className="font-mono">
            <Terminal className="h-4 w-4 mr-2" />
            Start Exploring
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground">
          terminal.rokibulroni.com
        </p>
      </div>
    </div>
  );
}
