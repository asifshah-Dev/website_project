'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROD_LOAD_DURATION = 300000; // real loader time in production (5 min) — change as needed
const DEV_LOAD_DURATION = 3000;    // fast dev duration for testing

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const isDev = process.env.NODE_ENV !== 'production';
  const LOAD_DURATION = isDev ? DEV_LOAD_DURATION : PROD_LOAD_DURATION;

  useEffect(() => {
    const hasVisited = !isDev && sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!isDev) sessionStorage.setItem('hasVisited', 'true');
    }, LOAD_DURATION);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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