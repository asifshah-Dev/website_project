'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, Share2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  // Track active section on scroll
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
    <>
      {/* Main Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '-100%', opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        <div className="container mx-auto px-3 md:px-4 pt-4 md:pt-8 pb-4">
          <div className={`flex items-center justify-center ${
            isScrolled 
              ? 'glass-card rounded-full px-3 md:px-8 py-2 md:py-3 border border-gray-200' 
              : 'rounded-full px-3 md:px-8 py-2 md:py-3 border border-gray-200 bg-white/50 backdrop-blur-sm'
          } transition-all duration-300 max-w-fit mx-auto`}>
            
            <motion.a
              href="#home"
              className="text-base md:text-2xl font-bold text-charcoal px-2 md:px-4 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Delta Tech<span className="text-amber-500"> bridge</span>
            </motion.a>

            <span className="w-px h-5 md:h-6 bg-gray-300 mx-1 md:mx-2" />

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full text-charcoal hover:text-amber-500 transition-colors mx-1 md:mx-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-5 md:w-7 h-4 md:h-5">
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
            </motion.button>

            <span className="w-px h-5 md:h-6 bg-gray-300 mx-1 md:mx-2" />

            <motion.a
              href="#contact"
              className="flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs md:text-base font-medium hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 whitespace-nowrap mx-1 md:mx-2 shadow-lg shadow-amber-400/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <ArrowUpRight className="w-3 h-3 md:w-5 md:h-5" />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Fixed Overlay - Covers entire screen when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent"
          style={{ 
            zIndex: 90,
            width: '100vw',
            height: '100vh',
          }}
          onClick={() => {
            console.log('Overlay clicked');
            setIsMenuOpen(false);
          }}
        />
      )}

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-16 md:top-24 left-0 right-0"
            style={{ zIndex: 95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto px-3 md:px-4">
              <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                <div className="px-3 md:px-8 py-2 md:py-4">
                  {menuLinks.map((link, index) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        onClick={() => {
                          console.log('Link clicked');
                          setIsMenuOpen(false);
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className={`group flex items-center justify-between py-3 md:py-4 border-b border-gray-100 last:border-b-0 ${
                          isActive ? 'bg-amber-50 -mx-3 px-3 md:-mx-4 md:px-4 rounded-lg' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className={`text-base md:text-xl font-bold transition-colors ${
                            isActive 
                              ? 'text-amber-500' 
                              : 'text-charcoal group-hover:text-amber-500'
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
                            ? 'text-amber-500 opacity-100' 
                            : 'text-slate opacity-0 group-hover:opacity-100 group-hover:text-amber-500'
                        }`} />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="px-3 md:px-8 py-3 md:py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs text-slate">Connect:</span>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-white text-charcoal hover:bg-amber-400 hover:text-white transition-colors border border-gray-200 hover:border-amber-400"
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
    </>
  );
};

export default Navbar;