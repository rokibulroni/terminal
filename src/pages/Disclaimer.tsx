import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/common/StaticPage';

export function DisclaimerPage() {
  return (
    <StaticPage
      seo={{ title: 'Disclaimer', description: 'Terminal is for education and authorised security testing only. Read before using any command.', path: '/disclaimer' }}
      eyebrow="Legal"
      title="Disclaimer"
      lead="Read this before you run anything you find here."
      updated="6 November 2026"
    >
      <h2>Education and authorised use only</h2>
      <p>
        The commands and techniques on Terminal are published for learning, system administration, defence and <strong>authorised</strong> security testing. Only use
        them:
      </p>
      <ul>
        <li>on systems and networks you own, or</li>
        <li>where you have explicit, written permission from the owner that covers the activity, or</li>
        <li>in lab environments, CTFs and training platforms designed for it.</li>
      </ul>

      <h2>Unauthorised access is illegal</h2>
      <p>
        Accessing, scanning or disrupting systems without permission is a crime in most countries — for example under the US Computer Fraud and Abuse Act, the UK
        Computer Misuse Act and equivalent laws elsewhere. Consequences can include criminal charges, civil liability and loss of employment.
      </p>

      <h2>No warranty</h2>
      <p>
        Content is provided “as is”. Commands can behave differently across versions and platforms, and some are destructive (they delete data, crash services or
        lock accounts). Read the explanation, understand what a command does, and test in a safe environment first. The authors and contributors are not liable
        for any damage or loss caused by using this material.
      </p>

      <h2>Third-party tools</h2>
      <p>
        Terminal documents tools made by others. Their names and trademarks belong to their owners, and their own licences and terms apply. Links to external
        sites are provided for convenience and are not endorsements.
      </p>

      <p>
        See also the <Link to="/terms">terms of use</Link> and <Link to="/privacy">privacy policy</Link>.
      </p>
    </StaticPage>
  );
}
