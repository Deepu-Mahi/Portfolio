import React from 'react';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'DeepLogic',
    description:
      'DeepLogic is an AI-powered Online Judge built with Django, Docker, and PostgreSQL — featuring real-time code execution, smart debugging, and futuristic dev experience.',
    image: '/Projects/Info.png',
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
    liveDemo: 'https://www.deeplogic.me/',
    details: '/DeepLogic',
  },
  {
    title: 'MadhuPayroll — SAP HCM Trainer',
    description:'Built a responsive portfolio site with Vite, React, and Tailwind for an SAP HCM trainer. Features SEO meta tags, structured data, and a professional design.', 
    image: '/Projects/MadhuPayroll.png', // Replace with actual image path
    gradient: 'from-indigo-500 via-sky-500 to-cyan-500',
    liveDemo: 'https://www.madhupayroll.com/', // Update with actual URL
    details: '/Madhupayroll', // Update with your React route
  },
];

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        const animationVariant =
          index % 2 === 0
            ? { x: -60, opacity: 0 }
            : { x: 60, opacity: 0 };

        return (
          <motion.div
            key={index}
            initial={animationVariant}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden p-6 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-2"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />
            <div className="relative h-60 overflow-hidden rounded-xl mb-4 z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between z-10 relative">
              {project.title}
              <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition duration-300" />
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 z-10 relative">
              {project.description}
            </p>
            <div className="flex justify-between items-center mt-auto pt-4 z-10 relative">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to={project.details}
                className="inline-flex items-center space-x-2 px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition"
              >
                <span>Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
