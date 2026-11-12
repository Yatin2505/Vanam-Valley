// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PageLoader from './components/PageLoader';

// Lazy-load pages for optimal performance & code splitting
const HomePage = lazy(() => import('./pages/Home/index'));
const AboutPage = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ResidentialPage = lazy(() => import('./pages/Residential'));
const CommercialPage = lazy(() => import('./pages/Commercial'));
const PropertyConsultingPage = lazy(() => import('./pages/PropertyConsulting'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const ContactPage = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/residential" element={<ResidentialPage />} />
            <Route path="/projects/commercial" element={<CommercialPage />} />
            <Route path="/services" element={<Navigate to="/services/property-consulting" replace />} />
            <Route path="/services/property-consulting" element={<PropertyConsultingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Placeholder for legal pages
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-[#F8F6EF] flex items-center justify-center pt-24 pb-16 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="font-playfair text-3xl font-bold text-[#002D26] mb-4">{title}</h1>
      <p className="font-inter text-[#18231F]/60 text-sm leading-relaxed">
        This document is being updated in accordance with consumer transparency guidelines. Please reach out to our Balaghat office directly for any questions.
      </p>
    </div>
  </div>
);

export default App;
