const Navigation = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: "services", label: "./services.sh" },
    { id: "quote", label: "./get_quote.sh" },
    { id: "projects", label: "./projects.sh" },
    //{ id: "experience", label: "./experience.sh" },
    { id: "skills", label: "./skills.sh" },
    { id: "contact", label: "./contact.sh" },
  ];

  return (
    <div className="nav-commands">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`nav-cmd ${activeSection === section.id ? "active" : ""}`}
          onClick={() => onSectionChange(section.id)}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
