import React from 'react';
import { Link } from 'react-router-dom';
import CardODS from '../components/CardODS';
import odsData from '../data/odsData.json';

function Home() {
  const { ods } = odsData;

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section text-center text-white" aria-label="Banner principal">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <span className="badge bg-warning text-dark mb-3 fs-6">
                ODS {ods.id} - {ods.nome}
              </span>
              <h1 className="display-4 fw-bold mb-3">Água é Vida</h1>
              <p className="lead mb-4">
                Conscientizando sobre o uso responsável da água e a importância do saneamento básico para todos.
              </p>
              <Link to="/sobre" className="btn btn-light btn-lg me-2">
                Saiba Mais
              </Link>
              <Link to="/dicas" className="btn btn-outline-light btn-lg">
                Dicas de Economia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o ODS 6 */}
      <section className="py-5" aria-labelledby="titulo-ods">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 id="titulo-ods" className="fw-bold text-primary">O que é o ODS 6?</h2>
              <p className="text-muted">{ods.descricao}</p>
            </div>
          </div>
          <div className="row g-4">
            {ods.metas.slice(0, 3).map((meta) => (
              <div key={meta.codigo} className="col-md-4">
                <CardODS
                  icone={meta.codigo === '6.1' ? 'bi-droplet' : meta.codigo === '6.2' ? 'bi-house-check' : 'bi-gear'}
                  titulo={meta.titulo}
                  descricao={meta.descricao}
                  cor={meta.codigo === '6.1' ? 'primary' : meta.codigo === '6.2' ? 'success' : 'info'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-5 bg-light" aria-labelledby="titulo-estatisticas">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 id="titulo-estatisticas" className="fw-bold text-primary">Números que Importam</h2>
              <p className="text-muted">Dados que demonstram a urgência da ação pelo ODS 6.</p>
            </div>
          </div>
          <div className="row g-4">
            {ods.estatisticas.map((stat, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="stat-card">
                  <div className={`text-${stat.cor} mb-2`}>
                    <i className={`bi ${stat.icone} display-4`}></i>
                  </div>
                  <h2 className={`stat-number text-${stat.cor}`}>{stat.valor}</h2>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dicas Rápidas */}
      <section className="py-5" aria-labelledby="titulo-dicas-rapidas">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 id="titulo-dicas-rapidas" className="fw-bold text-primary mb-3">
                Como Economizar Água?
              </h2>
              <p className="text-muted mb-4">
                Pequenas atitudes no dia a dia podem fazer uma grande diferença no consumo de água.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  Feche a torneira ao escovar os dentes
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  Tome banhos mais curtos (5-10 minutos)
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  Conserte vazamentos imediatamente
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-3"></i>
                  Use a máquina de lavar roupa com carga completa
                </li>
              </ul>
              <Link to="/dicas" className="btn btn-primary mt-4">
                Ver Todas as Dicas
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <div className="p-4">
                <i className="bi bi-droplet-half display-1 text-primary"></i>
                <h3 className="mt-3 text-primary">Cada gota conta!</h3>
                <p className="text-muted">Preservar a água é preservar a vida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Ação */}
      <section className="py-5 bg-primary text-white" aria-labelledby="titulo-cta">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 id="titulo-cta" className="fw-bold mb-3">Faça Parte da Mudança</h2>
              <p className="lead mb-4">
                Compartilhe informações sobre o ODS 6 e ajude a conscientizar mais pessoas sobre a importância da água.
              </p>
              <Link to="/sobre" className="btn btn-light btn-lg me-2">
                Saiba Mais
              </Link>
              <Link to="/estatisticas" className="btn btn-outline-light btn-lg">
                Ver Dados da API
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
