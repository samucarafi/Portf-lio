const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer - TechCorp (2022-2024)",
      description: `• Liderança técnica de equipe de 6 desenvolvedores
• Arquitetura e desenvolvimento de microserviços
• Implementação de CI/CD e práticas DevOps
• Mentoria de desenvolvedores júnior`,
    },
    {
      title: "Full Stack Developer - StartupXYZ (2020-2022)",
      description: `• Desenvolvimento de MVP para fintech
• Integração com APIs de pagamento
• Otimização de performance e SEO
• Colaboração direta com UX/UI designers`,
    },
    {
      title: "Frontend Developer - WebAgency (2019-2020)",
      description: `• Desenvolvimento de sites responsivos
• Implementação de animações e interações
• Manutenção de sistemas legados
• Suporte técnico a clientes`,
    },
  ];

  return (
    <div className="section">
      <div className="section-title">💼 EXPERIÊNCIA</div>
      {experiences.map((exp, index) => (
        <div key={index} className="project-card">
          <div className="project-title">{exp.title}</div>
          <div
            className="project-description"
            style={{ whiteSpace: "pre-line" }}
          >
            {exp.description}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ExperienceSection;
