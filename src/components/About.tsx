import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { MousePointerClick, Code2, Users, Target, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const cardsData = [
  {
    id: "profile",
    title: "Perfil Profesional",
    frontText: "Ingeniero de Sistemas (PUJ) especializado en desarrollo y gestión de proyectos.",
    backText: "Combino sólidos conocimientos técnicos en backend, análisis de datos y arquitectura de software con habilidades de comunicación y resolución de problemas para crear soluciones eficientes y centradas en el usuario. Nivel de inglés B2-C1.",
    icon: <Code2 className="w-8 h-8 text-primary mb-3" />
  },
  {
    id: "tech",
    title: "Experiencia Técnica",
    frontText: "Backend, Frontend, Bases de Datos y Herramientas Ágiles.",
    backText: "Desarrollo con Python, Java (Spring Boot), JavaScript, SQL y C++. Diseño de sistemas escalables, UI/UX en Figma, control de versiones (Git) y automatización de procesos.",
    icon: <Briefcase className="w-8 h-8 text-primary mb-3" />
  },
  {
    id: "leadership",
    title: "Liderazgo y Habilidades",
    frontText: "Scrum Master, Analista de Negocio y Trabajo en Equipo.",
    backText: "Experiencia traduciendo necesidades de negocio en soluciones técnicas robustas. Trabajo en equipo efectivo, adaptabilidad a entornos dinámicos y comunicación asertiva con equipos multidisciplinarios.",
    icon: <Users className="w-8 h-8 text-primary mb-3" />
  },
  {
    id: "goal",
    title: "Mi Objetivo",
    frontText: "Integrar creatividad y tecnología para generar impacto real.",
    backText: "Soy un profesional proactivo y autodidacta. Busco oportunidades desafiantes en desarrollo backend, ciencia de datos o full-stack, donde pueda aportar mi expertise técnico y seguir creciendo.",
    icon: <Target className="w-8 h-8 text-primary mb-3" />
  }
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showClickIndicator, setShowClickIndicator] = useState(true);
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const images = [
    "/fotoMe1.webp",
    "/fotoMe2.PNG",
    "/fotoMe3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowClickIndicator(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 w-full">
      {/* Left side: Avatar */}
      <div 
        className="w-48 h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 relative rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group flex-shrink-0 shadow-lg" 
        onClick={handleImageClick}
      >
        <Avatar className="w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </Avatar>
        {showClickIndicator && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 animate-pulse">
            <MousePointerClick className="w-10 h-10 text-white animate-bounce" />
          </div>
        )}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300",
                index === currentImageIndex ? 'bg-primary scale-125' : 'bg-primary/50 bg-white'
              )}
            />
          ))}
        </div>
      </div>

      {/* Right side: Interactive Cards Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {cardsData.map((card) => {
          const isFlipped = flippedId === card.id;
          
          return (
            <div 
              key={card.id}
              className={cn(
                "group relative w-full h-[240px] md:h-[260px] cursor-pointer [perspective:1000px]",
                isFlipped ? "z-20" : "z-0"
              )}
              onClick={() => setFlippedId(isFlipped ? null : card.id)}
            >
              <div className={cn(
                "w-full h-full transition-all duration-700 [transform-style:preserve-3d]",
                isFlipped 
                  ? "[transform:rotateY(180deg)_scale(1.05)] md:[transform:rotateY(180deg)_scale(1.1)] shadow-2xl" 
                  : "hover:-translate-y-1 shadow-sm hover:shadow-lg"
              )}>
                
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-card border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                  {card.icon}
                  <h3 className="font-bold text-lg md:text-xl mb-3 text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 px-2">{card.frontText}</p>
                  
                  <div className="absolute bottom-4 text-xs font-semibold text-primary/80 flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <MousePointerClick className="w-3.5 h-3.5 animate-pulse" />
                    Click para ver detalles
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card border-2 border-primary/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl dark:bg-card/90">
                  <h3 className="font-bold text-lg mb-4 text-primary">{card.title}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed px-1">
                    {card.backText}
                  </p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;

