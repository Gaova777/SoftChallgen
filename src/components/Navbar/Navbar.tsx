import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Logo</div>
    <ul className="navbar-menu">
      <li>Pólizas</li>
      <li className="active">CRM</li>
      <li>Archivos</li>
      <li>Cartera</li>
    </ul>
    <div className="navbar-profile">
      <i className="bell-icon">🔔</i>
      <div className="profile-pic">👤</div>
    </div>
  </nav>
);

export default Navbar;