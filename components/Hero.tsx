import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
// Nhớ import thêm HERO_IMAGES vừa tạo
import { PERSONAL_INFO, HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  // Logic chuyển ảnh
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Chuyển ảnh sau mỗi 3000ms (3 giây)

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* --- Hiệu ứng nền --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- CỘT TRÁI: NỘI DUNG TEXT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-800">
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6 tracking-wide">
            {PERSONAL_INFO.role}
          </h2>

          <p className="text-lg md:text-xl text-blue-300 font-medium mb-8 italic border-l-4 border-blue-500/50 pl-4">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 text-justify">
            {PERSONAL_INFO.bio}
          </p>

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

        {/* --- CỘT PHẢI: SLIDESHOW ẢNH --- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center relative h-[400px]" // Set chiều cao cố định để tránh giật
        >
            {/* Hiệu ứng Glow phía sau */}
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
            
            {/* Khung ảnh */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
              <AnimatePresence mode='wait'>
                <motion.img 
                  key={currentImageIndex} // Key thay đổi để kích hoạt animation
                  src={HERO_IMAGES[currentImageIndex]} 
                  alt="Supply Chain Visualization"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }} // Thời gian chuyển cảnh mượt mà
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Lớp phủ gradient nhẹ lên ảnh cho đẹp */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
