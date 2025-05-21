
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

import { ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
          <polyline points="14 2 14 8 20 8"/>
          <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/>
          <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/>
        </svg>
      ),
      title: "Python Development",
      description: "Custom Python solutions for various needs",
      features: ["Data Manipulation Scripts", "Basic Automation", "Python Applications"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
          <path d="M5 3v4"/>
          <path d="M19 17v4"/>
          <path d="M3 5h4"/>
          <path d="M17 19h4"/>
        </svg>
      ),
      title: "Game Development",
      description: "Simple games using Pygame and Unity",
      features: ["2D Game Creation", "Interactive Experiences", "Basic 3D Unity Projects"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5-5-4 4-3-3"/>
        </svg>
      ),
      title: "Data Visualization",
      description: "Transform data into visual insights",
      features: ["Charts and Graphs", "Seaborn Visualizations", "Data Analysis Reports"]
    }
  ];

  const projects = [
    {
      title: "3D Car Game",
      description: "A basic 3D car racing game developed with C# using Unity as a class project.",
      technologies: ["Unity", "C#", "3D Modeling"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing and analyzing data using Python libraries.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Hello, I'm <span className="text-brand-600">Rabins Kathariya</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600">
                Aspiring Python Developer & AI/ML Enthusiast
              </h2>
            </div>
            
            <p className="text-gray-600 max-w-2xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              I'm a Class 12 Computer Engineering student from Kailali, Nepal with a passion for programming. 
              Currently focused on Python development and exploring the exciting world of AI/ML.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
              <Link to="/portfolio">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3">
                  Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-3">
                  Contact Me
                </Button>
              </Link>
            </div>
            
            <div className="pt-4 animate-fadeIn" style={{ animationDelay: "0.7s" }}>
              <SocialLinks />
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="/lovable-uploads/ca6c3fe7-8d8b-40cb-9eb4-3184fcba63aa.png" 
                alt="Rabins Kathariya" 
                className="w-full max-w-md h-auto rounded-3xl border-4 border-white shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm a passionate programmer with strong focus on Python and emerging interest in AI/ML technologies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6 text-center">
              As a Class 12 Computer Engineering student from Nepal, I'm dedicated to expanding my skills in software development. 
              My expertise includes Python (NumPy, Pandas, Pygame, Seaborn, OpenCV), along with foundational knowledge in C, C++, and C#.
            </p>
            
            <div className="flex justify-center">
              <Link to="/about">
                <Button className="bg-transparent hover:bg-gray-100 text-brand-600 border border-brand-500">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
              <p className="text-gray-600">Check out some of my recent work</p>
            </div>
            <Link to="/portfolio" className="mt-4 md:mt-0">
              <Button className="bg-transparent hover:bg-gray-100 text-brand-600 border border-brand-500">
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">My Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Services I can provide to help with your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services">
              <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have a project in mind? Looking for a programming assistant or collaborator?
            I'm currently available for freelance work and interesting projects.
          </p>
          <Link to="/contact">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
