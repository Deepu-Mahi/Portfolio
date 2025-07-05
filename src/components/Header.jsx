import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const sections = ['home', 'about', 'portfolio', 'contact'];

  return (
    <header className="bg-black/80 backdrop-blur-md px-4 py-3 sticky top-0 z-50 shadow-none border-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <h1
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-widest font-mono"
        >
          Mahi Supradeep
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-4 text-sm sm:text-base font-medium">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                activeSection === section ? 'text-white font-semibold' : 'text-gray-400'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
