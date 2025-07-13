import { Avatar } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showClickIndicator, setShowClickIndicator] = useState(true);
  const images = [
    "/fotoMe1.webp",
    "/fotoMe2.PNG",
    "/fotoMe3.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // 15 segundos

    return () => clearInterval(timer);
  }, []);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowClickIndicator(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-48 h-48 relative rounded-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group" onClick={handleImageClick}>
        <Avatar className="w-full h-full">
          <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="object-cover w-full h-full transition-opacity duration-500"
          />
        </Avatar>
        {showClickIndicator && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 animate-pulse">
            <MousePointerClick className="w-8 h-8 text-white animate-bounce" />
          </div>
        )}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-primary scale-125' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <div className="space-y-2 animate-fade-in">
          <p className="text-lg text-foreground/90 leading-relaxed text-justify">
            Ingeniero de Sistemas (Pontificia Universidad Javeriana) con especialización en desarrollo de software y pasión por la innovación tecnológica. Combino sólidos conocimientos técnicos en backend, análisis de datos y arquitectura de software con habilidades de comunicación y resolución de problemas para crear soluciones eficientes y centradas en el usuario.
          </p>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mt-2">🔹 Mis fortalezas:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <span className="font-semibold">Experiencia técnica:</span> Desarrollo con Python, Java, JavaScript, SQL y C++, manejo de versiones (Git) y diseño de sistemas escalables.
              </li>
              <li>
                <span className="font-semibold">Enfoque analítico:</span> Capacidad para traducir necesidades de negocio en soluciones técnicas robustas, con experiencia en análisis de datos y optimización de procesos.
              </li>
              <li>
                <span className="font-semibold">Habilidades colaborativas:</span> Trabajo en equipo efectivo, adaptabilidad a entornos dinámicos y comunicación asertiva con equipos multidisciplinarios.
              </li>
            </ul>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mt-2">🔹 Lo que me define:</h3>
            <p className="text-foreground/90 text-justify">
              Soy un profesional proactivo y autodidacta, con mentalidad de crecimiento y pasión por los retos que impulsen mi desarrollo. Mi objetivo es integrar creatividad y tecnología para construir productos que generen impacto real, siempre con foco en la experiencia del usuario.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mt-2">🔹 Busco:</h3>
            <p className="text-foreground/90 text-justify">
              Oportunidades desafiantes en desarrollo backend, ciencia de datos o full-stack, donde pueda aportar mi expertise técnico y seguir creciendo en un entorno innovador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
