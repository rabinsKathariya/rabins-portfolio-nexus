
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="page-transition">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-500 mb-4 animate-bounceIn">404</h1>
          <p className="text-2xl md:text-3xl text-gray-800 font-medium mb-6 animate-fadeInUp stagger-2">
            Oops! Page not found
          </p>
          <p className="text-gray-600 max-w-md mx-auto mb-8 animate-fadeInUp stagger-3">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="animate-scaleIn stagger-4">
            <Link to="/">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 hover-lift hover-glow">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
