import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "CSS/Tailwind", level: 92, icon: "🎨" },
    { name: "Python", level: 75, icon: "🐍" }
  ];

  const categories = [
    {
      title: "Frontend",
      techs: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "TypeScript"]
    },
    {
      title: "Backend", 
      techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      title: "Tools & Others",
      techs: ["Git", "Docker", "AWS", "Firebase", "Next.js", "Socket.io"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg">Technologies I work with</p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-card rounded-2xl p-6 hover-glow group">
              <div className="grid grid-cols-3 items-center gap-4 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-gray-400">{skill.level}%</p>
                </div>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={category.title} className="glass-card rounded-2xl p-6">
              <h4 className="text-lg font-bold gradient-text mb-4">{category.title}</h4>
              <div className="grid grid-cols-2 gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="text-gray-300 text-sm py-1">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-2xl font-bold gradient-text">6+</div>
            <div className="text-gray-300 text-sm">Core Skills</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-2xl font-bold gradient-text">18+</div>
            <div className="text-gray-300 text-sm">Technologies</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-2xl font-bold gradient-text">95%</div>
            <div className="text-gray-300 text-sm">Proficiency</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">📚</div>
            <div className="text-2xl font-bold gradient-text">24/7</div>
            <div className="text-gray-300 text-sm">Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;