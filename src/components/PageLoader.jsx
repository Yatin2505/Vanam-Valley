// src/components/PageLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-[#001D18] flex flex-col items-center justify-center p-6 select-none overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 rounded-full bg-[#D8B879]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
        {/* Animated Official Gold Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <img
            src="/logo-gold.png"
            alt="Vanam Valley Logo"
            className="h-20 sm:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(216,184,121,0.25)]"
          />
          {/* Subtle pulsating halo */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-2xl border border-gold/30 pointer-events-none"
          />
        </motion.div>

        {/* Elegant Hairline Progress Bar */}
        <div className="w-48 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mb-5 relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#D8B879] to-transparent rounded-full shadow-[0_0_12px_#D8B879]"
          />
        </div>

        {/* Brand Details */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-1"
        >
          <div className="text-[11px] font-inter font-semibold tracking-[0.3em] uppercase text-gold/90">
            VANAM VALLEY
          </div>
          <div className="text-[9px] font-inter tracking-[0.2em] uppercase text-white/40">
            Balaghat • Madhya Pradesh
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoader;

