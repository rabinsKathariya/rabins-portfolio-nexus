
interface SkillBarProps {
  skill: string;
  level: number; // 0-100
}

const SkillBar = ({ skill, level }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-sm font-medium px-2 py-0.5 bg-brand-50 text-brand-600 rounded-full">{level}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-brand-400 to-brand-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
