// src/components/PrimaryButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

/**
 * PrimaryButton - Luxury Champagne Gold Action Trigger
 * @param {Object} props
 * @param {string} [props.to] - Router path
 * @param {string} [props.href] - External URL
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type] - Button type ('button' | 'submit')
 * @param {boolean} [props.isLoading] - Loading spinner
 * @param {boolean} [props.disabled] - Disabled state
 * @param {React.ReactNode} [props.icon] - Optional custom icon
 * @param {boolean} [props.arrow] - Default right arrow
 * @param {'sm' | 'md' | 'lg'} [props.size] - Button size
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} props.children - Label or content
 */
const PrimaryButton = ({
  to,
  href,
  onClick,
  type = 'button',
  isLoading = false,
  disabled = false,
  icon,
  arrow = false,
  size = 'md',
  className = '',
  children,
  ...rest
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-5 py-2.5 gap-2',
    md: 'text-xs px-7 py-3.5 gap-2.5',
    lg: 'text-sm px-9 py-4 gap-3',
  };

  const baseClasses = `
    inline-flex items-center justify-center font-inter font-semibold uppercase tracking-wider
    rounded-full transition-all duration-300 select-none
    bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002D26]
    shadow-[0_4px_20px_rgba(216,184,121,0.25)]
    hover:shadow-[0_6px_28px_rgba(216,184,121,0.45)] hover:scale-[1.02]
    active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D8B879]/60 focus:ring-offset-2 focus:ring-offset-[#001D18]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none
    ${sizeClasses[size] || sizeClasses.md}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {isLoading ? (
        <Loader2 size={14} className="animate-spin text-[#002D26]" />
      ) : icon ? (
        icon
      ) : null}
      <span>{children}</span>
      {!isLoading && arrow && <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${baseClasses}`} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`group ${baseClasses}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`group ${baseClasses}`}
      {...rest}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
