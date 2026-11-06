## Full audit & upgrade

End-to-end rebuild of Terminal Command Hub: codebase, data layer, UI/UX, content, SEO and AI-agent infrastructure. The site stays static (JSON data, no backend) and keeps its existing identity. Two commits on this branch.

### Platform (`c67b7ed`)
- **Data layer rebuilt.** Single source of truth in `src/data/registry.ts` + validated JSON under `data/tools/**`. `scripts/build-data.ts` enforces the schema (zod), unique ids, registry/file parity and link integrity, then generates the manifest, read-only JSON API, search index, sitemap, `llms.txt`/`llms-full.txt` and `_redirects`. One shared React Query loader replaces ~540 per-load fetches.
- **Bugs fixed.** Invalid `tmux.json`, wrong command counts, the unreachable `su` page, duplicate `trivy`, string-vs-number ids and stray fields are all resolved. TypeScript is now `strict`; lint is clean.
- **Full prerender.** SSR entry + `scripts/prerender.ts` write static HTML for every route (Cloudflare serves `/foo` from `foo.html`, unknown paths from `404.html`); the client hydrates from inlined state with no refetch. Each page is checked for exactly one `<h1>` and a canonical.
- **UI/UX pass.** Apple-level polish with the existing themes preserved: refreshed Dashboard, Category, Tool, Search, Favorites and Practice; loading/empty/error states; accessibility (landmarks, skip link, focus rings, labelled controls, `aria-live`); responsive from 375px up; no theme flash.
- **SEO & agents.** Per-route titles/descriptions, canonicals, absolute OG images, JSON-LD (WebSite/Breadcrumb/TechArticle/HowTo/DefinedTermSet), generated sitemap and robots (all AI crawlers allowed), a documented read-only `/api/v1` with OpenAPI, Markdown alternates per tool, and Cloudflare `_headers`/`_redirects` (CSP, HSTS, caching, CORS).

### Content (`6889e87`)
- **Metadata for all 179 existing tools:** display name, rewritten summary, tags, homepage/docs, per-OS install commands and related-tool links.
- **Thin/garbled tools rewritten:** every Linux command page plus the low-quality containers/iot/mobile/osint/reversing references; existing command ids preserved where unchanged. Command count grows from ~9,590 to 10,273.
- **21 new tools** in new categories **Active Directory** (impacket, crackmapexec/netexec, kerbrute, certipy, mimikatz, rubeus, bloodhound-python, responder), **Pivoting & Tunneling** (chisel, ligolo-ng, sshuttle, proxychains) and **Crypto & Encoding** (openssl, gpg, base64), plus DNS/WHOIS (dig, whois, dnsrecon) and web (subfinder, dnsx, katana, feroxbuster).
- **6 workflow guides** and a **40-term glossary**, cross-linked into tool pages and validated at build time.

**Totals:** 21 categories · 200 tools · 10,273 commands · 6 guides · 40 terms · 240 prerendered pages.

### Verification
`npm run build` (data validation → vite → SSR → prerender) completes with no errors; `npm run typecheck` and `npm run lint` are clean (lint shows only 3 pre-existing shadcn fast-refresh warnings). Spot-checked in the browser: new tool/category/guide/glossary pages, dark mode and 375px mobile, no console errors. Every sitemap URL has a matching built file.

### Follow-up (dashboard, not code)
Rate limiting for `/api/*` is a Cloudflare WAF rule configured in the dashboard — documented here, not in the repo.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
