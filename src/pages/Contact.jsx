// src/pages/Contact.jsx
// Complete Redesign for Vanam Valley Contact Page
// Direct local advisory, instant enquiry channels, and interactive FAQ

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Calendar,
  ChevronDown,
  Building2,
  FileCheck,
  Mail,
} from 'lucide-react';
import { business } from '../data/siteData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

const faqs = [
  {
    q: 'Is a physical site visit to Vanam Valley free of cost?',
    a: 'Yes, 100% complimentary. Our local Balaghat advisors arrange escorted on-site visits to walk you through the demarcated plot parcels, internal road widths, and access avenues.',
  },
  {
    q: 'Can I physically inspect plot boundaries on-site?',
    a: 'Absolutely. Every residential and commercial parcel is clearly demarcated with corner markers so you can verify exact dimensions and road frontage before proceeding.',
  },
  {
    q: 'Do you assist with title deed verification and registry?',
    a: 'Yes. Our property consulting desk provides end-to-end legal verification, documentation guidance, and registry support for complete peace of mind.',
  },
  {
    q: 'What plot sizes are currently available for planning?',
    a: 'Residential plots are planned in popular 1,200 to 2,000 Sq.ft formats, while commercial plots feature prime road-frontage accessibility tailored for business setups.',
  },
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      category: 'residential',
      consultationType: 'site-visit',
    },
  });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log('Vanam Valley Lead Submitted:', data);
    setSubmitted(true);
    reset();
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#FAF8F3] text-[#1a1a1a] select-none overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="pointer-events-none absolute -top-24 right-0 w-[550px] h-[550px] bg-[#2D5A43]/[0.05] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#D8B879]/[0.08] rounded-full blur-3xl" />

        <div className="text-center max-w-3xl mx-auto space-y-5">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-[0.25em] text-[#2D5A43] uppercase">
              Balaghat Advisory Desk
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-[56px] font-outfit font-extrabold text-[#1a1a1a] leading-[1.1] tracking-tight"
          >
            Connect With Our{' '}
            <span className="font-playfair italic font-normal text-[#2D5A43]">
              Property Team
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="font-inter text-base sm:text-lg text-[#1a1a1a]/65 leading-relaxed max-w-2xl mx-auto"
          >
            Direct local advisory in Balaghat. Whether you wish to inspect demarcated plots, request layout drawings, or consult on legal documentation, we are ready to assist.
          </motion.p>
        </div>
      </section>

      {/* ── 4 QUICK CONTACT CHANNELS ── */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* 1. Phone */}
          <motion.a
            {...fadeUp(0.1)}
            href={`tel:${business.phone[0]}`}
            className="p-6 rounded-3xl bg-white border border-[#1a1a1a]/[0.06] hover:border-[#2D5A43]/30 shadow-sm hover:shadow-xl transition-all space-y-3 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center group-hover:bg-[#1a3c2a] group-hover:text-white transition-colors">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-[10px] font-outfit font-bold text-[#2D5A43] tracking-widest uppercase block mb-1">
                Direct Call
              </span>
              <p className="font-outfit font-bold text-base text-[#1a1a1a]">
                +91 {business.phone[0]}
              </p>
              <p className="font-inter text-xs text-[#1a1a1a]/50 mt-1">
                +91 {business.phone[1]}
              </p>
            </div>
          </motion.a>

          {/* 2. WhatsApp */}
          <motion.a
            {...fadeUp(0.18)}
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-white border border-[#1a1a1a]/[0.06] hover:border-emerald-500/30 shadow-sm hover:shadow-xl transition-all space-y-3 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <MessageCircle size={20} />
            </div>
            <div>
              <span className="text-[10px] font-outfit font-bold text-emerald-600 tracking-widest uppercase block mb-1">
                Instant Chat
              </span>
              <p className="font-outfit font-bold text-base text-[#1a1a1a]">
                WhatsApp Desk
              </p>
              <p className="font-inter text-xs text-[#1a1a1a]/50 mt-1">
                Instant answers & brochures
              </p>
            </div>
          </motion.a>

          {/* 3. Office Location */}
          <motion.div
            {...fadeUp(0.26)}
            className="p-6 rounded-3xl bg-white border border-[#1a1a1a]/[0.06] shadow-sm hover:shadow-xl transition-all space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#D8B879]/20 text-[#1a3c2a] flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[10px] font-outfit font-bold text-[#2D5A43] tracking-widest uppercase block mb-1">
                Registered Office
              </span>
              <p className="font-outfit font-bold text-sm text-[#1a1a1a] line-clamp-1">
                Kumar Furniture Road
              </p>
              <p className="font-inter text-xs text-[#1a1a1a]/50 mt-1 line-clamp-2">
                Near Hariom Nagar, Balaghat, M.P.
              </p>
            </div>
          </motion.div>

          {/* 4. Consultation Hours */}
          <motion.div
            {...fadeUp(0.34)}
            className="p-6 rounded-3xl bg-white border border-[#1a1a1a]/[0.06] shadow-sm hover:shadow-xl transition-all space-y-3"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#2D5A43]/[0.08] text-[#2D5A43] flex items-center justify-center">
              <Clock size={20} />
            </div>
            <div>
              <span className="text-[10px] font-outfit font-bold text-[#2D5A43] tracking-widest uppercase block mb-1">
                Advisory Hours
              </span>
              <p className="font-outfit font-bold text-sm text-[#1a1a1a]">
                Mon – Sun: 9:00 AM – 7:30 PM
              </p>
              <p className="font-inter text-xs text-[#1a1a1a]/50 mt-1">
                Weekend visits welcome
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SPLIT FORM & MAP DETAILS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white border-y border-[#1a1a1a]/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Lead Form */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#2D5A43]/30" />
              <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
                Direct Inquiry Form
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight leading-tight"
            >
              Send Us Your Requirements
            </motion.h2>

            <motion.p
              {...fadeUp(0.15)}
              className="font-inter text-sm sm:text-base text-[#1a1a1a]/70 leading-relaxed"
            >
              Fill out the form below. Our local Balaghat property team will get in touch within 2 business hours to assist you.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-[#f8faf9] border border-[#2D5A43]/30 text-center space-y-3"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a3c2a] text-[#D8B879] flex items-center justify-center mx-auto text-2xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-xl font-outfit font-bold text-[#1a1a1a]">
                  Thank You for Reaching Out!
                </h3>
                <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/70 max-w-md mx-auto">
                  Your inquiry has been received by our Balaghat advisory desk. One of our property specialists will call you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-6 py-2 rounded-full bg-[#1a3c2a] text-white text-xs font-outfit font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                {...fadeUp(0.2)}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 pt-2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-outfit font-semibold text-[#1a1a1a]/70">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#1a1a1a]/10 focus:border-[#2D5A43] focus:outline-none text-xs font-inter"
                    />
                    {errors.name && <span className="text-[11px] text-red-500">{errors.name.message}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-outfit font-semibold text-[#1a1a1a]/70">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g. 98260XXXXX"
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#1a1a1a]/10 focus:border-[#2D5A43] focus:outline-none text-xs font-inter"
                    />
                    {errors.phone && <span className="text-[11px] text-red-500">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div className="space-y-1">
                    <label className="text-xs font-outfit font-semibold text-[#1a1a1a]/70">Property Interest</label>
                    <select
                      {...register('category')}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#1a1a1a]/10 focus:border-[#2D5A43] focus:outline-none text-xs font-inter text-[#1a1a1a]"
                    >
                      <option value="residential">Residential Plots (1,200 – 2,000 Sq.Ft)</option>
                      <option value="commercial">Commercial Plots (Road Frontage)</option>
                      <option value="consulting">Property Consulting & Title Check</option>
                      <option value="both">Both / General Inquiry</option>
                    </select>
                  </div>

                  {/* Consultation Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-outfit font-semibold text-[#1a1a1a]/70">Preferred Action</label>
                    <select
                      {...register('consultationType')}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#1a1a1a]/10 focus:border-[#2D5A43] focus:outline-none text-xs font-inter text-[#1a1a1a]"
                    >
                      <option value="site-visit">Arrange Escorted Site Visit</option>
                      <option value="call-back">Request A Phone Call</option>
                      <option value="office-meeting">Office Meeting in Balaghat</option>
                      <option value="brochure">Send Brochure via WhatsApp</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-outfit font-semibold text-[#1a1a1a]/70">Your Message or Query (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your budget, preferred size or questions regarding Balaghat plotting..."
                    {...register('message')}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F3] border border-[#1a1a1a]/10 focus:border-[#2D5A43] focus:outline-none text-xs font-inter resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1a3c2a] hover:bg-[#122e20] text-white font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Property Inquiry'}</span>
                  <ArrowRight size={14} />
                </button>
              </motion.form>
            )}
          </div>

          {/* Right: Office Map Card & Route Directions */}
          <motion.div {...fadeUp(0.25)} className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#122e22] text-white space-y-5 shadow-2xl border border-[#D8B879]/30">
              <div>
                <span className="text-[10px] font-outfit font-bold tracking-widest uppercase text-[#D8B879] block mb-1">
                  On-Ground Location
                </span>
                <h3 className="text-2xl font-outfit font-bold text-white">
                  Visit Us in Balaghat
                </h3>
              </div>

              <div className="space-y-3 font-inter text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#D8B879] flex-shrink-0 mt-0.5" />
                  <p>{business.address.full}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#D8B879] flex-shrink-0" />
                  <p>+91 {business.phone[0]} / +91 {business.phone[1]}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#D8B879] flex-shrink-0" />
                  <p>Open 7 Days · 9:00 AM to 7:30 PM</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Balaghat+Madhya+Pradesh+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-[#D8B879] hover:bg-[#e8ca8e] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-6 rounded-3xl bg-[#FAF8F3] border border-[#1a1a1a]/[0.06] space-y-3">
              <h4 className="font-outfit font-bold text-sm text-[#1a1a1a]">
                Our Consultation Pledge
              </h4>
              <div className="space-y-2 text-xs font-inter text-[#1a1a1a]/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#2D5A43] flex-shrink-0" />
                  <span>No pushy sales calls or spam messages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#2D5A43] flex-shrink-0" />
                  <span>100% free physical site walk with survey marks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#2D5A43] flex-shrink-0" />
                  <span>Complete title deed transparency before booking</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FAQ ACCORDION SECTION ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2">
            <span className="w-8 h-px bg-[#2D5A43]/30" />
            <span className="text-xs font-outfit font-semibold tracking-widest uppercase text-[#2D5A43]">
              Frequently Asked Questions
            </span>
            <span className="w-8 h-px bg-[#2D5A43]/30" />
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-outfit font-bold text-[#1a1a1a] tracking-tight"
          >
            Common Questions About Vanam Valley
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(0.1 + idx * 0.06)}
              className="rounded-2xl border border-[#1a1a1a]/[0.06] bg-white overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-outfit font-bold text-sm sm:text-base text-[#1a1a1a] hover:text-[#2D5A43] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#2D5A43] transition-transform duration-300 flex-shrink-0 ${
                    activeFaq === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 font-inter text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed border-t border-[#1a1a1a]/[0.04] pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
