import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Domain from './components/Domain';
import Milestone from './components/Milestone';
import Documents from './components/Documents';
import Presentations from './components/Presentations';
import Contact from './components/Contact';
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'domain', 'milestone', 'document', 'presentations', 'contact'];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero id="home" />
        <Domain id="domain" />
        <Milestone id="milestone" />
        <Documents id="document" />
        <Presentations id="presentations" />
        <About id="about" />
        <Contact id="contact" />
      </main>
    </div>
  );
}

export default App;