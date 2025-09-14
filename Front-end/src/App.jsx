import { useEffect, useState } from "react";
import "./App.css";
import TerminalHeader from "./components/TerminalHeader/TerminalHeader";
import ComandLine from "./components/ComandLine/ComandLine";
import ASCIIArt from "./components/ASCIIArt/ASCIIArt";
import Navigation from "./components/Navigation/Navigation";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";

function App() {
  const [activeSection, setActiveSection] = useState("projects");
  const useTypingAnimation = () => {
    const [currentCommand, setCurrentCommand] = useState("");
    const commands = [
      "npm install",
      "npm create vite@latest my-app",
      "npm run build",
      "git push origin main",
      "git commit -m 'Initial commit'",
      "code .",
      "npm run dev",
    ];

    useEffect(() => {
      let commandIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeCommand = () => {
        const command = commands[commandIndex];

        if (!isDeleting) {
          setCurrentCommand(command.substring(0, charIndex + 1) + "_");
          charIndex++;

          if (charIndex === command.length) {
            setTimeout(() => {
              isDeleting = true;
            }, 2000);
          }
        } else {
          setCurrentCommand(command.substring(0, charIndex) + "_");
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
          }
        }
      };

      const interval = setInterval(typeCommand, isDeleting ? 50 : 100);
      return () => clearInterval(interval);
    }, []);

    return currentCommand;
  };
  const typingCommand = useTypingAnimation();

  const renderSection = () => {
    switch (activeSection) {
      case "projects":
        return <ProjectsSection />;
      case "experience":
        return <ExperienceSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <ProjectsSection />;
    }
  };
  const getSectionCommand = () => {
    const commands = {
      projects: "cat projects.md",
      experience: "history | grep experience",
      skills: "ls -la skills/",
      contact: "curl -X GET /contact",
    };
    return commands[activeSection];
  };
  return (
    <div className="terminal-container">
      <TerminalHeader />

      <div className="terminal-content">
        <ComandLine command="whoami" />
        <ASCIIArt />
        <ProfileSection />
        <Navigation
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <ComandLine command={getSectionCommand()} />
        {renderSection()}
        <ComandLine command={typingCommand} isTyping={true} />
      </div>
    </div>
  );
}

export default App;
