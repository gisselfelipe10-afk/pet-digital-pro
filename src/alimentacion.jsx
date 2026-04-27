import React, { useState } from 'react';

const dogFoodDatabase = [
  { id: 1, nombre: "Manzana", grupo: "Frutas", estado: "seguro", nota: "Sin semillas ni corazón. Fibra y vitamina C." },
  { id: 2, nombre: "Sandia", grupo: "Frutas", estado: "seguro", nota: "Sin semillas ni cáscara. Muy hidratante." },
  { id: 3, nombre: "Melon", grupo: "Frutas", estado: "seguro", nota: "Vitamina A y B; quitar semillas siempre." },
  { id: 4, nombre: "Arandanos", grupo: "Frutas", estado: "seguro", nota: "Antioxidantes; excelentes como premios." },
  { id: 5, nombre: "Fresas", grupo: "Frutas", estado: "seguro", nota: "Vitamina C y fibra; dar con moderación." },
  { id: 6, nombre: "Pera", grupo: "Frutas", estado: "seguro", nota: "Sin semillas; muy digestiva." },
  { id: 7, nombre: "Platano", grupo: "Frutas", estado: "moderado", nota: "Alto en potasio pero mucha azúcar." },
  { id: 8, nombre: "Mango", grupo: "Frutas", estado: "moderado", nota: "Sin el hueso central." },
  { id: 9, nombre: "Papaya", grupo: "Frutas", estado: "moderado", nota: "Ayuda a la digestión; sin semillas." },
  { id: 10, nombre: "Piña", grupo: "Frutas", estado: "moderado", nota: "Solo pulpa, en trozos pequeños." },
  { id: 11, nombre: "Frambuesas", grupo: "Frutas", estado: "moderado", nota: "Máximo 2 o 3 por ración." },
  { id: 12, nombre: "Moras", grupo: "Frutas", estado: "seguro", nota: "Bajas en azúcar." },
  { id: 13, nombre: "Kiwi", grupo: "Frutas", estado: "seguro", nota: "Sin piel. Mucha vitamina C." },
  { id: 14, nombre: "Durazno", grupo: "Frutas", estado: "moderado", nota: "Sin el hueso (cianuro)." },
  { id: 15, nombre: "Guayaba", grupo: "Frutas", estado: "moderado", nota: "Quitar semillas duras." },
  { id: 16, nombre: "Naranja", grupo: "Frutas", estado: "moderado", nota: "Sin cáscara ni semillas." },
  { id: 17, nombre: "Uvas", grupo: "Frutas", estado: "prohibido", nota: "TÓXICO. Causa insuficiencia renal." },
  { id: 18, nombre: "Pasas", grupo: "Frutas", estado: "prohibido", nota: "TÓXICO. Concentración mortal." },
  { id: 19, nombre: "Aguacate", grupo: "Frutas", estado: "prohibido", nota: "Causa vómito y pancreatitis." },
  { id: 20, nombre: "Cerezas", grupo: "Frutas", estado: "prohibido", nota: "Hueso y planta tóxicos." },
  { id: 21, nombre: "Zanahoria", grupo: "Verduras", estado: "seguro", nota: "Limpia dientes y aporta vitamina A." },
  { id: 22, nombre: "Calabacita", grupo: "Verduras", estado: "seguro", nota: "Ideal para control de peso." },
  { id: 23, nombre: "Brocoli", grupo: "Verduras", estado: "seguro", nota: "Dar poco para evitar gases." },
  { id: 24, nombre: "Espinacas", grupo: "Verduras", estado: "seguro", nota: "Hierro; dar siempre cocidas." },
  { id: 25, nombre: "Chayote", grupo: "Verduras", estado: "seguro", nota: "Cocido y sin espinas." },
  { id: 26, nombre: "Ejotes", grupo: "Verduras", estado: "seguro", nota: "Bajos en calorías." },
  { id: 27, nombre: "Pepino", grupo: "Verduras", estado: "seguro", nota: "Muy refrescante." },
  { id: 28, nombre: "Apio", grupo: "Verduras", estado: "seguro", nota: "Refresca el aliento." },
  { id: 29, nombre: "Jicama", grupo: "Verduras", estado: "seguro", nota: "Sin cáscara." },
  { id: 30, nombre: "Coliflor", grupo: "Verduras", estado: "seguro", nota: "Porciones pequeñas." },
  { id: 31, nombre: "Betabel", grupo: "Verduras", estado: "moderado", nota: "Contiene mucha azúcar." },
  { id: 32, nombre: "Esparragos", grupo: "Verduras", estado: "seguro", nota: "Mejor cocidos." },
  { id: 33, nombre: "Cebolla", grupo: "Verduras", estado: "prohibido", nota: "TÓXICO. Destruye la sangre." },
  { id: 34, nombre: "Ajo", grupo: "Verduras", estado: "prohibido", nota: "TÓXICO. Muy peligroso." },
  { id: 35, nombre: "Poro", grupo: "Verduras", estado: "prohibido", nota: "Altamente tóxico." },
  { id: 36, nombre: "Cebollin", grupo: "Verduras", estado: "prohibido", nota: "Daño oxidativo." },
  { id: 37, nombre: "Tomate Verde", grupo: "Verduras", estado: "prohibido", nota: "Contiene solanina." },
  { id: 38, nombre: "Hongos", grupo: "Verduras", estado: "prohibido", nota: "Evitar todas las especies." },
  { id: 39, nombre: "Chile", grupo: "Verduras", estado: "prohibido", nota: "Irrita el sistema digestivo." },
  { id: 40, nombre: "Berenjena", grupo: "Verduras", estado: "moderado", nota: "Solo cocida." },
  { id: 41, nombre: "Arroz Blanco", grupo: "Cereales", estado: "seguro", nota: "Ideal para estómagos sensibles." },
  { id: 42, nombre: "Avena", grupo: "Cereales", estado: "seguro", nota: "Cocer con agua, no leche." },
  { id: 43, nombre: "Amaranto", grupo: "Cereales", estado: "seguro", nota: "Sin miel ni azúcar." },
  { id: 44, nombre: "Quinoa", grupo: "Cereales", estado: "seguro", nota: "Lavar muy bien antes de cocer." },
  { id: 45, nombre: "Camote", grupo: "Tubérculos", estado: "seguro", nota: "Cocido es excelente energía." },
  { id: 46, nombre: "Arroz Integral", grupo: "Cereales", estado: "moderado", nota: "Mucha fibra." },
  { id: 47, nombre: "Papa Cocida", grupo: "Tubérculos", estado: "moderado", nota: "Sin sal ni condimentos." },
  { id: 48, nombre: "Tortilla", grupo: "Cereales", estado: "moderado", nota: "En trozos pequeños." },
  { id: 49, nombre: "Pan Integral", grupo: "Cereales", estado: "moderado", nota: "Sin semillas ni pasas." },
  { id: 50, nombre: "Pasta", grupo: "Cereales", estado: "moderado", nota: "Simple, sin salsas." },
  { id: 51, nombre: "Masa Cruda", grupo: "Cereales", estado: "prohibido", nota: "MORTAL. Produce alcohol en el estómago." },
  { id: 52, nombre: "Papa Cruda", grupo: "Tubérculos", estado: "prohibido", nota: "Contiene solanina tóxica." },
  { id: 53, nombre: "Cereal Dulce", grupo: "Cereales", estado: "prohibido", nota: "Azúcar y químicos." },
  { id: 54, nombre: "Galletas", grupo: "Cereales", estado: "prohibido", nota: "Grasas y azúcares." },
  { id: 55, nombre: "Yuca", grupo: "Tubérculos", estado: "moderado", nota: "Siempre muy bien cocida." },
  { id: 56, nombre: "Pollo", grupo: "Proteina", estado: "seguro", nota: "Sin piel ni huesos cocidos." },
  { id: 57, nombre: "Res Magra", grupo: "Proteina", estado: "seguro", nota: "Cortes con poca grasa." },
  { id: 58, nombre: "Pescado Blanco", grupo: "Proteina", estado: "seguro", nota: "Sin espinas." },
  { id: 59, nombre: "Huevo Cocido", grupo: "Proteina", estado: "seguro", nota: "Evitar huevo crudo." },
  { id: 60, nombre: "Lentejas", grupo: "Leguminosas", estado: "seguro", nota: "Bien cocidas y sin sal." },
  { id: 61, nombre: "Chicharos", grupo: "Leguminosas", estado: "seguro", nota: "Premios nutritivos." },
  { id: 62, nombre: "Pavo", grupo: "Proteina", estado: "seguro", nota: "Magra y saludable." },
  { id: 63, nombre: "Salmon", grupo: "Proteina", estado: "seguro", nota: "Cocido; Omega 3." },
  { id: 64, nombre: "Frijoles", grupo: "Leguminosas", estado: "moderado", nota: "Pueden causar gases." },
  { id: 65, nombre: "Garbanzos", grupo: "Leguminosas", estado: "moderado", nota: "Altos en fibra." },
  { id: 66, nombre: "Higado", grupo: "Proteina", estado: "moderado", nota: "Nutritivo pero poco frecuente." },
  { id: 67, nombre: "Atun", grupo: "Proteina", estado: "moderado", nota: "En agua y bien escurrido." },
  { id: 68, nombre: "Queso Panela", grupo: "Lacteo", estado: "moderado", nota: "Bajo en sal." },
  { id: 69, nombre: "Yogurt Natural", grupo: "Lacteo", estado: "moderado", nota: "Sin azúcar." },
  { id: 70, nombre: "Huesos Cocidos", grupo: "Proteina", estado: "prohibido", nota: "MORTAL. Se astillan." },
  { id: 71, nombre: "Salchichas", grupo: "Proteina", estado: "prohibido", nota: "Mucho sodio." },
  { id: 72, nombre: "Tocino", grupo: "Proteina", estado: "prohibido", nota: "Grasa extrema." },
  { id: 73, nombre: "Chorizo", grupo: "Proteina", estado: "prohibido", nota: "Condimentos peligrosos." },
  { id: 74, nombre: "Mariscos", grupo: "Proteina", estado: "prohibido", nota: "Riesgo de alergias." },
  { id: 75, nombre: "Jamon", grupo: "Proteina", estado: "prohibido", nota: "Demasiada sal." },
  { id: 76, nombre: "Aceite de Coco", grupo: "Extras", estado: "seguro", nota: "Bueno para el pelo." },
  { id: 77, nombre: "Curcuma", grupo: "Extras", estado: "seguro", nota: "Antioxidante natural." },
  { id: 78, nombre: "Kefir", grupo: "Extras", estado: "seguro", nota: "Probiótico potente." },
  { id: 79, nombre: "Semillas de Chia", grupo: "Extras", estado: "seguro", nota: "Hidratar antes de dar." },
  { id: 80, nombre: "Miel", grupo: "Extras", estado: "moderado", nota: "Solo una gota." },
  { id: 81, nombre: "Canela", grupo: "Extras", estado: "moderado", nota: "No tóxica, pero irrita." },
  { id: 82, nombre: "Palomitas", grupo: "Extras", estado: "moderado", nota: "Naturales sin sal." },
  { id: 83, nombre: "Queso Cottage", grupo: "Lacteo", estado: "moderado", nota: "Ligero y nutritivo." },
  { id: 84, nombre: "Chocolate", grupo: "Toxicos", estado: "prohibido", nota: "MORTAL. Daña el corazón." },
  { id: 85, nombre: "Xilitol", grupo: "Toxicos", estado: "prohibido", nota: "MORTAL. En chicles." },
  { id: 86, nombre: "Cafe", grupo: "Toxicos", estado: "prohibido", nota: "Taquicardias graves." },
  { id: 87, nombre: "Alcohol", grupo: "Toxicos", estado: "prohibido", nota: "Falla hepática." },
  { id: 88, nombre: "Nuez Macadamia", grupo: "Toxicos", estado: "prohibido", nota: "Causa parálisis." },
  { id: 89, nombre: "Nuez Moscada", grupo: "Toxicos", estado: "prohibido", nota: "Convulsiones." },
  { id: 90, nombre: "Pistaches", grupo: "Toxicos", estado: "prohibido", nota: "Grasa y moho." },
  { id: 91, nombre: "Sal", grupo: "Toxicos", estado: "prohibido", nota: "Daño renal por sodio." },
  { id: 92, nombre: "Leche", grupo: "Lacteo", estado: "moderado", nota: "Diarrea frecuente." },
  { id: 93, nombre: "Helado", grupo: "Dulces", estado: "prohibido", nota: "Azúcar y lácteos." },
  { id: 94, nombre: "Gomitas", grupo: "Dulces", estado: "prohibido", nota: "Químicos innecesarios." },
  { id: 95, nombre: "Vinagre de Manzana", grupo: "Extras", estado: "seguro", nota: "Brillo en el pelo." }
];

export default function Alimentacion() {
  const [busqueda, setBusqueda] = useState('');

  const normalizar = (texto) => {
    if (!texto) return "";
    return texto
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); 
  };

  const getStatusStyle = (estado) => {
    switch (estado) {
      case 'seguro': return { label: 'SEGURO ✅', color: '#059669', bg: '#ecfdf5', border: '#10b981' };
      case 'moderado': return { label: 'MODERADO ⚠️', color: '#d97706', bg: '#fffbeb', border: '#f59e0b' };
      case 'prohibido': return { label: 'PELIGRO ❌', color: '#dc2626', bg: '#fef2f2', border: '#ef4444' };
      default: return { label: 'INFO', color: '#6b7280', bg: '#f3f4f6', border: '#9ca3af' };
    }
  };

  // --- EL NUEVO FILTRO MULTIUSOS ---
  const resultados = dogFoodDatabase.filter(food => {
    const terminoNormalizado = normalizar(busqueda);
    
    // Truco: si busca en plural (ej. "manzanas"), quitamos la "s" para que encuentre "manzana"
    let terminoSingular = terminoNormalizado;
    if (terminoNormalizado.endsWith('s')) {
      terminoSingular = terminoNormalizado.slice(0, -1);
    }

    // Unimos TODOS los campos en un solo texto gigante para que busque por todas partes
    const textoCompleto = normalizar(`${food.nombre} ${food.grupo} ${food.estado} ${food.nota}`);
    
    // Validamos si la búsqueda exacta o en singular existe en todo el bloque
    return textoCompleto.includes(terminoNormalizado) || textoCompleto.includes(terminoSingular);
  });

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e3a8a' }}>PetDigital PRO</h2>
        <input
          type="text"
          placeholder="Busca alimentos, grupos o palabras clave..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ccc', outline: 'none' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {resultados.length > 0 ? (
          resultados.map(item => {
            const style = getStatusStyle(item.estado);
            return (
              <div key={item.id} style={{ backgroundColor: '#fff', padding: '12px', borderRadius: '10px', borderLeft: `6px solid ${style.border}`, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h4 style={{ margin: 0 }}>{item.nombre}</h4>
                  <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: style.color, backgroundColor: style.bg, padding: '2px 8px', borderRadius: '10px' }}>{style.label}</span>
                </div>
                <p style={{ fontSize: '0.8rem', margin: '5px 0 0', color: '#666' }}>{item.nota}</p>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No se encontraron coincidencias.</p>
        )}
      </div>
    </div>
  );
}