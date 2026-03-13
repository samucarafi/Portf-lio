import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "🛍️ Royal Parfums",
      description:
        "E-commerce completo de perfumes com catálogo de produtos, sistema de pedidos, cálculo de frete e pagamento integrado ao Mercado Pago. Possui painel administrativo para gerenciamento de produtos, usuários e pedidos.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Mercado Pago API",
      ],
      link: "https://www.royalparfums.com.br",
    },
    {
      title: "🎮 Secret Words",
      description: "Jogo Secret Word desenvolvido com React",
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://samucarafi.github.io/secretWord/",
    },
    {
      title: "☕ Cafeteria",
      description: "Projeto de Site para uma Cafeteria.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://samucarafi.github.io/Cafeteria/",
    },
    {
      title: "🔵 Bolinhas",
      description: "Exemplo de utilização de programação orientada a objetos.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://samucarafi.github.io/Bolinhas/",
    },
    {
      title: "❄️ Landing-Page Refrigeração",
      description: "Criação de Landing-Page para empresa de Refrigeração",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://refrigeracao.vercel.app/",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">📁 PROJETOS</div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
