// src/pages/NotFound.jsx
// Redesigned 404 Page matching the Vanam Valley Luxury Aesthetic

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Compass } from 'lucide-react';

const NotFound = () => (
  <div className="min-h-screen bg-[#FAF8F3] flex flex-col items-center justify-center px-4 sm:px-6 text-center relative overflow-hidden select-none">
    
    {/* Subtle atmospheric glow */}
    <div className="pointer-events-none absolute top-1/4 -left-20 w-[450px] h-[450px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
    <div className="pointer-events-none absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

    <div className="relative z-10 max-w-lg mx-auto space-y-6">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D5A43]/10 border border-[#2D5A43]/20">
        <Compass size={14} className="text-[#2D5A43]" />
        <span className="text-xs font-outfit font-semibold uppercase tracking-[0.2em] text-[#2D5A43]">
          Page Not Found
        </span>
      </div>

      {/* 404 Headline */}
      <h1 className="text-8xl sm:text-9xl font-outfit font-black tracking-tight text-[#1a3c2a]">
        404
      </h1>

      <h2 className="text-2xl sm:text-3xl font-outfit font-bold text-[#1a1a1a]">
        Let's Guide You Back Home
      </h2>

      <p className="font-inter text-sm sm:text-base text-[#1a1a1a]/65 max-w-md mx-auto leading-relaxed">
        The destination you are looking for has moved or does not exist. Explore our plotted developments or return to the main sanctuary.
      </p>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white text-xs sm:text-sm font-outfit font-semibold shadow-md transition-all group"
        >
          <Home size={16} />
          <span>Return to Home</span>
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#f5f2e8] border border-[#1a1a1a]/15 text-[#1a1a1a] text-xs sm:text-sm font-outfit font-semibold shadow-sm transition-all"
        >
          <span>Explore Projects</span>
        </Link>
      </div>

    </div>

  </div>
);

export default NotFound;
