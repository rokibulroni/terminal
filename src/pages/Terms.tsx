import { FileText, AlertTriangle, Scale, Shield } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <FileText className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: December 2024</p>
      </div>

      <div className="space-y-6">
        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Scale className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using Terminal—an open-source reference hub indexing over 9,391 cybersecurity commands across 18 categories—you accept and agree to be bound by the terms and 
            provisions of this agreement. If you do not agree to these terms, please do not 
            use this website.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Use License</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Permission is granted to temporarily access the materials on Terminal for personal, 
            non-commercial, and educational purposes. This is the grant of a license, not a 
            transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Modify or copy the materials for commercial purposes</li>
            <li>Use the materials for any commercial purpose or public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on Terminal</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-semibold">Ethical Use</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The commands and techniques documented on Terminal are intended for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Authorized penetration testing with proper written consent</li>
            <li>Educational purposes and learning</li>
            <li>Legitimate security research</li>
            <li>Defending and hardening your own systems</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Using these tools against systems without authorization is illegal and unethical.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Modifications</h2>
          <p className="text-muted-foreground leading-relaxed">
            Terminal may revise these terms of service at any time without notice. By using this 
            website you are agreeing to be bound by the current version of these terms.
          </p>
        </section>
      </div>
    </div>
  );
}
