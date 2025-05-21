
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import SkillBar from "@/components/SkillBar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

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

  const skills = [
    { skill: "Python", level: 85 },
    { skill: "NumPy & Pandas", level: 75 },
    { skill: "Pygame", level: 70 },
    { skill: "Data Visualization", level: 65 },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Enhanced with modern UI */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="space-y-8">
              {/* Text gradient for name */}
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 rounded-full text-sm font-medium mb-2 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                Hello, I'm Rabins Kathariya
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <span className="text-gray-800">Aspiring </span>
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Python Developer
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                A Class 12 Computer Engineering student passionate about programming, 
                currently exploring the exciting worlds of AI/ML and data visualization.
              </p>
              
              {/* CTA buttons with improved styling */}
              <div className="flex flex-wrap gap-5 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                <Link to="/portfolio">
                  <Button className="bg-brand-500 hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-brand-500/25 rounded-xl text-white px-6 py-6 h-auto">
                    Explore My Work 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-white border-2 border-gray-200 hover:border-brand-200 hover:bg-gray-50 shadow-lg transition-all duration-300 rounded-xl text-gray-700 px-6 py-6 h-auto">
                    Get In Touch
                  </Button>
                </Link>
              </div>
              
              {/* Enhanced social links */}
              <div className="pt-6 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-sm font-medium">Connect with me:</span>
                  <SocialLinks />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-100 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full"></div>
                
                {/* Main image with enhanced styling - Now using Avatar for circular profile */}
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-500/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
                  <div className="bg-white p-4 rounded-3xl border-4 border-white shadow-2xl relative z-10">
                    <Avatar className="h-[320px] w-[320px] rounded-full border-8 border-white shadow-lg overflow-hidden">
                      <AvatarImage 
                        src="https://i.postimg.cc/15fTbwVH/IMG20231222122816.jpg" 
                        alt="Rabins Kathariya"
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl font-bold text-gray-400">RK</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                {/* Tech stack tags */}
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                  <span className="h-3 w-3 bg-brand-500 rounded-full"></span>
                  <span className="text-sm font-medium">Python</span>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2">
                  <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
                  <span className="text-sm font-medium">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview - Enhanced with modern UI */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                My Journey & Skills
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-brand-400 rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              I'm a passionate programmer with strong focus on Python and emerging interest in AI/ML technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-gray-600 leading-relaxed">
                As a Class 12 Computer Engineering student from Nepal, I'm dedicated to expanding my skills in software development. 
                My expertise includes Python (NumPy, Pandas, Pygame, Seaborn, OpenCV), along with foundational knowledge in C, C++, and C#.
              </p>
              
              <div className="space-y-4">
                {skills.map((item, index) => (
                  <SkillBar key={index} skill={item.skill} level={item.level} />
                ))}
              </div>
              
              <div className="flex justify-start mt-4">
                <Link to="/about">
                  <Button className="group bg-transparent border border-brand-500 text-brand-600 hover:bg-brand-50 transition-all">
                    <span>Learn More About Me</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 mx-auto lg:mx-0">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-brand-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-blue-100 rounded-lg z-0"></div>
                
                {/* Image with shadow and styling */}
                <div className="relative z-10 shadow-xl rounded-lg overflow-hidden border-4 border-white">
                  <img 
                    src="/lovable-uploads/ca6c3fe7-8d8b-40cb-9eb4-3184fcba63aa.png" 
                    alt="Rabins Kathariya - Programming Skills" 
                    className="w-full h-auto max-w-sm object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Enhanced with modern UI */}
      <section className="py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              My Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Check out some of my recent work as I continue to build my portfolio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/portfolio">
              <Button className="group bg-transparent border border-blue-500 text-blue-600 hover:bg-blue-50 transition-all">
                <span>View All Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced with modern UI */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50 to-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              What I Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                My Services
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Services I can provide to help with your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link to="/services">
              <Button className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-green-500/25 rounded-xl px-6 py-3">
                <span>Explore All Services</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA - Enhanced with modern UI */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-blue-500/10 z-0"></div>
        
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -right-20 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-50 to-blue-100 text-brand-600 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Let's Work Together
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-500 to-blue-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600">
                Have a project in mind? Looking for a programming assistant or collaborator?
                I'm currently available for freelance work and interesting projects.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg hover:shadow-brand-500/25 rounded-xl px-8 py-4 w-full sm:w-auto text-lg">
                  Contact Me
                </Button>
              </Link>
              <a href="mailto:insrab464@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium flex items-center">
                <span>insrab464@gmail.com</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
