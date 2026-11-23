// src/components/Navbar.jsx
// Ultra-Stylish Luxury Architectural Floating Capsule Navbar
// Features: Floating glassmorphism capsule, active route pills, animated dropdowns, phone quick-call, and gold CTA

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Calendar, Phone, Sparkles, MapPin } from 'lucide-react';
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

  // Scroll detection
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
        className={`transition-all duration-300 px-3 sm:px-6 lg:px-10 ${
          scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-5'
        }`}
      >
        {/* ── Floating Capsule Container ── */}
        <div
          className={`max-w-[1380px] w-full mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between border ${
            scrolled
              ? 'bg-[#FAF8F3]/92 backdrop-blur-xl border-[#12281F]/10 shadow-[0_10px_35px_rgba(18,40,31,0.08)]'
              : 'bg-[#FAF8F3]/80 backdrop-blur-md border-[#12281F]/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          }`}
        >
          {/* ── Left: Brand Official Logo & Tagline ── */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0">
            <div className="relative">
              <img
                src="/logo-gold.png"
                alt="Vanam Valley Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#2D5A43] ring-2 ring-[#FAF8F3]" />
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base tracking-[0.08em] font-extrabold text-[#12281F] font-outfit uppercase leading-tight">
                  VANAM VALLEY
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#2D5A43]/10 text-[9px] font-outfit font-semibold text-[#2D5A43] uppercase tracking-wider">
                  <MapPin size={9} />
                  Balaghat
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] font-outfit text-[#12281F]/60 uppercase font-semibold leading-none mt-0.5">
                PLOTTED DEVELOPMENT
              </span>
            </div>
          </Link>

          {/* ── Center: Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    className={`flex items-center gap-1.5 font-outfit text-xs xl:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      location.pathname.startsWith(link.path) || activeDropdown === link.label
                        ? 'bg-[#12281F]/8 text-[#12281F]'
                        : 'text-[#12281F]/75 hover:text-[#12281F] hover:bg-[#12281F]/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-[#12281F]' : 'text-[#12281F]/50'
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-0 mt-3 w-72 bg-[#FAF8F3]/98 backdrop-blur-xl border border-[#12281F]/10 rounded-2xl shadow-2xl p-2.5 z-50 text-left"
                      >
                        <div className="text-[10px] font-outfit font-bold uppercase tracking-widest text-[#2D5A43] px-3 py-1.5 border-b border-[#12281F]/8 mb-1">
                          {link.label} Formats
                        </div>
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#12281F]/6 transition-all group"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#2D5A43]/40 group-hover:bg-[#2D5A43] group-hover:scale-125 mt-1.5 flex-shrink-0 transition-all" />
                            <div>
                              <div className="text-xs font-outfit font-bold text-[#12281F] group-hover:text-[#2D5A43] transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-[10px] font-inter text-[#12281F]/60 mt-0.5 leading-snug">
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
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative font-outfit text-xs xl:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-[#12281F] text-white shadow-sm'
                        : 'text-[#12281F]/75 hover:text-[#12281F] hover:bg-[#12281F]/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* ── Right: Direct Phone + Schedule Visit Button ── */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct Phone Chip (visible on sm+) */}
            <a
              href={`tel:${business.phone[0]}`}
              aria-label="Direct Phone Line"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-outfit font-semibold text-[#12281F]/80 hover:text-[#12281F] px-3 py-2 rounded-full hover:bg-[#12281F]/5 transition-colors border border-transparent hover:border-[#12281F]/10"
            >
              <span className="w-6 h-6 rounded-full bg-[#2D5A43]/10 text-[#2D5A43] flex items-center justify-center">
                <Phone size={12} />
              </span>
              <span className="hidden xl:inline">+91 {business.phone[0]}</span>
            </a>

            {/* Schedule Visit Luxury Pill Button */}
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#12281F] hover:bg-[#1a3c2a] text-white font-outfit font-semibold text-xs tracking-wider pl-4 pr-2 sm:pl-5 sm:pr-2.5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 border border-[#D8B879]/30 group"
            >
              <Calendar size={13} className="text-[#D8B879]" />
              <span>Schedule Visit</span>
              <span className="w-5 h-5 rounded-full bg-[#D8B879] group-hover:bg-[#e8ca8e] text-[#12281F] flex items-center justify-center transition-colors">
                <ArrowRight size={11} />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden w-9 h-9 rounded-full bg-[#12281F]/5 hover:bg-[#12281F]/10 text-[#12281F] flex items-center justify-center transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* ── Mobile Navigation Drawer ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden max-w-[1380px] mx-auto mt-2 bg-[#FAF8F3]/95 backdrop-blur-2xl border border-[#12281F]/10 rounded-3xl p-5 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2 text-left">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div className="py-1">
                        <div className="text-xs font-outfit font-bold text-[#2D5A43] uppercase tracking-wider py-1.5 px-3">
                          {link.label}
                        </div>
                        <div className="pl-3 space-y-1 mt-1 border-l-2 border-[#2D5A43]/20">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block text-xs font-outfit font-semibold text-[#12281F]/80 hover:text-[#12281F] py-1.5 px-3 rounded-xl hover:bg-[#12281F]/5"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) =>
                          `block text-xs font-outfit font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl transition-colors ${
                            isActive
                              ? 'bg-[#12281F] text-white shadow-sm'
                              : 'text-[#12281F]/80 hover:text-[#12281F] hover:bg-[#12281F]/5'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Mobile Drawer Bottom Actions */}
                <div className="pt-3 border-t border-[#12281F]/10 space-y-2">
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setEnquiryModalOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-[#12281F] text-white font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar size={14} className="text-[#D8B879]" />
                    <span>Schedule On-Site Visit</span>
                  </button>

                  <a
                    href={`tel:${business.phone[0]}`}
                    className="w-full py-2.5 rounded-full bg-[#FAF8F3] hover:bg-white text-[#12281F] border border-[#12281F]/15 font-outfit font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={13} className="text-[#2D5A43]" />
                    <span>Call +91 {business.phone[0]}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Accessible Lead Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        title="Schedule an On-Ground Site Visit"
        subtitle="Our local Balaghat property desk will arrange an escorted tour across our plotted developments."
        source="navbar_schedule_visit"
      />
    </>
  );
};

export default Navbar;
