// Portfolio.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Award,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Certificates from './Certificates';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const sectionRef = useRef(null);

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'skills-tools', label: 'Skills & Tools', icon: Layers }
  ];

  const skillGroups = [
    {
      title: 'Languages',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' }
      ]
    },
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg' }
      ]
    },
    {
      title: 'Databases & Cloud',
      items: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
      ]
    },
    {
      title: 'ERP / Enterprise Tools',
      items: [
        { name: 'SAP HCM', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969263.png' }
      ]
    },
    {
      title: 'Developer Tools',
      items: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // animation trigger
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen px-6 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%"
          >
            Portfolio Showcase
          </motion.h2>
        </motion.div>

        <div className="w-full flex justify-center mb-16">
          <div className="flex w-full max-w-7xl rounded-2xl backdrop-blur-lg bg-white/5 shadow-xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-6 px-4 text-center text-sm font-semibold flex flex-col items-center justify-center transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5 mb-1" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'certificates' && <Certificates />}
        {activeTab === 'skills-tools' && (
          <div className="space-y-12">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-bold text-white mb-4">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {group.items.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: '0 0 30px rgba(59,130,246,0.7)',
                        transition: { duration: 0.1 }
                      }}
                      className="bg-white/5 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-white transition-all"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className={`w-16 h-16 mb-2 object-contain ${tech.name === 'GitHub' ? 'invert' : ''}`}
                      />
                      <span className="text-sm font-semibold text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
