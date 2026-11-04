// src/pages/Home/index.jsx
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import WhySection from './WhySection';
import LocationGallerySection from './LocationGallerySection';
import CTASection from './CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WhySection />
      <LocationGallerySection />
      <CTASection />
    </>
  );
};

export default HomePage;

