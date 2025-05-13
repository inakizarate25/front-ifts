import React, { useEffect, useState } from 'react';

const SocioLanding = () => {
  const perfilInicial = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nroSocio: 'A12345',
    dni: '30123456',
    nacimiento: '1990-06-15',
    direccion: 'Av. Siempreviva 123',
    telefono: '+54 9 11 5555 5555',
    correo: 'juan.perez@email.com',
    estadoCuota: 'Al día'
  };

  const [perfil, setPerfil] = useState(perfilInicial);
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  // Cargar datos desde localStorage si existen
  useEffect(() => {
    const guardado = localStorage.getItem('perfilSocio');
    if (guardado) {
      setPerfil(JSON.parse(guardado));
    }
  }, []);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const validarPerfil = () => {
    if (
      !perfil.nombre || !perfil.apellido || !perfil.dni ||
      !perfil.nacimiento || !perfil.direccion ||
      !perfil.telefono || !perfil.correo
    ) {
      setError('Todos los campos deben completarse.');
      return false;
    }

    const correoValido = /\S+@\S+\.\S+/.test(perfil.correo);
    if (!correoValido) {
      setError('El correo electrónico no es válido.');
      return false;
    }

    return true;
  };

  const guardarCambios = () => {
    if (!validarPerfil()) return;

    try {
      localStorage.setItem('perfilSocio', JSON.stringify(perfil));
      setMensaje('Perfil actualizado correctamente.');
      setError('');
      setEditando(false);
    } catch (e) {
      setError('No se pudieron guardar los cambios. Inténtalo nuevamente.');
    }
  };

  return (
    <section style={{ padding: '1rem' }}>
      <h1>Mi Perfil</h1>

      {mensaje && <div style={{ backgroundColor: '#d4edda', padding: '0.5rem', marginBottom: '1rem' }}>{mensaje}</div>}
      {error && <div style={{ backgroundColor: '#f8d7da', padding: '0.5rem', marginBottom: '1rem' }}>{error}</div>}

      {!editando ? (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Nombre y Apellido:</strong> {perfil.nombre} {perfil.apellido}</p>
          <p><strong>N° de Socio:</strong> {perfil.nroSocio}</p>
          <p><strong>DNI:</strong> {perfil.dni}</p>
          <p><strong>Fecha de Nacimiento:</strong> {perfil.nacimiento}</p>
          <p><strong>Dirección:</strong> {perfil.direccion}</p>
          <p><strong>Teléfono de contacto:</strong> {perfil.telefono}</p>
          <p><strong>Correo Electrónico:</strong> {perfil.correo}</p>
          <p><strong>Estado de Cuota:</strong> {perfil.estadoCuota}</p>
          <button onClick={() => setEditando(true)}>Editar Perfil</button>
        </div>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: '1rem' }}>
          <div>
            <label>Nombre: </label>
            <input name="nombre" value={perfil.nombre} onChange={handleChange} />
          </div>
          <div>
            <label>Apellido: </label>
            <input name="apellido" value={perfil.apellido} onChange={handleChange} />
          </div>
          <div>
            <label>DNI: </label>
            <input name="dni" value={perfil.dni} onChange={handleChange} />
          </div>
          <div>
            <label>Fecha de Nacimiento: </label>
            <input name="nacimiento" type="date" value={perfil.nacimiento} onChange={handleChange} />
          </div>
          <div>
            <label>Dirección: </label>
            <input name="direccion" value={perfil.direccion} onChange={handleChange} />
          </div>
          <div>
            <label>Teléfono: </label>
            <input name="telefono" value={perfil.telefono} onChange={handleChange} />
          </div>
          <div>
            <label>Correo Electrónico: </label>
            <input name="correo" value={perfil.correo} onChange={handleChange} />
          </div>
          <br />
          <button onClick={guardarCambios}>Guardar Cambios</button>
          <button type="button" onClick={() => setEditando(false)} style={{ marginLeft: '0.5rem' }}>Cancelar</button>
        </form>
      )}
    </section>
  );
};

export default SocioLanding;
