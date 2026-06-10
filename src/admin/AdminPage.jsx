import { useState, useEffect } from 'react';
import { auth } from '../../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

export default function AdminPage() {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => setUser(u));
    return unsub;
  }, []);

  if (user === undefined) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', color: 'var(--text-secondary)' }}>
      Cargando...
    </div>
  );

  if (!user) return <AdminLogin onLogin={() => {}} />;

  return <AdminPanel />;
}
