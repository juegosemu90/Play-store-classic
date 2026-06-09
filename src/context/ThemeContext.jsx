import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ACCENT_COLORS = [
  { id: 'blue',      label: 'Azul',       header: '#1976D2', headerDark: '#1565C0', accent: '#1976D2' },
  { id: 'red',       label: 'Rojo',       header: '#E53935', headerDark: '#C62828', accent: '#E53935' },
  { id: 'yellow',    label: 'Amarillo',   header: '#FFB300', headerDark: '#FF8F00', accent: '#FFB300' },
  { id: 'lightblue', label: 'Azul Claro', header: '#039BE5', headerDark: '#0277BD', accent: '#039BE5' },
  { id: 'lime',      label: 'Verde Lima', header: '#7CB342', headerDark: '#558B2F', accent: '#7CB342' },
];

function getSaved(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    getSaved('ps-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  const [accentId, setAccentId] = useState(() => getSaved('ps-accent', 'blue'));

  const accent = ACCENT_COLORS.find(c => c.id === accentId) || ACCENT_COLORS[0];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('ps-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-header', theme === 'dark' ? accent.headerDark : accent.header);
    root.style.setProperty('--ps-green', accent.accent);
    root.style.setProperty('--ps-green-dark', accent.headerDark);
    try { localStorage.setItem('ps-accent', accentId); } catch {}
  }, [accentId, theme, accent]);

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const setAccent = (id) => setAccentId(id);

  return (
    <ThemeContext.Provider value={{ theme, toggle, accentId, setAccent, accents: ACCENT_COLORS }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
