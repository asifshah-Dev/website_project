'use client';

import { motion } from 'framer-motion';
import { Code, Megaphone, Palette, Smartphone, Cloud, ArrowUpRight, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.',
      gradient: 'from-blue-600 to-cyan-500',
      stat: '150+ Projects',
      tag: 'Development',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that boost your online presence.',
      gradient: 'from-orange-500 to-red-500',
      stat: '300% ROI',
      tag: 'Marketing',
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Stunning visual designs that capture your brand essence.',
      gradient: 'from-pink-600 to-rose-500',
      stat: '500+ Designs',
      tag: 'Design',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      gradient: 'from-purple-600 to-violet-500',
      stat: '50+ Apps',
      tag: 'Mobile',
    },
    {
      icon: Cloud,
      title: 'SaaS Software',
      description: 'Scalable Software as a Service solutions for your business.',
      gradient: 'from-emerald-600 to-green-500',
      stat: '99.9% Uptime',
      tag: 'SaaS',
    },
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              Our Services
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
            >
              Services That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Transform
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true, margin: '-30px' }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-navy-800 rounded-2xl border border-cream/10 p-5 md:p-6 cursor-pointer"
                >
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-medium text-cream/60 bg-cream/5 px-2 py-0.5 rounded-full border border-cream/10">
                      {feature.tag}
                    </span>
                  </div>

                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-cream mb-2 group-hover:text-amber-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-sm text-cream/70 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-cream/10">
                    <span className="text-xs md:text-sm font-semibold text-cream">{feature.stat}</span>
                    <ArrowUpRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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