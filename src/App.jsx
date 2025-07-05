import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import DeepLogic from './components/DeepLogic';
import Madhupayroll from './components/Madhupayroll';

const AppContent = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const hideHeaderPaths = ['/DeepLogic','/Madhupayroll'];
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="relative min-h-screen text-white scroll-smooth">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Mouse Glow */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out -z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Header */}
      {shouldShowHeader && (
        <div className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f172a]/80 to-[#1e40af]/80 border-b border-blue-500/10">
          <Header activeSection={activeSection} setActiveSection={scrollToSection} />
        </div>
      )}

      {/* Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20">
              <section id="home" className="px-6">
                <Home setActiveSection={scrollToSection} />
              </section>
              <section id="about" className="px-6">
                <About setActiveSection={scrollToSection} />
              </section>
              <section id="portfolio" className="px-6">
                <Portfolio />
              </section>
              <section id="contact" className="px-6 pb-20">
                <Contact />
              </section>
            </main>
          }
        />
        <Route path="/DeepLogic" element={<DeepLogic />} />
        <Route path="/Madhupayroll" element={<Madhupayroll />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
