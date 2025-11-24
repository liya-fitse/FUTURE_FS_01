import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full shadow-glow"></div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid-container grid-about mb-16">
          {/* Profile Card */}
          <div className="glass-card rounded-3xl p-8 hover-glow h-full shadow-deep">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-neon border-2 border-gradient">
                <img 
                  src="/profile.jpg" 
                  alt="Liya Profile" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-4xl" style={{display: 'none'}}>
                  👩💻
                </div>
              </div>
              <h3 className="text-xl font-bold gradient-text mb-4">Full Stack Developer</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Experience</span>
                  <span className="gradient-text font-bold text-sm">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Projects</span>
                  <span className="gradient-text font-bold text-sm">2 Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Clients</span>
                  <span className="gradient-text font-bold text-sm">100% Satisfied</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 shadow-card hover-lift">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless digital experiences. My journey in tech began with curiosity and has evolved 
                into a deep passion for solving complex problems through code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and MongoDB, 
                while also having a strong foundation in UI/UX design principles. I believe in 
                writing clean, efficient code and creating interfaces that users love to interact with.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid-container grid-4 mb-12">
          <div className="glass-card rounded-xl p-6 text-center hover-glow grid-item shadow-card">
            <div className="text-3xl mb-3">🎨</div>
            <div className="text-sm text-gray-300 font-medium">Creative Design</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow grid-item shadow-card">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-sm text-gray-300 font-medium">Fast Development</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow grid-item shadow-card">
            <div className="text-3xl mb-3">📱</div>
            <div className="text-sm text-gray-300 font-medium">Responsive Design</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow grid-item shadow-card">
            <div className="text-3xl mb-3">🚀</div>
            <div className="text-sm text-gray-300 font-medium">Performance</div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid-container grid-3">
          <div className="glass-card rounded-2xl p-6 shadow-card hover-lift">
            <h4 className="text-lg font-bold gradient-text mb-4">Frontend</h4>
            <div className="grid-container grid-2">
              <div className="text-gray-300 text-sm">React</div>
              <div className="text-gray-300 text-sm">JavaScript</div>
              <div className="text-gray-300 text-sm">Tailwind CSS</div>
              <div className="text-gray-300 text-sm">HTML5</div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 shadow-card hover-lift">
            <h4 className="text-lg font-bold gradient-text mb-4">Backend</h4>
            <div className="grid-container grid-2">
              <div className="text-gray-300 text-sm">Node.js</div>
              <div className="text-gray-300 text-sm">Express</div>
              <div className="text-gray-300 text-sm">MongoDB</div>
              <div className="text-gray-300 text-sm">REST APIs</div>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6 shadow-card hover-lift">
            <h4 className="text-lg font-bold gradient-text mb-4">Tools</h4>
            <div className="grid-container grid-2">
              <div className="text-gray-300 text-sm">Git</div>
              <div className="text-gray-300 text-sm">VS Code</div>
              <div className="text-gray-300 text-sm">Figma</div>
              <div className="text-gray-300 text-sm">Postman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;