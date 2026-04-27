import React, { useState, useRef, useEffect } from 'react';

export default function PerfilMascota() {
  const [editando, setEditando] = useState(false);
  
  // 1. CARGAR DATOS: Al iniciar, busca si hay algo guardado en el navegador
  const [petData, setPetData] = useState(() => {
    const datosGuardados = localStorage.getItem('petData_Dino');
    return datosGuardados ? JSON.parse(datosGuardados) : {
      nombre: "Dino",
      especie: "Perro",
      raza: "Puddle maltes",
      edad: "11 años",
      peso: "4.5 kg",
      foto: null
    };
  });

  const fileInputRef = useRef(null);

  // 2. GUARDAR DATOS: Cada vez que petData cambie, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem('petData_Dino', JSON.stringify(petData));
  }, [petData]);

  const handleToggleEdit = () => {
    setEditando(!editando);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPetData({ ...petData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-card">
      <div className="profile-header-blue">
        <button className="btn-editar-perfil" onClick={handleToggleEdit}>
          {editando ? "Guardar" : "Editar"}
        </button>
        
        <div 
          className="avatar-circle" 
          onClick={() => fileInputRef.current.click()}
          style={{ cursor: 'pointer' }}
        >
          {petData.foto ? (
            <img src={petData.foto} alt="Mascota" />
          ) : (
            <div style={{ color: 'white', marginTop: '45px', fontSize: '0.8rem' }}>📷</div>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
            accept="image/*"
          />
        </div>
      </div>
      
      <div className="info-section">
        <h3 style={{marginBottom: '15px', color: '#1e3a8a'}}>
          {editando ? "Editando Perfil" : `Información de ${petData.nombre}`}
        </h3>
        
        <div className="info-grid">
          {['nombre', 'especie', 'raza', 'edad', 'peso'].map((campo) => (
            <div className="info-row" key={campo}>
              <label style={{textTransform: 'capitalize'}}>{campo}</label>
              {editando ? (
                <input 
                  name={campo} 
                  value={petData[campo]} 
                  onChange={handleChange} 
                  className="edit-input" 
                />
              ) : (
                <span>{petData[campo]}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}