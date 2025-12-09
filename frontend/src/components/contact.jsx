import React from "react";

const Contact = () => {

  const contactMethods = [
    { icon: "📧", label: "Email", value: "liyafitsumbrehan@gmail.com", link: "mailto:liyafitsumbrehan@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/liya-fitsumbrehan", link: "https://www.linkedin.com/in/liya-fitsumbrehan-3a0556361/" },
    { icon: "🐙", label: "GitHub", value: "github.com/liya-fitse", link: "https://github.com/liya-fitse" },
    { icon: "📱", label: "Phone", value: "+251921500273", link: "tel:+251921500273" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg">Ready to bring your ideas to life?</p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-8 hover-glow">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's create something incredible together!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a key={index} href={method.link} className="flex items-center gap-4 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-black">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-gray-400">{method.label}</p>
                    <p className="text-white">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">🌐</div>
            <div className="text-sm text-gray-300">Portfolio</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">💼</div>
            <div className="text-sm text-gray-300">LinkedIn</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">🐙</div>
            <div className="text-sm text-gray-300">GitHub</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover-glow">
            <div className="text-3xl mb-3">📧</div>
            <div className="text-sm text-gray-300">Email</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-gray-400">© 2024 Liya</div>
            <div className="text-gray-400">Built with ❤️ using React & Tailwind CSS</div>
            <div className="text-gray-400">Available for freelance work</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;