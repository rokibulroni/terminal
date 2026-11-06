import { useContext, useEffect } from 'react';
import { HeadContext } from '@/lib/head';
import { buildHeadTags, type SeoProps } from '@/lib/head-tags';

export type { SeoProps };

function applyToDocument(p: SeoProps) {
  const head = document.head;
  head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  for (const { tag, attrs, content } of buildHeadTags(p)) {
    if (tag === 'title') {
      document.title = content ?? '';
      continue;
    }
    const el = document.createElement(tag);
    el.setAttribute('data-seo', '');
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    if (content) el.textContent = content;
    head.appendChild(el);
  }
}

/** Declares the page's title, description, canonical URL and structured data. */
export function Seo(props: SeoProps) {
  const collector = useContext(HeadContext);
  if (collector) collector.props = props;
  const key = JSON.stringify(props);
  useEffect(() => {
    applyToDocument(JSON.parse(key) as SeoProps);
  }, [key]);
  return null;
}
