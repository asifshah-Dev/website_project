'use client';

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  useEffect(() => {
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      window.lenis= lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        window.lenis = null;
      };
    };

    initSmoothScroll();
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Layout>
  );
}