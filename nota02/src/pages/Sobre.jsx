import React from 'react';
import odsData from '../data/odsData.json';

function Sobre() {
  const { ods } = odsData;

  return (
    <main>
      {/* Hero da página */}
      <section className="sobre-hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Sobre o Projeto</h1>
          <p className="lead">Conheça mais sobre o ODS 6 e nossa missão de conscientização.</p>
        </div>
      </section>

      {/* Sobre o ODS 6 */}
      <section className="py-5" aria-labelledby="titulo-sobre-ods">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 id="titulo-sobre-ods" className="fw-bold text-primary mb-4">O que é o ODS 6?</h2>
              <p className="lead text-muted">
                O Objetivo de Desenvolvimento Sustentável 6 (ODS 6) visa <strong>garantir a disponibilidade e o manejo sustentável da água e do saneamento para todos</strong>.
              </p>
              <p className="text-muted">
                Faz parte dos 17 Objetivos de Desenvolvimento Sustentável estabelecidos pela Organização das Nações Unidas (ONU) em 2015, como parte da Agenda 2030 para o Desenvolvimento Sustentável.
              </p>

              <h3 className="h4 fw-bold text-primary mt-5 mb-3">Metas do ODS 6</h3>
              <div className="row g-3">
                {ods.metas.map((meta) => (
                  <div key={meta.codigo} className="col-md-6">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h4 className="h6 fw-bold">{meta.codigo}</h4>
                        <p className="fw-bold mb-1">{meta.titulo}</p>
                        <p className="small text-muted mb-0">{meta.descricao}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-5 bg-light" aria-labelledby="titulo-projeto">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 id="titulo-projeto" className="fw-bold text-primary mb-4">Sobre o Projeto "Água é Vida"</h2>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h5 fw-bold">
                    <i className="bi bi-bullseye text-primary me-2"></i>
                    Objetivo
                  </h3>
                  <p className="text-muted mb-0">
                    Promover a conscientização sobre o uso responsável da água e a importância do saneamento básico, contribuindo para o alcance do ODS 6 através da educação e informação.
                  </p>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h5 fw-bold">
                    <i className="bi bi-people text-primary me-2"></i>
                    Público-Alvo
                  </h3>
                  <p className="text-muted mb-0">
                    Estudantes, professores e comunidade em geral, com foco em jovens que podem ser agentes de mudança em suas escolas e lares.
                  </p>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h3 className="h5 fw-bold">
                    <i className="bi bi-gear text-primary me-2"></i>
                    Tecnologias Utilizadas
                  </h3>
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <span className="badge bg-primary">React</span>
                    <span className="badge bg-info">React Router</span>
                    <span className="badge bg-success">JavaScript ES6+</span>
                    <span className="badge bg-warning text-dark">Fetch API</span>
                    <span className="badge bg-secondary">Bootstrap 5</span>
                    <span className="badge bg-dark">JSON</span>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 fw-bold">
                    <i className="bi bi-calendar-check text-primary me-2"></i>
                    Funcionalidades
                  </h3>
                  <ul className="text-muted mb-0">
                    <li>Navegação entre páginas com React Router</li>
                    <li>Consumo de dados de API externa (ONU)</li>
                    <li>Componentes reutilizáveis</li>
                    <li>Gerenciamento de estado com hooks</li>
                    <li>Interface responsiva</li>
                    <li>Dados em tempo real</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referências */}
      <section className="py-5" aria-labelledby="titulo-ref">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 id="titulo-ref" className="fw-bold text-primary mb-4">Referências</h2>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-link-45deg text-primary me-2"></i>
                  <a href="https://sdgs.un.org/goals/goal6" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Nações Unidas - ODS 6
                  </a>
                </li>
                <li className="mb-2">
                  <i className="bi bi-link-45deg text-primary me-2"></i>
                  <a href="https://unstats.un.org/sdgapi/swagger/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    UN SDG API - Documentação
                  </a>
                </li>
                <li className="mb-2">
                  <i className="bi bi-link-45deg text-primary me-2"></i>
                  <a href="https://nacoesunidas.org/ods/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    Nações Unidas no Brasil - Agenda 2030
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sobre;
