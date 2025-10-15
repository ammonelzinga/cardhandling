import { NavLink, Outlet } from 'react-router-dom';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import './styles/app.css';

type Theme = 'dark' | 'light';
const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({ theme: 'dark', toggle: () => {} });

function useTheme() { return useContext(ThemeContext); }

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }, [theme]);
  const value = useMemo(() => ({ theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #334155', background: 'transparent', color: 'var(--fg)' }}>
      {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header className="app__header">
          <h1>Quotes Organizer</h1>
          <nav className="tabs">
            <NavLink to="/category" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Categories</NavLink>
            <NavLink to="/abc123" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>ABC123</NavLink>
            <NavLink to="/random" className={({ isActive }) => isActive ? 'tab active' : 'tab'}>Random</NavLink>
          </nav>
          <ThemeToggle />
        </header>
        <main className="app__main">
          <Outlet />
        </main>
        <footer className="app__footer">© {new Date().getFullYear()}</footer>
      </div>
    </ThemeProvider>
  );
}
