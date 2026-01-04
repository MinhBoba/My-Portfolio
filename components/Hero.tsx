import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-800">
            Available for Hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
            {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2">
              Contact Me <ArrowRight size={18} />
            </a>
            <a href={PERSONAL_INFO.upwork} target="_blank" rel="noreferrer" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2">
              <Briefcase size={18} /> Upwork Profile
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
            <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
               <img 
                 src="https://picsum.photos/600/600" 
                 alt="Developer Workspace" 
                 className="relative w-full h-full object-cover rounded-2xl border-2 border-slate-700 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;