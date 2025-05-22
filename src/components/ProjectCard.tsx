
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string | null;
}

const ProjectCard = ({ title, description, technologies, image }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="p-6 relative">
        {/* Modern accent element */}
        <div className="absolute top-0 left-0 w-2 h-12 bg-gradient-to-b from-brand-500 to-blue-500 transform -translate-x-6 group-hover:translate-x-0 transition-transform duration-300"></div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-50 text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
