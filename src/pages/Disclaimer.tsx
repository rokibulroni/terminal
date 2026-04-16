import { AlertTriangle, Shield, Scale, Info } from 'lucide-react';

export function DisclaimerPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-warning/10 border border-warning/20">
            <AlertTriangle className="h-10 w-10 text-warning" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-mono">Disclaimer</h1>
        <p className="text-muted-foreground">Important legal information</p>
      </div>

      <div className="space-y-6">
        <section className="terminal-card p-6 space-y-4 border-l-4 border-warning">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <h2 className="text-xl font-semibold">Educational Purpose Only</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            All information, commands, and techniques provided on Terminal are intended 
            <strong className="text-foreground"> solely for educational purposes</strong>. 
            This website serves as an expansive reference hub housing an active index of over 9,391 automated commands bridging 18 unique deployment platforms for cybersecurity professionals, students, 
            and researchers who are learning about security tools and techniques.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Authorized Use Only</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The tools and commands documented here should only be used:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>On systems you own or have explicit written permission to test</li>
            <li>In controlled lab environments for learning purposes</li>
            <li>As part of authorized security assessments and penetration tests</li>
            <li>For defensive purposes to secure your own infrastructure</li>
          </ul>
        </section>

        <section className="terminal-card p-6 space-y-4 border-l-4 border-destructive">
          <div className="flex items-center gap-3">
            <Scale className="h-5 w-5 text-destructive" />
            <h2 className="text-xl font-semibold">Legal Warning</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Unauthorized access to computer systems is <strong className="text-destructive">illegal</strong> in 
            most jurisdictions worldwide. Using these tools against systems without proper 
            authorization may result in:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Criminal prosecution and imprisonment</li>
            <li>Civil lawsuits and significant financial penalties</li>
            <li>Permanent damage to your professional reputation</li>
            <li>Violation of laws such as CFAA, Computer Misuse Act, and GDPR</li>
          </ul>
        </section>

        <section className="terminal-card p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">No Liability</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The creators and maintainers of Terminal assume no responsibility for any 
            misuse of the information provided. Users are solely responsible for ensuring 
            their activities comply with applicable laws and regulations. By using this 
            website, you acknowledge that you understand and accept these terms.
          </p>
        </section>

        <section className="terminal-card p-6 space-y-4 bg-primary/5 border-primary/20">
          <h2 className="text-lg font-semibold text-center">Remember</h2>
          <p className="text-center text-muted-foreground italic">
            "With great power comes great responsibility. Use your skills ethically 
            and always obtain proper authorization before testing any system."
          </p>
        </section>
      </div>
    </div>
  );
}
