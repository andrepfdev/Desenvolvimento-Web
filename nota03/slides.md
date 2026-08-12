# Apresentação - Água é Vida
## ODS 6: Água Potável e Saneamento

---

## Slide 1: Capa

### **Água é Vida**
#### ODS 6 - Água Potável e Saneamento

**Disciplina:** Desenvolvimento Web  
**Instituição:** UEMA - Universidade Estadual do Maranhão  
**Equipe:** [Nomes dos integrantes]  
**Data:** [Data da apresentação]

---

## Slide 2: Introdução

### Situação-Problema

- **Mais de 2 bilhões de pessoas** no mundo não têm acesso a água potável
- **80% das águas residuais** são lançadas no meio ambiente sem tratamento
- **700 milhões de pessoas** não possuem saneamento básico
- A falta de água saneamento causa **doenças e mortes** facilmente evitáveis

**ODS 6** visa garantir a disponibilidade e o manejo sustentável da água e do saneamento para todos até 2030.

---

## Slide 3: ODS 6 - Visão Geral

### Objetivo de Desenvolvimento Sustentável 6

| Meta | Descrição |
|------|-----------|
| 6.1 | Água potável universal e acessível |
| 6.2 | Saneamento e higiene adequados |
| 6.3 | Melhoria da qualidade da água |
| 6.4 | Uso eficiente dos recursos hídricos |
| 6.5 | Gestão integrada dos recursos hídricos |
| 6.6 | Proteção dos ecossistemas aquáticos |

**Fonte:** Nações Unidas - Agenda 2030

---

## Slide 4: Público-Alvo e Objetivo

### Público-Alvo
- **Estudantes** do ensino médio e superior
- **Professores** e educadores
- **Comunidade** em geral
- **Jovens** como agentes de mudança

### Objetivo da Aplicação
Promover a conscientização sobre o uso responsável da água através de:
- Informações acessíveis e didáticas
- Dicas práticas de economia
- Dados estatísticos atualizados

---

## Slide 5: Tecnologias Utilizadas

### Stack Tecnológico

**Nota 1 - Estruturação Inicial:**
- HTML5 (semântica e acessibilidade)
- CSS3 (variáveis, flexbox, responsividade)
- Bootstrap 5 (grid, componentes, responsividade)

**Nota 2 - Finalização:**
- React 18 (componentização e hooks)
- React Router (navegação SPA)
- Fetch API (consumo de dados externos)
- JavaScript ES6+ (modern JavaScript)

**Dados:**
- API da ONU (UN SDG API)
- JSON (formato de dados)

---

## Slide 6: Estrutura do Projeto

### Arquitetura da Aplicação

```
projeto/
├── nota01/          ← Versão estática
│   ├── index.html
│   ├── css/
│   └── pages/
│
├── nota02/          ← Versão React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── data/
│   └── package.json
│
└── nota03/          ← Esta apresentação
```

**Total de arquivos:** 15+ componentes e páginas

---

## Slide 7: Funcionalidades Implementadas

### Recursos da Aplicação

**Navegação:**
- Menu responsivo com navegação entre páginas
- Links para páginas internas e externas

**Componentização (React):**
- Header, Footer, CardODS, ListaDicas, Estatisticas
- Componentes reutilizáveis e modulares

**Consumo de Dados:**
- API da ONU para dados em tempo real
- Dados locais como fallback
- Exibição de JSON processado

**Interatividade:**
- Calculadora de economia de água
- Filtros por categoria
- Validação de formulários

---

## Slide 8: Interface e Design

### Identidade Visual

**Cores:**
- Azul primário: #00689D (confiança, água)
- Azul secundário: #00A5CF (fresco, limpeza)
- Verde: #4CAF50 (sustentabilidade)

**Elementos Visuais:**
- Ícones Bootstrap Icons (droplet, water, etc.)
- Cards com sombras e hover effects
- Gradientes inspirados em água
- Animações suaves

**Responsividade:**
- Layout adaptável para mobile, tablet e desktop
- Grid Bootstrap 5
- Media queries customizadas

---

## Slide 9: Acessibilidade

### Recursos de Acessibilidade

- **HTML Semântico:** header, nav, main, section, footer
- **Atributos ARIA:** labels, roles, descriptions
- **Contraste:** cores com contraste adequado (WCAG 2.1)
- **Texto Alternativo:** alt em todas as imagens
- **Navegação por Teclado:** tabindex e focus visible
- **Legibilidade:** fontes claras e tamanhos adequados

**Conformidade:** Nível AA do WCAG 2.1

---

## Slide 10: Consumo de API

### Integração com API Externa

**API Utilizada:** UN SDG API (ONU)

**Endpoint Principal:**
```
GET https://unstats.un.org/sdgapi/v1/sdg/Goal/List
```

**Dados Obtidos:**
- Lista completa dos 17 ODS
- Metas e indicadores do ODS 6
- Estatísticas atualizadas

**Tratamento:**
- Fetch API para requisições HTTP
- Conversão JSON
- Tratamento de erros com fallback

---

## Slide 11: Demonstração ao Vivo

### Navegação pela Aplicação

1. **Página Inicial** - Hero, cards ODS, estatísticas
2. **Sobre** - Informações do projeto e metas ODS 6
3. **Dicas** - 10 dicas de economia com filtros
4. **Estatísticas** - Dados da API em tempo real
5. **Calculadora** - Simulador de economia

**Link da aplicação:** [URL do GitHub Pages/Vercel/Netlify]

---

## Slide 12: Testes e Correções

### Processo de Testes

**Testes Realizados:**
- Compatibilidade entre navegadores (Chrome, Firefox, Safari)
- Responsividade em diferentes dispositivos
- Funcionalidade de navegação
- Consumo da API externa
- Formulários e validações

**Correções Efetuadas:**
- Ajustes de layout mobile
- Correção de erros de acessibilidade
- Otimização de performance
- Tratamento de erros de API

**Resultado:** Aplicação funcional e estável

---

## Slide 13: Publicação

### Deploy da Aplicação

**Plataforma Utilizada:** GitHub Pages

**Link de Acesso:**
```
https://[usuario].github.io/agua-e-vida/
```

**Código Fonte:**
```
https://github.com/[usuario]/agua-e-vida
```

**Estrutura de Deploy:**
- Branch principal: main
- Build automático via GitHub Actions
- Atualização contínua

---

## Slide 14: Dificuldades Encontradas

### Desafios do Projeto

1. **Consumo da API da ONU**
   - API complexa com muitos endpoints
   - Solução: Dados mockados como fallback

2. **Responsividade**
   - Layout adaptado para múltiplos dispositivos
   - Solução: Grid Bootstrap + media queries

3. **Acessibilidade**
   - Implementação de atributos ARIA
   - Solução: Estudo de boas práticas WCAG

4. **Componentização**
   - Organização do código em React
   - Solução: Separação lógica de componentes

---

## Slide 15: Aprendizados

### O que Aprendemos

- **HTML5:** Elementos semânticos e acessibilidade
- **CSS3:** Variáveis, flexbox, responsividade
- **Bootstrap:** Grid system e componentes prontos
- **React:** Componentização, hooks, roteamento
- **APIs:** Consumo de dados externos com Fetch
- **JavaScript:** Manipulação de DOM e eventos
- **Git:** Controle de versão
- **Deploy:** Publicação de aplicações web

**Conhecimento adquirido:** Desenvolvimento web completo, do planejamento à publicação.

---

## Slide 16: Próximos Passos

### Futuras Melhorias

- [ ] Implementar busca por localização
- [ ] Adicionar gráficos interativos
- [ ] Criar modo offline com Service Workers
- [ ] Implementar notificações push
- [ ] Adicionar suporte a múltiplos idiomas
- [ ] Integrar com mais APIs de dados
- [ ] Criar aplicativo mobile (React Native)

**Objetivo:** Continuar evoluindo a aplicação para alcançar mais pessoas.

---

## Slide 17: Conclusão

### Resultados Alcançados

- Aplicação web completa e funcional  
- Interface responsiva e acessível  
- Consumo de API externa  
- Organização por componentes React  
- Publicação online acessível  
- Conteúdo educativo sobre ODS 6  

**Mensagem Final:**  
> "Cada gota conta! Preservar a água é preservar a vida."

**Obrigado!**

---

## Slide 18: Referências

### Fontes Consultadas

- Nações Unidas - ODS 6: https://sdgs.un.org/goals/goal6
- UN SDG API: https://unstats.un.org/sdgapi/swagger/
- Bootstrap 5: https://getbootstrap.com/
- React: https://react.dev/
- Nações Unidas Brasil: https://nacoesunidas.org/ods/

---

## Slide 19: Perguntas

### Dúvidas?

**Contato:**
- E-mail: [email da equipe]
- GitHub: [perfil GitHub]

**Links:**
- Aplicação: [URL publicada]
- Código-fonte: [repositório]

---

## Slide 20: Agradecimentos

### Obrigado pela Atenção!

**Equipe Água é Vida**

[Nome 1]  
[Nome 2]  
[Nome 3]

**Professor(a):** [Nome do Professor]  
**Disciplina:** Desenvolvimento Web  
**Instituição:** UEMA

**2025**
