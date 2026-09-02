'use client';

import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ 
    from_name: '', 
    from_email: '', 
    subject: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again.');
      setTimeout(() => setError(''), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Info@deltatechbridge.com', color: 'from-blue-500 to-cyan-500' },
    { icon: Phone, label: 'Phone', value: '+92313 4164082', color: 'from-emerald-500 to-green-500' },
    { icon: MapPin, label: 'Location', value: 'Zamzam Mall Baghbanpura Lahore', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-navy-900 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
              <Send className="w-4 h-4" />
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              Let's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Talk</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 bg-navy-800 rounded-2xl border border-cream/10 p-4 md:p-5">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0`}>
                    <info.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-cream/60 mb-0.5">{info.label}</p>
                    <p className="text-sm md:text-base font-semibold text-cream">{info.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-navy-800 rounded-2xl border border-cream/10 p-4 md:p-5">
                <h3 className="text-sm font-bold text-cream mb-2">Office Hours</h3>
                <p className="text-xs text-cream/60">Monday - Saturday: 11:00 AM - 7:00 PM</p>
                <p className="text-xs text-cream/60">Friday: 1 hour break 1-2PM</p>
                <p className="text-xs text-cream/60">Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-navy-800 rounded-2xl border border-cream/10 p-5 md:p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-cream mb-2">Message Sent!</h3>
                  <p className="text-cream/60 text-sm text-center">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-xs text-red-400">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Your Name</label>
                    <input
                      type="text" 
                      name="from_name" 
                      value={formData.from_name} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Email Address</label>
                    <input
                      type="email" 
                      name="from_email" 
                      value={formData.from_email} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Subject</label>
                    <input
                      type="text" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-cream/70 mb-1.5">Message</label>
                    <textarea
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="4"
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900 border border-cream/20 text-cream text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-navy-900 font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-2 hover:from-amber-500 hover:to-yellow-600 transition-all"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;