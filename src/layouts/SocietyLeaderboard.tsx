import type { Quote } from '../types';

export default function SocietyLeaderboard({ items }: { items: Quote[] }) {
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
      {items.map((q, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 12, alignItems: 'stretch' }}>
          <div style={{ background: 'var(--accent)', color: 'var(--card-bg)', borderRadius: 12, display: 'grid', placeItems: 'center', fontWeight: 700 }}>{i + 1}</div>
          <article style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)' }}>
            <p style={{ marginTop: 0 }}>“{q.text}”</p>
            <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
          </article>
        </li>
      ))}
    </ol>
  );
}
