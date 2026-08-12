import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold">
              <i className="bi bi-droplet-fill me-2"></i>
              Água é Vida
            </h5>
            <p className="text-muted small">
              Projeto acadêmico sobre o ODS 6 - Água Potável e Saneamento.
              Disciplina de Desenvolvimento Web.
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-muted text-decoration-none">Início</Link></li>
              <li><Link to="/sobre" className="text-muted text-decoration-none">Sobre</Link></li>
              <li><Link to="/dicas" className="text-muted text-decoration-none">Dicas</Link></li>
              <li><Link to="/estatisticas" className="text-muted text-decoration-none">Estatísticas</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">ODS 6</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://sdgs.un.org/goals/goal6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-decoration-none"
                >
                  ONU - ODS 6 <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://nacoesunidas.org/ods/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-decoration-none"
                >
                  Nações Unidas <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="row">
          <div className="col text-center">
            <p className="small text-muted mb-0">
              &copy; 2025 Água é Vida - Projeto Acadêmico
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
