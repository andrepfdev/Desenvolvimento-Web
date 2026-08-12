import React, { useState } from 'react';
import ListaDicas from '../components/ListaDicas';
import odsData from '../data/odsData.json';

function Dicas() {
  const { dicas } = odsData;
  const [filtro, setFiltro] = useState('todas');

  const categorias = [
    { valor: 'todas', label: 'Todas' },
    { valor: 'banheiro', label: 'Banheiro' },
    { valor: 'cozinha', label: 'Cozinha' },
    { valor: 'lavanderia', label: 'Lavanderia' },
    { valor: 'jardim', label: 'Jardim' }
  ];

  const dicasFiltradas = filtro === 'todas'
    ? dicas
    : dicas.filter(dica => dica.categoria === filtro);

  return (
    <main>
      {/* Hero da página */}
      <section className="sobre-hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Dicas de Economia</h1>
          <p className="lead">Pequenas atitudes que fazem grande diferença no consumo de água.</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-4 bg-light" aria-labelledby="titulo-filtros">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 id="titulo-filtros" className="h5 fw-bold text-muted mb-3">
                <i className="bi bi-funnel me-2"></i>
                Filtrar por categoria:
              </h2>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categorias.map((cat) => (
                  <button
                    key={cat.valor}
                    className={`btn ${filtro === cat.valor ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFiltro(cat.valor)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Dicas */}
      <section className="py-5" aria-labelledby="titulo-dicas">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 id="titulo-dicas" className="fw-bold text-primary">
                {filtro === 'todas' ? 'Todas as Dicas' : `Dicas - ${categorias.find(c => c.valor === filtro)?.label}`}
              </h2>
              <p className="text-muted">
                {dicasFiltradas.length} dica{dicasFiltradas.length !== 1 ? 's' : ''} encontrada{dicasFiltradas.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <ListaDicas dicas={dicasFiltradas} />
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-5 bg-light" aria-labelledby="titulo-calculadora">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 id="titulo-calculadora" className="card-title fw-bold text-center text-primary mb-4">
                    <i className="bi bi-calculator me-2"></i>
                    Calculadora de Economia
                  </h3>
                  <p className="text-muted text-center mb-4">
                    Descubra quanto você pode economizar!
                  </p>

                  <CalculadoraEconomia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CalculadoraEconomia() {
  const [pessoas, setPessoas] = useState(4);
  const [tempoBanho, setTempoBanho] = useState(10);
  const [torneira, setTorneira] = useState(5);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const litrosBanhoPadrao = 135;
    const litrosBanhoNovo = tempoBanho * 9;
    const economiaBanho = (litrosBanhoPadrao - litrosBanhoNovo) * pessoas * 30;
    const economiaTorneira = torneira * 12 * 30;
    const economiaTotal = Math.max(0, economiaBanho + economiaTorneira);

    setResultado({
      total: economiaTotal,
      mensal: economiaTotal,
      anual: economiaTotal * 12
    });
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="pessoas" className="form-label fw-bold">
          Quantas pessoas moram na sua casa?
        </label>
        <input
          type="number"
          className="form-control"
          id="pessoas"
          min="1"
          max="20"
          value={pessoas}
          onChange={(e) => setPessoas(parseInt(e.target.value) || 1)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="banho" className="form-label fw-bold">
          Tempo médio do banho (minutos)?
        </label>
        <input
          type="number"
          className="form-control"
          id="banho"
          min="1"
          max="60"
          value={tempoBanho}
          onChange={(e) => setTempoBanho(parseInt(e.target.value) || 1)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="torneira" className="form-label fw-bold">
          Vezes que deixa a torneira aberta por dia?
        </label>
        <input
          type="number"
          className="form-control"
          id="torneira"
          min="0"
          max="50"
          value={torneira}
          onChange={(e) => setTorneira(parseInt(e.target.value) || 0)}
        />
      </div>

      <div className="text-center">
        <button className="btn btn-primary btn-lg" onClick={calcular}>
          <i className="bi bi-calculator me-2"></i>
          Calcular
        </button>
      </div>

      {resultado && (
        <div className="mt-4 text-center">
          <div className="alert alert-success">
            <h4 className="alert-heading">
              <i className="bi bi-trophy me-2"></i>
              Resultado
            </h4>
            <p className="mb-2">Com essas mudanças, você pode economizar:</p>
            <p className="display-6 fw-bold text-success mb-2">
              {resultado.mensal.toLocaleString('pt-BR')} litros/mês
            </p>
            <p className="mb-0">
              Isso equivale a <strong>{(resultado.anual / 1000).toFixed(1)} mil litros por ano</strong>!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dicas;
