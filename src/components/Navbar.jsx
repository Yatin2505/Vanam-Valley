// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/siteData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const navBg = isHome
    ? scrolled
      ? 'bg-forest/97 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-forest shadow-lg';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <LogoMark />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-white/90 hover:text-gold font-inter font-medium text-sm tracking-wide transition-colors duration-200"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-card border border-gold/20 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-5 py-3 text-sm text-dark-text hover:bg-ivory hover:text-forest font-inter font-medium transition-colors duration-150 border-b border-gold/10 last:border-0"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-inter font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-gold text-xs px-5 py-2.5"
            >
              Enquire Now
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-1">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-forest-deep flex flex-col pt-20 pb-8 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="border-b border-gold/10 pb-1">
                    <div className="text-gold/70 text-xs font-inter font-semibold tracking-widest uppercase px-3 pt-4 pb-2">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-6 py-3 text-white/90 hover:text-gold font-inter font-medium text-base transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        — {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-4 text-lg font-inter font-medium border-b border-gold/10 transition-colors ${
                        isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="mt-8 px-3">
              <Link
                to="/contact"
                className="btn-gold w-full justify-center text-base py-4"
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now →
              </Link>
            </div>

            <div className="mt-auto px-3 pt-8 text-white/40 text-xs font-inter">
              Vanam Valley Group • Balaghat, M.P.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// SVG Logo Mark (text-based, matching brand)
const LogoMark = () => (
  <div className="flex items-center gap-2.5">
    {/* Emblem icon */}
    <div className="relative w-10 h-10 flex-shrink-0">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="40" height="40" rx="4" fill="#D8B879" fillOpacity="0.15"/>
        {/* Leaf / lotus emblem */}
        <path d="M20 8 C14 14 10 18 10 22 C10 27 14.5 31 20 31 C25.5 31 30 27 30 22 C30 18 26 14 20 8Z" fill="#D8B879" fillOpacity="0.9"/>
        <path d="M20 10 C20 10 15 16 15 22 C15 25 17.2 28 20 28" stroke="#004D40" strokeWidth="0.8" fill="none"/>
        <path d="M20 10 C20 10 25 16 25 22 C25 25 22.8 28 20 28" stroke="#004D40" strokeWidth="0.8" fill="none"/>
        <circle cx="20" cy="22" r="2" fill="#004D40"/>
        {/* Star/diamond at top */}
        <path d="M20 5 L21.5 8 L20 7 L18.5 8 Z" fill="#D8B879"/>
      </svg>
    </div>
    {/* Text */}
    <div className="leading-none">
      <div className="text-white font-playfair font-bold text-lg tracking-wider leading-none">VANAM</div>
      <div className="text-gold font-playfair font-semibold text-base tracking-widest leading-none">VALLEY</div>
      <div className="text-gold/60 font-inter text-[8px] tracking-[0.25em] uppercase leading-none mt-0.5">Balaghat, M.P.</div>
    </div>
  </div>
);

export default Navbar;

