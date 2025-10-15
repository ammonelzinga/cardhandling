import { useMemo, useState } from 'react';
import type { Quote } from '../types';
import { quotes as datasets } from '../data';

function gatherAll(): Quote[] {
  return Object.values(datasets).flat();
}

type SortKey = 'author' | 'year';

type Dir = 'asc' | 'desc';

export default function ABC123() {
  const [key, setKey] = useState<SortKey>('author');
  const [dir, setDir] = useState<Dir>('asc');

  const data = useMemo(() => {
    const all = gatherAll().map(q => ({ ...q, _author: (q.author || 'Unknown').toLowerCase(), _year: Number((q as any).year) || 0 }));
    const sorted = [...all].sort((a, b) => {
      if (key === 'author') {
        const cmp = a._author.localeCompare(b._author) || a.text.localeCompare(b.text);
        return dir === 'asc' ? cmp : -cmp;
      } else {
        const cmp = (a._year - b._year) || (a._author.localeCompare(b._author));
        return dir === 'asc' ? cmp : -cmp;
      }
    });
    return sorted;
  }, [key, dir]);

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--muted)' }}>Sort by:</span>
        <button onClick={() => setKey('author')} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border)', background: key==='author'? 'var(--card-bg)': 'transparent', color: 'var(--fg)' }}>Author</button>
        <button onClick={() => setKey('year')} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border)', background: key==='year'? 'var(--card-bg)': 'transparent', color: 'var(--fg)' }}>Date</button>
        <span style={{ width: 1, height: 20, background: 'var(--border)', display: 'inline-block', margin: '0 6px' }}></span>
        <button onClick={() => setDir(d => d==='asc' ? 'desc' : 'asc')} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--border)', background: 'transparent', color: 'var(--fg)' }}>Dir: {dir.toUpperCase()}</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {data.map((q, i) => (
          <article key={i} style={{ padding: 16, border: '1px solid var(--border)', borderRadius: 12, background: 'var(--card-bg)' }}>
            <p style={{ marginTop: 0, lineHeight: 1.5 }}>“{q.text}”</p>
            <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`} {q.year && ` · ${q.year}`}</footer>
          </article>
        ))}
      </div>
    </div>
  );
}
