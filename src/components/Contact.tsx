import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Check
} from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "jfzulu.dev@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Correo copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("No se pudo copiar el correo");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full relative group"
          onClick={copyToClipboard}
          asChild
        >
          <a href={`mailto:${email}`} onClick={(e) => {
            e.preventDefault();
            copyToClipboard();
          }}>
            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Mail className="w-5 h-5" />}
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href="https://www.linkedin.com/in/jfzulu/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          asChild
        >
          <a href="https://github.com/jfzulu" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
