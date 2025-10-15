import type { Quote } from '../types';

export default function ChristianityMasonry({ items }: { items: Quote[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {items.map((q, i) => {
        const colSpan = (i % 7 === 0) ? 2 : 1;
        const rowSpan = (i % 5 === 0) ? 2 : 1;
        return (
          <article
            key={i}
            style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
              padding: 16,
              border: '1px solid var(--border)',
              borderRadius: 12,
              background: 'var(--card-bg)'
            }}
          >
            <p style={{
              marginTop: 0,
              lineHeight: 1.5,
              fontSize: `clamp(1rem, ${colSpan * rowSpan * 0.6}rem, 2.2rem)`,
              fontWeight: rowSpan > 1 ? 700 : 500,
              fontStyle: colSpan > 1 ? 'italic' as const : 'normal'
            }}>“{q.text}”</p>
            <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
          </article>
        );
      })}
    </div>
  );
}
