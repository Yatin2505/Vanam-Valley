// src/components/SecondaryButton.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

/**
 * SecondaryButton - Glass, Outline, or Forest Variant Action Trigger
 * @param {Object} props
 * @param {string} [props.to] - Router path
 * @param {string} [props.href] - External URL
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type] - Button type ('button' | 'submit')
 * @param {boolean} [props.isLoading] - Loading spinner
 * @param {boolean} [props.disabled] - Disabled state
 * @param {'glass' | 'outline' | 'forest'} [props.variant] - Button variant
 * @param {'sm' | 'md' | 'lg'} [props.size] - Button size
 * @param {React.ReactNode} [props.icon] - Custom icon
 * @param {boolean} [props.arrow] - Default right arrow
 * @param {string} [props.className] - Additional classes
 * @param {React.ReactNode} props.children - Label or content
 */
const SecondaryButton = ({
  to,
  href,
  onClick,
  type = 'button',
  isLoading = false,
  disabled = false,
  variant = 'glass',
  size = 'md',
  icon,
  arrow = false,
  className = '',
  children,
  ...rest
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-5 py-2.5 gap-2',
    md: 'text-xs px-6 py-3.5 gap-2.5',
    lg: 'text-sm px-8 py-4 gap-3',
  };

  const variantClasses = {
    glass: `
      bg-white/10 backdrop-blur-md border border-white/20 text-white
      hover:bg-white/20 hover:border-white/40
    `,
    outline: `
      bg-transparent border border-[#D8B879]/60 text-[#D8B879]
      hover:bg-[#D8B879] hover:text-[#002D26] hover:shadow-[0_4px_20px_rgba(216,184,121,0.3)]
    `,
    forest: `
      bg-[#002D26] border border-[#D8B879]/30 text-[#D8B879]
      hover:bg-[#075C4A] hover:border-[#D8B879] hover:text-white
    `,
  };

  const baseClasses = `
    inline-flex items-center justify-center font-inter font-medium uppercase tracking-wider
    rounded-full transition-all duration-300 select-none
    hover:scale-[1.02] active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-[#D8B879]/50 focus:ring-offset-2 focus:ring-offset-[#001D18]
    disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none
    ${variantClasses[variant] || variantClasses.glass}
    ${sizeClasses[size] || sizeClasses.md}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {isLoading ? (
        <Loader2 size={14} className="animate-spin text-current" />
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

export default SecondaryButton;
