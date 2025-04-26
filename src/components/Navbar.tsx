
import { useState } from 'react';
import { FileText, Book, Briefcase, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">Portfolio</h1>
          <div className="flex gap-6">
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'home' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <FileText size={20} />
              <span className="hidden md:inline">Inicio</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'education' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('education')}
            >
              <Book size={20} />
              <span className="hidden md:inline">Educación</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'experience' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('experience')}
            >
              <Briefcase size={20} />
              <span className="hidden md:inline">Experiencia</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'projects' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              <Code size={20} />
              <span className="hidden md:inline">Proyectos</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
