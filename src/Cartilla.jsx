import React, { useState, useEffect } from 'react';

export default function Cartilla() {
  // 1. Estados para todas las secciones
  const [vacunas, setVacunas] = useState(() => {
    const save = localStorage.getItem('vacunas_dino');
    return save ? JSON.parse(save) : [{ fecha: '', peso: '', vacuna: '', proximo: '' }];
  });

  const [desparasitaciones, setDesparasitaciones] = useState(() => {
    const save = localStorage.getItem('despara_dino');
    return save ? JSON.parse(save) : [{ fecha: '', peso: '', vacuna: '', proximo: '' }];
  });

  const [pulgas, setPulgas] = useState(() => {
    const save = localStorage.getItem('pulgas_dino');
    return save ? JSON.parse(save) : [{ fecha: '', peso: '', vacuna: '', proximo: '' }];
  });

  // NUEVO: Estado para Consultas Veterinarias
  const [consultas, setConsultas] = useState(() => {
    const save = localStorage.getItem('consultas_dino');
    return save ? JSON.parse(save) : [{ fecha: '', motivo: '', diagnostico: '', tratamiento: '', veterinario: '' }];
  });

  // 2. Persistencia Total
  useEffect(() => {
    localStorage.setItem('vacunas_dino', JSON.stringify(vacunas));
    localStorage.setItem('despara_dino', JSON.stringify(desparasitaciones));
    localStorage.setItem('pulgas_dino', JSON.stringify(pulgas));
    localStorage.setItem('consultas_dino', JSON.stringify(consultas));
  }, [vacunas, desparasitaciones, pulgas, consultas]);

  const agregarFila = (tipo) => {
    if (tipo === 'v') setVacunas([...vacunas, { fecha: '', peso: '', vacuna: '', proximo: '' }]);
    if (tipo === 'd') setDesparasitaciones([...desparasitaciones, { fecha: '', peso: '', vacuna: '', proximo: '' }]);
    if (tipo === 'p') setPulgas([...pulgas, { fecha: '', peso: '', vacuna: '', proximo: '' }]);
    if (tipo === 'c') setConsultas([...consultas, { fecha: '', motivo: '', diagnostico: '', tratamiento: '', veterinario: '' }]);
  };

  const manejarCambio = (tipo, index, campo, valor) => {
    let lista;
    if (tipo === 'v') { lista = [...vacunas]; setVacunas(lista); }
    else if (tipo === 'd') { lista = [...desparasitaciones]; setDesparasitaciones(lista); }
    else if (tipo === 'p') { lista = [...pulgas]; setPulgas(lista); }
    else if (tipo === 'c') { lista = [...consultas]; setConsultas(lista); }
    lista[index][campo] = valor;
  };

  // Componente de Tabla Estándar
  const TablaRegistro = ({ titulo, datos, tipo, icono, color, columnas }) => (
    <div className="profile-card" style={{ padding: '20px', marginBottom: '20px', width: '100%', borderTop: `5px solid ${color}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ color: '#1e3a8a', margin: 0 }}>{icono} {titulo}</h3>
        <button onClick={() => agregarFila(tipo)} className="tab-btn" style={{ fontSize: '0.8rem', padding: '5px 15px', backgroundColor: color, color: 'white' }}>+ Nuevo Registro</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${color}`, color: color }}>
              {columnas.map(col => <th key={col} style={{ padding: '10px', textAlign: 'left', textTransform: 'uppercase' }}>{col}</th>)}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                {Object.keys(fila).map(key => (
                  <td key={key}>
                    <input 
                      type={key === 'fecha' || key === 'proximo' ? 'date' : 'text'} 
                      value={fila[key]} 
                      onChange={(e) => manejarCambio(tipo, i, key, e.target.value)} 
                      style={{ border: 'none', width: '100%', background: 'transparent', padding: '5px' }} 
                      placeholder="..."
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div style={{ width: '100%', maxWidth: '900px', paddingBottom: '50px' }}>
      <TablaRegistro 
        titulo="Registro de Vacunas" datos={vacunas} tipo="v" icono="💉" color="#3b82f6" 
        columnas={['Fecha', 'Peso', 'Vacuna', 'Próx. Control']} 
      />
      <TablaRegistro 
        titulo="Desparasitaciones Internas" datos={desparasitaciones} tipo="d" icono="💊" color="#8b5cf6" 
        columnas={['Fecha', 'Peso', 'Producto', 'Próx. Control']} 
      />
      <TablaRegistro 
        titulo="Control de Pulgas y Garrapatas" datos={pulgas} tipo="p" icono="🕷️" color="#ef4444" 
        columnas={['Fecha', 'Peso', 'Producto', 'Próx. Control']} 
      />
      
      {/* NUEVA SECCIÓN: CONSULTAS VETERINARIAS */}
      <TablaRegistro 
        titulo="Historial de Consultas Médicas" datos={consultas} tipo="c" icono="🏥" color="#10b981" 
        columnas={['Fecha', 'Motivo de Consulta', 'Diagnóstico', 'Tratamiento', 'Veterinario']} 
      />
    </div>
  );
}