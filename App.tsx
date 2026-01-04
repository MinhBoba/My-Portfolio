import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
// 1. Import component background
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <HashRouter>
      {/* 2. Thêm 'relative' để chứa background absolute */}
      <div className="relative bg-slate-900 text-white min-h-screen selection:bg-blue-500/30 overflow-hidden">
        
        {/* 3. Đặt hiệu ứng hạt ở đây */}
        <ParticlesBackground />

        {/* 4. Bọc nội dung chính trong z-10 để nổi lên trên nền hạt */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <AIChat />
        </div>
        
      </div>
    </HashRouter>
  );
}

export default App;
