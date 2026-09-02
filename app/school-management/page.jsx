'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  ClipboardCheck, 
  GraduationCap, 
  Wallet, 
  MessageCircle,
  Shield,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import CustomCursor from '@/components/ui/CustomCursor';

const SchoolManagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: 'Teacher',
    organization: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const WHATSAPP_NUMBER = '923298681953';

  useEffect(() => {
    const initSmoothScroll = async () => {
      const Lenis = (await import('lenis')).default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      window.lenis = lenis;

      function raf(time) {
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

  const roles = [
    { value: 'Admin', icon: Shield, color: 'from-red-500 to-pink-500' },
    { value: 'Teacher', icon: BookOpen, color: 'from-blue-500 to-cyan-500' },
    { value: 'Student', icon: GraduationCap, color: 'from-emerald-500 to-green-500' },
    { value: 'Examiner', icon: ClipboardCheck, color: 'from-purple-500 to-violet-500' },
    { value: 'Accountant', icon: Wallet, color: 'from-amber-500 to-orange-500' },
  ];

  const features = [
    { icon: Users, title: 'Role-Based Access', description: 'Separate dashboards for Admin, Teacher, Student, Examiner, and Accountant with custom permissions.' },
    { icon: ClipboardCheck, title: 'Exam Management', description: 'Create exams, manage schedules, enter marks, and generate detailed report cards.' },
    { icon: BookOpen, title: 'Attendance Tracking', description: 'Daily attendance marking with automated reports for parents and administrators.' },
    { icon: Wallet, title: 'Fee Management', description: 'Track fee payments, generate receipts, and manage financial reports efficiently.' },
    { icon: GraduationCap, title: 'Student Records', description: 'Complete student profiles with academic history, documents, and performance tracking.' },
    { icon: MessageCircle, title: 'Parent Portal', description: 'Parents can view their child\'s attendance, grades, and announcements in real-time.' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hello! I want to request demo access for School Management Software.%0A%0A*Name:* ${formData.name}%0A*Role:* ${formData.role}%0A*Organization:* ${formData.organization}%0A%0APlease send me the demo credentials.`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', role: 'Teacher', organization: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-navy-900">
      <CustomCursor />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 pt-4">
          <div className="flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 border border-cream/10 bg-navy-900/80 backdrop-blur-xl max-w-5xl mx-auto">
            <Link href="/" className="flex items-center gap-2 text-cream hover:text-amber-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm md:text-base font-semibold">Back to Home</span>
            </Link>
            <span className="text-base md:text-xl font-bold text-cream">
              Delta Tech<span className="text-amber-500"> bridge</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20"
            >
              <GraduationCap className="w-4 h-4" />
              School Management Software
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight"
            >
              Complete School{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Management Solution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-lg text-cream/80 max-w-2xl mx-auto mb-8"
            >
              A comprehensive system to manage students, teachers, exams, attendance, fees, and more - all in one place.
            </motion.p>

            <motion.button
              onClick={() => scrollToSection('request-demo')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 font-semibold shadow-lg shadow-amber-500/30 hover:from-amber-500 hover:to-yellow-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Request Demo Access
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                Key{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Features</span>
              </h2>
              <p className="text-cream/70 text-sm md:text-base max-w-xl mx-auto">
                Everything you need to run your school efficiently
              </p>
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
                    className="bg-navy-800 rounded-2xl border border-cream/10 p-5 md:p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-navy-900 mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-cream mb-2">{feature.title}</h3>
                    <p className="text-sm text-cream/70 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Request Demo Section */}
      <section id="request-demo" className="py-16 md:py-20 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                Request{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Demo Access</span>
              </h2>
              <p className="text-cream/70 text-sm md:text-base">
                Fill the form and submit. We'll send you credentials via WhatsApp.
              </p>
            </div>

            <div className="bg-navy-800 rounded-3xl border border-cream/10 p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-2">Request Sent!</h3>
                  <p className="text-cream/60 text-sm text-center">
                    WhatsApp is opening. Send the message and we'll reply with credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Select Your Role</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {roles.map((role) => {
                        const Icon = role.icon;
                        const isSelected = formData.role === role.value;
                        return (
                          <button
                            key={role.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, role: role.value }))}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                                : 'bg-navy-900 border-cream/20 text-cream/70 hover:border-cream/40'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-xs font-medium">{role.value}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Organization / School Name</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 font-semibold text-sm flex items-center justify-center gap-2 hover:from-amber-500 hover:to-yellow-600 transition-all shadow-lg shadow-amber-500/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Request via WhatsApp
                  </button>

                  <p className="text-center text-xs text-cream/50">
                    You'll be redirected to WhatsApp to send the request
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolManagement;