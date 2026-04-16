import { Github, Code, FileText, Bug, Terminal, GitPullRequest } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContributePage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-4 rounded-3xl bg-primary/10 border border-primary/20">
            <GitPullRequest className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold font-mono gradient-text">Contribute</h1>
        <p className="text-xl text-muted-foreground">
          Help us build the ultimate cybersecurity reference database
        </p>
      </div>

      <div className="terminal-card p-8 space-y-6">
        <h2 className="text-2xl font-bold font-mono flex items-center gap-3">
          <Github className="text-primary" />
          Open Source
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Terminal Command Hub is fully open-source and thrives on community contributions. 
          Whether you're fixing a typo, adding an advanced command to our JSON databases, 
          or building entirely new frontend features, your help is incredibly valuable!
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="font-mono bg-[#2b3137] hover:bg-[#24292e] text-white" asChild>
            <a href="https://github.com/rokibulroni/terminal" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Fork Repository
            </a>
          </Button>
        </div>
      </div>

      {/* Ways to Contribute */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-mono">How You Can Help</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="terminal-card p-6 space-y-4">
            <div className="p-3 rounded-xl bg-success/10 w-fit">
              <Terminal className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold">Expand Databases</h3>
            <p className="text-sm text-muted-foreground">
              Our massive databases are structurally built using easily edited JSON arrays located in the <code className="text-primary bg-primary/10 px-1 py-0.5 rounded">public/jsons/</code> directory. Create new tools or add complex commands to existing libraries!
            </p>
          </div>

          <div className="terminal-card p-6 space-y-4">
            <div className="p-3 rounded-xl bg-accent/10 w-fit">
              <Code className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">Frontend Features</h3>
            <p className="text-sm text-muted-foreground">
              Written in React and TailwindCSS. You can optimize components, implement new UI layouts, add different generic color themes, or improve accessibility structure.
            </p>
          </div>

          <div className="terminal-card p-6 space-y-4">
            <div className="p-3 rounded-xl bg-warning/10 w-fit">
              <Bug className="h-6 w-6 text-warning" />
            </div>
            <h3 className="text-xl font-semibold">Report Bugs</h3>
            <p className="text-sm text-muted-foreground">
              Find a broken feature or an incorrect command string? Open a GitHub Issue to report it so we can investigate and safely patch the framework.
            </p>
          </div>

          <div className="terminal-card p-6 space-y-4">
            <div className="p-3 rounded-xl bg-primary/10 w-fit">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Documentation</h3>
            <p className="text-sm text-muted-foreground">
              Help us translate the platform or document API schemas, user-guides, and developer references.
            </p>
          </div>
        </div>
      </div>

      <div className="terminal-card p-8 border-l-4 border-l-primary space-y-4">
        <h3 className="text-lg font-bold font-mono text-primary">Steps to Submit</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
          <li><strong>Fork</strong> the repository on GitHub.</li>
          <li><strong>Branch</strong> your work (<code className="text-xs bg-muted px-1.5 py-0.5 rounded">git checkout -b feature/new-tool</code>).</li>
          <li><strong>Commit</strong> changes with descriptive messages.</li>
          <li><strong>Push</strong> to your local fork.</li>
          <li><strong>Submit</strong> a Pull Request (PR) merging into the main branch.</li>
        </ol>
      </div>
    </div>
  );
}
