'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const RollingScroll = ({ children }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  });

  // Rolling transforms
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 5, 0, -5, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [0, 10, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const translateY = useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        rotateX,
        rotateY,
        scale,
        y: translateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

export default RollingScroll;