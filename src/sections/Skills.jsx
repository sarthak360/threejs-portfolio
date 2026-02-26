import { technicalSkills } from '../constants/index.js';

const Skills = () => {
  return (
    <section className="c-space my-20" id="skills">
      <h3 className="head-text">Technical Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {technicalSkills.map((item) => (
          <div 
            key={`skill-${item.id}`} 
            className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-black-200 border border-black-300 hover:border-white-500/50 hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-black-300 flex justify-center items-center text-white text-2xl font-bold group-hover:bg-white group-hover:text-black-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-inner">
                {item.category.charAt(0)}
              </div>
              <p className="font-bold text-white text-2xl tracking-wide group-hover:text-white-800 transition-colors duration-300">
                {item.category}
              </p>
            </div>
            
            <div className="relative z-10 pt-5 border-t border-black-300 group-hover:border-white-500/30 transition-colors duration-500">
              <div className="flex flex-wrap gap-3">
                {item.skills.split(', ').map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-black-300 text-white-600 rounded-lg text-sm md:text-base font-semibold tracking-wide group-hover:bg-white-800/10 group-hover:text-white transition-all duration-300 hover:scale-105 cursor-default border border-transparent group-hover:border-white-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;