import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ACCENT_COLORS = [
  { id: 'blue',      label: 'Azul',       header: '#1565C0', headerDark: '#0D47A1', accent: '#1565C0' },
  { id: 'red',       label: 'Rojo',       header: '#C62828', headerDark: '#7F0000', accent: '#C62828' },
  { id: 'yellow',    label: 'Amarillo',   header: '#F9A825', headerDark: '#F57F17', accent: '#F57F17' },
  { id: 'lightblue', label: 'Azul Claro', header: '#0288D1', headerDark: '#01579B', accent: '#0288D1' },
  { id: 'lime',      label: 'Verde Lima', header: '#689F38', headerDark: '#33691E', accent: '#689F38' },
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
