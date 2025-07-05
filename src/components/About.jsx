import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Code, Award, Globe, ArrowUpRight, Eye } from 'lucide-react';

const About = ({ setActiveSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const [counters, setCounters] = useState({
    projects: 0,
    certificates: 0,
    experience: 0,
  });

  const stats = [
    {
      icon: Code,
      number: 2,
      key: 'projects',
      label: 'TOTAL PROJECTS',
      description: 'Innovative web & AI-based solutions built',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      number: 11,
      key: 'certificates',
      label: 'CERTIFICATES',
      description: 'Professional credentials earned',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      number: 0,
      key: 'experience',
      label: 'YEARS OF EXPERIENCE',
      description: 'Growing through real-world projects',
      color: 'from-green-500 to-teal-500',
    },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat) => {
        let current = 0;
        const increment = stat.number / 25;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }, 20);
      });
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black relative"
    >
      <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto space-y-4 text-justify"
        >
          <p>
            I'm <span className="text-white font-semibold">Mahi Supradeep</span>, a final-year{' '}
            <span className="text-green-400 font-semibold">Electrical and Electronics Engineering</span> student with a{' '}
            <span className="text-green-400 font-semibold">Minor in Artificial Intelligence</span>.
          </p>
          <p>
            I specialize in building <span className="text-blue-400 font-semibold">intelligent, user-centric web applications</span>{' '}
            at the intersection of hardware, software, and AI.
          </p>
          <p>
            My core stack includes{' '}
            <span className="text-purple-400 font-medium">Python</span>,{' '}
            <span className="text-purple-400 font-medium">Django</span>,{' '}
            <span className="text-purple-400 font-medium">React</span>, and{' '}
            <span className="text-purple-400 font-medium">PostgreSQL</span>. I enjoy designing scalable solutions with intuitive UI and smooth backend logic.
          </p>
          <p>
            I thrive on innovation, continuous learning, and hands-on problem-solving. Let's build the future—one line of code at a time.
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4, delay: 0.5 }}
  href="https://drive.google.com/file/d/1zqua8x6c4AaoVxVHzz7aq2MkVt-ePJvF/view?usp=drive_link"
  download
  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
>
  <Download className="w-4 h-4 group-hover:animate-bounce" />
  <span>Download Resume</span>
</motion.a>


          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            onClick={() => setActiveSection('portfolio')}
            className="group inline-flex items-center space-x-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-600"
          >
            <Eye className="w-4 h-4 group-hover:animate-pulse" />
            <span>View Projects</span>
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {stats.map((stat, index) => {
            const directions = [
              { x: -60, y: 0 },
              { x: 0, y: 60 },
              { x: 60, y: 0 },
            ];
            return (
              <motion.button
                key={index}
                onClick={() => setActiveSection('portfolio')}
                initial={{ opacity: 0, ...directions[index] }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.2,
                  ease: 'easeInOut',
                }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-500 text-left w-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center group-hover:animate-spin`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white">
                    {counters[stat.key]}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-400">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500">{stat.description}</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:animate-bounce transition duration-300" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
