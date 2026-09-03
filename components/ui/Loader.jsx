'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROD_LOAD_DURATION = 2500; // real loader time in production (5 min) — change as needed
const DEV_LOAD_DURATION = 2500;    // fast dev duration for testing

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const rafRef = useRef(null);
  const ringRef = useRef(null);
  const sparkRef = useRef(null);

  const isDev = process.env.NODE_ENV !== 'production';
  const LOAD_DURATION = isDev ? DEV_LOAD_DURATION : PROD_LOAD_DURATION;

  useEffect(() => {
    const hasVisited = !isDev && sessionStorage.getItem('hasVisited');

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(100, (elapsed / LOAD_DURATION) * 100);
      const angle = (progress / 100) * 360;

      // update DOM directly — no React re-render, so no lag
      if (ringRef.current) {
        ringRef.current.style.background = `conic-gradient(from -90deg, #fbbf24 ${angle}deg, transparent ${angle}deg)`;
      }
      if (sparkRef.current) {
        const rad = ((angle - 90) * Math.PI) / 180;
        const x = 50 + 48 * Math.cos(rad);
        const y = 50 + 48 * Math.sin(rad);
        sparkRef.current.style.left = `${x}%`;
        sparkRef.current.style.top = `${y}%`;
        sparkRef.current.style.opacity = progress <= 0 || progress >= 100 ? '0' : '1';
      }

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setIsLoading(false);
        if (!isDev) sessionStorage.setItem('hasVisited', 'true');
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
          {/* Logo + glowing ring */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* faint full track */}
            <div className="absolute inset-0 rounded-full border-[3px] border-amber-500/10" />

            {/* progress ring — style updated directly via ref, no React re-render */}
            <div
              ref={ringRef}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from -90deg, #fbbf24 0deg, transparent 0deg)',
                WebkitMask:
                  'radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))',
                boxShadow: '0 0 12px 2px rgba(245,158,11,0.5)',
              }}
            />

            {/* spark at the leading tip — position updated directly via ref */}
            <motion.div
              ref={sparkRef}
              className="absolute w-3 h-3 rounded-full bg-amber-200"
              style={{
                left: '50%',
                top: '2%',
                transform: 'translate(-50%, -50%)',
                boxShadow:
                  '0 0 8px 3px rgba(255,255,255,0.9), 0 0 22px 9px rgba(245,158,11,0.85)',
                opacity: 0,
              }}
              animate={{ scale: [1, 1.8, 1] }}
              transition={{ duration: 0.25, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* soft glow pulse behind the logo */}
            <motion.div
              className="absolute inset-0 m-auto w-1/2 h-1/2 rounded-full bg-amber-500/20 blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />

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