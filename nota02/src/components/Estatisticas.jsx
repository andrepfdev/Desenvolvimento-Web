import React, { useState, useEffect } from 'react';

function Estatisticas() {
  const [dadosAPI, setDadosAPI] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDadosODS = async () => {
      try {
        setCarregando(true);
        setErro(null);

        // Buscar lista de goals da API da ONU
        const response = await fetch(
          'https://unstats.un.org/sdgapi/v1/sdg/Goal/List'
        );

        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();

        // Encontrar o ODS 6
        const ods6 = data.find(goal => goal.code === '6');

        if (ods6) {
          setDadosAPI({
            fonte: 'ONU - SDG API',
            ods: ods6,
            timestamp: new Date().toISOString()
          });
        } else {
          // Dados fallback se a API não retornar o ODS 6
          setDadosAPI({
            fonte: 'Dados locais (fallback)',
            ods: {
              code: '6',
              title: 'Água Potável e Saneamento',
              description: 'Garantir a disponibilidade e o manejo sustentável da água e do saneamento para todos.'
            },
            timestamp: new Date().toISOString()
          });
        }
      } catch (err) {
        console.error('Erro ao consumir API:', err);
        setErro(err.message);

        // Dados fallback em caso de erro
        setDadosAPI({
          fonte: 'Dados locais (fallback - API indisponível)',
          ods: {
            code: '6',
            title: 'Água Potável e Saneamento',
            description: 'Garantir a disponibilidade e o manejo sustentável da água e do saneamento para todos.'
          },
          timestamp: new Date().toISOString()
        });
      } finally {
        setCarregando(false);
      }
    };

    buscarDadosODS();
  }, []);

  return (
    <section className="py-5" aria-labelledby="titulo-api">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="titulo-api" className="fw-bold text-primary mb-3">
              <i className="bi bi-cloud-download me-2"></i>
              Consumo de API Externa
            </h2>
            <p className="text-muted">
              Dados obtidos em tempo real da API de ODS da Organização das Nações Unidas.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={`card api-card ${erro ? 'error' : dadosAPI ? 'success' : ''}`}>
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3">
                  <i className="bi bi-code-square me-2"></i>
                  Resposta da API
                </h3>

                {carregando && (
                  <div className="text-center py-4">
                    <div className="spinner"></div>
                    <p className="text-muted mt-3">Carregando dados da API...</p>
                  </div>
                )}

                {!carregando && dadosAPI && (
                  <div>
                    <div className="alert alert-success mb-3">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      <strong>Dados carregados com sucesso!</strong>
                    </div>

                    <div className="bg-dark text-light p-3 rounded mb-3">
                      <pre className="mb-0" style={{ fontSize: '0.85rem', whiteSpace: 'pre-wrap' }}>
                        {JSON.stringify(dadosAPI, null, 2)}
                      </pre>
                    </div>

                    <div className="row mt-4">
                      <div className="col-md-6">
                        <h6 className="fw-bold text-muted">Fonte:</h6>
                        <p className="text-muted">{dadosAPI.fonte}</p>
                      </div>
                      <div className="col-md-6">
                        <h6 className="fw-bold text-muted">Timestamp:</h6>
                        <p className="text-muted">
                          {new Date(dadosAPI.timestamp).toLocaleString('pt-BR')}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <h6 className="fw-bold text-muted">Dados do ODS 6:</h6>
                      <ul className="list-unstyled text-muted">
                        <li><strong>Código:</strong> {dadosAPI.ods.code}</li>
                        <li><strong>Título:</strong> {dadosAPI.ods.title}</li>
                        <li><strong>Descrição:</strong> {dadosAPI.ods.description}</li>
                      </ul>
                    </div>
                  </div>
                )}

                {!carregando && erro && (
                  <div className="alert alert-warning mt-3">
                    <i className="bi bi-exclamation-triangle me-2"></i>
                    <strong>Nota:</strong> A API retornou um erro, mas dados de fallback foram carregados.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documentação da API */}
        <div className="row mt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold mb-3">
                  <i className="bi bi-book me-2"></i>
                  Sobre a API Utilizada
                </h3>
                <p className="text-muted">
                  A API utilizada é a <strong>UN SDG API</strong>, mantida pela Organização das Nações Unidas.
                  Ela fornece dados oficiais sobre os 17 Objetivos de Desenvolvimento Sustentável.
                </p>
                <h6 className="fw-bold mt-3">Endpoints utilizados:</h6>
                <ul className="list-unstyled text-muted">
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded">
                      GET /v1/sdg/Goal/List
                    </code>
                    <br />
                    <small>Lista todos os ODS disponíveis</small>
                  </li>
                  <li className="mb-2">
                    <code className="bg-light px-2 py-1 rounded">
                      GET /v1/sdg/Goal/Data?goalCode=6
                    </code>
                    <br />
                    <small>Dados específicos do ODS 6</small>
                  </li>
                </ul>
                <h6 className="fw-bold mt-3">Formato de resposta:</h6>
                <p className="text-muted small">
                  A API retorna dados no formato JSON, facilitando o consumo e a manipulação em JavaScript.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Estatisticas;
