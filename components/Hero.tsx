import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* --- Hiệu ứng nền --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- CỘT TRÁI: NỘI DUNG TEXT (ĐÃ CHỈNH SỬA ĐẸP HƠN) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-800">
            Available for Hire
          </div>

          {/* Tên */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Chức danh (Role) - Nổi bật */}
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6 tracking-wide">
            {PERSONAL_INFO.role}
          </h2>

          {/* Tagline - Dịu lại */}
          <p className="text-lg md:text-xl text-blue-300 font-medium mb-8 italic border-l-4 border-blue-500/50 pl-4">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Bio - Căn đều */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 text-justify">
            {PERSONAL_INFO.bio}
          </p>

          {/* Nút bấm */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            
            {(PERSONAL_INFO.social?.upwork || PERSONAL_INFO.upwork) && (
              <a 
                href={PERSONAL_INFO.social?.upwork || PERSONAL_INFO.upwork}
                target="_blank"
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all hover:scale-105 border border-slate-700 flex items-center gap-2"
              >
                <ExternalLink size={18} /> Upwork Profile
              </a>
            )}
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-6 text-slate-400">
            {PERSONAL_INFO.github && (
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={28} />
              </a>
            )}
            {PERSONAL_INFO.linkedin && (
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={28} />
              </a>
            )}
          </div>
        </motion.div>

        {/* --- CỘT PHẢI: ẢNH ĐẠI DIỆN (NHƯ CŨ) --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center relative"
        >
            {/* Vòng tròn hiệu ứng sau lưng */}
            <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
              {/* Lấy ảnh từ PERSONAL_INFO giống template gốc */}
              <img 
                src={PERSONAL_INFO.profilePic} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
