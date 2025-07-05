import React from 'react';
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Code2,
  BadgeCheck,
  Code,
  Languages,
  ShieldCheck,
  BrainCircuit,
  UserSquare,
  History
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DeepLogic = () => {
  return (
    <div className="min-h-screen overflow-y-scroll bg-gradient-to-br from-[#0a0f1a] via-[#101828] to-[#0b1e38] text-white px-6 md:px-16 py-12 scrollbar-hide">

      
      {/* Top Nav Section */}
      <div className="flex items-center text-sm mb-10">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-1 border border-white/10 rounded-full text-white/80 hover:text-white hover:border-white/30 transition backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="ml-4 text-white/60 text-base">
          Projects <span className="mx-1">›</span> <span className="text-white font-medium">DeepLogic</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-2">DeepLogic</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 rounded" />

          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            DeepLogic is a next-gen Online Judge built with Django, PostgreSQL & Docker. It features real-time code execution, test validation, and intelligent debugging.
          </p>

          {/* Stat Cards */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/5 p-4 rounded-xl w-52 flex items-center space-x-4 backdrop-blur-md">
              <Code2 className="w-6 h-6 text-cyan-400" />
              <div>
                <div className="text-xl font-semibold">6</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl w-52 flex items-center space-x-4 backdrop-blur-md">
              <BadgeCheck className="w-6 h-6 text-pink-400" />
              <div>
                <div className="text-xl font-semibold">6</div>
                <div className="text-sm text-gray-400">Key Features</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <a
              href="https://www.deeplogic.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href="https://github.com/Deepu-Mahi/DeepLogic.git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-white mb-4">💻 Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {['Django', 'PostgreSQL', 'TailwindCSS', 'Docker', 'Python', 'Gemini API'].map((tech) => (
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

        {/* Right Column */}
        <div className="flex-1">
          {/* Image */}
          <img
            src="/Projects/DeepLogic.png"
            alt="DeepLogic Preview"
            className="rounded-xl w-full mb-10 shadow-xl"
          />

          {/* Key Features Section */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-10 text-gray-200 backdrop-blur-md shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-white">✨ Key Features</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Real-Time Code Execution</h4>
                  <p className="text-gray-400 text-sm">Instant output with test case validation, simulating real coding interviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Languages className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Multi-Language Support</h4>
                  <p className="text-gray-400 text-sm">Run C, C++, Python, and Java seamlessly with language detection.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Admin Panel</h4>
                  <p className="text-gray-400 text-sm">Manage problems, test cases, and users with secure role-based access.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <BrainCircuit className="w-6 h-6 text-pink-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">AI Debugging Assistant</h4>
                  <p className="text-gray-400 text-sm">Smart code explanations and fixes powered by Gemini integration.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <UserSquare className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">User Dashboard</h4>
                  <p className="text-gray-400 text-sm">Personalized panel with profile management and submissions list.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <History className="w-6 h-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Submission History</h4>
                  <p className="text-gray-400 text-sm">Track past runs, view outputs, and download code submissions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepLogic;
