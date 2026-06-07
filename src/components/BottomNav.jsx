import { Link, useLocation } from 'react-router-dom';
import { Home, Heart } from 'lucide-react';
import './BottomNav.css';

const tabs = [
  { path: '/', icon: Home, label: 'Inicio' },
  { path: '/favorites', icon: Heart, label: 'Favoritos' },
];

export default function BottomNav() {
  const { pathname } = useLocation();
  const isActive = (path) => path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav className="bottom-nav">
      {tabs.map(({ path, icon: Icon, label }) => (
        <Link key={path} to={path} className={`bottom-tab ${isActive(path) ? 'active' : ''}`}>
          <Icon size={22} className="tab-icon" />
          <span className="tab-label">{label}</span>
          {isActive(path) && <span className="tab-indicator" />}
        </Link>
      ))}
    </nav>
  );
}
