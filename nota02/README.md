# Nota 02 - Finalização e Publicação da Aplicação Web

## Descrição

Esta pasta contém a **versão final** da aplicação web "Água é Vida", desenvolvida com React, JavaScript e consumo de API externa.

## Tema

**ODS 6 - Água Potável e Saneamento**

Aplicação interativa com componentização, consumo de dados e publicação online.

## Estrutura de Arquivos

```
nota02/
├── public/
│   └── index.html              ← Ponto de entrada HTML
├── src/
│   ├── components/
│   │   ├── Header.jsx          ← Componente de navegação
│   │   ├── Footer.jsx          ← Componente de rodapé
│   │   ├── CardODS.jsx         ← Card para metas ODS
│   │   ├── ListaDicas.jsx      ← Lista de dicas
│   │   └── Estatisticas.jsx    ← Consumo de API
│   ├── pages/
│   │   ├── Home.jsx            ← Página inicial
│   │   ├── Sobre.jsx           ← Sobre o projeto
│   │   ├── Dicas.jsx           ← Dicas de economia
│   │   └── Estatisticas.jsx    ← Dados e API
│   ├── data/
│   │   └── odsData.json        ← Dados do ODS 6
│   ├── App.jsx                 ← Componente principal
│   ├── App.css                 ← Estilos globais
│   └── index.js                ← Ponto de entrada React
└── package.json                ← Dependências do projeto
```

## Funcionalidades

### React e Componentização
- Componentes funcionais com hooks (useState, useEffect)
- React Router para navegação SPA
- Componentes reutilizáveis

### Consumo de API
- Fetch API para requisições HTTP
- Consumo da UN SDG API (ONU)
- Tratamento de erros com fallback
- Exibição de dados JSON

### Interatividade
- Calculadora de economia de água
- Filtros por categoria de dicas
- Navegação entre páginas
- Validação de formulários

### Dados
- Dados locais em JSON
- Integração com API externa
- Dados em tempo real

## Tecnologias Utilizadas

- **React 18:** Biblioteca para interfaces
- **React Router 6:** Roteamento SPA
- **JavaScript ES6+:** modern JavaScript
- **Fetch API:** Consumo de APIs
- **Bootstrap 5 + Bootstrap Icons:** Instalados via npm e importados no bundle (não via CDN), garantindo que o estilo carregue mesmo offline ou sem acesso à internet
- **JSON:** Formato de dados

## API Externa

**UN SDG API (Organização das Nações Unidas)**

- Endpoint: `https://unstats.un.org/sdgapi/v1/sdg/Goal/List`
- Dados: Lista dos 17 ODS
- Formato: JSON

## Acessibilidade

- HTML semântico
- Atributos ARIA
- Contraste adequado
- Navegação por teclado
- Foco visível

## Responsividade

- Layout adaptável
- Grid Bootstrap 5
- Media queries

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## Publicação

A aplicação pode ser publicada em:
- **GitHub Pages:** `npm run build` + deploy
- **Vercel:** Deploy automático do GitHub
- **Netlify:** Deploy contínuo

## Entrega

### Slide de Apresentação
- Formato: PDF ou apresentação online
- Conteúdo: Introdução, desenvolvimento, API, framework, testes, conclusão

### Links
- Aplicação publicada
- Código-fonte (GitHub)

## Referências

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [UN SDG API](https://unstats.un.org/sdgapi/swagger/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
