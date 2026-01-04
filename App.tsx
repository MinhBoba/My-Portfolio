import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
  return (
    <HashRouter>
      <div className="bg-slate-900 text-white min-h-screen selection:bg-blue-500/30">
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
    </HashRouter>
  );
}

export default App;