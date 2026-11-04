// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';
import { business, navLinks } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-forest-deep text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <FooterLogo />
          <p className="text-white/50 font-inter text-sm mt-5 leading-relaxed">
            {business.tagline}
          </p>
          <p className="text-white/40 font-inter text-xs mt-3 leading-relaxed">
            Premium residential and commercial plotting in the heart of Balaghat, Madhya Pradesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-inter font-semibold text-sm tracking-widest uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Projects', 'Gallery', 'Contact'].map((item) => {
              const paths = {
                'Home': '/',
                'About Us': '/about',
                'Projects': '/projects',
                'Gallery': '/gallery',
                'Contact': '/contact',
              };
              return (
                <li key={item}>
                  <Link
                    to={paths[item]}
                    className="text-white/60 hover:text-gold font-inter text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-inter font-semibold text-sm tracking-widest uppercase mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {business.phone.map((num) => (
              <li key={num} className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href={`tel:${num}`}
                  className="text-white/70 hover:text-gold font-inter text-sm transition-colors"
                >
                  {num}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3 mt-2">
              <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
              <span className="text-white/60 font-inter text-sm leading-relaxed">
                {business.address.street},<br />
                {business.address.city} – {business.address.pin}
              </span>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white font-inter font-semibold text-sm tracking-widest uppercase mb-5">
            Follow Us
          </h4>
          <div className="space-y-3">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors font-inter text-sm"
            >
              <span className="text-gold"><IgIcon /></span>
              @{business.instagram}
            </a>
          </div>

          <div className="flex gap-3 mt-5">
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

          {/* Gold divider */}
          <div className="mt-8 p-4 border border-gold/20 rounded-xl">
            <p className="text-gold/80 font-inter text-xs leading-relaxed">
              Interested in a plot? Get in touch with us today.
            </p>
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 btn-gold text-xs py-2 px-4 inline-flex"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-inter text-xs">
            © {business.year} Vanam Valley Group. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="text-white/40 hover:text-gold font-inter text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-gold font-inter text-xs transition-colors">
              Terms & Conditions
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
    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-all duration-200"
  >
    {children}
  </a>
);

const IgIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YtIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const FooterLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 relative flex-shrink-0">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="40" height="40" rx="4" fill="#D8B879" fillOpacity="0.15"/>
        <path d="M20 8 C14 14 10 18 10 22 C10 27 14.5 31 20 31 C25.5 31 30 27 30 22 C30 18 26 14 20 8Z" fill="#D8B879" fillOpacity="0.9"/>
        <path d="M20 10 C20 10 15 16 15 22 C15 25 17.2 28 20 28" stroke="#004D40" strokeWidth="0.8" fill="none"/>
        <path d="M20 10 C20 10 25 16 25 22 C25 25 22.8 28 20 28" stroke="#004D40" strokeWidth="0.8" fill="none"/>
        <circle cx="20" cy="22" r="2" fill="#004D40"/>
        <path d="M20 5 L21.5 8 L20 7 L18.5 8 Z" fill="#D8B879"/>
      </svg>
    </div>
    <div>
      <div className="text-white font-playfair font-bold text-xl tracking-wider">VANAM</div>
      <div className="text-gold font-playfair font-semibold text-lg tracking-widest">VALLEY</div>
      <div className="text-gold/50 font-inter text-[9px] tracking-[0.2em] uppercase">Balaghat, M.P.</div>
    </div>
  </div>
);

export default Footer;
