import React from 'react';
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Code2,
  BadgeCheck,
  Laptop2,
  UserCheck,
  CalendarClock,
  Globe,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MadhuPayroll = () => {
  return (
    <div className="min-h-screen overflow-y-scroll bg-gradient-to-br from-[#0a0f1a] via-[#101828] to-[#0b1e38] text-white px-6 md:px-16 py-12 scrollbar-hide">

      {/* Top Nav */}
      <div className="flex items-center text-sm mb-10">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-1 border border-white/10 rounded-full text-white/80 hover:text-white hover:border-white/30 transition backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="ml-4 text-white/60 text-base">
          Projects <span className="mx-1">›</span>{' '}
          <span className="text-white font-medium">MadhuPayroll</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-2">MadhuPayroll</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 via-sky-500 to-cyan-500 mb-6 rounded" />

          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            MadhuPayroll is a professional website built for a corporate SAP HCM trainer to showcase expertise,
            services, and connect with organizations. It’s fast, responsive, and built with modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/5 p-4 rounded-xl w-52 flex items-center space-x-4 backdrop-blur-md">
              <Code2 className="w-6 h-6 text-indigo-400" />
              <div>
                <div className="text-xl font-semibold">4</div>
                <div className="text-sm text-gray-400">Technologies </div>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl w-52 flex items-center space-x-4 backdrop-blur-md">
              <BadgeCheck className="w-6 h-6 text-sky-400" />
              <div>
                <div className="text-xl font-semibold">5</div>
                <div className="text-sm text-gray-400">Key Features</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-10">
            <a
              href="https://madhupayroll.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Site
            </a>
            <a
              href="https://github.com/Deepu-Mahi/Dad_Website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">💻 Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'Tailwind CSS', 'Vite', 'EmailJS', 'Typescript'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 px-4 py-1 rounded-full text-sm text-white backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <img
            src="/Projects/MadhuPayroll.png"
            alt="MadhuPayroll Preview"
            className="rounded-xl w-full mb-10 shadow-xl"
          />

          <div className="bg-white/5 rounded-2xl p-6 md:p-10 text-gray-200 backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-white">✨ Key Features</h2>

            <div className="space-y-5">
              <Feature icon={<Laptop2 className="w-6 h-6 text-sky-400" />} title="Professional Web Presence">
                A dedicated digital identity for a corporate SAP trainer to reach clients and trainees.
              </Feature>
              <Feature icon={<UserCheck className="w-6 h-6 text-blue-400" />} title="Trainer Profile Section">
                Showcases credentials, experience, and key highlights in SAP HCM training.
              </Feature>
              <Feature icon={<CalendarClock className="w-6 h-6 text-purple-400" />} title="Batch Details">
                Outlines services and SAP-related information clearly and professionally.
              </Feature>
              <Feature icon={<Globe className="w-6 h-6 text-cyan-400" />} title="Modern Tech Stack">
                Built using React, Tailwind CSS, and Vite for fast performance and developer ease.
              </Feature>
              <Feature icon={<Phone className="w-6 h-6 text-green-400" />} title="Contact Integration">
                Users can easily reach out via the embedded contact options powered by EmailJS.
              </Feature>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable feature item
const Feature = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm">{children}</p>
    </div>
  </div>
);

export default MadhuPayroll;
