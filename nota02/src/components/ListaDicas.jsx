import React from 'react';

function ListaDicas({ dicas }) {
  if (!dicas || dicas.length === 0) {
    return (
      <div className="alert alert-info">
        <i className="bi bi-info-circle me-2"></i>
        Nenhuma dica encontrada.
      </div>
    );
  }

  return (
    <div className="row g-4">
      {dicas.map((dica) => (
        <div key={dica.id} className="col-md-6 col-lg-4">
          <div className="card dica-card h-100 border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className={`bg-${dica.cor} bg-opacity-10 rounded-circle p-3 me-3`}>
                  <i className={`bi ${dica.icone} fs-4 text-${dica.cor}`}></i>
                </div>
                <h5 className="card-title fw-bold mb-0">{dica.titulo}</h5>
              </div>
              <p className="card-text text-muted">{dica.descricao}</p>
              <div className={`badge bg-${dica.cor} bg-opacity-10 text-${dica.cor}`}>
                Economia: {dica.economia}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaDicas;
