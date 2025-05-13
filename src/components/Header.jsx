import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Header = () => (
  <header className="header">
    <nav>
      <a href="/"><img src={logo} alt="logo" /></a>
      <div className="header-links">
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/register">Registrarse</Link> |{" "}
        <Link to="/login">Login</Link>
      </div>
    </nav>
  </header>
);

export default Header;
