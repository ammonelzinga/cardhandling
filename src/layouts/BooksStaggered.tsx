import { useMemo, useState } from 'react';
import type { Quote } from '../types';

export default function BooksStaggered({ items }: { items: Quote[] }) {
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const data = useMemo(() => {
    const withYear = items.map((q) => ({ ...q, _year: Number((q as any).year) || 0 }));
    const sorted = [...withYear].sort((a, b) => (a._year - b._year) || a.text.localeCompare(b.text));
    return sortDir === 'asc' ? sorted : sorted.reverse();
  }, [items, sortDir]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 12 }}>
        <button onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--fg)' }}>
          Sort by date: {sortDir.toUpperCase()}
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }}>
        {data.map((q, i) => (
          <article key={i} style={{
            padding: 24,
            border: '1px solid var(--border)',
            borderRadius: 16,
            background: 'var(--card-bg)',
            minHeight: '70vh',
            display: 'grid',
            alignContent: 'center'
          }}>
            <p style={{ marginTop: 0, fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', lineHeight: 1.6, textAlign: 'center' }}>“{q.text}”</p>
            <footer style={{ color: 'var(--muted)', fontSize: 14, textAlign: 'center' }}>
              {q.author && `— ${q.author}`} {q.source && ` · ${q.source}`} {(q as any).year && ` · ${(q as any).year}`}
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
