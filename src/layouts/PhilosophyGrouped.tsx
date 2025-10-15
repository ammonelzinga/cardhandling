import type { Quote } from '../types';

export default function PhilosophyGrouped({ items }: { items: Quote[] }) {
  const groups = new Map<string, Quote[]>();
  items.forEach(q => {
    const key = q.tags?.[0] ?? 'General';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(q);
  });
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      {[...groups.entries()].map(([name, qs]) => (
        <section key={name}>
          <h3 style={{ margin: '8px 0 12px' }}>{name}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {qs.map((q, i) => (
              <article key={i} style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)' }}>
                <p style={{ marginTop: 0 }}>“{q.text}”</p>
                <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`}</footer>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
