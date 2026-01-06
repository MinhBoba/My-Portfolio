// App.tsx
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ParticlesBackground from './components/ParticlesBackground';
import ProjectDemo from './components/ProjectDemo'; // Import component mới

// Tạo component HomePage chứa nội dung cũ
const HomePage = () => (
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
      <div className="relative bg-slate-900 text-white min-h-screen selection:bg-blue-500/30 overflow-hidden">
        {/* Background dùng chung cho cả app */}
        <ParticlesBackground />

        <Routes>
          {/* Route trang chủ */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route trang demo, nhận projectId làm tham số */}
          <Route path="/demo/:projectId" element={<ProjectDemo />} />
        </Routes>
        
      </div>
    </HashRouter>
  );
}

export default App;
