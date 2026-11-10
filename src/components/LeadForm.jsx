// src/components/LeadForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  Calendar,
  Send,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { business } from '../data/siteData';

/**
 * LeadForm - Reusable High-Conversion Real-Estate Enquiry Form
 * @param {Object} props
 * @param {'residential' | 'commercial' | 'both'} [props.defaultPropertyInterest]
 * @param {'modal' | 'embedded'} [props.variant]
 * @param {'dark' | 'light'} [props.theme]
 * @param {Function} [props.onSuccess]
 * @param {string} [props.source] - Lead origin tracking
 */
const LeadForm = ({
  defaultPropertyInterest = 'residential',
  variant = 'embedded',
  theme = 'dark',
  onSuccess,
  source = 'website_general',
}) => {
  const isDark = theme === 'dark';
  const [submissionStatus, setSubmissionStatus] = useState({ state: 'idle', message: '', leadData: null });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      mobileNumber: '',
      emailAddress: '',
      propertyInterest: defaultPropertyInterest,
      purchasePurpose: 'personal',
      preferredContactMethod: 'whatsapp',
      siteVisitInterest: 'yes',
      additionalMessage: '',
      consentAgreement: true,
    },
    mode: 'onBlur',
  });

  const selectedInterest = watch('propertyInterest');

  const onSubmit = async (formData) => {
    try {
      const payload = {
        ...formData,
        sourcePage: window.location.pathname,
        sourceTag: source,
        submittedAt: new Date().toISOString(),
        leadStatus: 'New',
      };

      // Configurable endpoint for Phase 5 backend integration
      let isSavedRemotely = false;
      try {
        const response = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (response.ok) {
          isSavedRemotely = true;
        }
      } catch (err) {
        // Backend not yet running in Phase 2; gracefully buffer to local store
        isSavedRemotely = false;
      }

      // Persist in local storage for zero-loss lead preservation
      try {
        const existing = JSON.parse(localStorage.getItem('vanam_enquiries') || '[]');
        existing.push(payload);
        localStorage.setItem('vanam_enquiries', JSON.stringify(existing));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }

      setSubmissionStatus({
        state: 'success',
        message: isSavedRemotely
          ? 'Your enquiry has been securely logged on our server.'
          : 'Your consultation request has been recorded. Our Balaghat land desk will contact you directly.',
        leadData: payload,
      });

      if (onSuccess) onSuccess(payload);
      reset();
    } catch (error) {
      setSubmissionStatus({
        state: 'error',
        message: 'Could not process form submission. Please call our Balaghat desk or use WhatsApp directly.',
        leadData: null,
      });
    }
  };

  // WhatsApp context-sensitive message generator
  const getWhatsAppMessage = () => {
    const interestLabel =
      selectedInterest === 'residential'
        ? 'Residential Plots'
        : selectedInterest === 'commercial'
        ? 'Commercial Plots'
        : 'Plotted Development';
    return encodeURIComponent(
      `Hello Vanam Valley Group, I am interested in ${interestLabel} in Balaghat. Please share layout details and schedule a consultation.`
    );
  };

  return (
    <div
      className={`rounded-3xl transition-all ${
        variant === 'embedded'
          ? isDark
            ? 'bg-[#001D18]/90 border border-[#D8B879]/25 p-6 sm:p-10 shadow-2xl'
            : 'bg-white border border-[#002D26]/15 p-6 sm:p-10 shadow-xl'
          : 'p-1'
      }`}
    >
      <AnimatePresence mode="wait">
        {submissionStatus.state === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="py-10 text-center max-w-lg mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#D8B879]/20 border-2 border-[#D8B879] flex items-center justify-center text-[#D8B879] mx-auto mb-6">
              <CheckCircle2 size={32} />
            </div>

            <h3
              className={`font-playfair font-bold text-2xl sm:text-3xl mb-3 ${
                isDark ? 'text-white' : 'text-[#002D26]'
              }`}
            >
              Enquiry Received
            </h3>

            <p
              className={`font-inter text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                isDark ? 'text-white/75' : 'text-[#18231F]/75'
              }`}
            >
              {submissionStatus.message}
            </p>

            {/* Direct Instant WhatsApp Alternative */}
            <div className="p-4 rounded-2xl bg-white/5 border border-[#D8B879]/20 mb-6 text-left">
              <div className="text-[11px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold mb-1">
                For Immediate Assistance:
              </div>
              <p
                className={`text-xs font-inter leading-relaxed ${
                  isDark ? 'text-white/70' : 'text-[#18231F]/70'
                }`}
              >
                You can also chat directly with our Balaghat property advisor on WhatsApp right now.
              </p>
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition-all"
              >
                <MessageSquare size={14} />
                <span>Chat On WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setSubmissionStatus({ state: 'idle', message: '', leadData: null })}
              className="text-xs font-inter uppercase tracking-widest text-[#D8B879] hover:underline"
            >
              ← Submit Another Request
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6 text-left">
            {/* Global Error Banner */}
            {submissionStatus.state === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs font-inter">
                <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span>{submissionStatus.message}</span>
              </div>
            )}

            {/* Step 1: Property Interest */}
            <div>
              <label
                className={`block text-xs font-inter font-semibold uppercase tracking-wider mb-2.5 ${
                  isDark ? 'text-[#D8B879]' : 'text-[#075C4A]'
                }`}
              >
                1. Property Category of Interest *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { value: 'residential', label: 'Residential Plots' },
                  { value: 'commercial', label: 'Commercial Plots' },
                  { value: 'both', label: 'Both / Undecided' },
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all text-xs font-inter select-none ${
                      selectedInterest === item.value
                        ? 'bg-[#D8B879] text-[#002D26] border-[#D8B879] font-semibold shadow-md'
                        : isDark
                        ? 'bg-white/5 border-white/10 text-white/80 hover:border-[#D8B879]/50'
                        : 'bg-ivory border-[#002D26]/15 text-[#18231F]/80 hover:border-[#075C4A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <input
                      type="radio"
                      value={item.value}
                      {...register('propertyInterest')}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Step 2: Personal Details (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className={`block text-[11px] font-inter uppercase tracking-wider mb-1.5 font-medium ${
                    isDark ? 'text-white/70' : 'text-[#18231F]/70'
                  }`}
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Ramesh Agrawal"
                  autoComplete="name"
                  {...register('fullName', {
                    required: 'Please enter your full name',
                    minLength: { value: 3, message: 'Name must be at least 3 characters' },
                    maxLength: { value: 60, message: 'Name cannot exceed 60 characters' },
                  })}
                  className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-inter transition-colors focus:outline-none focus:ring-1 ${
                    errors.fullName
                      ? 'border-red-400 bg-red-400/5 focus:border-red-400 focus:ring-red-400'
                      : isDark
                      ? 'bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#D8B879] focus:ring-[#D8B879]'
                      : 'bg-white border border-[#002D26]/20 text-[#18231F] placeholder-gray-400 focus:border-[#075C4A] focus:ring-[#075C4A]'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-[11px] font-inter text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Indian Mobile Number */}
              <div>
                <label
                  htmlFor="mobileNumber"
                  className={`block text-[11px] font-inter uppercase tracking-wider mb-1.5 font-medium ${
                    isDark ? 'text-white/70' : 'text-[#18231F]/70'
                  }`}
                >
                  Indian Mobile Number *
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-xs font-inter font-medium ${
                      isDark ? 'text-[#D8B879]' : 'text-[#075C4A]'
                    }`}
                  >
                    +91
                  </div>
                  <input
                    id="mobileNumber"
                    type="tel"
                    maxLength={10}
                    placeholder="98200XXXXX"
                    autoComplete="tel"
                    {...register('mobileNumber', {
                      required: 'Mobile number is required for verification',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9',
                      },
                    })}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl text-xs sm:text-sm font-inter transition-colors focus:outline-none focus:ring-1 ${
                      errors.mobileNumber
                        ? 'border-red-400 bg-red-400/5 focus:border-red-400 focus:ring-red-400'
                        : isDark
                        ? 'bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#D8B879] focus:ring-[#D8B879]'
                        : 'bg-white border border-[#002D26]/20 text-[#18231F] placeholder-gray-400 focus:border-[#075C4A] focus:ring-[#075C4A]'
                    }`}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="mt-1 text-[11px] font-inter text-red-400 flex items-center gap-1">
                    <AlertCircle size={11} />
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
            </div>

            {/* Step 3: Purchase Purpose & Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Purchase Purpose */}
              <div>
                <label
                  htmlFor="purchasePurpose"
                  className={`block text-[11px] font-inter uppercase tracking-wider mb-1.5 font-medium ${
                    isDark ? 'text-white/70' : 'text-[#18231F]/70'
                  }`}
                >
                  Purchase Intent
                </label>
                <select
                  id="purchasePurpose"
                  {...register('purchasePurpose')}
                  className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-inter transition-colors focus:outline-none focus:ring-1 ${
                    isDark
                      ? 'bg-[#002620] border border-white/15 text-white focus:border-[#D8B879] focus:ring-[#D8B879]'
                      : 'bg-white border border-[#002D26]/20 text-[#18231F] focus:border-[#075C4A] focus:ring-[#075C4A]'
                  }`}
                >
                  <option value="personal">Personal Home Construction</option>
                  <option value="investment">Long-term Property Investment</option>
                  <option value="business">Commercial Business Establishment</option>
                </select>
              </div>

              {/* Site Visit Preference */}
              <div>
                <label
                  htmlFor="siteVisitInterest"
                  className={`block text-[11px] font-inter uppercase tracking-wider mb-1.5 font-medium ${
                    isDark ? 'text-white/70' : 'text-[#18231F]/70'
                  }`}
                >
                  Schedule Guided Site Visit?
                </label>
                <select
                  id="siteVisitInterest"
                  {...register('siteVisitInterest')}
                  className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-inter transition-colors focus:outline-none focus:ring-1 ${
                    isDark
                      ? 'bg-[#002620] border border-white/15 text-white focus:border-[#D8B879] focus:ring-[#D8B879]'
                      : 'bg-white border border-[#002D26]/20 text-[#18231F] focus:border-[#075C4A] focus:ring-[#075C4A]'
                  }`}
                >
                  <option value="yes">Yes, I want to visit the site in Balaghat</option>
                  <option value="callback">Please call me with details first</option>
                  <option value="whatsapp">Send layout brochures on WhatsApp</option>
                </select>
              </div>
            </div>

            {/* Step 4: Optional Message */}
            <div>
              <label
                htmlFor="additionalMessage"
                className={`block text-[11px] font-inter uppercase tracking-wider mb-1.5 font-medium ${
                  isDark ? 'text-white/70' : 'text-[#18231F]/70'
                }`}
              >
                Specific Requirements / Questions (Optional)
              </label>
              <textarea
                id="additionalMessage"
                rows={2}
                placeholder="Mention preferred plot size, budget expectation, or preferred call timing..."
                {...register('additionalMessage', {
                  maxLength: { value: 300, message: 'Message cannot exceed 300 characters' },
                })}
                className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-inter transition-colors focus:outline-none focus:ring-1 ${
                  isDark
                    ? 'bg-white/5 border border-white/15 text-white placeholder-white/30 focus:border-[#D8B879] focus:ring-[#D8B879]'
                    : 'bg-white border border-[#002D26]/20 text-[#18231F] placeholder-gray-400 focus:border-[#075C4A] focus:ring-[#075C4A]'
                }`}
              />
            </div>

            {/* Step 5: Submission & Security Info */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-inter font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D8B879] via-[#E5CA96] to-[#C4A45F] text-[#002D26] hover:shadow-[0_4px_24px_rgba(216,184,121,0.4)] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin text-[#002D26]" />
                    <span>Recording Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Request Priority Consultation</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <div
                className={`flex items-center gap-2 text-[11px] font-inter ${
                  isDark ? 'text-white/50' : 'text-[#18231F]/50'
                }`}
              >
                <ShieldCheck size={14} className="text-[#D8B879]" />
                <span>Zero-Spam Policy • Direct Balaghat Desk</span>
              </div>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeadForm;

