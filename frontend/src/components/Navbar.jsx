import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass-card py-4" : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          LIYA.DEV
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;