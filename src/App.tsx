import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#F5F4F1] text-[#1F1A16] selection:bg-[#cbb59d] selection:text-black">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <HighlightsSection />
      <ContactSection />
    </div>
  );
}

export default App;