// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUpRight, Compass, Shield } from 'lucide-react';
import { business } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-[#001410] text-white border-t border-gold/20 relative overflow-hidden">
      
      {/* ── Top Atmospheric Hairline ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* ── Main Footer Grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
        
        {/* Brand Lockup & Legacy (Cols 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-gold.png"
                alt="Vanam Valley Group"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-white/65 font-inter text-xs sm:text-sm font-light leading-relaxed max-w-sm mb-6">
              A master-planned plotted development group rooted in Balaghat, Madhya Pradesh. Dedicated to crafting sustainable residential enclaves and premier commercial corridors.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-inter text-gold">
              <Shield size={12} />
              <span>Registered Office: Balaghat, M.P. • 481001</span>
            </div>
          </div>
        </div>

        {/* Navigation Corridors (Cols 2) */}
        <div className="lg:col-span-2">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Exploration
          </h4>
          <ul className="space-y-3 font-inter text-xs">
            {[
              { label: 'Home Horizon', path: '/' },
              { label: 'Brand Story', path: '/about' },
              { label: 'Residential Plots', path: '/projects/residential' },
              { label: 'Commercial Corridors', path: '/projects/commercial' },
              { label: 'Visual Chronicle', path: '/gallery' },
              { label: 'Private Consultation', path: '/contact' },
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

        {/* Contact Coordinates (Cols 3) */}
        <div className="lg:col-span-3">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Office Coordinates
          </h4>
          <div className="space-y-4 font-inter text-xs text-white/75">
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

        {/* Connect & VIP Concierge (Cols 3) */}
        <div className="lg:col-span-3">
          <h4 className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase mb-5">
            Connect With Us
          </h4>

          <div className="mb-5">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-gold transition-colors font-inter text-xs"
            >
              <IgIcon />
              <span className="font-medium">@{business.instagram}</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 mb-6">
            <SocialIcon href={business.instagramUrl} label="Instagram">
              <IgIcon />
            </SocialIcon>
            <SocialIcon href="#" label="Facebook">
              <FbIcon />
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <YtIcon />
            </SocialIcon>
          </div>

          {/* Direct WhatsApp Callout Pill */}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-white/5 border border-gold/30 hover:border-gold transition-all flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div>
              <div className="text-[10px] font-inter text-white/50 uppercase tracking-wider">
                Direct WhatsApp
              </div>
              <div className="text-xs font-inter font-semibold text-white group-hover:text-gold transition-colors">
                Instant Land Desk →
              </div>
            </div>
          </a>
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
            © {business.year} Vanam Valley Group. All Rights Reserved. • Balaghat, Madhya Pradesh
          </div>
          
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link to="/terms" className="hover:text-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold flex items-center justify-center text-white/70 transition-all duration-200"
  >
    {children}
  </a>
);

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default Footer;
