import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl
}: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Github size={16} />
                GitHub
              </Button>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="flex items-center gap-2">
                <Link size={16} />
                Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
