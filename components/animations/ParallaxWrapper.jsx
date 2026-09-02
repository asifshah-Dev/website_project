'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxWrapper = ({ children, speed = 0.5, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5 * speed, 0, 5 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;