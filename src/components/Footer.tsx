
import { Link } from "react-router-dom";
import { Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-xl text-brand-600">Rabins<span className="text-gray-800">Kathariya</span></span>
            </Link>
            <p className="text-gray-600 mb-4">
              Class 12 Computer Engineering Student. Python Developer & AI/ML Enthusiast based in Kailali, Nepal.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-2" />
                <a href="mailto:insrab464@gmail.com" className="text-gray-600 hover:text-brand-600 transition-colors">
                  insrab464@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-2" />
                <a href="tel:+9779868375317" className="text-gray-600 hover:text-brand-600 transition-colors">
                  +977 9868375317
                </a>
              </li>
              <li className="flex items-center">
                <Facebook className="h-5 w-5 text-brand-500 mr-2" />
                <a 
                  href="https://www.facebook.com/rabins.kathariya.1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  facebook.com/rabins.kathariya.1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rabins Kathariya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
