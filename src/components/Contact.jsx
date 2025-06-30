import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const links = [
    {
      icon: Mail,
      title: 'Email Me',
      subtitle: 'msmahisupradeep@gmail.com',
      href: 'mailto:msmahisupradeep@gmail.com',
      color: 'text-blue-400 bg-blue-600/20',
      border: 'hover:border-blue-400'
    },
    {
      icon: Linkedin,
      title: "Let's Connect",
      subtitle: 'on LinkedIn',
      href: 'https://www.linkedin.com/in/mp-mahisupradeep',
      color: 'text-blue-400 bg-blue-600/20',
      border: 'hover:border-blue-400'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      subtitle: '@mahisupradeep',
      href: 'https://www.instagram.com/mahisupradeep/',
      color: 'text-pink-400 bg-pink-600/20',
      border: 'hover:border-pink-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      subtitle: '@Deepu-Mahi',
      href: 'https://github.com/Deepu-Mahi',
      color: 'text-white bg-gray-600/20',
      border: 'hover:border-white'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-xl mx-auto space-y-10">
        <h2
          className={`text-4xl md:text-5xl font-bold border-l-4 border-blue-500 pl-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Connect With Me
        </h2>

        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${link.border} transition-all duration-150 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className={`p-3 rounded-full ${link.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-semibold">{link.title}</p>
                <p className="text-sm text-gray-400">{link.subtitle}</p>
              </div>
            </a>
          );
        })}

        <p
          className={`text-center text-gray-500 text-sm pt-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Thanks for stopping by — let’s build something amazing! 🚀
        </p>
      </div>
    </section>
  );
};

export default Contact;
