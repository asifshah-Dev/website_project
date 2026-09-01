'use client';

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';

export default function Home() {
  useEffect(() => {
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initSmoothScroll();
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      
      {/* Placeholder for next sections */}
      <section id="work" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold text-charcoal">Work Section</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-4xl font-bold text-charcoal">Contact Section</h2>
      </section>
    </Layout>
  );
}