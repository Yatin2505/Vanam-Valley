// src/components/ImageReveal.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ImageReveal - Luxury Editorial Image Container with Reveal Motion
 * @param {Object} props
 * @param {string} props.src - Image Source URL
 * @param {string} props.alt - Image Alternative Description
 * @param {string} [props.aspectRatio] - Tailwind aspect ratio class (e.g. 'aspect-[16/10]')
 * @param {'gold' | 'subtle' | 'none'} [props.borderVariant] - Border style
 * @param {React.ReactNode} [props.overlay] - Optional custom overlay or badge
 * @param {string} [props.className] - Additional wrapper classes
 * @param {number} [props.delay] - Animation delay
 */
const ImageReveal = ({
  src,
  alt,
  aspectRatio = 'aspect-[16/10]',
  borderVariant = 'gold',
  overlay,
  className = '',
  delay = 0,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const borderClasses = {
    gold: 'border border-[#D8B879]/30 hover:border-[#D8B879]/60',
    subtle: 'border border-white/10 hover:border-white/25',
    none: 'border-0',
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl transition-all duration-500 group ${
        borderClasses[borderVariant] || borderClasses.gold
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full ${aspectRatio} overflow-hidden`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001713]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

        {/* Custom Overlay / Badge slot */}
        {overlay && <div className="absolute inset-0 z-10">{overlay}</div>}
      </motion.div>
    </div>
  );
};

export default ImageReveal;

