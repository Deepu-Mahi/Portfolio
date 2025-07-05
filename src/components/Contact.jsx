import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram, Github, Mail, Send, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatusMessage('✅ Message sent successfully!');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error.text);
        setStatusMessage('❌ Failed to send message. Please try again.');
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className={`space-y-2 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold border-l-4 border-blue-500 pl-4">
            Connect With Me
          </h2>
          <p className="text-gray-400 text-lg">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>

        {/* Contact Box */}
        <div
          className={`relative border border-gray-700 bg-gray-800/30 backdrop-blur-md rounded-3xl p-10 md:p-12 space-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-500'}`} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-gray-700/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                required
              />
            </div>

            <div className="relative group">
              <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-500'}`} />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full pl-12 pr-4 py-4 bg-gray-700/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300"
                required
              />
            </div>

            <div className="relative group">
              <MessageSquare className={`absolute left-3 top-4 w-5 h-5 ${focusedField === 'message' ? 'text-blue-400' : 'text-gray-500'}`} />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                rows={4}
                className="w-full pl-12 pr-4 py-4 bg-gray-700/30 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {statusMessage && (
              <p className="text-center text-sm mt-4 text-gray-300">{statusMessage}</p>
            )}
          </form>

          {/* Social Links */}
          <div className="space-y-4 pt-6">
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
          </div>
        </div>

        {/* Footer Note */}
        <p className={`text-center text-gray-500 text-sm pt-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          Thanks for stopping by — let’s build something amazing! 🚀
        </p>
      </div>
    </section>
  );
};

export default Contact;
