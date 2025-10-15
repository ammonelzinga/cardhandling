import { Link } from 'react-router-dom';

export default function CategoriesHome() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh', textAlign: 'center', gap: 16 }}>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', margin: 0 }}>Select a category to explore quotes by topic.</p>
      <nav style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
  <Link to="/category/abrahamic" className="chip">Abrahamic Religion</Link>
  <Link to="/category/fiction" className="chip">Fiction Fun</Link>
  <Link to="/category/secular" className="chip">Secular Wisdom</Link>
      </nav>
    </div>
  );
}
