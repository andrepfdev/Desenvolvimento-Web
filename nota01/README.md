# Nota 01 - Estruturação Inicial de uma Aplicação Web

## Descrição

Esta pasta contém a **primeira versão** da aplicação web "Água é Vida", desenvolvida com HTML5, CSS3 e Bootstrap.

## Tema

**ODS 6 - Água Potável e Saneamento**

Objetivo de conscientizar sobre o uso responsável da água e a importância do saneamento básico.

## Estrutura de Arquivos

```
nota01/
├── index.html              ← Página inicial
├── css/
│   └── style.css           ← Estilos principais
├── img/                    ← Imagens (opcional)
└── pages/
    ├── sobre.html          ← Sobre o ODS 6
    ├── dicas.html          ← Dicas de economia
    └── contato.html        ← Formulário de contato
```

## Funcionalidades

- **Página Inicial:** Hero section, cards ODS 6, estatísticas, dicas rápidas
- **Sobre:** Informações sobre o ODS 6 e metas
- **Dicas:** 10 dicas de economia e interface da calculadora (sem lógica em JS)
- **Contato:** Formulário e FAQ como interface, com validação nativa do HTML5

> Nesta etapa, formulários e a calculadora aparecem apenas como parte da interface,
> sem lógica em JavaScript — conforme orientação da atividade. A interatividade
> completa (cálculo, envio e validação via JS) será implementada na Nota 2.

## Tecnologias Utilizadas

- **HTML5:** Elementos semânticos (header, nav, main, section, footer)
- **CSS3:** Variáveis CSS, Flexbox, Media Queries, Gradientes
- **Bootstrap 5:** Grid system, Cards, Navbar, Botões, Formulários
- **Bootstrap Icons:** Ícones vetoriais

## Acessibilidade

- Elementos semânticos HTML5
- Atributos ARIA (aria-label, aria-required)
- Contraste adequado de cores
- Texto alternativo para imagens
- Navegação por teclado (focus-visible)

## Responsividade

- Layout adaptável para mobile, tablet e desktop
- Grid Bootstrap 5 com colunas responsivas
- Media queries para diferentes tamanhos de tela

## Como Visualizar

1. Abra o arquivo `index.html` em qualquer navegador
2. Navegue pelas páginas usando o menu

## Relatório

O relatório técnico deve conter:
- Introdução sobre o projeto
- Situação-problema e ODS escolhido
- Público-alvo e objetivo
- Descrição da primeira versão
- Capturas de tela
- Conclusão com próximos passos

## Referências

- [ONU - ODS 6](https://sdgs.un.org/goals/goal6)
- [Bootstrap 5](https://getbootstrap.com/)
- [HTML5 Specification](https://html.spec.whatwg.org/)
