'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Code, Palette, PenTool, Smartphone, Globe, Layout, Database, Cloud, Cpu, Boxes, Layers, Wrench, Rocket } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const floatingIcons = [
    { icon: Code, size: 40, top: '10%', left: '5%', delay: 0, duration: 4, color: '#007ACC' },
    { icon: Palette, size: 35, top: '20%', left: '80%', delay: 0.3, duration: 5, color: '#F24E1E' },
    { icon: PenTool, size: 30, top: '65%', left: '10%', delay: 0.6, duration: 4, color: '#F59E0B' },
    { icon: Layout, size: 35, top: '70%', left: '85%', delay: 0.2, duration: 5, color: '#31A8FF' },
    { icon: Smartphone, size: 30, top: '35%', left: '3%', delay: 0.5, duration: 4, color: '#EC4899' },
    { icon: Globe, size: 30, top: '45%', left: '90%', delay: 0.1, duration: 5, color: '#10B981' },
    { icon: Boxes, size: 35, top: '5%', left: '40%', delay: 0.4, duration: 4, color: '#61DAFB' },
    { icon: Layers, size: 30, top: '15%', left: '60%', delay: 0.7, duration: 5, color: '#000000' },
    { icon: Database, size: 30, top: '55%', left: '25%', delay: 0.3, duration: 4, color: '#3178C6' },
    { icon: Cloud, size: 35, top: '75%', left: '50%', delay: 0.5, duration: 5, color: '#06B6D4' },
    { icon: Cpu, size: 30, top: '30%', left: '70%', delay: 0.8, duration: 4, color: '#8B5CF6' },
    { icon: Wrench, size: 30, top: '80%', left: '20%', delay: 0.4, duration: 5, color: '#F05032' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {floatingIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: item.top,
                left: item.left,
                color: item.color,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.15, 1],
                y: [0, -25, 0],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: item.duration,
                delay: item.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon size={item.size} />
            </motion.div>
          );
        })}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-100/70 text-amber-600 text-xs md:text-sm font-medium mb-6 md:mb-8 border border-amber-200 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            Welcome to Delta Tech bridge
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal mb-4 md:mb-6 leading-tight px-2"
          >
            We Build{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600"
            >
              Digital Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base md:text-xl text-slate mb-8 md:mb-10 max-w-2xl mx-auto px-4"
          >
            We're a creative technology company crafting innovative digital solutions
            that help businesses thrive in the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4"
          >
            <MagneticButton>
              <a 
                href="#work" 
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-amber-400/30 w-full sm:w-auto"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm rounded-lg font-semibold flex items-center justify-center gap-2 text-charcoal border border-gray-200 hover:border-amber-400 transition-colors w-full sm:w-auto">
                <Play className="w-4 h-4 md:w-5 md:h-5" />
                Watch Showreel
              </button>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex justify-center gap-6 md:gap-12 mt-10 md:mt-16 px-4"
          >
            {[
              { value: '250+', label: 'Projects' },
              { value: '98%', label: 'Satisfaction' },
              { value: '15+', label: 'Years' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-slate">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;