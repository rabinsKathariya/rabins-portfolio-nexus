
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Portfolio = () => {
  const projects = [
    {
      title: "3D Car Game",
      description: "A basic 3D car racing game developed with C# using Unity as a class project. Features include track racing, basic physics, and time trials.",
      technologies: ["Unity", "C#", "3D Modeling"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Interactive dashboard for visualizing and analyzing datasets using Python libraries. Created to practice data visualization techniques.",
      technologies: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pygame Space Shooter",
      description: "A simple 2D space shooter game developed using Pygame. Features include player movement, enemy ships, and scoring system.",
      technologies: ["Python", "Pygame"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Student Database System",
      description: "A command-line application for managing student records with features for adding, updating, and querying student information.",
      technologies: ["Python", "SQLite"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Weather Data Visualizer",
      description: "A tool that fetches weather data and generates visualizations to show trends and patterns over time.",
      technologies: ["Python", "Matplotlib", "APIs"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Basic Image Processing Tool",
      description: "A simple application that applies various filters and transformations to images using OpenCV.",
      technologies: ["Python", "OpenCV", "NumPy"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Portfolio Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">My Portfolio</h1>
              <p className="text-gray-600 text-lg">
                A collection of projects showcasing my skills and learning journey in programming and development.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      {/* Portfolio Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation="scale"
                delay={index * 150}
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
      
      {/* Project Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="blur">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">My Project Approach</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here's how I typically approach development projects
              </p>
            </div>
          </ScrollAnimationWrapper>

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
              <ScrollAnimationWrapper 
                key={index} 
                animation="slideLeft"
                delay={index * 200}
              >
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-500 text-white font-semibold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="scale">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md hover-lift">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Learning & Growth</h2>
              <p className="text-gray-600 mb-6">
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
                  <ScrollAnimationWrapper 
                    key={index} 
                    animation="slideLeft" 
                    delay={index * 100}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-600">{item}</p>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
