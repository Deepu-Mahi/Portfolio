import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Instagram, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = ({ setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const techStack = ['Python', 'Django', 'React', 'Tailwind CSS', 'PostgreSQL'];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Deepu-Mahi', title: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mp-mahisupradeep', title: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/mahisupradeep/', title: 'Instagram' }
  ];

  const skills = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain-wordmark.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'SAP HCM', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969263.png' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SECTION */}
        <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm animate-bounce">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Ready to Innovate</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="inline-block animate-slideInLeft">Full Stack</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slideInRight bg-300% animate-gradient">
                Developer
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg font-mono animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white w-fit">
              B.Tech in EEE • Minor in AI
            </p>

            <p className={`text-lg text-gray-300 max-w-lg leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              Full Stack Developer passionate about fusing electrical intuition with modern AI. Building scalable, intelligent web systems that deliver performance, elegance, and innovation.
            </p>
          </div>

          {/* TECH STACK BADGES */}
          <div className={`flex flex-wrap gap-3 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm backdrop-blur-sm hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <button
              onClick={() => setActiveSection('portfolio')}
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span>Projects</span>
              <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            <button
              onClick={() => setActiveSection('contact')}
              className="group inline-flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              <span>Contact</span>
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className={`flex space-x-4 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-gray-700 hover:border-transparent rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 backdrop-blur-sm"
                title={social.title}
              >
                <social.icon className="w-5 h-5 group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: GLOWING ROTATING ICON */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="hidden lg:flex items-center justify-center"
>
  <div className="flex flex-col items-center justify-center w-full h-full relative translate-x-6">
    <motion.div
      key={skills[currentSkill].name}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1.25 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center"
    >
      {/* Glowing background ring */}
      <div className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <img
        src={skills[currentSkill].icon}
        alt={skills[currentSkill].name}
        className={`w-40 h-40 lg:w-56 lg:h-56 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] ${
          skills[currentSkill].name === 'GitHub' ? 'invert' : ''
        }`}
      />
      <motion.span
        key={skills[currentSkill].name + '-label'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="mt-8 text-white text-3xl font-semibold text-center"
      >
        {skills[currentSkill].name}
      </motion.span>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Home;
