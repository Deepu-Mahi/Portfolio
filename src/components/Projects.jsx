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
    details: '/DeepLogic'
  },
  {
    title: 'Blendy',
    description: 'A social app where you can connect in real-time, log in with one click, share moments, posts instantly.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500 via-teal-500 to-cyan-500',
    liveDemo: '#',
    details: '#'
  },
  {
    title: 'WATCHit',
    description: 'A video streaming app made for easy, personal entertainment and everything you love to binge.',
    image: 'https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    liveDemo: '#',
    details: '#'
  }
];

const Projects = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => {
        const animationVariant =
          index % 3 === 0
            ? { x: -60, opacity: 0 }
            : index % 3 === 1
            ? { y: 60, opacity: 0 }
            : { x: 60, opacity: 0 };

        return (
          <motion.div
            key={index}
            initial={animationVariant}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden p-6 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:-translate-y-2"
          >
            {/* Gradient background (not clickable) */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />

            {/* Image */}
            <div className="relative h-60 overflow-hidden rounded-xl mb-4 z-10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between z-10 relative">
              {project.title}
              <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition duration-300" />
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6 z-10 relative">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-auto pt-4 z-10 relative">
              {/* ✅ Fixed Live Demo link */}
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Internal routing with React Router */}
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
