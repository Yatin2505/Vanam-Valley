// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUpRight, Shield, MessageCircle } from 'lucide-react';
import { business } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-[#001410] text-white border-t border-gold/20 relative overflow-hidden">
      
      {/* ── Top Atmospheric Hairline ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
        
        {/* Brand Lockup (Cols 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between text-left">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-gold.png"
                alt="Vanam Valley"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-white/70 font-inter text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              A trusted real estate, plotting and property consulting venture in Balaghat, Madhya Pradesh. Offering planned residential land, commercial frontage parcels, and honest property advice.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-inter text-gold">
              <Shield size={13} />
              <span>Registered Office: Balaghat, M.P. • 481001</span>
            </div>
          </div>
        </div>

        {/* Quick Links (Cols 3) */}
        <div className="lg:col-span-3 text-left">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Property &amp; Services
          </h4>
          <ul className="space-y-3 font-inter text-xs">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Vanam Valley', path: '/about' },
              { label: 'Residential Plots', path: '/projects/residential' },
              { label: 'Commercial Plots', path: '/projects/commercial' },
              { label: 'Property Consulting', path: '/services/property-consulting' },
              { label: 'Project Gallery', path: '/gallery' },
              { label: 'Contact Us', path: '/contact' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-white/70 hover:text-gold transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Office Coordinates (Cols 3) */}
        <div className="lg:col-span-3 text-left">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Office Details
          </h4>
          <div className="space-y-4 font-inter text-xs text-white/75 font-light">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                {business.address.street},<br />
                Near Hariom Nagar, {business.address.city},<br />
                {business.address.state} – {business.address.pin}
              </div>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <Phone size={15} className="text-gold flex-shrink-0 mt-0.5" />
              <div className="flex flex-col space-y-1">
                <a href={`tel:${business.phone[0]}`} className="hover:text-gold transition-colors font-medium">
                  +91 {business.phone[0]}
                </a>
                <a href={`tel:${business.phone[1]}`} className="hover:text-gold transition-colors font-medium">
                  +91 {business.phone[1]}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Instant Assistance (Cols 2) */}
        <div className="lg:col-span-2 text-left">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Quick Action
          </h4>

          <div className="mb-4">
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappTemplates.general)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                <MessageCircle size={16} />
              </div>
              <div>
                <div className="text-[10px] font-inter text-white/60 uppercase tracking-wider">
                  WhatsApp Us
                </div>
                <div className="text-xs font-inter font-semibold text-white group-hover:text-gold transition-colors">
                  Instant Property Chat
                </div>
              </div>
            </a>
          </div>

          <p className="text-[11px] font-inter text-white/50 leading-relaxed">
            Visiting Balaghat? Connect with our team to arrange an accompanied site preview.
          </p>
        </div>

      </div>

      {/* ── Colossal Watermark Typography ── */}
      <div className="relative border-t border-white/5 pt-6 pb-2 overflow-hidden select-none pointer-events-none text-center">
        <span className="font-playfair font-extrabold text-[12vw] leading-none text-white/[0.03] tracking-widest uppercase whitespace-nowrap block">
          VANAM VALLEY
        </span>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10 bg-[#000E0B]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-inter text-white/40">
          <div>
            © {business.year} {business.name}. All Rights Reserved. · Balaghat, Madhya Pradesh
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
