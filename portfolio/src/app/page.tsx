import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
