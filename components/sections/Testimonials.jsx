'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Delta Tech bridge transformed our online presence completely. Their team delivered beyond our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, CloudScale',
      content: 'The SaaS platform they built for us has been instrumental in our growth.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandCo',
      content: 'Their digital marketing strategies are unmatched. The ROI has been phenomenal.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      color: 'from-purple-500 to-violet-500',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager, AppWorks',
      content: 'The mobile app they developed exceeded all expectations. Flawless performance.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-16 md:py-20 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Clients Say</span>
            </h2>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-navy-800 rounded-2xl border border-cream/10 p-6 md:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-cream/90 leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} p-0.5`}>
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full rounded-full object-cover border-2 border-navy-800"
                    />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-cream">{testimonials[currentIndex].name}</h3>
                    <p className="text-xs md:text-sm text-cream/60">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-6">
              <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 text-cream flex items-center justify-center border border-cream/20 hover:border-amber-400 hover:text-amber-400 transition-colors">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'bg-amber-500 w-8' : 'bg-cream/30 w-2.5 hover:bg-cream/50'
                    }`}
                  />
                ))}
              </div>

              <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/10 text-cream flex items-center justify-center border border-cream/20 hover:border-amber-400 hover:text-amber-400 transition-colors">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;