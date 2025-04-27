import { useState, useEffect } from 'react';
import { FileText, Book, Briefcase, Code, Mail, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/dragon-logo.svg" alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-primary">JFZULU</h1>
          </div>
          <div className="flex items-center gap-6">
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
              className={`flex items-center gap-2 ${activeSection === 'about' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <FileText size={20} />
              <span className="hidden md:inline">Acerca de mí</span>
            </Button>
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'skills' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              <Book size={20} />
              <span className="hidden md:inline">Habilidades</span>
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
            <Button
              variant="ghost"
              className={`flex items-center gap-2 ${activeSection === 'contact' ? 'text-primary' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <Mail size={20} />
              <span className="hidden md:inline">Contacto</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
