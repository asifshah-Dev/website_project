'use client';

export const useSmoothScrollTo = () => {
  const scrollToSection = (href) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return { scrollToSection };
};