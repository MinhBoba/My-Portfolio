================================================
FILE: App.tsx
================================================
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
// Import component hiệu ứng nền
import ParticlesBackground from './components/ParticlesBackground';
import ProjectDemo from './components/ProjectDemo';

// Gom trang chủ lại thành 1 component gọn gàng
const HomePage = () => (
  // Thêm z-10 để nội dung nổi lên trên nền hạt
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
);

function App() {
  return (
    <HashRouter>
      {/* Container chính: Relative để chứa Particles (Absolute) */}
      <div className="relative bg-slate-900 text-white min-h-screen selection:bg-blue-500/30 overflow-hidden">
        
        {/* HIỆU ỨNG NỀN: Đặt 1 lần duy nhất tại đây */}
        <ParticlesBackground />

        {/* Nội dung thay đổi theo Route */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo/:projectId" element={<ProjectDemo />} />
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
