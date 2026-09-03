'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MIN_DISPLAY_TIME = 800; // shortest time the loader stays visible, so it doesn't just flash on fast loads

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_TIME - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, remaining);
    };

    if (document.readyState === 'complete') {
      // page already finished loading before this component even mounted
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
      return () => window.removeEventListener('load', finishLoading);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center"
        >
          {/* Logo + simple rotating ring */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* rotating ring — pure CSS animation, no JS */}
            <div className="absolute inset-0 rounded-full border-[3px] border-amber-500/15 border-t-amber-500 animate-spin" />

            {/* Logo */}
            <img
              src="/logo.jpeg"
              alt="Delta Tech bridge"
              className="relative w-[55%] h-[55%] object-contain"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;