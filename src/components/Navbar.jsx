// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Home, Building2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, business } from '../data/siteData';
import EnquiryModal from './EnquiryModal';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const isHome = location.pathname === '/';

  // Scroll detection for background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || 0;
      setScrolled(scrollPos > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route change reset
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Click outside dropdown
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

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
        className={`transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-[#001D18]/95 backdrop-blur-xl border-b border-gold/20 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#001D18]/90 via-[#001D18]/45 to-transparent py-5 md:py-6'
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
            <div className="hidden sm:flex flex-col border-l border-white/15 pl-3 py-0.5 text-left">
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-inter font-semibold">
                Balaghat · M.P.
              </span>
              <span className="text-[9px] tracking-wider text-white/50 font-inter font-light">
                Plotting &amp; Property Consulting
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-7" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    className={`flex items-center gap-1.5 font-inter text-xs tracking-wider uppercase py-2 transition-colors ${
                      location.pathname.startsWith(link.path) || activeDropdown === link.label
                        ? 'text-gold font-semibold'
                        : 'text-white/80 hover:text-gold'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-gold' : 'text-white/50'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#001D18]/98 backdrop-blur-2xl border border-gold/30 rounded-2xl shadow-2xl p-2.5 z-50 text-left"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold mt-1.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-inter font-semibold text-white group-hover:text-gold transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-[10px] font-inter text-white/45 mt-0.5 leading-snug">
                                {subItem.desc}
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
                    `relative font-inter text-xs tracking-wider uppercase py-2 transition-all duration-200 ${
                      isActive ? 'text-gold font-semibold' : 'text-white/80 hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* ── Right Actions: Enquire Now Button ── */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002620] font-inter font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(216,184,121,0.4)] hover:scale-[1.02] active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden text-white hover:text-gold p-2 transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* ── Mobile Navigation Drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[#001713]/98 backdrop-blur-2xl border-b border-gold/25 px-6 py-6 overflow-hidden shadow-2xl text-left"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-white/5 pb-3">
                    {link.dropdown ? (
                      <div>
                        <div className="font-inter text-xs text-gold/70 uppercase tracking-widest font-semibold mb-2">
                          {link.label}
                        </div>
                        <div className="pl-3 space-y-2.5">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                              className="block text-sm font-inter text-white hover:text-gold transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block font-inter text-sm uppercase tracking-wider ${
                            isActive ? 'text-gold font-semibold' : 'text-white/80 hover:text-gold'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}

                <div className="pt-2 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setEnquiryModalOpen(true);
                    }}
                    className="btn-gold w-full justify-center text-xs py-3"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={`tel:${business.phone[0]}`}
                    className="btn-outline-gold w-full justify-center text-xs py-3 text-center"
                  >
                    <span>Call +91 {business.phone[0]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── Global Enquiry Modal ── */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        title="Enquire About Vanam Valley"
        subtitle="Connect with our Balaghat property team to discuss residential plots, commercial plots, or property consulting."
        source="navbar_enquire_btn"
      />
    </>
  );
};

export default Navbar;
