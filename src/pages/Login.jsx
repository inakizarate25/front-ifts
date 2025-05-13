import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Simulación de login
    // En el futuro esto vendrá del backend
    let fakeUser = null;

    if (form.email === 'socio@club.com') {
      fakeUser = { tipo_usuario: 'socio' };
    } else if (form.email === 'profesor@club.com') {
      fakeUser = { tipo_usuario: 'profesor' };
    } else if (form.email === 'admin@club.com') {
      fakeUser = { tipo_usuario: 'admin' };
    }

    if (fakeUser) {
      dispatch(login(fakeUser.tipo_usuario));

      if (fakeUser.tipo_usuario === 'socio') navigate('/socio');
      else if (fakeUser.tipo_usuario === 'profesor') navigate('/profesor');
      else if (fakeUser.tipo_usuario === 'admin') navigate('/admin');
    } else {
      alert('Usuario no válido');
    }
  };

  return (
    <section>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Ingresar</button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Emails de prueba: <br />
        <strong>socio@club.com</strong>, <strong>profesor@club.com</strong>, <strong>admin@club.com</strong>
      </p>
    </section>
  );
};

export default Login;
