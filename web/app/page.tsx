'use client';

import { useEffect } from 'react';
import HeroSection from './components/home/HeroSection';
import UVPSection from './components/home/UVPSection';
import DiferenciadorSection from './components/home/DiferenciadorSection';
import ProgramasSection from './components/home/ProgramasSection';
import InstalacionesSection from './components/home/InstalacionesSection';
import EquipoSection from './components/home/EquipoSection';
import NumerosSection from './components/home/NumerosSection';
import TestimoniosSection from './components/home/TestimoniosSection';
import PreciosSection from './components/home/PreciosSection';
import FAQSection from './components/home/FAQSection';
import CTAFinalSection from './components/home/CTAFinalSection';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-up, .fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <UVPSection />
      <DiferenciadorSection />
      <ProgramasSection />
      <InstalacionesSection />
      <NumerosSection />
      <EquipoSection />
      <TestimoniosSection />
      <PreciosSection />
      <FAQSection />
      <CTAFinalSection />
    </>
  );
}
