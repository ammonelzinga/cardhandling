import type { Quote } from '../types';

export default function JudaismStripedGrid({ items }: { items: Quote[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
      {items.map((q, i) => (
        <article key={i} style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: `linear-gradient(90deg, color-mix(in oklab, var(--accent) 15%, transparent) 0 8px, transparent 8px 100%)` }}>
          <p style={{ marginTop: 0 }}>“{q.text}”</p>
          <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
        </article>
      ))}
    </div>
  );
}
