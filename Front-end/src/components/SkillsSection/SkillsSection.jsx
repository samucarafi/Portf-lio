const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "JavaScript",
        "React.js",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git & GitHub", "AWS", "Vercel", "Vite"],
    },
  ];

  return (
    <div className="section">
      <div className="section-title">🛠️ TECNOLOGIAS</div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
