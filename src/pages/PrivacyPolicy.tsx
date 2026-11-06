import { StaticPage } from '@/components/common/StaticPage';
import { SITE } from '@/data/registry';

const STORAGE = [
  ['terminal-favorites', 'Commands you starred'],
  ['terminal-recent', 'The last few tools you opened'],
  ['terminal-global-ip', 'The target host you set in the header'],
  ['terminal-mode / terminal-color-theme', 'Light or dark mode and accent colour'],
  ['terminal-sidebar', 'Whether the desktop sidebar is collapsed'],
  ['practice_completed_ids', 'Practice cards you marked as mastered'],
];

export function PrivacyPolicyPage() {
  return (
    <StaticPage
      seo={{ title: 'Privacy policy', description: 'Terminal has no accounts, analytics, advertising or tracking cookies. Preferences stay in your browser.', path: '/privacy' }}
      eyebrow="Legal"
      title="Privacy policy"
      lead="Short version: we don’t collect personal data, and there is nothing to sign up for."
      updated="6 November 2026"
    >
      <h2>What we don’t do</h2>
      <ul>
        <li>No accounts, sign-ups or forms.</li>
        <li>No analytics, advertising or tracking scripts.</li>
        <li>No cookies.</li>
        <li>No third-party fonts or embeds — everything is served from this domain.</li>
      </ul>

      <h2>What stays in your browser</h2>
      <p>To remember your preferences, the site uses your browser’s local storage. This data never leaves your device and is not sent to us:</p>
      <ul>
        {STORAGE.map(([key, what]) => (
          <li key={key}>
            <code>{key}</code> — {what}
          </li>
        ))}
      </ul>
      <p>You can remove it at any time by clearing this site’s data in your browser settings. Favourites can be exported first from the Favorites page.</p>

      <h2>Hosting</h2>
      <p>
        The site is served by Cloudflare. Like any web host, Cloudflare processes technical data such as IP addresses and request logs to deliver the site and
        protect it from abuse. See{' '}
        <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
          Cloudflare’s privacy policy
        </a>
        .
      </p>

      <h2>External links</h2>
      <p>Pages link to official tool documentation, GitHub and other sites. Their own privacy policies apply once you follow a link.</p>

      <h2>Contact</h2>
      <p>
        Questions? Open an issue on <a href={SITE.repo} target="_blank" rel="noopener noreferrer">GitHub</a> or use the contact page.
      </p>
    </StaticPage>
  );
}
