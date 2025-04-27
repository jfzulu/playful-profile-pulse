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
        <p className="text-lg text-foreground/90 leading-relaxed animate-fade-in text-justify">
          Ingeniero de Sistemas de la Pontificia Universidad Javeriana, con énfasis en desarrollo de software. Apasionado por el diseño e implementación de tecnológicas innovadoras. Mi formación académica me ha permitido adquirir sólidos conocimientos en desarrollo de software, comunicaciones y análisis de negocio. Me destaco por mí análisis de problemas y personas, permitiéndome una comunicación asertiva, trabajo en equipo y soluciones eficientes. Interesado en ampliar mi camino profesional de forma más exigente, mediante las experiencias que me aporten un crecimiento laboral, nuevo conocimiento técnico y avance en mi proyecto de vida. Amante de los retos y desafíos, con una alta adaptabilidad a entornos, personas y actividades, siendo proactivo y autodidacta generando una disposición abierta al aprendizaje. Experiencia utilizando tecnologías como Git, SQL, Python, Java, C++, JavaScript.
        </p>
        <p className="text-lg text-foreground/90 leading-relaxed animate-fade-in delay-200">
          Mi objetivo es combinar mi conocimiento técnico con mi creatividad para desarrollar 
          soluciones que impacten positivamente en la vida de los usuarios.
        </p>
      </div>
    </div>
  );
};

export default About;
