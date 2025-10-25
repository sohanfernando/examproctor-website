import React, { useState, useEffect, useCallback } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Header scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    const cls = 'no-scroll';
    if (mobileOpen) {
      document.documentElement.classList.add(cls);
      document.body.classList.add(cls);
    } else {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    }
    return () => {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    };
  }, [mobileOpen]);

  // Close on Escape
  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setMobileOpen(false);
  }, []);
  useEffect(() => {
    if (!mobileOpen) return;
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen, onKeyDown]);

  const handleDrawerToggle = () => setMobileOpen((o) => !o);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection?.(sectionId);
      setMobileOpen(false);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'HOME' },
    { id: 'domain', label: 'DOMAIN' },
    { id: 'milestone', label: 'MILESTONES' },
    { id: 'document', label: 'DOCUMENTS' },
    { id: 'presentations', label: 'PRESENTATIONS' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              className="flex items-center space-x-3 group"
              onClick={() => scrollToSection('home')}
              aria-label="Go to Home"
            >
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'bg-gray-800/90 backdrop-blur-sm border border-gray-600' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}>
                <img 
                  src="/examproctor.png" 
                  alt="ExamProctor Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className={`font-bold text-xs sm:text-sm md:text-base transition-colors duration-300 ${
                  scrolled ? 'text-gray-100' : 'text-white'
                }`}>
                  EXAMPROCTER
                </div>
                <div className={`text-xs sm:text-sm transition-colors duration-300 ${
                  scrolled ? 'text-gray-300' : 'text-gray-300'
                }`}>
                  AI-Powered Proctoring
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs sm:text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.id
                      ? scrolled
                        ? 'text-blue-600'
                        : 'text-white'
                      : scrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      scrolled ? 'bg-blue-600' : 'bg-white'
                    }`}></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              onClick={handleDrawerToggle}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                } ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                } ${mobileOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  scrolled ? 'bg-gray-700' : 'bg-white'
                } ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
        onClick={handleDrawerToggle}
      >
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        <nav
          className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile"
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center">
                <img 
                  src="/examproctor.png" 
                  alt="ExamProctor Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base sm:text-lg">EXAMPROCTER</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI-Powered Exam Proctoring</div>
              </div>
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="flex-1 flex flex-col justify-center px-6 space-y-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg sm:text-xl md:text-2xl font-medium py-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white border-l-4 border-blue-500 pl-4'
                    : 'text-gray-300 hover:text-white hover:pl-4'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Optional footer */}
          <div className="p-6 border-t border-gray-700 text-center text-gray-400 text-xs sm:text-sm">
            <span>© {new Date().getFullYear()} ExamProcter</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
