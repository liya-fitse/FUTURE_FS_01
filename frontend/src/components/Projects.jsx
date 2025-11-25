import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative project management tool with drag-and-drop functionality",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      image: "📋",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full shadow-glow mb-4"></div>
          <p className="text-gray-300 text-lg">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className="grid-container grid-projects mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="glass-card rounded-2xl overflow-hidden hover-lift group shadow-deep grid-item">
              <div className="p-8">
                <div className="grid-container grid-2 items-start mb-6">
                  <div className="text-6xl shadow-neon">{project.image}</div>
                  <div className="text-right">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-pink-400 text-black text-xs rounded-full font-semibold shadow-glow">
                        FEATURED
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid-container grid-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm text-center shadow-card">
                      {tech}
                    </span>
                  ))}
                </div>
                

              </div>
            </div>
          ))}
        </div>

        {/* CTA Grid */}
        <div className="grid-container grid-2">
          <div className="glass-card rounded-2xl p-6 text-center shadow-card hover-glow">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-lg font-bold text-white mb-2">Custom Solutions</div>
            <div className="text-gray-300 text-sm">Tailored to your needs</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center shadow-card hover-glow">
            <div className="text-3xl mb-3">💡</div>
            <div className="text-lg font-bold text-white mb-2">Innovation</div>
            <div className="text-gray-300 text-sm">Modern tech stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;