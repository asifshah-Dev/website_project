'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Mail, Share2, MapPin, Phone } from 'lucide-react';
import { useSmoothScrollTo } from '@/hooks/useSmoothScrollTo';

const Footer = () => {
  const { scrollToSection } = useSmoothScrollTo();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#about' },
      { label: 'Digital Marketing', href: '#about' },
      { label: 'Graphic Design', href: '#about' },
      { label: 'Mobile App', href: '#about' },
      { label: 'SaaS Software', href: '#about' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Work', href: '#work' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="relative bg-navy-950 border-t border-cream/10">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold text-cream">
                Delta Tech<span className="text-amber-500"> bridge</span>
              </a>
              <p className="text-cream/60 text-sm mt-3 leading-relaxed">
                We craft digital experiences that transform businesses.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-cream mb-3">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/60 hover:text-amber-400 transition-colors text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-cream mb-3">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/60 hover:text-amber-400 transition-colors text-xs"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-cream mb-3">Contact</h3>
              <ul className="space-y-2 text-xs text-cream/60">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  123 Tech Street
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-amber-500" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-amber-500" />
                  info@deltatechbridge.com
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-800 rounded-2xl border border-cream/10 p-6 md:p-8 text-center mb-8">
            <h3 className="text-lg md:text-xl font-bold text-cream mb-2">
              Have a project in mind?
            </h3>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 text-sm font-semibold"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-cream/10">
            <p className="text-cream/50 text-xs">
              © 2024 Delta Tech bridge. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/50 hover:text-cream text-xs transition-colors">Privacy</a>
              <a href="#" className="text-cream/50 hover:text-cream text-xs transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;