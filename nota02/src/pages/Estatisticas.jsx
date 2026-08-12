import React from 'react';
import EstatisticasAPI from '../components/Estatisticas';
import odsData from '../data/odsData.json';

function Estatisticas() {
  const { ods } = odsData;

  return (
    <main>
      {/* Hero da página */}
      <section className="sobre-hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Estatísticas e Dados</h1>
          <p className="lead">Dados reais sobre o ODS 6 obtidos de API externa.</p>
        </div>
      </section>

      {/* Estatísticas Locais */}
      <section className="py-5" aria-labelledby="titulo-locais">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 id="titulo-locais" className="fw-bold text-primary">Números que Importam</h2>
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

      {/* Componente de API */}
      <EstatisticasAPI />

      {/* Gráfico Simples */}
      <section className="py-5 bg-light" aria-labelledby="titulo-grafico">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 id="titulo-grafico" className="fw-bold text-primary text-center mb-4">
                <i className="bi bi-bar-chart me-2"></i>
                Distribuição do Uso da Água
              </h2>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="p-3">
                        <div className="display-4 text-info mb-2">
                          <i className="bi bi-droplet-half"></i>
                        </div>
                        <h5 className="fw-bold">72%</h5>
                        <p className="text-muted small mb-0">Irrigação Agrícola</p>
                        <div className="progress mt-2" style={{ height: '10px' }}>
                          <div className="progress-bar bg-info" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="p-3">
                        <div className="display-4 text-primary mb-2">
                          <i className="bi bi-house"></i>
                        </div>
                        <h5 className="fw-bold">16%</h5>
                        <p className="text-muted small mb-0">Uso Doméstico</p>
                        <div className="progress mt-2" style={{ height: '10px' }}>
                          <div className="progress-bar bg-primary" style={{ width: '16%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3">
                        <div className="display-4 text-warning mb-2">
                          <i className="bi bi-building"></i>
                        </div>
                        <h5 className="fw-bold">12%</h5>
                        <p className="text-muted small mb-0">Uso Industrial</p>
                        <div className="progress mt-2" style={{ height: '10px' }}>
                          <div className="progress-bar bg-warning" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Estatisticas;
