import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    slug: "royal-parfums",
    title: "Royal Parfums",
    description:
      "E-commerce completo para venda de perfumes, com catálogo, pedidos, cálculo de frete e pagamento online.",
    longDescription:
      "Plataforma de e-commerce desenvolvida para uma operação real de vendas online. O projeto envolve catálogo de produtos, gerenciamento de pedidos, integração com pagamento e funcionalidades administrativas.",
    category: "fullstack",
    problem:
      "A empresa precisava de uma presença online profissional para apresentar seus produtos e facilitar as vendas.",

    solution:
      "Foi criada uma loja virtual com catálogo de produtos, carrinho, pedidos e pagamento online.",

    result:
      "Uma experiência de compra mais organizada, profissional e preparada para atender clientes pela internet.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mercado Pago", icon: "mercadopago" },
    ],
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Sistema de pedidos",
      "Integração com Mercado Pago",
      "Cálculo de frete",
      "Painel administrativo",
    ],
    image: "/projects/royal-parfums.webp",
    demo: "https://www.royalparfums.com.br",
    featured: true,
    status: "completed",
  },

  {
    slug: "secret-word",
    title: "Secret Word",
    description:
      "Jogo de palavras desenvolvido com React, explorando gerenciamento de estado e interação com o usuário.",
    longDescription:
      "Aplicação interativa desenvolvida para praticar conceitos fundamentais do React e criar uma experiência simples e divertida baseada em descoberta de palavras.",
    category: "frontend",
    problem:
      "Era necessário criar uma experiência simples e divertida para testar conhecimentos com palavras.",

    solution:
      "Foi desenvolvido um jogo de palavras interativo, com interface responsiva e feedback em tempo real.",

    result:
      "Uma experiência rápida, intuitiva e adaptada para diferentes tamanhos de tela.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "CSS", icon: "css" },
    ],
    features: [
      "Sistema de palavras",
      "Gerenciamento de estado",
      "Interação em tempo real",
      "Interface responsiva",
    ],
    image: "/projects/secret-word.webp",
    demo: "https://samucarafi.github.io/secretWord/",
    status: "completed",
  },

  {
    slug: "cafeteria",
    title: "Cafeteria",
    description:
      "Landing page moderna para uma cafeteria, desenvolvida com HTML, CSS e JavaScript.",
    longDescription:
      "Projeto focado na criação de uma interface comercial responsiva para apresentação de uma cafeteria e seus produtos.",
    category: "frontend",
    problem:
      "O negócio precisava de uma apresentação digital simples para destacar seus produtos e sua identidade.",

    solution:
      "Foi criada uma página responsiva com apresentação da cafeteria, produtos e navegação simples.",

    result:
      "Uma presença online clara e profissional para apresentar a marca e seus produtos.",
    technologies: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
    ],
    features: [
      "Design responsivo",
      "Apresentação de produtos",
      "Navegação por seções",
      "Interface comercial",
    ],
    image: "/projects/cafeteria.webp",
    demo: "https://samucarafi.github.io/Cafeteria/",
    status: "completed",
  },

  {
    slug: "bolinhas",
    title: "Bolinhas",
    description:
      "Projeto experimental desenvolvido para demonstrar conceitos de programação orientada a objetos com JavaScript.",
    longDescription:
      "Experimento interativo criado para explorar conceitos de programação orientada a objetos utilizando elementos visuais renderizados no navegador.",
    category: "frontend",
    problem:
      "A proposta era criar uma experiência visual interativa utilizando elementos simples no navegador.",

    solution:
      "Foi desenvolvida uma experiência com elementos animados e interação direta com o usuário.",

    result:
      "Uma interface leve e interativa que demonstra criatividade e domínio de experiências web.",
    technologies: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
    ],
    features: [
      "Programação orientada a objetos",
      "Manipulação de elementos",
      "Interação com JavaScript",
      "Animações",
    ],
    image: "/projects/bolinhas.webp",
    demo: "https://samucarafi.github.io/Bolinhas/",
    status: "completed",
  },

  {
    slug: "landing-page-refrigeracao",
    title: "Refrigeração",
    description:
      "Landing page desenvolvida para uma empresa do segmento de refrigeração.",
    longDescription:
      "Projeto comercial desenvolvido para apresentar os serviços de uma empresa de refrigeração através de uma landing page responsiva e objetiva.",
    category: "frontend",
    problem:
      "A empresa precisava apresentar seus serviços de forma profissional e facilitar o contato com novos clientes.",

    solution:
      "Foi criada uma landing page focada nos serviços oferecidos, informações da empresa e contato.",

    result:
      "Uma página objetiva que apresenta os serviços de forma clara e direciona o visitante para o contato.",
    technologies: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "CSS", icon: "css" },
    ],
    features: [
      "Landing page responsiva",
      "Apresentação de serviços",
      "Seção de contato",
      "Design orientado à conversão",
    ],
    image: "/projects/refrigeracao.webp",
    demo: "https://refrigeracao.vercel.app/",
    status: "completed",
  },
];
