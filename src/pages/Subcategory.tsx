import { useParams, Link } from 'react-router-dom';
import { quotes } from '../data';
import SubcategoryLayout from '../layouts/SubcategoryLayout';
import type { SubcategoryKey } from '../types';

const subcategories: Record<string, { slug: string; label: string }[]> = {
  abrahamic: [
    { slug: 'christianity', label: 'Christianity' },
    { slug: 'islam', label: 'Islam' },
    { slug: 'judaism', label: 'Judaism' },
  ],
  fiction: [
    { slug: 'books', label: 'Books' },
    { slug: 'movies', label: 'Movies' },
    { slug: 'poetry', label: 'Songs/Poetry' },
  ],
  secular: [
    { slug: 'philosophy', label: 'Philosophy & Ethics' },
    { slug: 'science', label: 'Science & Discovery' },
    { slug: 'society', label: 'Society & Leadership' },
  ],
};

export default function Subcategory() {
  const { category, subcategory } = useParams();
  const keyName = (subcategory ?? '') as SubcategoryKey;
  const items = quotes[keyName] ?? [];

  return (
    <div>
      <p style={{ marginBottom: 12 }}>
        <Link to={`/category/${category}`} style={{ textDecoration: 'none' }}>← Back</Link>
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        {(subcategories[category ?? ''] ?? []).map((s) => (
          <Link key={s.slug} to={`/category/${category}/${s.slug}`} style={{ padding: '6px 10px', border: '1px solid #334155', borderRadius: 999, background: 'transparent' }}>
            {s.label}
          </Link>
        ))}
      </div>
      <h2 style={{ marginTop: 0 }}>{subcategory}</h2>
      <SubcategoryLayout keyName={keyName} items={items} />
    </div>
  );
}
