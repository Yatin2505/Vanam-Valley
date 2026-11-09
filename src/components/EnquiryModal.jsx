// src/components/EnquiryModal.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
import LeadForm from './LeadForm';

/**
 * EnquiryModal - Global Accessible Modal Dialog for Priority Enquiries
 * @param {Object} props
 * @param {boolean} props.isOpen - Modal open status
 * @param {Function} props.onClose - Close callback
 * @param {'residential' | 'commercial' | 'both'} [props.defaultPropertyInterest]
 * @param {string} [props.title] - Modal title
 * @param {string} [props.subtitle] - Modal subtext
 * @param {string} [props.source] - Lead origin tag
 */
const EnquiryModal = ({
  isOpen,
  onClose,
  defaultPropertyInterest = 'residential',
  title = 'Schedule A Consultation',
  subtitle = 'Connect directly with our Balaghat land advisory team to discuss layouts, plot dimensions, or site previews.',
  source = 'modal_global',
}) => {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000E0B]/85 backdrop-blur-md"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#001D18] border border-[#D8B879]/35 rounded-3xl p-6 sm:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.85)] z-10 my-auto text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D8B879] text-white/70 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#D8B879]"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8B879]/15 border border-[#D8B879]/30 text-[10px] font-inter text-[#D8B879] uppercase tracking-widest font-semibold mb-3">
                <Sparkles size={12} />
                <span>Priority Advisory Desk</span>
              </div>
              <h2 id="modal-title" className="font-playfair font-bold text-2xl sm:text-3xl text-white">
                {title}
              </h2>
              <p className="font-inter text-white/70 text-xs sm:text-sm font-light leading-relaxed mt-2">
                {subtitle}
              </p>
            </div>

            {/* Embedded Form Component */}
            <LeadForm
              variant="modal"
              theme="dark"
              defaultPropertyInterest={defaultPropertyInterest}
              onSuccess={() => {
                // Keep modal open to show genuine confirmation state
              }}
              source={source}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
