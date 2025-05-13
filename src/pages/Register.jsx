import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    email: '',
    password: '',
    telefono: '',
    tipo_usuario: 'socio', // fijo
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', form);
    // Aquí luego se hará la petición POST al backend
  };

  return (
    <section>
      <h1>Registro de Socio</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required />
        </label>
        <br />
        <label>
          DNI:
          <input type="text" name="dni" value={form.dni} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="text" name="telefono" value={form.telefono} onChange={handleChange} required />
        </label>
        <br />
        {/* Campo oculto o deshabilitado para tipo_usuario */}
        <input type="hidden" name="tipo_usuario" value="socio" />
        <button type="submit">Registrarme</button>
      </form>
    </section>
  );
};

export default Register;
