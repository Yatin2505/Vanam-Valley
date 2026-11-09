// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, business } from '../data/siteData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const location = useLocation();
  const dropdownRef = useRef(null);
  const isHome = location.pathname === '/';

  // Live Balaghat local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrolled(scrollPos > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route change reset
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside dropdown
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
        className={`transition-all duration-500 ${
          isHome
            ? scrolled
              ? 'bg-[#001D18]/90 backdrop-blur-xl border-b border-gold/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'bg-gradient-to-b from-[#001D18]/90 via-[#001D18]/40 to-transparent py-5 md:py-6'
            : 'bg-[#001D18]/95 backdrop-blur-xl border-b border-gold/20 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between">
          
          {/* ── Brand Official Logo ── */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0">
            <img
              src="/logo-gold.png"
              alt="Vanam Valley Logo"
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden xl:flex flex-col border-l border-white/15 pl-3 py-0.5 text-left">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold/80 font-inter font-medium">Balaghat • M.P.</span>
              <span className="text-[9px] tracking-wider text-white/40 font-inter font-light">Plotted Development</span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
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
                    className="flex items-center gap-1.5 text-white/85 hover:text-gold font-inter font-medium text-xs tracking-wider transition-colors duration-200 py-2 focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`text-gold/70 transition-transform duration-300 ${
                        dropdownOpen ? 'rotate-180 text-gold' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#002620]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gold/30 p-2.5 overflow-hidden z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-[#001D18] transition-colors flex-shrink-0">
                              <Compass size={17} />
                            </div>
                            <div>
                              <div className="text-white text-xs font-inter font-medium group-hover:text-gold transition-colors">
                                {item.label}
                              </div>
                              <div className="text-white/45 text-[10px] font-inter font-light">
                                {item.label.includes('Residential') ? 'Private living & sanctuary' : 'High-footfall frontage parcels'}
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
                      isActive ? 'text-gold font-semibold' : 'text-white/80 hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* ── Right Actions: Live Time & CTA Button ── */}
          <div className="flex items-center gap-4">
            
            {/* Live IST Time Badge */}
            {currentTime && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-inter text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-light">{currentTime} IST</span>
              </div>
            )}

            <Link
              to="/contact"
              className="hidden sm:inline-flex btn-gold text-xs px-5 py-2.5 shadow-gold hover:shadow-gold-glow"
            >
              <span>Enquire Now</span>
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000 }}
            className="bg-[#001D18] flex flex-col justify-between pt-20 pb-8 px-6 overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <img
                  src="/logo-gold.png"
                  alt="Vanam Valley"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white/70 hover:text-white p-2 rounded-full bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="border-b border-white/5 py-3">
                      <div className="text-gold/80 text-[11px] font-inter tracking-[0.2em] uppercase font-semibold mb-2">
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
                Schedule A Private Consultation
                <ArrowRight size={14} />
              </Link>

              <div className="flex items-center justify-between text-white/50 font-inter text-xs pt-2">
                <span>Direct: +91 {business.phone[0]}</span>
                <span>Balaghat, M.P.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
