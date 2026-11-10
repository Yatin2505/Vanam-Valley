// src/components/PropertyCategorySwitcher.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Building2, Layers } from 'lucide-react';

/**
 * PropertyCategorySwitcher - Interactive Filter / Tab Switcher
 * @param {Object} props
 * @param {'all' | 'residential' | 'commercial'} props.activeCategory - Currently selected category
 * @param {Function} props.onChange - Selection handler
 * @param {'dark' | 'light'} [props.theme] - Theme styling
 * @param {boolean} [props.showAll] - Whether to include "All Categories" option
 * @param {string} [props.className] - Additional classes
 */
const PropertyCategorySwitcher = ({
  activeCategory = 'residential',
  onChange,
  theme = 'dark',
  showAll = false,
  className = '',
}) => {
  const isDark = theme === 'dark';

  const categories = [
    ...(showAll ? [{ id: 'all', label: 'All Opportunities', icon: Layers, tag: 'Overview' }] : []),
    { id: 'residential', label: 'Residential Plots', icon: Trees, tag: 'Private Living' },
    { id: 'commercial', label: 'Commercial Plots', icon: Building2, tag: 'High-Yield Frontage' },
  ];

  return (
    <div
      role="tablist"
      aria-label="Property Categories"
      className={`inline-flex items-center p-1.5 rounded-full border ${
        isDark
          ? 'bg-[#001D18]/90 border-[#D8B879]/30 shadow-xl'
          : 'bg-[#F8F6EF] border-[#002D26]/15 shadow-md'
      } ${className}`}
    >
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange && onChange(cat.id)}
            className={`relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 rounded-full text-xs font-inter tracking-wider uppercase transition-colors select-none focus:outline-none focus:ring-2 focus:ring-[#D8B879]/60 ${
              isActive
                ? 'text-[#002D26] font-semibold'
                : isDark
                ? 'text-white/70 hover:text-white'
                : 'text-[#18231F]/70 hover:text-[#002D26]'
            }`}
          >
            {/* Sliding Pill Background with LayoutId */}
            {isActive && (
              <motion.div
                layoutId="categorySwitcherPill"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] shadow-[0_2px_12px_rgba(216,184,121,0.35)]"
              />
            )}

            <span className="relative z-10 flex items-center gap-2">
              <Icon size={14} className={isActive ? 'text-[#002D26]' : 'text-current'} />
              <span>{cat.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PropertyCategorySwitcher;

