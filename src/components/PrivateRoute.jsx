import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user);

  // Si no está autenticado, redirige al login
  if (!user.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si el usuario no tiene el rol adecuado, lo redirige
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  // Si pasa ambas verificaciones, renderiza el componente
  return children;
};

export default PrivateRoute;
