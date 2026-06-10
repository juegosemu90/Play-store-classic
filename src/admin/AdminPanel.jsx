import { useState, useEffect } from 'react';
import { db, auth } from '../../firebase/config';
import {
  collection, addDoc, getDocs, deleteDoc, doc, updateDoc, orderBy, query
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import './Admin.css';

const EMPTY_FORM = {
  name: '', version: '', developer: '', iconUrl: '',
  downloadUrl: '', size: '', price: 'Gratis',
  screenshot1: '', screenshot2: '', screenshot3: '',
  banner: '', category: 'games',
};

export default function AdminPanel() {
  const [apps, setApps] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('list'); // 'list' | 'add'
  const [search, setSearch] = useState('');

  const fetchApps = async () => {
    const q = query(collection(db, 'apps'), orderBy('name'));
    const snap = await getDocs(q);
    setApps(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => { fetchApps(); }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ...form,
      screenshots: [form.screenshot1, form.screenshot2, form.screenshot3].filter(Boolean),
      updatedAt: new Date().toISOString(),
    };
    try {
      if (editing) {
        await updateDoc(doc(db, 'apps', editing), data);
      } else {
        await addDoc(collection(db, 'apps'), data);
      }
      setForm(EMPTY_FORM);
      setEditing(null);
      setTab('list');
      await fetchApps();
    } catch (err) {
      alert('Error: ' + err.message);
    }
    setLoading(false);
  };

  const handleEdit = (app) => {
    setForm({
      name: app.name || '',
      version: app.version || '',
      developer: app.developer || '',
      iconUrl: app.iconUrl || '',
      downloadUrl: app.downloadUrl || '',
      size: app.size || '',
      price: app.price || 'Gratis',
      screenshot1: app.screenshots?.[0] || '',
      screenshot2: app.screenshots?.[1] || '',
      screenshot3: app.screenshots?.[2] || '',
      banner: app.banner || '',
      category: app.category || 'games',
    });
    setEditing(app.id);
    setTab('add');
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar esta app?')) return;
    await deleteDoc(doc(db, 'apps', id));
    await fetchApps();
  };

  const handleLogout = () => signOut(auth);

  const filtered = apps.filter(a =>
    a.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-panel">
      {/* Header */}
      <div className="admin-header">
        <h1 className="admin-title">Angrybirds Store — Admin</h1>
        <button className="admin-btn danger sm" onClick={handleLogout}>Salir</button>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button className={`admin-tab ${tab === 'list' ? 'active' : ''}`} onClick={() => { setTab('list'); setEditing(null); setForm(EMPTY_FORM); }}>
          📋 Apps ({apps.length})
        </button>
        <button className={`admin-tab ${tab === 'add' ? 'active' : ''}`} onClick={() => setTab('add')}>
          {editing ? '✏️ Editar' : '➕ Añadir'}
        </button>
      </div>

      {/* Lista */}
      {tab === 'list' && (
        <div className="admin-list-section">
          <input
            className="admin-input"
            placeholder="Buscar app..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="admin-app-list">
            {filtered.length === 0 && <p className="admin-empty">No hay apps aún</p>}
            {filtered.map(app => (
              <div key={app.id} className="admin-app-item">
                {app.iconUrl
                  ? <img src={app.iconUrl} alt="" className="admin-app-icon" onError={e => e.target.style.display='none'} />
                  : <div className="admin-app-icon-placeholder">?</div>
                }
                <div className="admin-app-info">
                  <p className="admin-app-name">{app.name || '(sin nombre)'}</p>
                  <p className="admin-app-meta">{app.version} · {app.size} · {app.price}</p>
                </div>
                <div className="admin-app-actions">
                  <button className="admin-btn sm" onClick={() => handleEdit(app)}>Editar</button>
                  <button className="admin-btn danger sm" onClick={() => handleDelete(app.id)}>Borrar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formulario */}
      {tab === 'add' && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label>Nombre de la app</label>
            <input name="name" className="admin-input" placeholder="Ej: Angry Birds (1.0.0)" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Versión</label>
              <input name="version" className="admin-input" placeholder="1.0.0" value={form.version} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tamaño</label>
              <input name="size" className="admin-input" placeholder="25 MB" value={form.size} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label>Desarrollador</label>
            <input name="developer" className="admin-input" placeholder="Rovio Entertainment" value={form.developer} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Link del icono</label>
            <input name="iconUrl" className="admin-input" placeholder="https://..." value={form.iconUrl} onChange={handleChange} />
            {form.iconUrl && <img src={form.iconUrl} alt="preview" className="icon-preview" onError={e => e.target.style.display='none'} />}
          </div>
          <div className="form-group">
            <label>Link de descarga</label>
            <input name="downloadUrl" className="admin-input" placeholder="https://..." value={form.downloadUrl} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Banner (link)</label>
            <input name="banner" className="admin-input" placeholder="https://..." value={form.banner} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gameplay 1</label>
            <input name="screenshot1" className="admin-input" placeholder="https://..." value={form.screenshot1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gameplay 2</label>
            <input name="screenshot2" className="admin-input" placeholder="https://..." value={form.screenshot2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Gameplay 3</label>
            <input name="screenshot3" className="admin-input" placeholder="https://..." value={form.screenshot3} onChange={handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Precio</label>
              <select name="price" className="admin-input" value={form.price} onChange={handleChange}>
                <option>Gratis</option>
                <option>$0.99</option>
                <option>$1.99</option>
              </select>
            </div>
            <div className="form-group">
              <label>Categoría</label>
              <select name="category" className="admin-input" value={form.category} onChange={handleChange}>
                <option value="games">Juegos</option>
                <option value="tools">Herramientas</option>
                <option value="entertainment">Entretenimiento</option>
              </select>
            </div>
          </div>
          <div className="form-buttons">
            <button type="submit" className="admin-btn primary" disabled={loading}>
              {loading ? 'Guardando...' : editing ? 'Guardar cambios' : 'Añadir app'}
            </button>
            {editing && (
              <button type="button" className="admin-btn" onClick={() => { setEditing(null); setForm(EMPTY_FORM); setTab('list'); }}>
                Cancelar
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
