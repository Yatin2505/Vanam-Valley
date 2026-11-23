// src/components/SmoothScroll.jsx
// Ultra-High-Performance Silky Smooth Scroll
// Optimized for zero scroll-lag, instant wheel response, and native 120Hz mobile support

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Snappy, lag-free configuration
    const lenis = new Lenis({
      duration: 0.75, // Snappy & responsive (eliminates the 1.1s laggy float)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05, // Instant response to mousewheel / trackpad
      touchMultiplier: 1.0,
      syncTouch: false, // Prevents touch stutter on mobile devices
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Make lenis available globally if needed for programmatic scroll
    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return children;
}
