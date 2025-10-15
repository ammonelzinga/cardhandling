import type { Quote } from '../types';

export default function MoviesSplitColumns({ items }: { items: Quote[] }) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {[left, right].map((col, idx) => (
        <div key={idx} style={{ display: 'grid', alignContent: 'start', gap: 12 }}>
          {col.map((q, i) => (
            <article key={i} style={{ padding: 20, border: '1px solid var(--border, #334155)', borderRadius: 12, background: 'var(--card-bg, #0b1222)' }}>
              <p style={{ marginTop: 0, fontSize: i % 3 === 0 ? 20 : 16, lineHeight: 1.6 }}>“{q.text}”</p>
              <footer style={{ color: '#94a3b8', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}
