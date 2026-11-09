// src/components/PageHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs';

/**
 * PageHeader - Editorial Hero Header for Inner Pages
 * @param {Object} props
 * @param {string} props.title - Main Page Title
 * @param {string} [props.titleHighlight] - Italic or highlighted segment
 * @param {string} [props.subtitle] - Supporting narrative paragraph
 * @param {string} [props.tag] - Eyebrow category tag
 * @param {Array<{ label: string, path?: string }>} [props.breadcrumbs] - Breadcrumb trail
 * @param {string} [props.image] - Optional background landscape photo URL
 * @param {React.ReactNode} [props.action] - Optional action button
 * @param {string} [props.className] - Additional classes
 */
const PageHeader = ({
  title,
  titleHighlight,
  subtitle,
  tag,
  breadcrumbs = [],
  image,
  action,
  className = '',
}) => {
  return (
    <section
      className={`relative pt-36 pb-16 md:pt-44 md:pb-24 px-5 md:px-10 lg:px-16 overflow-hidden bg-[#001713] text-white border-b border-[#D8B879]/15 ${className}`}
    >
      {/* Background Visual or Deep Emerald Gradient */}
      {image ? (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001713] via-[#002D26]/80 to-[#001D18]/70" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#001D18] via-[#002D26] to-[#001713]">
          <div className="absolute inset-0 bg-[radial-gradient(#D8B879_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.06]" />
        </div>
      )}

      {/* Decorative Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb Trail */}
        {breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} theme="dark" />
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Category Tag */}
            {tag && (
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
                <span className="font-inter font-semibold text-xs tracking-[0.25em] uppercase text-[#D8B879]">
                  {tag}
                </span>
              </div>
            )}

            {/* Page Title */}
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white">
              {title}{' '}
              {titleHighlight && (
                <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="font-inter text-white/75 text-sm sm:text-base md:text-lg font-light leading-relaxed mt-5 max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Optional Action / Header Button */}
          {action && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              {action}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
