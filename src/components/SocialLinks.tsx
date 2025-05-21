
import { Facebook, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a
        href="mailto:insrab464@gmail.com"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href="tel:+9779868375317"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2"
        aria-label="Phone"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://www.facebook.com/rabins.kathariya.1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2"
        aria-label="Github"
      >
        <Github className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
