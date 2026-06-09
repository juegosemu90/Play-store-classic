import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const gameButtons = [
  { label: 'Angry Birds',         color: '#C62828', icon: '🐦', search: 'Angry Birds (' },
  { label: 'Angry Birds Seasons', color: '#E65100', icon: '🎃', search: 'Angry Birds Seasons' },
  { label: 'Angry Birds Río',     color: '#1565C0', icon: '🦜', search: 'Angry Birds Rio' },
  { label: 'Angry Birds Space',   color: '#1A237E', icon: '🚀', search: 'Angry Birds Space' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleButton = (btn) => {
    navigate(`/search?q=${encodeURIComponent(btn.search)}`);
  };

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Play Store</h1>
        <p>Selecciona un juego</p>
      </div>

      <div className="game-buttons-grid">
        {gameButtons.map((btn) => (
          <button
            key={btn.label}
            className="game-btn"
            style={{ '--btn-color': btn.color }}
            onClick={() => handleButton(btn)}
          >
            <span className="game-btn-icon">{btn.icon}</span>
            <span className="game-btn-label">{btn.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
