import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apps } from '../data/apps';
import AppCard from '../components/AppCard';
import './HomePage.css';

const bars = [
  { label: 'Angry Birds',         search: 'Angry Birds (',    color: '#C62828' },
  { label: 'Angry Birds Seasons', search: 'Angry Birds Seasons', color: '#E65100' },
  { label: 'Angry Birds Rio',     search: 'Angry Birds Rio',  color: '#1565C0' },
  { label: 'Angry Birds Space',   search: 'Angry Birds Space',color: '#1A237E' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);
  const visibleApps = apps.filter(a => a.name);

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Play Store</h1>
      </div>

      {/* Barras de navegación */}
      <div className="nav-bars">
        {bars.map((b) => (
          <button
            key={b.label}
            className={`nav-bar ${active === b.label ? 'active' : ''}`}
            style={{ '--bar-color': b.color }}
            onClick={() => navigate(`/search?q=${encodeURIComponent(b.search)}`)}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Grid de apps — 3 columnas */}
      <div className="apps-grid">
        {visibleApps.map(app => (
          <div key={app.id} className="grid-item" onClick={() => navigate(`/app/${app.id}`)}>
            <AppCard app={app} variant="grid" />
          </div>
        ))}
      </div>
    </div>
  );
}
