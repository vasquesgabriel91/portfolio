/*
 * Edite os objetos abaixo para incluir seus projetos reais.
 * image: caminho de uma imagem de capa em assets/img/ (opcional).
 * screenshots: lista de caminhos de screenshots reais (opcional).
 * video: URL de embed do LinkedIn OU caminho de arquivo local (ex.: "assets/video/nome.mp4") — aparece na página do projeto.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "ecoar",
    title: "Ecoar - Denúncias Ambientais",
    category: "web",
    categoryLabel: "PROJETO DE DESENVOLVIMENTO",
    semester: "1º semestre",
    short:
      "Sistema de denúncias ambientais que permite aos usuários registrar e acompanhar denúncias de forma anônima e segura.",
    description: [
      "A plataforma foi criada para permitir que cidadãos e autoridades possam reportar, organizar e monitorar problemas ambientais de forma eficiente.",
      "O sistema visa solucionar a falta de um canal seguro, transparente e centralizado para lidar com infrações ambientais (como poluição e danos à natureza)",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "JavaScript",
      "css",
      "html",
    ],
    contribution: [
      "Fui um dos responsável pelo desenvolvimento do Full Stack, utilizando HTML, CSS e JavaScript para criar uma interface intuitiva e responsiva.",
      "Também implementei a lógica de controle de denúncias, incluindo funcionalidades de cadastro, acompanhamento e organização das informações.",
    ],
    github:
      "https://github.com/rogeriobgregorio/environmental-reporting-portal",
    live: "",
    video: "https://www.youtube.com/embed/aoaOdXzpXEY",
    image: "assets/img/Ecoar.PNG",
    screenshots: ["assets/img/Ecoar2.PNG", "assets/img/Ecoar3.PNG"],
    art: "SG",
    artStyle: "purple",
    filters: ["backend", "academico"],
  },
  {
    id: "estocai",
    title: "estocai-gestao-de-estoque",
    category: "web",
    categoryLabel: "PROJETO DE DESENVOLVIMENTO",
    semester: "2º semestre",
    short:
      "Sistema de gestão de estoque para pequenas empresas, com funcionalidades de cadastro de produtos, controle de entradas e saídas, e geração de relatórios.",
    description: [
      "O Estocai foi desenvolvido para ajudar pequenos negócios no ramo de adega a controlar o estoque de forma simples, organizada e eficiente. Quando esse processo é feito manualmente, é fácil perder o controle de produtos, quantidades e movimentações, o que pode gerar prejuízos e atrasos na operação.",
      "A plataforma centraliza o cadastro de itens, o acompanhamento de entradas e saídas, o monitoramento de estoque mínimo e a organização dos dados para facilitar a tomada de decisão e melhorar o desempenho do dia a dia.",
    ],
    technologies: ["JavaScript", "css", "html", "vercel"],
    contribution: [
      "Fui um dos responsável pelo desenvolvimento do Full Stack, utilizando HTML, CSS e JavaScript para criar uma interface intuitiva e responsiva. Também implementei a lógica de controle de estoque, incluindo funcionalidades de cadastro de produtos, registro de entradas e saídas, e geração de relatórios.",
      "A aplicação foi hospedada na Vercel, garantindo acesso rápido e confiável para os usuários. ",
    ],
    github: "https://github.com/vasquesgabriel91/Odontologia",
    live: "",
    video: "",
    image: "assets/img/estocai3.PNG",
    screenshots: ["assets/img/estocai.PNG", "assets/img/estocai2.PNG"],
    art: "SG",
    artStyle: "purple",
    filters: ["backend", "academico"],
  },
  {
    id: "zayon-ondotologia",
    title: "Zayon Odontologia",
    category: "web",
    categoryLabel: "PROJETO DE DESENVOLVIMENTO",
    semester: "3º semestre",
    short:
      "Sistema de gestão para clínica odontológica com funcionalidades de agendamento, prontuário digital e controle de estoque.",
    description: [
      "Todo consultório odontológico precisa organizar pacientes, profissionais, agendas e consultas. Quando essas informações ficam espalhadas ou são controladas manualmente, tarefas importantes da rotina podem se tornar mais difíceis e sujeitas a conflitos.",
      "A proposta foi centralizar funcionalidades essenciais da operação, como o gerenciamento de pacientes e profissionais, a organização das agendas e o controle de consultas.",
    ],
    technologies: ["Node.js", "Express ", "PostgreSQL ", "REST API", "Git"],
    contribution: [
      "Fiquei responsável pelo back-end, utilizando Node.js e Express para construir a API, PostgreSQL para persistir os dados e Sequelize como ORM e ferramenta para gerenciar as migrations. Também implementei recursos de autenticação com JWT e controle de acesso conforme o perfil do usuário.",
      " A aplicação back-end roda em um container baseado em Node.js 22 Alpine, e o banco de dados em outro container com PostgreSQL 15 Alpine. Os serviços se comunicam por uma rede Docker, e os dados do banco são preservados em um volume.",
    ],
    github: "https://github.com/vasquesgabriel91/Odontologia",
    live: "",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7516579262968180737?compact=1",
    image: "assets/img/ondontologia.PNG",
    screenshots: [
      "assets/img/ondontologia.PNG",
      "assets/img/ondontologia2.PNG",
    ],
    art: "SG",
    artStyle: "purple",
    filters: ["backend", "academico"],
  },
  {
    id: "agilidade-na-saude",
    title: "Agilidade na Saúde",
    category: "web",
    categoryLabel: "PROJETO ACADÊMICO",
    semester: "3º semestre",
    short:
      "Sistema de gerenciamento de filas para organizar atendimentos médicos gratuitos e facilitar o acesso aos serviços de saúde.",
    description: [
      "Projeto acadêmico desenvolvido com a proposta de gerenciar filas de atendimento médico gratuito de forma simples, contribuindo para a organização do atendimento e para uma experiência mais clara para os usuários.",
      "Entre os objetivos apresentados estão aumentar a eficiência operacional, promover transparência e justiça na ordem de atendimento e favorecer a acessibilidade. A apresentação do projeto também relaciona a iniciativa à ODS 3 — Saúde e Bem-Estar — e à ODS 13 — Ação Contra a Mudança Global do Clima, pela redução do uso de senhas de papel.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "Bootstrap",
      "SQLite",
    ],
    contribution: [
      "Projeto realizado em equipe com Kaik Silva Sousa, Jonathan Moura Andrade, Rogério Bernardo Gregório e Gabriel Vasques de Abreu.",
      "A apresentação fornecida identifica o sistema, seus objetivos, as disciplinas relacionadas e as tecnologias utilizadas. Acrescente aqui sua contribuição individual específica antes de publicar o portfólio.",
    ],
    github: "https://github.com/vasquesgabriel91/Projeto-api-NodeJs",
    live: "",
    video: "assets/video/agilidade-na-saude.mp4",
    image: "assets/img/agilidade-na-saude.PNG",
    screenshots: [
      "assets/img/agilidade-na-saude.PNG",
      "assets/img/agilidade-na-saude2.PNG",
    ],
    art: "AS",
    artStyle: "orange",
    filters: ["web", "academico"],
  },
  {
    id: "erp-restaurante",
    title: "ERP para Restaurante",
    category: "backend",
    categoryLabel: "PROJETO ACADÊMICO",
    semester: "4º semestre",
    short:
      "Sistema de gestão para restaurante que centraliza estoque, cardápio, pedidos e vendas.",
    description: [
      "Todo restaurante enfrenta o mesmo desafio: controlar estoque, vincular cardápios, estruturar pedidos e vendas. Em muitos casos, essa realidade é agravada pela dependência de planilhas ou de diferentes sistemas que não se comunicam entre si.",
      "Foi pensando nisso que nasceu o nosso ERP para restaurantes: uma solução de gestão que centraliza os principais processos do negócio, tornando a operação mais simples, organizada e eficiente.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
    ],
    contribution: [
      "Fui responsável pela maior parte do back-end, incluindo organização dos módulos, desenvolvimento de endpoints REST, regras de negócio e integração com o banco de dados.",
      "Utilizei NestJS, TypeScript, Prisma ORM, PostgreSQL e Docker. O desenvolvimento da interface foi realizado em colaboração com outro integrante.",
    ],
    github: "https://github.com/vasquesgabriel91/erp-restaurante",
    live: "",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7485405601049526272?compact=1",
    image: "assets/img/Restaurantes2PNG.PNG",
    screenshots: [
      "assets/img/Restaurantes.PNG",
      "assets/img/Restaurantes2PNG.PNG",
    ],
    art: "ER",
    artStyle: "green",
    filters: ["backend", "academico"],
  },
];
