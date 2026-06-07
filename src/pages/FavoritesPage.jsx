import { Heart } from 'lucide-react';
import './FavoritesPage.css';

export default function FavoritesPage() {
  return (
    <div className="favorites-page">
      <div className="favorites-hero">
        <h1>Favoritos</h1>
        <p>Tus apps guardadas</p>
      </div>
      <div className="favorites-empty">
        <Heart size={56} strokeWidth={1.5} color="var(--ps-blue)" />
        <p className="fav-empty-title">Aún no tienes favoritos</p>
        <p className="fav-empty-sub">Pulsa el corazón en cualquier app para guardarla aquí</p>
      </div>
    </div>
  );
}
