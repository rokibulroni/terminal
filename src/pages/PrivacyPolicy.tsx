import { Shield, Lock, Eye, Database } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <Shield className="h-10 w-10 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: December 2024</p>
      </div>

      <div className="space-y-6">
        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Data Collection</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Terminal is a static website currently indexing over 9,391 commands across 18 unique operational vectors. We do not collect, store, or transmit any personal 
            information to external servers. All data including your favorites and recent tools 
            are stored locally in your browser's localStorage.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Database className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Local Storage</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            We use browser localStorage to store:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Your favorited commands for quick access</li>
            <li>Recently viewed tools for convenience</li>
            <li>Theme preference (dark/light mode)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            This data never leaves your device and can be cleared at any time through your browser settings.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Eye className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Terminal does not use any third-party analytics, tracking, or advertising services. 
            We do not share any information with third parties because we don't collect any 
            information in the first place.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us through 
            the contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
