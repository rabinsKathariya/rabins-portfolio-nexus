import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "3D Car Game",
      description: "A basic 3D car racing game developed with C# using Unity as a class project. Features include track racing, basic physics, and time trials.",
      technologies: ["Unity", "C#", "3D Modeling"],
      image: null
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing and analyzing datasets using Python libraries. Created to practice data visualization techniques.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      image: null
    },
    {
      title: "Pygame Space Shooter",
      description: "A simple 2D space shooter game developed using Pygame. Features include player movement, enemy ships, and scoring system.",
      technologies: ["Python", "Pygame"],
      image: null
    },
    {
      title: "Student Database System",
      description: "A command-line application for managing student records with features for adding, updating, and querying student information.",
      technologies: ["Python", "SQLite"],
      image: null
    },
    {
      title: "Weather Data Visualizer",
      description: "A tool that fetches weather data and generates visualizations to show trends and patterns over time.",
      technologies: ["Python", "Matplotlib", "APIs"],
      image: null
    },
    {
      title: "Basic Image Processing Tool",
      description: "A simple application that applies various filters and transformations to images using OpenCV.",
      technologies: ["Python", "OpenCV", "NumPy"],
      image: null
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Portfolio Hero - Enhanced with modern UI */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-brand-50 to-brand-100 text-brand-600 rounded-full text-sm font-medium mb-4 animate-fadeIn">
              My Projects
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              My Portfolio
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              A collection of projects showcasing my skills and learning journey in programming and development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Projects - Enhanced with modern UI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Process - Enhanced with modern UI */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-50 rounded-full opacity-70 blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fadeIn">
              My Approach
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              My Project Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's how I typically approach development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Research & Planning",
                description: "Understanding requirements and planning the project structure."
              },
              {
                step: "2",
                title: "Design & Architecture",
                description: "Creating the basic design and technical architecture."
              },
              {
                step: "3",
                title: "Development",
                description: "Writing clean, maintainable code to implement features."
              },
              {
                step: "4",
                title: "Testing & Refinement",
                description: "Thoroughly testing and refining the final product."
              }
            ].map((item, index) => (
              <div key={index} 
                className="bg-white p-8 rounded-xl shadow-md text-center relative overflow-hidden group hover:shadow-lg transition-all border border-gray-100">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-blue-400"></div>
                
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 text-white font-semibold text-lg mb-5 shadow-md group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth - Enhanced with modern UI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-100 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent -z-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent -z-10"></div>
            
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50 to-green-100 text-green-600 rounded-full text-sm font-medium mb-4 animate-fadeIn">
                Growth Mindset
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Learning & Growth</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-full mx-auto mb-6"></div>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              Each project represents a learning opportunity for me. As a student, I focus on:
            </p>
            
            <div className="space-y-4">
              {[
                "Building practical skills through hands-on projects",
                "Learning new technologies and frameworks",
                "Following best practices in software development",
                "Solving real-world problems through code",
                "Continuous improvement and refinement of skills"
              ].map((item, index) => (
                <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="ml-4 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
