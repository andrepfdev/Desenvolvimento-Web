import React from 'react';

function CardODS({ icone, titulo, descricao, cor }) {
  const bgColorClass = `bg-${cor}`;
  const textColorClass = `text-${cor}`;

  return (
    <div className="card h-100 border-0 shadow-sm text-center p-4">
      <div className="card-body">
        <div className={`${bgColorClass} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
             style={{ width: '80px', height: '80px' }}>
          <i className={`bi ${icone} fs-1 ${textColorClass}`}></i>
        </div>
        <h5 className="card-title fw-bold">{titulo}</h5>
        <p className="card-text text-muted">{descricao}</p>
      </div>
    </div>
  );
}

export default CardODS;
