
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillBar from "@/components/SkillBar";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const skills = [
    { skill: "Python", level: 85 },
    { skill: "NumPy & Pandas", level: 75 },
    { skill: "Pygame", level: 70 },
    { skill: "Seaborn & Data Visualization", level: 65 },
    { skill: "OpenCV", level: 60 },
    { skill: "C Programming", level: 65 },
    { skill: "C++", level: 55 },
    { skill: "C#", level: 50 },
    { skill: "Unity", level: 45 },
    { skill: "AI/ML", level: 40 },
  ];

  const education = [
    {
      degree: "Class 12 Computer Engineering",
      institution: "Nepal Technical Education Board",
      duration: "2022 - Present",
      description: "Currently pursuing computer engineering with focus on programming and software development."
    },
    {
      degree: "Class 10",
      institution: "School Education Board, Nepal",
      duration: "2020 - 2022",
      description: "Completed secondary education with strong foundation in science and mathematics."
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
              <p className="text-gray-600 text-lg">
                I'm Rabins Kathariya, a Class 12 Computer Engineering student from Kailali, Nepal, 
                passionate about programming and technology.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="slideLeft">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-500/20 rounded-xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800" 
                  alt="Python Programming" 
                  className="rounded-xl shadow-lg relative z-10 w-full h-auto hover-lift"
                />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slideRight" delay={200}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">My Journey</h2>
                  <p className="text-gray-600 mb-4">
                    My fascination with computers began at a young age, which led me to pursue computer engineering. 
                    I'm particularly passionate about programming and problem-solving using code.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Python has become my language of choice due to its versatility and powerful libraries. 
                    I enjoy working with NumPy and Pandas for data manipulation, Pygame for creating simple games, 
                    and Seaborn for visualization.
                  </p>
                  <p className="text-gray-600">
                    Currently, I'm expanding my knowledge into the exciting world of Artificial Intelligence 
                    and Machine Learning, which I believe will be crucial technologies in the future.
                  </p>
                </div>
                
                <ScrollAnimationWrapper animation="scale" delay={400}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">My Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python Development", "Game Creation", "Data Analysis", "AI/ML", "Problem Solving", "Open Source"].map((interest, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover-lift"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimationWrapper>
                
                <ScrollAnimationWrapper animation="bounce" delay={600}>
                  <div>
                    <Link to="/contact">
                      <Button className="bg-brand-500 hover:bg-brand-600 text-white hover-lift hover-glow">
                        Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">My Skills</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                I've developed a range of technical skills with a focus on Python and its ecosystem.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <ScrollAnimationWrapper 
                key={index} 
                animation="slideLeft" 
                delay={index * 100}
              >
                <SkillBar skill={skill.skill} level={skill.level} />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper animation="scale">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                My academic journey in computer engineering.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <ScrollAnimationWrapper 
                  key={index} 
                  animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  delay={index * 200}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                      <span className="text-brand-500 font-medium">{item.duration}</span>
                    </div>
                    <p className="text-gray-600 font-medium mt-1">{item.institution}</p>
                    <p className="text-gray-600 mt-3">{item.description}</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="slideLeft">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Future Goals</h2>
                <p className="text-gray-600 mb-4">
                  Looking ahead, I aim to deepen my expertise in Python and AI/ML technologies. 
                  I'm particularly interested in:
                </p>
                <ul className="space-y-3">
                  {[
                    "Specializing in practical AI/ML applications",
                    "Contributing to open-source Python projects",
                    "Developing innovative software solutions",
                    "Pursuing higher education in Computer Science"
                  ].map((goal, index) => (
                    <ScrollAnimationWrapper 
                      key={index} 
                      animation="slideLeft" 
                      delay={index * 100}
                    >
                      <li className="flex items-start">
                        <span className="text-brand-500 mr-2 font-bold">•</span>
                        <span className="text-gray-600">{goal}</span>
                      </li>
                    </ScrollAnimationWrapper>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slideRight" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover-lift">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Philosophy</h3>
                <blockquote className="border-l-4 border-brand-500 pl-4 italic text-gray-600">
                  "I believe in continuous learning and the power of technology to solve real-world problems. 
                  My goal is to keep growing as a developer and use my skills to create meaningful impact."
                </blockquote>
                <p className="mt-4 text-right text-gray-700 font-medium">- Rabins Kathariya</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
