// src/components/SectionHeading.jsx
import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeading - Reusable Editorial Heading Component
 * @param {Object} props
 * @param {string} [props.tag] - Eyebrow label
 * @param {string} props.title - Primary title
 * @param {string} [props.titleHighlight] - Italic / gold highlighted title portion
 * @param {string} [props.subtitle] - Supporting descriptive copy
 * @param {'left' | 'center' | 'right'} [props.align] - Text alignment
 * @param {'dark' | 'light'} [props.theme] - Theme ('dark' on forest, 'light' on ivory)
 * @param {React.ReactNode} [props.action] - Optional right-aligned CTA or filter button
 * @param {string} [props.className] - Additional wrapper classes
 */
const SectionHeading = ({
  tag,
  title,
  titleHighlight,
  subtitle,
  align = 'left',
  theme = 'dark',
  action,
  className = '',
}) => {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';
  const isRight = align === 'right';

  const alignClasses = isCenter
    ? 'text-center mx-auto items-center'
    : isRight
    ? 'text-right ml-auto items-end'
    : 'text-left items-start';

  return (
    <div
      className={`flex flex-col ${alignClasses} ${
        action ? 'md:flex-row md:items-end md:justify-between gap-6' : ''
      } ${className}`}
    >
      <div className={`max-w-3xl flex flex-col ${alignClasses}`}>
        {/* Eyebrow Tag */}
        {tag && (
          <div
            className={`inline-flex items-center gap-2 mb-3.5 ${
              isCenter ? 'justify-center' : ''
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
            <span
              className={`font-inter font-semibold text-xs tracking-[0.28em] uppercase ${
                isDark ? 'text-[#D8B879]' : 'text-[#075C4A]'
              }`}
            >
              {tag}
            </span>
          </div>
        )}

        {/* Main Heading */}
        <h2
          className={`font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tight ${
            isDark ? 'text-white' : 'text-[#002D26]'
          }`}
        >
          {title}{' '}
          {titleHighlight && (
            <span
              className={`italic font-normal block sm:inline ${
                isDark
                  ? 'bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent'
                  : 'text-[#075C4A]'
              }`}
            >
              {titleHighlight}
            </span>
          )}
        </h2>

        {/* Supporting Subtitle */}
        {subtitle && (
          <p
            className={`font-inter text-xs sm:text-sm md:text-base font-light leading-relaxed mt-4 max-w-2xl ${
              isDark ? 'text-white/70' : 'text-[#18231F]/75'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Optional Action Slot */}
      {action && <div className="flex-shrink-0 mt-4 md:mt-0">{action}</div>}
    </div>
  );
};

export default SectionHeading;

