import { Scale, FileKey } from 'lucide-react';

export function LicensePage() {
  return (
    <div className="space-y-12 animate-fade-in max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="p-4 rounded-3xl bg-primary/10 border border-primary/20">
            <Scale className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold font-mono gradient-text">MIT License</h1>
        <p className="text-xl text-muted-foreground">
          Freedom to use, modify, and distribute.
        </p>
      </div>

      <div className="terminal-card p-8 space-y-6">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <FileKey className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold font-mono">The MIT License (MIT)</h2>
        </div>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed font-mono">
          <p>
            Copyright (c) 2026 Rokibul (rokibulroni.com)
          </p>
          
          <p>
            Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
          </p>
          
          <p className="p-4 bg-muted/50 rounded-lg border border-border/50 text-foreground">
            The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.
          </p>
          
          <p className="uppercase font-bold tracking-wide mt-6">
            The software is provided "as is", without warranty of any kind, express or
            implied, including but not limited to the warranties of merchantability,
            fitness for a particular purpose and noninfringement. In no event shall the
            authors or copyright holders be liable for any claim, damages or other
            liability, whether in an action of contract, tort or otherwise, arising from,
            out of or in connection with the software or the use or other dealings in the
            software.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="terminal-card p-6 border-l-4 border-l-success">
          <h3 className="font-semibold text-lg mb-2 text-success">What you CAN do:</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Commercial use</li>
            <li>Modification</li>
            <li>Distribution</li>
            <li>Private use</li>
          </ul>
        </div>
        <div className="terminal-card p-6 border-l-4 border-l-warning">
          <h3 className="font-semibold text-lg mb-2 text-warning">What you MUST do:</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Include copyright notices</li>
            <li>Include license notice</li>
            <li>Give explicit credit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
