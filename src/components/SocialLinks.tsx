
import { Facebook, Mail, Phone } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="mailto:insrab464@gmail.com"
        className="hover:text-brand-500 transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href="tel:+9779868375317"
        className="hover:text-brand-500 transition-colors"
        aria-label="Phone"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://www.facebook.com/rabins.kathariya.1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-500 transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
