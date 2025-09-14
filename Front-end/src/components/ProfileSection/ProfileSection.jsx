const ProfileSection = () => {
  const stats = [
    { number: "1+", label: "Anos Exp." },
    { number: "5+", label: "Projetos" },
    { number: "10+", label: "Tecnologias" },
    { number: "100%", label: "Dedicação" },
  ];

  return (
    <div className="profile-section">
      <div className="profile-image-container">
        <div className="profile-image">
          <div className="profile-status"></div>
        </div>
      </div>
      <div className="profile-info">
        <div className="profile-name">Samuel Rafino</div>
        <div className="profile-title">Full Stack Web Developer</div>
        <div className="output">
          <p>🚀 Desenvolvedor Web Full Stack</p>
          <p>📍 Niterói RJ, Brasil</p>
          <p>💻 Transformando ideias em código</p>
        </div>
        <div className="profile-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
