'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, Share2 } from 'lucide-react';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);
  const { scrollToSection } = useSmoothScrollTo();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const menuLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Share2, href: '#', label: 'Share' },
  ];

  return (
    <div ref={navbarRef}>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-3 md:px-4 pt-4 md:pt-6">
          <div className="flex items-center justify-center rounded-full px-3 md:px-6 py-2 md:py-3 border border-cream/10 bg-navy-900/80 backdrop-blur-xl max-w-fit mx-auto">
            
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-base md:text-xl font-bold text-cream px-2 md:px-3 whitespace-nowrap"
            >
              Delta Tech<span className="text-amber-500"> bridge</span>
            </a>

            <span className="w-px h-5 md:h-6 bg-cream/20 mx-1 md:mx-2" />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full text-cream hover:text-amber-400 transition-colors mx-1 md:mx-2"
            >
              <div className="relative w-5 md:w-6 h-4 md:h-5">
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute left-0 top-0 w-full h-0.5 bg-current"
                />
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-current"
                />
              </div>
            </button>

            <span className="w-px h-5 md:h-6 bg-cream/20 mx-1 md:mx-2" />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 text-xs md:text-sm font-semibold hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 whitespace-nowrap mx-1 md:mx-2 shadow-lg shadow-amber-500/30"
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-16 md:top-20 left-0 right-0"
            style={{ zIndex: 45 }}
          >
            <div className="container mx-auto px-3 md:px-4">
              <div className="max-w-3xl mx-auto bg-navy-800 rounded-2xl border border-cream/10 shadow-2xl overflow-hidden">
                <div className="px-3 md:px-6 py-2 md:py-3">
                  {menuLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className={`group flex items-center justify-between py-3 md:py-4 border-b border-cream/10 last:border-b-0 ${
                          isActive ? 'bg-amber-500/10 -mx-3 px-3 md:-mx-4 md:px-4 rounded-lg' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-base md:text-lg font-bold transition-colors ${
                            isActive 
                              ? 'text-amber-400' 
                              : 'text-cream group-hover:text-amber-400'
                          }`}>
                            {link.label}
                          </span>
                          {isActive && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-500 rounded-full"
                            />
                          )}
                        </div>
                        <ArrowUpRight className={`w-4 h-4 md:w-5 md:h-5 transition-all ${
                          isActive 
                            ? 'text-amber-400 opacity-100' 
                            : 'text-cream/40 opacity-0 group-hover:opacity-100 group-hover:text-amber-400'
                        }`} />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="px-3 md:px-6 py-3 md:py-4 bg-cream/5 border-t border-cream/10">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs text-cream/60">Connect:</span>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-cream/5 text-cream/80 hover:bg-amber-400 hover:text-navy-900 transition-colors border border-cream/10 hover:border-amber-400"
                        aria-label={social.label}
                      >
                        <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;