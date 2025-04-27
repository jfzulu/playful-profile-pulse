import { Button } from "@/components/ui/button";
import ScrollIndicator from "@/components/ScrollIndicator";

const Hero = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-background overflow-hidden">
      {/* Imagen de fondo con efecto de superposición */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent animate-fade-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]">
            Ingeniero de Sistemas
            <span className="block text-3xl md:text-5xl mt-2 text-foreground/90">
              & Desarrollador de Software
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 animate-slide-up delay-200">
            Apasionado por crear soluciones innovadoras y experiencias digitales únicas
          </p>
          <div className="flex justify-center gap-4 animate-slide-up delay-300">
            <Button 
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="/CV-JoseZuluaga-IngenieroSistemas.pdf" download>
                Descargar CV
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects" onClick={scrollToProjects}>
                Ver Proyectos
              </a>
            </Button>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
