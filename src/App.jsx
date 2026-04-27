import { useState } from 'react';
import Login from './Login';
import PerfilMascota from './PerfilMascota';
import Alimentacion from './Alimentacion';
import Cartilla from './Cartilla';
import Localizador from './Localizador'; 
import './App.css';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [tab, setTab] = useState('inicio');

  if (!usuario) return <Login onLoginSuccess={(u) => setUsuario(u)} />;

  return (
    <div className="app-container">
      <nav className="top-nav">
        <div style={{ fontWeight: 'bold', color: '#1e3a8a' }}>PetDigital PRO 🐾</div>
        
        <div className="nav-tabs">
          <button 
            className={tab === 'inicio' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setTab('inicio')}
          >
            Inicio 🏠
          </button>
          
          <button 
            className={tab === 'alimentos' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setTab('alimentos')}
          >
            Alimentación 🍎
          </button>

          <button 
            className={tab === 'localizador' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setTab('localizador')}
          >
            Rastreo 🛰️
          </button>
          
          <button 
            className={tab === 'cartilla' ? 'tab-btn active' : 'tab-btn'} 
            onClick={() => setTab('cartilla')}
          >
            Cartilla 📋
          </button>
        </div>
        
        <button onClick={() => setUsuario(null)} className="tab-btn-exit">Salir</button>
      </nav>

      <main className="content-area">
        {tab === 'inicio' && <PerfilMascota />}
        {tab === 'alimentos' && <Alimentacion />}
        {tab === 'cartilla' && <Cartilla />}
        {/* Eliminamos la condición del mapa que causaba el error */}
        {tab === 'localizador' && <Localizador />}
      </main>
    </div>
  );
}