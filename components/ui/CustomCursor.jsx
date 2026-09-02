'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const dotSpring = { damping: 50, stiffness: 1000 };
  const ringSpring = { damping: 25, stiffness: 400 };
  
  const dotX = useSpring(cursorX, dotSpring);
  const dotY = useSpring(cursorY, dotSpring);
  const ringX = useSpring(cursorX, ringSpring);
  const ringY = useSpring(cursorY, ringSpring);

  useEffect(() => {
    const checkDevice = () => {
      const isDesktopDevice = window.matchMedia('(pointer: fine)').matches && window.innerWidth > 768;
      setIsDesktop(isDesktopDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (!isDesktop) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorText('');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkDevice);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 10,
          height: 10,
          backgroundColor: '#F59E0B',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(245, 158, 11, 0.8)',
        }}
        animate={{ scale: isClicking ? 0.6 : isHovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          width: 36,
          height: 36,
          border: '2px solid #F59E0B',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.5 : 1,
          opacity: isVisible ? (isHovering ? 0.8 : 0.6) : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
    </>
  );
};

export default CustomCursor;