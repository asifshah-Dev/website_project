'use client';

import { motion } from 'framer-motion';

const TextSplitter = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3"
          variants={child}
          whileHover={{ 
            scale: 1.05, 
            color: '#F59E0B',
            transition: { duration: 0.2 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextSplitter;