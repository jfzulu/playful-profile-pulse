
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail
} from "lucide-react";

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={() => setShowEmail(!showEmail)}
        >
          <Mail className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
        </Button>
      </div>
      {showEmail && (
        <div className="animate-fade-in">
          <p className="text-gray-600">tucorreo@example.com</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
