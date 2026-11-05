// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Trees, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, business } from '../data/siteData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setScrolled(scrollPos > 40);
    };
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

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
        }}
        className={`transition-all duration-300 ${
          isHome
            ? scrolled
              ? 'bg-[#002620] shadow-2xl border-b border-gold/20 py-3.5 backdrop-blur-md'
              : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 md:py-6'
            : 'bg-[#002620] shadow-xl border-b border-gold/20 py-4 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between">
          
          {/* ── Brand Official Logo ── */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none flex-shrink-0">
            <img
              src="/logo-gold.png"
              alt="Vanam Valley Logo"
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-8">
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
                    className="flex items-center gap-1.5 text-white/90 hover:text-gold font-inter font-medium text-xs tracking-wider transition-colors duration-200 py-2 focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`text-gold/80 transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180 text-gold' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#002620] rounded-2xl shadow-card-dark border border-gold/30 p-2 overflow-hidden z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#001D18] transition-colors flex-shrink-0">
                              {item.label.includes('Residential') ? <Trees size={16} /> : <Building2 size={16} />}
                            </div>
                            <div>
                              <div className="text-white text-xs font-inter font-medium group-hover:text-gold transition-colors">
                                {item.label}
                              </div>
                              <div className="text-white/40 text-[10px] font-inter">
                                {item.label.includes('Residential') ? 'Private plots & estates' : 'Prime commercial frontage'}
                              </div>
                            </div>
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
                    `relative font-inter text-xs tracking-wider py-2 transition-all duration-200 ${
                      isActive ? 'text-gold font-semibold' : 'text-white/85 hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* ── CTA Button & Mobile Hamburger ── */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex btn-gold text-xs px-5 py-2.5 shadow-gold"
            >
              Enquire Now
              <ArrowRight size={13} />
            </Link>

            <button
              className="lg:hidden text-white hover:text-gold p-2 transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Architectural Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000 }}
            className="bg-[#001D18] flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <span className="font-inter text-gold text-xs tracking-widest uppercase font-semibold">
                  Vanam Valley Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white p-1"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="border-b border-white/5 py-2">
                      <div className="text-gold/70 text-[11px] font-inter tracking-widest uppercase mb-2">
                        {link.label}
                      </div>
                      <div className="pl-3 space-y-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block text-white/90 hover:text-gold font-playfair text-xl py-1"
                            onClick={() => setMobileOpen(false)}
                          >
                            — {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      className={({ isActive }) =>
                        `block font-playfair text-2xl py-3 border-b border-white/5 transition-colors ${
                          isActive ? 'text-gold font-bold' : 'text-white/85 hover:text-gold'
                        }`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 mt-8">
              <Link
                to="/contact"
                className="btn-gold w-full justify-center text-center py-3.5 mb-4 shadow-gold"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Site Visit
                <ArrowRight size={14} />
              </Link>

              <div className="text-white/50 font-inter text-xs space-y-1">
                <div>Direct: +91 {business.phone[0]} / {business.phone[1]}</div>
                <div>Balaghat, Madhya Pradesh</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
