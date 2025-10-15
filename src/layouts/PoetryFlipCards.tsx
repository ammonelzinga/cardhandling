import type { Quote } from '../types';

export default function PoetryFlipCards({ items }: { items: Quote[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {items.map((q, i) => (
        <div key={i} style={{ perspective: 1000 }}>
          <div className="flip" style={{ position: 'relative', transformStyle: 'preserve-3d', transition: 'transform .4s', borderRadius: 12 }}>
            <article style={{ position: 'relative', padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)', backfaceVisibility: 'hidden' }}>
              <p style={{ marginTop: 0 }}>“{q.text}”</p>
            </article>
            <article style={{ position: 'absolute', inset: 0, padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
              <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}
