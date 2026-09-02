'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Code, Palette, PenTool, Smartphone, Globe, Layout, Database, Cloud, Cpu, Boxes, Layers, Wrench } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollToSection } = useSmoothScrollTo();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const floatingIcons = [
    { icon: Code, size: 45, top: '10%', left: '5%', delay: 0, color: '#60A5FA' },
    { icon: Palette, size: 40, top: '20%', left: '85%', delay: 0.3, color: '#F472B6' },
    { icon: PenTool, size: 38, top: '65%', left: '8%', delay: 0.6, color: '#FBBF24' },
    { icon: Layout, size: 42, top: '70%', left: '88%', delay: 0.2, color: '#22D3EE' },
    { icon: Smartphone, size: 40, top: '35%', left: '3%', delay: 0.5, color: '#A78BFA' },
    { icon: Globe, size: 38, top: '45%', left: '92%', delay: 0.1, color: '#34D399' },
    { icon: Boxes, size: 45, top: '5%', left: '40%', delay: 0.4, color: '#F59E0B' },
    { icon: Database, size: 35, top: '55%', left: '25%', delay: 0.3, color: '#2DD4BF' },
    { icon: Cloud, size: 42, top: '78%', left: '55%', delay: 0.5, color: '#38BDF8' },
    { icon: Cpu, size: 38, top: '30%', left: '70%', delay: 0.8, color: '#FBBF24' },
    { icon: Layers, size: 35, top: '15%', left: '60%', delay: 0.7, color: '#818CF8' },
    { icon: Wrench, size: 35, top: '82%', left: '20%', delay: 0.4, color: '#F87171' },
  ];

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-900">
      {/* Floating Icons - Always visible with good opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ top: item.top, left: item.left, color: item.color }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.5, 0.9, 0.5],
                y: [0, -25, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 5, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon size={item.size} strokeWidth={1.8} />
            </motion.div>
          );
        })}
      </div>

      {/* Light overlay - not too dark so icons are visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/30 to-navy-900/60 z-[1]" />

      {/* Content */}
      <motion.div 
        style={{ y: yContent, opacity }}
        className="container mx-auto px-4 relative z-20 py-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-amber-500/20"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Welcome to Delta Tech bridge
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight"
          >
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
              Digital Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-lg text-cream/80 mb-6 md:mb-8 max-w-xl mx-auto"
          >
            We're a creative technology company crafting innovative digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-3"
          >
            <MagneticButton>
              <a 
                href="#work"
                onClick={(e) => { e.preventDefault(); scrollToSection('#work'); }}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm md:text-base w-full sm:w-auto"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="px-6 py-3 bg-cream/10 rounded-lg font-semibold flex items-center justify-center gap-2 text-cream border border-cream/20 text-sm md:text-base w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                Let's Talk
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex justify-center gap-6 md:gap-10 mt-8 md:mt-12"
          >
            {[
              { value: '1570+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '6+', label: 'Years' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-cream">{stat.value}</div>
                <div className="text-[10px] md:text-xs text-cream/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;