import { useMemo, useState } from 'react';
import type { Quote } from '../types';
import { quotes as datasets } from '../data';

function gatherAll(): Quote[] { return Object.values(datasets).flat(); }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RandomPage() {
  const [seed, setSeed] = useState(0);
  const data = useMemo(() => shuffle(gatherAll()), [seed]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button
          onClick={() => setSeed(s => s + 1)}
          style={{
            padding: '12px 18px',
            borderRadius: 12,
            border: '1px solid var(--border)',
            background: '#ffffff',
            color: '#0b1020',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: 0.2,
            boxShadow: '0 2px 10px rgba(0,0,0,0.25)'
          }}
        >
          Shuffle
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {data.map((q, i) => {
          const colSpan = (i % 7 === 0) ? 2 : 1;
          const rowSpan = (i % 5 === 0) ? 2 : 1;
          return (
            <article key={i} style={{
              gridColumn: `span ${colSpan}`,
              gridRow: `span ${rowSpan}`,
              padding: 16,
              border: '1px solid var(--border)',
              borderRadius: 12,
              background: 'var(--card-bg)'
            }}>
              <p style={{
                marginTop: 0,
                lineHeight: 1.5,
                fontSize: `clamp(1rem, ${colSpan * rowSpan * 0.6}rem, 2.2rem)`,
                fontWeight: rowSpan > 1 ? 700 : 500,
                fontStyle: colSpan > 1 ? 'italic' as const : 'normal'
              }}>“{q.text}”</p>
              <footer style={{ color: 'var(--muted)', fontSize: 13 }}>{q.author && `— ${q.author}`} {q.source && ` · ${q.source}`} {q.year && ` · ${q.year}`}</footer>
            </article>
          );
        })}
      </div>
    </div>
  );
}
