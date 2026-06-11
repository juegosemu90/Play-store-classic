import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { apps as localApps } from '../data/apps';
import AppCard from '../components/AppCard';
import './HomePage.css';

const bars = [
  { label: 'Angry Birds',         search: 'Angry Birds (',     color: '#C62828' },
  { label: 'Angry Birds Seasons', search: 'Angry Birds Seasons', color: '#E65100' },
  { label: 'Angry Birds Rio',     search: 'Angry Birds Rio',   color: '#1565C0' },
  { label: 'Angry Birds Space',   search: 'Angry Birds Space', color: '#1A237E' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [firebaseApps, setFirebaseApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirebase = async () => {
      try {
        const q = query(collection(db, 'apps'), orderBy('name'));
        const snap = await getDocs(q);
        const data = snap.docs.map(d => ({
          id: 'fb_' + d.id,
          ...d.data(),
          iconUrl: d.data().iconUrl || '',
          downloadUrl: d.data().downloadUrl || '',
          screenshots: d.data().screenshots || [],
          color: '#C62828',
          banner: 'linear-gradient(135deg, #7F0000, #C62828)',
          rating: 0, reviews: 0, downloads: '0',
          oldVersions: [],
        }));
        setFirebaseApps(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchFirebase();
  }, []);

  const allApps = [
    ...localApps.filter(a => a.name),
    ...firebaseApps,
  ];

  return (
    <div className="home-page">
      <div className="nav-bars">
        {bars.map((b) => (
          <button
            key={b.label}
            className="nav-bar"
            style={{ '--bar-color': b.color }}
            onClick={() => navigate(`/search?q=${encodeURIComponent(b.search)}`)}
          >
            {b.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="home-loading">
          <div className="loading-spinner" />
          <p>Cargando apps...</p>
        </div>
      )}

      <div className="apps-grid">
        {allApps.map(app => (
          <div key={app.id} className="grid-item" onClick={() => navigate(`/app/${app.id}`)}>
            <AppCard app={app} variant="grid" />
          </div>
        ))}
      </div>
    </div>
  );
}
