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
    name: "Excel",
    description: "Análisis de datos, automatización y visualización con fórmulas avanzadas y VBA",
    level: "Avanzado"
  },
  {
    name: "JavaScript",
    description: "Desarrollo web frontend y backend, aplicaciones interactivas y dinámicas",
    level: "Intermedio"
  },
  {
    name: "C++",
    description: "Desarrollo de sistemas y aplicaciones de alto rendimiento",
    level: "Intermedio"
  },
  {
    name: "Inglés",
    description: "Comunicación fluida, comprensión de textos técnicos y presentaciones profesionales",
    level: "B2-C1"
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
          <p className="text-foreground/80 mb-2">{skill.description}</p>
          <span className="text-sm font-medium text-primary/80">
            Nivel: {skill.level}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default Skills;
