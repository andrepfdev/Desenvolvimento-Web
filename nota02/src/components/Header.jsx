import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="bi bi-droplet-fill me-2"></i>
            Água é Vida
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Abrir menu de navegação"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/')}`} to="/">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/sobre')}`} to="/sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/dicas')}`} to="/dicas">
                  Dicas
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/estatisticas')}`} to="/estatisticas">
                  Estatísticas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
