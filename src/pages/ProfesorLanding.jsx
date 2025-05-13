import React from 'react';

const ProfesorLanding = () => {
  // Datos personales simulados (reemplazar con props o datos reales en el futuro)
  const datosPersonales = {
    nombre: 'Juan Pérez',
    email: 'profesor@club.com',
    especialidad: 'Educación Física',
  };

  const handleCerrarSesion = () => {
    // Lógica de cierre de sesión
    console.log('Cerrando sesión...');
    // Redireccionar, limpiar tokens, etc.
  };

  return (
    <section style={{ padding: '20px' }}>
      <h1>Bienvenido, Profesor</h1>
      <p>Esta es tu página de inicio personalizada.</p>

      <div style={{ marginTop: '20px' }}>
        <h2>Datos Personales</h2>
        <ul>
          <li><strong>Nombre:</strong> {datosPersonales.nombre}</li>
          <li><strong>Email:</strong> {datosPersonales.email}</li>
          <li><strong>Especialidad:</strong> {datosPersonales.especialidad}</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Accesos Directos</h2>
        <ul>
          <li><a href="/programar-clase">Programar eventos/clases</a></li>
          <li><a href="/mis-clases">Mis clases</a></li>
          <li><a href="/editar-perfil">Edición de perfil</a></li>
          <li><button onClick={handleCerrarSesion}>Cerrar sesión</button></li>
        </ul>
      </div>
    </section>
  );
};

export default ProfesorLanding;
