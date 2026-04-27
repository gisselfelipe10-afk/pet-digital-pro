import React from 'react';

export default function Login({ onLoginSuccess }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <p style={{fontSize: '0.9rem', marginBottom: '5px'}}>PetDigital PRO 🐾</p>
        <h2 style={{marginBottom: '20px'}}>Iniciar Sesión</h2>
        <input type="email" placeholder="gisselfelipe10@gmail.com" />
        <input type="password" placeholder="••••" />
        <button className="btn-entrar" onClick={() => onLoginSuccess({name: 'Gissel'})}>ENTRAR</button>
        <p style={{fontSize: '0.8rem', marginTop: '15px', color: '#666'}}>¿Eres nuevo? Regístrate aquí</p>
      </div>
    </div>
  );
}