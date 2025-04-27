import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import MatrixBackground from "@/components/MatrixBackground";

const educationItems = [
  {
    title: "Universidad Pontificia Javeriana",
    date: "2019 - 2025",
    description: "Pregrado en Ingeniería de Sistemas",
    type: "education" as const
  },
  {
    title: "Wall Street English",
    date: "2017",
    description: "Estudio en Inglés",
    type: "education" as const
  }
];

const experienceItems = [
  {
    title: "Desarrollador Full Stack",
    date: "2022 - 2023",
    description: "Desarrollo de aplicaciones personalizadas con Spring Boot y React",
    type: "experience" as const
  },
  {
    title: "Analista de negocio & Scrummaster",
    date: "2022",
    description: "Gestión de proyectos y análisis de requerimientos",
    type: "experience" as const
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con React y Node.js",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con autenticación",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    title: "Gestión de farmacia",
    description: "Aplicación para la gestión de inventario y ventas de una farmacia",
    technologies: ["React", "Node.js", "Html", "CSS"],
    githubUrl: "https://github.com/jfzulu/portfolio-jfzulu",
    liveUrl:"https://portfolio-jfzulu.vercel.app/",
    imageUrl: "/DrogueriaProject.PNG"
  }
];

const Index = () => {
  return (
    <div className="relative bg-background">
      <MatrixBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Acerca de mí</h2>
            <About />
          </div>
        </section>

        <section id="skills" className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Habilidades</h2>
            <Skills />
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Educación</h2>
            <Timeline items={educationItems} />
          </div>
        </section>

        <section id="experience" className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Experiencia</h2>
            <Timeline items={experienceItems} />
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">Contacto</h2>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
