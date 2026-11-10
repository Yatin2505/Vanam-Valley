// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumbs - Accessible Luxury Navigation Trail
 * @param {Object} props
 * @param {Array<{ label: string, path?: string }>} props.items - Breadcrumb items
 * @param {'dark' | 'light'} [props.theme] - Theme mode ('dark' on forest, 'light' on ivory)
 * @param {string} [props.className] - Additional classes
 */
const Breadcrumbs = ({ items = [], theme = 'dark', className = '' }) => {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center text-xs font-inter font-light tracking-wide ${className}`}
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        {/* Home Root */}
        <li className="flex items-center">
          <Link
            to="/"
            className={`inline-flex items-center gap-1 transition-colors ${
              isDark ? 'text-white/60 hover:text-[#D8B879]' : 'text-[#18231F]/60 hover:text-[#075C4A]'
            }`}
          >
            <Home size={13} className={isDark ? 'text-[#D8B879]' : 'text-[#075C4A]'} />
            <span>Home</span>
          </Link>
        </li>

        {/* Trail Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              <ChevronRight
                size={12}
                className={isDark ? 'text-[#D8B879]/50' : 'text-[#002D26]/40'}
              />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    isDark ? 'text-white/70 hover:text-[#D8B879]' : 'text-[#18231F]/70 hover:text-[#075C4A]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={`font-medium ${
                    isDark ? 'text-[#D8B879]' : 'text-[#002D26]'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

