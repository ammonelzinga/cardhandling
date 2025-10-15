import type { Quote } from '../types';

export default function IslamTimeline({ items }: { items: Quote[] }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 24 }}>
      <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((q, i) => (
          <li key={i} style={{ position: 'relative', marginBottom: 16 }}>
            <span style={{ position: 'absolute', left: -2, top: 8, width: 10, height: 10, background: 'var(--accent)', borderRadius: '50%' }} />
            <article style={{ marginLeft: 24, padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)' }}>
              <p style={{ marginTop: 0 }}>“{q.text}”</p>
              <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
