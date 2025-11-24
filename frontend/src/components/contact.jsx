import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("Message sent! 🚀");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus("Network error. Please check your connection.");
    }
    
    // Clear status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

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

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8 hover-glow">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Let's create something incredible together!
              </p>
              
              <div className="grid grid-cols-1 gap-6">
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

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8 hover-glow">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg text-black font-semibold hover-glow transition-all duration-300"
              >
                Send Message 🚀
              </button>
              
              {status && (
                <div className="text-center text-cyan-400 font-semibold">
                  {status}
                </div>
              )}
            </form>
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