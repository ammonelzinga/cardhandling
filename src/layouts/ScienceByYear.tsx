import type { Quote } from '../types';

export default function ScienceByYear({ items }: { items: Quote[] }) {
  const sorted = [...items].sort((a, b) => (Number(a.year) || 0) - (Number(b.year) || 0));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
      {sorted.map((q, i) => (
        <article key={i} style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)', position: 'relative' }}>
          {q.year && (
            <span style={{ position: 'absolute', right: 12, top: 12, fontSize: 12, color: 'var(--card-bg)', background: 'var(--accent)', borderRadius: 999, padding: '2px 8px' }}>{q.year}</span>
          )}
          <p style={{ marginTop: 0 }}>“{q.text}”</p>
          <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
        </article>
      ))}
    </div>
  );
}
