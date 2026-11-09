// src/components/ScrollReveal.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal - Accessible Scroll-Triggered Entrance Wrapper
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner content to reveal
 * @param {'up' | 'down' | 'left' | 'right' | 'fade'} [props.direction] - Motion direction
 * @param {number} [props.delay] - Animation delay in seconds
 * @param {number} [props.duration] - Animation duration in seconds
 * @param {number} [props.distance] - Translate distance in pixels
 * @param {boolean} [props.once] - Whether to animate only once
 * @param {string} [props.className] - Container class name
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  distance = 30,
  once = true,
  className = '',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px' });

  // Reduced motion query
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getTarget = () => {
    if (prefersReduced) return inView ? { opacity: 1 } : { opacity: 0 };
    switch (direction) {
      case 'up':
      case 'down':
        return inView ? { opacity: 1, y: 0 } : getInitial();
      case 'left':
      case 'right':
        return inView ? { opacity: 1, x: 0 } : getInitial();
      case 'fade':
      default:
        return inView ? { opacity: 1 } : { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={getTarget()}
      transition={{
        duration: prefersReduced ? 0.3 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
