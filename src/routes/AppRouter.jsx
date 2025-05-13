import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import SocioLanding from '../pages/SocioLanding';
import ProfesorLanding from '../pages/ProfesorLanding';
import AdminLanding from '../pages/AdminLanding';
import PrivateRoute from '../components/PrivateRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rutas públicas */}
      <Route path="/socio" element={<SocioLanding />} />
      <Route path="/profesor" element={<ProfesorLanding />} />

      {/* Ruta protegida */}
      <Route
        path="/admin"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminLanding />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
