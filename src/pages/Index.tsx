import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Hero Section - Enhanced with modern UI */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="space-y-8">
              {/* Text gradient for name */}
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 rounded-full text-sm font-medium mb-2 animate-fadeInDown stagger-1">
                Hello, I'm Rabins Kathariya
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp stagger-2">
                <span className="text-gray-800">Aspiring </span>
                <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
                  Python Developer
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl animate-fadeInUp stagger-3">
                A Class 12 Computer Engineering student passionate about programming, 
                currently exploring the exciting worlds of AI/ML and data visualization.
              </p>
              
              {/* CTA buttons with improved styling */}
              <div className="flex flex-wrap gap-5 animate-fadeInUp stagger-4">
                <Link to="/portfolio">
                  <Button className="bg-brand-500 hover:bg-brand-600 transition-all duration-300 shadow-lg hover:shadow-brand-500/25 rounded-xl text-white px-6 py-6 h-auto hover-lift">
                    Explore My Work 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-white border-2 border-gray-200 hover:border-brand-200 hover:bg-gray-50 shadow-lg transition-all duration-300 rounded-xl text-gray-700 px-6 py-6 h-auto hover-lift">
                    Get In Touch
                  </Button>
                </Link>
              </div>
              
              {/* Enhanced social links */}
              <div className="pt-6 animate-fadeInUp stagger-5">
                <div className="flex items-center gap-3 text-gray-500">
                  <span className="text-sm font-medium">Connect with me:</span>
                  <SocialLinks />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fadeInRight stagger-3">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-100 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-blue-100 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                {/* Profile image with circular Avatar component */}
                <div className="relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-blue-500/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
                  <div className="relative z-10 p-4 bg-white rounded-3xl border-4 border-white shadow-2xl hover-lift">
                    <Avatar className="h-80 w-80">
                      <AvatarImage src="https://i.postimg.cc/15fTbwVH/IMG20231222122816.jpg" alt="Rabins Kathariya" />
                      <AvatarFallback>RK</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                
                {/* Tech stack tags */}
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 animate-bounceIn stagger-6">
                  <span className="h-3 w-3 bg-brand-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">Python</span>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2 animate-bounceIn stagger-5">
                  <span className="h-3 w-3 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview with scroll animations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I'm a passionate programmer with strong focus on Python and emerging interest in AI/ML technologies.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="slideLeft" delay={200}>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 text-center">
                As a Class 12 Computer Engineering student from Nepal, I'm dedicated to expanding my skills in software development. 
                My expertise includes Python (NumPy, Pandas, Pygame, Seaborn, OpenCV), along with foundational knowledge in C, C++, and C#.
              </p>
              
              <div className="flex justify-center">
                <Link to="/about">
                  <Button className="bg-transparent hover:bg-gray-100 text-brand-600 border border-brand-500 hover-lift">
                    Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Featured Projects with scroll animations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Projects</h2>
                <p className="text-gray-600">Check out some of my recent work</p>
              </div>
              <Link to="/portfolio" className="mt-4 md:mt-0">
                <Button className="bg-transparent hover:bg-gray-100 text-brand-600 border border-brand-500 hover-lift">
                  View All Projects
                </Button>
              </Link>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={index * 200}
              >
                <div className="hover-lift">
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                  />
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with scroll animations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="scale">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">My Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Services I can provide to help with your projects
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimationWrapper 
                key={index}
                animation="scale"
                delay={index * 150}
              >
                <div className="hover-lift hover-glow">
                  <ServiceCard 
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    features={service.features}
                  />
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <ScrollAnimationWrapper animation="bounce" delay={600}>
            <div className="flex justify-center mt-12">
              <Link to="/services">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 hover-lift">
                  Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Contact CTA with scroll animations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper animation="blur">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Work Together</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Have a project in mind? Looking for a programming assistant or collaborator?
              I'm currently available for freelance work and interesting projects.
            </p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper animation="scale" delay={300}>
            <div>
              <Link to="/contact">
                <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 text-lg hover-lift hover-glow">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
