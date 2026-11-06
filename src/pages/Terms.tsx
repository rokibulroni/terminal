import { Link } from 'react-router-dom';
import { StaticPage } from '@/components/common/StaticPage';

export function TermsPage() {
  return (
    <StaticPage
      seo={{ title: 'Terms of use', description: 'The terms for using Terminal and its content, which is published under the MIT License.', path: '/terms' }}
      eyebrow="Legal"
      title="Terms of use"
      updated="6 November 2026"
    >
      <h2>1. Using the site</h2>
      <p>
        You may use Terminal freely for personal, educational and professional purposes. By using it you agree to these terms and to the{' '}
        <Link to="/disclaimer">disclaimer</Link>.
      </p>

      <h2>2. Lawful, authorised use</h2>
      <p>
        You are responsible for how you use the information here. Use security tools only against systems you own or are explicitly authorised to test, and comply
        with all applicable laws.
      </p>

      <h2>3. Licence</h2>
      <p>
        The site’s source code and content are released under the <Link to="/license">MIT License</Link>. You may copy, modify and redistribute them, including
        commercially, as long as the copyright and licence notice are kept. Third-party tool names and trademarks belong to their owners.
      </p>

      <h2>4. Automated access</h2>
      <p>
        Crawlers, scripts and AI agents are welcome. Prefer the <Link to="/developers">JSON API and Markdown files</Link> over scraping HTML, keep request rates
        reasonable, and cache responses. Abusive traffic may be rate-limited or blocked.
      </p>

      <h2>5. No warranty</h2>
      <p>
        The site is provided “as is”, without warranties of any kind. We don’t guarantee that content is complete, current or error-free, and we are not liable
        for any loss arising from its use.
      </p>

      <h2>6. Changes</h2>
      <p>These terms may be updated. The date above shows the latest revision; continued use means you accept the current version.</p>
    </StaticPage>
  );
}
