// src/components/Navbar.jsx
// Refined Navigation Bar — Seamlessly integrated with Hero & Brand Design System

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
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
        className={`transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#001D18]/95 backdrop-blur-xl border-b border-[#D8B879]/20 py-3.5 shadow-lg'
            : 'bg-gradient-to-b from-[#001713]/85 via-[#001713]/40 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          
          {/* ── Brand Official Logo ── */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0">
            <img
              src="/logo-gold.png"
              alt="Vanam Valley Logo"
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col border-l border-white/20 pl-3.5 py-0.5 text-left">
              <span className="text-[12px] tracking-[0.25em] uppercase text-white font-inter font-semibold">
                BALAGHAT · M.P.
              </span>
              <span className="text-[11px] font-playfair italic text-[#E5C378] tracking-wide">
                Building a Prosperity Community
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    className={`flex items-center gap-1.5 font-inter text-xs tracking-wider uppercase px-3 py-1.5 transition-colors ${
                      location.pathname.startsWith(link.path) || activeDropdown === link.label
                        ? 'text-[#E5C378] font-semibold'
                        : 'text-white/85 hover:text-[#E5C378]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180 text-[#E5C378]' : 'text-white/50'
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
                        className="absolute top-full left-0 mt-1 w-64 bg-[#001D18]/98 backdrop-blur-2xl border border-[#E5C378]/30 rounded-2xl shadow-2xl p-2.5 z-50 text-left"
                      >
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E5C378]/60 group-hover:bg-[#E5C378] mt-1.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs font-inter font-semibold text-white group-hover:text-[#E5C378] transition-colors">
                                {subItem.label}
                              </div>
                              <div className="text-[10px] font-inter text-white/50 mt-0.5 leading-snug">
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
                    `font-inter text-xs tracking-wider uppercase transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E5C378] text-[#001D18] font-semibold px-4 py-1.5 rounded-full shadow-sm'
                        : 'text-white/85 hover:text-[#E5C378] px-3 py-1.5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* ── Right Actions: Enquire Now Gold Pill Button ── */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-[#E5C378] hover:bg-[#F5DA98] text-[#001D18] font-inter font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <span>Enquire Now</span>
              <ArrowRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden text-white hover:text-[#D8B879] p-2 transition-colors focus:outline-none"
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
              className="lg:hidden bg-[#001713]/98 backdrop-blur-2xl border-b border-[#D8B879]/25 px-6 py-6 overflow-hidden shadow-2xl text-left"
            >
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-white/5 pb-3">
                    {link.dropdown ? (
                      <div>
                        <div className="font-inter text-xs tracking-wider uppercase text-[#D8B879] font-semibold mb-2">
                          {link.label}
                        </div>
                        <div className="pl-3 space-y-2.5">
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setMobileOpen(false)}
                              className="block text-xs font-inter text-white/80 hover:text-white"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block font-inter text-xs tracking-wider uppercase py-1 ${
                            isActive ? 'text-[#D8B879] font-semibold' : 'text-white/80 hover:text-white'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setEnquiryModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#D8B879] text-[#002620] font-inter font-bold text-xs tracking-wider uppercase py-3 rounded-xl mt-4"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultPropertyInterest="both"
        title="Enquire About Vanam Valley Plots"
        subtitle="Speak directly with our Balaghat property desk to learn more about residential and commercial plot options."
        source="navbar_enquire_button"
      />
    </>
  );
};

export default Navbar;
