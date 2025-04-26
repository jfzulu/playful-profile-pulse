
import { Avatar } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-48 h-48 relative rounded-full overflow-hidden">
        <Avatar className="w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Profile"
            className="object-cover"
          />
        </Avatar>
      </div>
      <div className="flex-1 space-y-4">
        <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
          Soy un desarrollador apasionado por crear soluciones innovadoras y experiencias digitales únicas. 
          Me especializo en el desarrollo web full-stack y disfruto trabajando con tecnologías modernas para 
          construir aplicaciones robustas y escalables.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed animate-fade-in delay-200">
          Mi objetivo es combinar mi conocimiento técnico con mi creatividad para desarrollar 
          soluciones que impacten positivamente en la vida de los usuarios.
        </p>
      </div>
    </div>
  );
};

export default About;
