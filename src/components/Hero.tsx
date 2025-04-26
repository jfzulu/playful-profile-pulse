
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Desarrollador de Software
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up delay-200">
            Apasionado por crear soluciones innovadoras y experiencias digitales únicas
          </p>
          <div className="flex justify-center gap-4 animate-slide-up delay-300">
            <Button className="bg-primary hover:bg-primary/90">
              Descargar CV
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Ver Proyectos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
