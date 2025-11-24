import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Liya_CV.pdf';
    link.download = 'Liya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid-container grid-hero">
          {/* Left - Content */}
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Liya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full-Stack Developer & UI/UX Designer crafting digital experiences that matter
            </p>
            
            <div className="grid-container grid-2 max-w-md">
              <button 
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full text-black font-semibold hover-lift shadow-glow"
              >
                View My Work
              </button>
              <button 
                onClick={downloadCV}
                className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid-container grid-2">
            <div className="glass-card rounded-2xl p-6 text-center hover-glow grid-item shadow-card">
              <div className="text-4xl mb-3">💻</div>
              <div className="text-2xl font-bold gradient-text">2</div>
              <div className="text-gray-300 text-sm">Projects</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-glow grid-item shadow-card">
              <div className="text-4xl mb-3">🚀</div>
              <div className="text-2xl font-bold gradient-text">2+</div>
              <div className="text-gray-300 text-sm">Years</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-glow grid-item shadow-card">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-2xl font-bold gradient-text">100%</div>
              <div className="text-gray-300 text-sm">Satisfied</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-glow grid-item shadow-card">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;