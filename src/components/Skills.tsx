
import { Card } from "@/components/ui/card";

const skills = [
  {
    name: "Java",
    description: "Desarrollo de aplicaciones backend y sistemas empresariales",
    level: "Avanzado"
  },
  {
    name: "Python",
    description: "Automatización, análisis de datos y desarrollo web con Django",
    level: "Intermedio"
  },
  {
    name: "SQL",
    description: "Diseño y optimización de bases de datos relacionales",
    level: "Avanzado"
  },
  {
    name: "React",
    description: "Desarrollo de interfaces de usuario modernas y responsivas",
    level: "Avanzado"
  },
  {
    name: "Node.js",
    description: "Construcción de APIs RESTful y servicios backend",
    level: "Intermedio"
  },
  {
    name: "TypeScript",
    description: "Desarrollo frontend y backend con tipado estático",
    level: "Intermedio"
  }
];

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <Card 
          key={index}
          className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <h3 className="text-xl font-semibold mb-2 text-primary">{skill.name}</h3>
          <p className="text-gray-600 mb-2">{skill.description}</p>
          <span className="text-sm font-medium text-primary/80">
            Nivel: {skill.level}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
