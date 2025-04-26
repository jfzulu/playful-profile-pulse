import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ProjectCard from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ScrollIndicator";

const educationItems = [
  {
    title: "Universidad Example",
    date: "2018 - 2022",
    description: "Ingeniería en Informática",
    type: "education" as const
  },
  {
    title: "Bootcamp de Desarrollo Web",
    date: "2022",
    description: "Especialización en desarrollo web full-stack",
    type: "education" as const
  }
];

const experienceItems = [
  {
    title: "Desarrollador Full Stack",
    date: "2022 - Presente",
    description: "Desarrollo de aplicaciones web utilizando React y Node.js",
    type: "experience" as const
  },
  {
    title: "Desarrollador Frontend",
    date: "2021 - 2022",
    description: "Desarrollo de interfaces de usuario con React y TypeScript",
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
  }
];

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <Hero />
      <ScrollIndicator />
      
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Acerca de mí</h2>
          <About />
        </div>
      </section>

      <section id="skills" className="py-20 bg-white/50">
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

      <section id="experience" className="py-20 bg-white/50">
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

      <section id="contact" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Contacto</h2>
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Index;
