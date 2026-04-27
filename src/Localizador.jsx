import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- CONFIGURACIÓN DE ICONOS (ESTILO GOOGLE MAPS) ---
const crearIconoMascota = (color) => new L.DivIcon({
  html: `<div style="background-color: ${color}; width: 35px; height: 35px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
           <span style="transform: rotate(45deg); font-size: 16px;">🐶</span>
         </div>`,
  className: '',
  iconSize: [35, 35],
  iconAnchor: [17, 35]
});

// --- TU "EXCEL" DE MASCOTAS (DATOS) ---
const misMascotas = [
  {
    id: 1,
    nombre: "Dino",
    status: "En casa",
    distancia: "0 km",
    lat: 19.4174, 
    lng: -99.0454,
    color: "#4285F4", // Azul
    imagen: "https://placedog.net/100/100?id=1"
  },
  {
    id: 2,
    nombre: "Luna",
    status: "PERDIDA 🚨",
    distancia: "1.2 km",
    lat: 19.4250,
    lng: -99.0320,
    color: "#EA4335", // Rojo alerta
    imagen: "https://placedog.net/100/100?id=5"
  }
];

export default function Localizador() {
  const [center] = useState([19.4174, -99.0454]);

  return (
    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', padding: '15px', paddingBottom: '80px' }}>
      
      {/* 1. BUSCADOR (Igual que Alimentación para que combine) */}
      <div className="profile-card" style={{ padding: '25px', marginBottom: '15px', textAlign: 'center' }}>
        <h3 style={{ color: '#1e3a8a', marginBottom: '10px' }}>🛰️ Localizador GPS</h3>
        <input
          type="text"
          placeholder="Busca el nombre de tu mascota..."
          style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #333' }}
        />
      </div>

      {/* 2. EL MAPA DE RASTREO */}
      <div style={{ height: '300px', marginBottom: '20px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #ddd' }}>
        <MapContainer center={center} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {misMascotas.map(pet => (
            <Marker key={pet.id} position={[pet.lat, pet.lng]} icon={crearIconoMascota(pet.color)}>
              <Popup><strong>{pet.nombre}</strong><br/>{pet.status}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* 3. LISTA DE ESTADOS (Estilo social) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {misMascotas.map(pet => (
          <div key={pet.id} className="profile-card" style={{ display: 'flex', padding: '15px', alignItems: 'center', gap: '15px', textAlign: 'left' }}>
            <img src={pet.imagen} alt="dog" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong style={{ color: '#1e3a8a' }}>{pet.nombre}</strong>
                <span style={{ fontSize: '0.7rem', color: pet.color, fontWeight: 'bold' }}>{pet.status}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#666', margin: '5px 0' }}>📍 {pet.distancia} lejos de ti</p>
            </div>
            <button style={{ background: pet.color, color: 'white', border: 'none', padding: '6px 12px', borderRadius: '15px', fontSize: '0.7rem' }}>
              {pet.status === "En casa" ? "Rastrear" : "Reportar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}