
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
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
      features: [
        "Data manipulation scripts and tools",
        "Basic automation solutions",
        "Small to medium Python applications",
        "Command-line utilities",
        "Simple database management systems"
      ]
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
      features: [
        "2D game creation with Pygame",
        "Interactive experiences and simulations",
        "Basic game mechanics implementation",
        "Simple arcade-style games",
        "Basic 3D Unity projects"
      ]
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
      features: [
        "Charts and graphs creation",
        "Seaborn visualizations",
        "Data analysis reports",
        "Interactive dashboards",
        "Visual data representation"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect width="18" height="18" x="3" y="3" rx="2"/>
          <path d="M7 7h10"/>
          <path d="M7 12h5"/>
          <path d="M7 17h10"/>
        </svg>
      ),
      title: "Script Automation",
      description: "Automate repetitive tasks with Python",
      features: [
        "Task automation scripts",
        "File organization and processing",
        "Batch processing solutions",
        "Data collection automation",
        "Simple workflow automation"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
          <path d="M3 12v5h16a2 2 0 0 1 0 4H3v-4"/>
        </svg>
      ),
      title: "OpenCV Projects",
      description: "Basic image processing applications",
      features: [
        "Image filtering and transformations",
        "Basic object detection",
        "Image analysis tools",
        "Face detection implementations",
        "Simple computer vision projects"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m10 7 5 5-5 5"></path>
        </svg>
      ),
      title: "Project Assistance",
      description: "Support for your programming projects",
      features: [
        "Debugging help",
        "Code review and optimization",
        "Problem-solving assistance",
        "Technical consultation",
        "Learning and implementation support"
      ]
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Services Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fadeInDown">My Services</h1>
            <p className="text-gray-600 text-lg animate-fadeInUp stagger-2">
              Here are the programming and development services I can provide to help with your projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`animate-fadeInUp stagger-${(index % 3) + 1} hover-lift hover-glow`}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How I Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How I Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My approach to delivering quality services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Understanding Your Needs",
                  description: "I start by thoroughly understanding your requirements to ensure the solution meets your specific needs."
                },
                {
                  title: "Clear Communication",
                  description: "Regular updates and clear communication throughout the project to keep you informed of progress."
                },
                {
                  title: "Quality Focus",
                  description: "Emphasizing clean, efficient code and high-quality deliverables for every project I work on."
                },
                {
                  title: "Timely Delivery",
                  description: "Commitment to delivering projects on schedule while maintaining quality standards."
                }
              ].map((item, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md animate-fadeInUp stagger-${index + 2} hover-lift`}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Tech Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to deliver services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                "Python", "NumPy", "Pandas", "Pygame",
                "Seaborn", "Matplotlib", "OpenCV", "SQLite",
                "C", "C++", "C#", "Unity"
              ].map((tech, index) => (
                <div key={index} className={`bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow animate-scaleIn stagger-${index + 1} hover-lift`}>
                  <span className="text-gray-800 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fadeInUp">Ready to Start a Project?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90 animate-fadeInUp stagger-2">
            If you're interested in working together or have questions about my services,
            I'd love to hear from you. Let's create something great together!
          </p>
          <div className="animate-bounceIn stagger-3">
            <Link to="/contact">
              <Button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-3 text-lg hover-lift">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
