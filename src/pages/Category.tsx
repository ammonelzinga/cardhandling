import { Link, useParams } from 'react-router-dom';

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

const titles: Record<string, string> = {
  abrahamic: 'Abrahamic Religion',
  fiction: 'Fiction Fun',
  secular: 'Secular Wisdom',
};

export default function Category() {
  const { category } = useParams();
  const subs = subcategories[category ?? ''] ?? [];
  return (
    <div>
      <p style={{ marginBottom: 8 }}>
        <Link to="/category">← Back</Link>
      </p>
      <h2>{titles[category ?? ''] ?? 'Choose a subcategory'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {subs.map((s) => (
          <Link key={s.slug} to={`/category/${category}/${s.slug}`} className="chip">
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
