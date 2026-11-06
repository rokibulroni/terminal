import { StaticPage } from '@/components/common/StaticPage';

const MIT = `MIT License

Copyright (c) 2026 Rokibul (rokibulroni)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export function LicensePage() {
  return (
    <StaticPage
      seo={{ title: 'License', description: 'Terminal’s code and content are released under the MIT License.', path: '/license' }}
      eyebrow="Legal"
      title="MIT License"
      lead="Use it, fork it, ship it — commercially or not. Just keep the copyright notice."
    >
      <h2>In plain English</h2>
      <ul>
        <li><strong>You can</strong> use, copy, modify, merge, publish, distribute, sublicense and sell copies.</li>
        <li><strong>You must</strong> include the copyright and licence notice in copies or substantial portions.</li>
        <li><strong>There’s no warranty</strong> — the authors aren’t liable for how it’s used.</li>
      </ul>
      <p>Attribution with a link back is appreciated but not required beyond keeping the notice.</p>
      <h2>Full text</h2>
      <pre className="custom-scrollbar overflow-x-auto whitespace-pre-wrap rounded-xl border border-border bg-[hsl(var(--command-bg))] p-5 font-mono text-[13px] leading-6 text-foreground">{MIT}</pre>
    </StaticPage>
  );
}
