'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Smartphone, Cloud, Database, Shield, Zap, Users } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance.',
      size: 'large',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love to interact with.',
      size: 'small',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      size: 'small',
      color: 'from-purple-500 to-violet-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for growing businesses.',
      size: 'medium',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized database architecture for fast, reliable data management.',
      size: 'medium',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security measures to protect your data and users.',
      size: 'small',
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-4">
              What We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                Do Best
              </span>
            </h2>
            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto">
              We offer a comprehensive suite of services to help your business
              succeed in the digital landscape.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLarge = feature.size === 'large';
              const isMedium = feature.size === 'medium';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    rotate: index % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.3 }
                  }}
                  className={`${
                    isLarge 
                      ? 'lg:col-span-2 lg:row-span-2' 
                      : isMedium 
                        ? 'lg:col-span-1' 
                        : 'lg:col-span-1'
                  } bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-xl transition-shadow cursor-pointer group`}
                >
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 md:mb-6 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-charcoal mb-2 md:mb-3 group-hover:text-amber-500 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-amber-500 text-sm font-medium">
                        Learn more →
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;