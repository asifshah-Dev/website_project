'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const updateWidths = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
        setViewportWidth(window.innerWidth);
        setIsMobile(window.innerWidth < 768);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%']);

  const projects = [
    {
      id: 1,
      title: 'School Management Software',
      category: 'Web Application',
      description: 'Complete school management system with student records, attendance, grades, fee management, and parent portal.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySQL'],
      year: '2024',
      featured: true,
      link: '/school-management',
      internal: true,
    },
    {
      id: 2,
      title: 'Bait ul Noor',
      category: 'Static Website',
      description: 'Beautiful static website for Bait ul Noor organization with responsive design and modern layout.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      featured: false,
    },
    {
      id: 3,
      title: 'B2B8Expo',
      category: 'Business Website',
      description: 'B2B exhibition and expo platform connecting businesses with global opportunities.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      featured: false,
      link: 'https://b2b8expo.com',
      internal: false,
    },
    {
      id: 4,
      title: 'InspireUplift',
      category: 'E-commerce Website',
      description: 'Inspirational e-commerce platform with curated products and seamless shopping experience.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      featured: false,
      link: 'https://inspireuplift.com',
      internal: false,
    },
    {
      id: 5,
      title: 'Active Help',
      category: 'NGO Website',
      description: 'Non-profit organization website for Active Help with donation and volunteer management.',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      featured: false,
      link: 'https://activehelp.org.pk',
      internal: false,
    },
    {
      id: 6,
      title: 'Creative Design Studio',
      category: 'Graphic Design',
      description: 'Complete graphic design portfolio showcasing branding, logos, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Photoshop', 'Illustrator', 'Figma'],
      year: '2024',
      featured: false,
    },
    {
      id: 7,
      title: 'Corporate Website',
      category: 'Web Development',
      description: 'Professional corporate website with modern design and responsive layout.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      year: '2024',
      featured: false,
    },
    {
      id: 8,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing campaign with SEO, social media, and content strategy.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop',
      tags: ['SEO', 'Social Media', 'Content'],
      year: '2024',
      featured: false,
    },
  ];

  // Mobile Layout
  if (isMobile) {
    return (
      <section id="work" className="relative py-16 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
              <Sparkles className="w-4 h-4" />
              Our Work
            </div>
            <h2 className="text-3xl font-bold text-cream">
              Featured{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Projects</span>
            </h2>
          </div>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true, margin: '-30px' }}
                className="bg-navy-800 rounded-2xl overflow-hidden border border-cream/10"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium text-cream bg-navy-900/80 px-2 py-0.5 rounded-full">{project.category}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-medium text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">{project.year}</span>
                  </div>
                  {project.featured && (
                    <div className="absolute bottom-3 left-3">
                      <span className="text-[10px] font-bold text-navy-900 bg-amber-500 px-2 py-0.5 rounded-full">Featured</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-cream mb-1">{project.title}</h3>
                  <p className="text-xs text-cream/70 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-cream/60 bg-cream/5 px-2 py-0.5 rounded-md border border-cream/10">{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target={project.internal ? '_self' : '_blank'}
                      rel={project.internal ? '' : 'noopener noreferrer'}
                      className="inline-flex items-center gap-1 text-amber-400 text-xs font-medium mt-3 hover:text-amber-300 transition-colors"
                    >
                      {project.internal ? 'Learn More' : 'Visit Website'}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section ref={sectionRef} id="work" className="relative h-[350vh] bg-navy-900 hidden md:block">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="text-center mb-8 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4 border border-amber-500/20">
            <Sparkles className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl font-bold text-cream">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Projects</span>
          </h2>
        </div>

        <motion.div 
          ref={trackRef} 
          style={{ x }} 
          className="flex gap-6 px-8 w-max"
        >
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[300px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cream mb-3">Our Work</h3>
              <p className="text-cream/60">Scroll to explore</p>
              <motion.div 
                animate={{ x: [0, 15, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity }} 
                className="mt-4 text-amber-400 flex justify-center"
              >
                <ArrowUpRight className="w-6 h-6" />
              </motion.div>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex-shrink-0 w-[380px] bg-navy-800 rounded-3xl overflow-hidden border border-cream/10 cursor-pointer hover:border-amber-400/50 transition-colors"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-cream bg-navy-900/80 px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">{project.year}</span>
                </div>
                {project.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold text-navy-900 bg-amber-500 px-3 py-1 rounded-full">Featured</span>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-amber-500 text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-cream mb-2 group-hover:text-amber-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-cream/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-cream/60 bg-cream/5 px-2 py-1 rounded-md border border-cream/10">{tag}</span>
                  ))}
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target={project.internal ? '_self' : '_blank'}
                    rel={project.internal ? '' : 'noopener noreferrer'}
                    className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium mt-4 hover:text-amber-300 transition-colors"
                  >
                    {project.internal ? 'Learn More' : 'Visit Website'}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* End Card */}
          <div className="flex-shrink-0 w-[250px] flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cream mb-3">Want more?</h3>
              <button className="px-6 py-2.5 rounded-full bg-amber-500 text-navy-900 text-sm font-semibold hover:bg-amber-400 transition-colors">
                View All
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;