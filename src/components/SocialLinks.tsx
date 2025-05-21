
import { Facebook, Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <a
        href="mailto:insrab464@gmail.com"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2 relative group"
        aria-label="Email"
      >
        <span className="absolute inset-0 bg-brand-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <Mail className="h-5 w-5 relative z-10" />
      </a>
      <a
        href="tel:+9779868375317"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2 relative group"
        aria-label="Phone"
      >
        <span className="absolute inset-0 bg-brand-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <Phone className="h-5 w-5 relative z-10" />
      </a>
      <a
        href="https://www.facebook.com/rabins.kathariya.1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2 relative group"
        aria-label="Facebook"
      >
        <span className="absolute inset-0 bg-brand-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <Facebook className="h-5 w-5 relative z-10" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-500 transition-colors duration-300 hover:scale-110 transform p-2 relative group"
        aria-label="Github"
      >
        <span className="absolute inset-0 bg-brand-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <Github className="h-5 w-5 relative z-10" />
      </a>
    </div>
  );
};

export default SocialLinks;
