// src/pages/AdminLanding.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLanding = () => {
  const navigate = useNavigate();
  const [socios, setSocios] = useState([]);
  const [error, setError] = useState(false);

  // Simular carga de datos (mock) con posibilidad de error
  useEffect(() => {
    try {
      // Simulamos una carga exitosa de datos
      const datosMock = [
        {
          nombre: 'Juan Pérez',
          categoria: 'Premium',
          actividades: ['Rugby', 'Gimnasio'],
          costo: '$8.000',
          estado: 'Activo',
        },
        {
          nombre: 'María Gómez',
          categoria: 'Básica',
          actividades: ['Yoga'],
          costo: '$4.000',
          estado: 'Inactivo',
        },
      ];

      // Simular error si quisieras probar: setError(true);
      setSocios(datosMock);
    } catch (e) {
      setError(true);
    }
  }, []);

  const manejarCerrarError = () => {
    setError(false);
    navigate('/home');
  };

  return (
    <section style={{ padding: '1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <button onClick={() => navigate('/')}>🏠 Inicio</button>
        <button onClick={() => navigate('/perfil')}>👤 Perfil</button>
      </header>

      <h1>Panel de Administración</h1>

      {error ? (
        <div style={{ backgroundColor: '#fee', padding: '1rem', border: '1px solid red' }}>
          <p>Ocurrió un problema. Intente nuevamente más tarde.</p>
          <button onClick={manejarCerrarError}>Aceptar</button>
        </div>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', marginTop: '1rem' }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Actividades</th>
              <th>Costo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {socios.map((socio, index) => (
              <tr key={index}>
                <td>{socio.nombre}</td>
                <td>{socio.categoria}</td>
                <td>{socio.actividades.join(', ')}</td>
                <td>{socio.costo}</td>
                <td>{socio.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default AdminLanding;
