// src/pages/Contact.jsx
// Bespoke Premium Redesign for Vanam Valley — Real Estate, Plotting & Property Consulting
// Seamlessly integrated with dark emerald & champagne gold design system

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
  HelpCircle,
  Building2,
  FileCheck,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';

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
    // Simulate real-time API lead dispatch
    await new Promise((r) => setTimeout(r, 600));
    console.log('Vanam Valley Lead Submitted:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-[#001713] text-[#F8F6EF] min-h-screen">
      {/* ── Page Banner: Cinematic Editorial Header ── */}
      <PageBanner
        title="Contact Our Property Desk"
        subtitle="Direct Local Advisory in Balaghat"
        breadcrumb={[{ label: 'Contact Us' }]}
        image="/images/hero/vanam-hero-background.jpg"
      />

      {/* ── Section: Quick Contact Channels Strip ── */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Direct Phone */}
          <a
            href={`tel:${business.phone[0]}`}
            className="group p-5 rounded-2xl bg-[#00221B]/90 border border-[#D8B879]/25 hover:border-[#D8B879] backdrop-blur-xl transition-all duration-300 shadow-xl hover:-translate-y-1 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8B879] group-hover:bg-[#D8B879] group-hover:text-[#001D18] transition-colors">
                <Phone size={18} />
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Direct Line
              </span>
            </div>
            <div>
              <p className="text-white/50 text-[11px] font-inter uppercase tracking-wider mb-1">
                Property Advisory Desk
              </p>
              <p className="text-white font-inter font-bold text-base sm:text-lg group-hover:text-[#D8B879] transition-colors">
                +91 {business.phone[0]}
              </p>
              <p className="text-white/40 text-[11px] font-inter mt-1">
                Mon – Sat · 10 AM to 7 PM
              </p>
            </div>
          </a>

          {/* Card 2: WhatsApp Desk */}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[#00221B]/90 border border-[#25D366]/30 hover:border-[#25D366] backdrop-blur-xl transition-all duration-300 shadow-xl hover:-translate-y-1 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-black transition-colors">
                <MessageCircle size={18} />
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/30">
                Instant Chat
              </span>
            </div>
            <div>
              <p className="text-white/50 text-[11px] font-inter uppercase tracking-wider mb-1">
                WhatsApp Documents
              </p>
              <p className="text-white font-inter font-bold text-base sm:text-lg group-hover:text-[#25D366] transition-colors flex items-center gap-1.5">
                <span>Chat on WhatsApp</span>
                <ArrowRight size={14} />
              </p>
              <p className="text-white/40 text-[11px] font-inter mt-1">
                Layout PDFs, maps &amp; details
              </p>
            </div>
          </a>

          {/* Card 3: Registered Office */}
          <div className="p-5 rounded-2xl bg-[#00221B]/90 border border-[#D8B879]/25 backdrop-blur-xl shadow-xl text-left flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8B879]">
                <MapPin size={18} />
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-white/50 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                Office Location
              </span>
            </div>
            <div>
              <p className="text-white/50 text-[11px] font-inter uppercase tracking-wider mb-1">
                Balaghat Headquarters
              </p>
              <p className="text-white font-inter font-semibold text-xs sm:text-sm leading-snug">
                {business.address.street}, Near Hariom Nagar
              </p>
              <p className="text-white/50 text-[11px] font-inter mt-1">
                Balaghat, M.P. – {business.address.pin}
              </p>
            </div>
          </div>

          {/* Card 4: Site Visit Guarantee */}
          <div className="p-5 rounded-2xl bg-[#00221B]/90 border border-[#D8B879]/25 backdrop-blur-xl shadow-xl text-left flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D8B879]">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-[#D8B879] bg-[#D8B879]/10 px-2 py-0.5 rounded-full border border-[#D8B879]/30">
                Verified
              </span>
            </div>
            <div>
              <p className="text-white/50 text-[11px] font-inter uppercase tracking-wider mb-1">
                Transparency First
              </p>
              <p className="text-white font-inter font-semibold text-xs sm:text-sm leading-snug">
                Complimentary Site Visits
              </p>
              <p className="text-white/50 text-[11px] font-inter mt-1">
                Demarcated plots &amp; road inspection
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Main Contact Section: Two Columns (Editorial Advisory + Form) ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ── Left Column (5 Cols): Editorial Information, Office Details, FAQs ── */}
          <div className="lg:col-span-5 text-left space-y-8">
            
            {/* Header intro */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#D8B879]/30 backdrop-blur-md mb-4 shadow-sm">
                <Compass className="w-3.5 h-3.5 text-[#D8B879]" />
                <span className="text-[#D8B879] font-inter text-xs font-semibold tracking-wider uppercase">
                  Direct Local Advisory
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                We Are Here to <br />
                <span className="italic font-normal text-[#E5C378]">Guide Your Choice.</span>
              </h2>

              <p className="font-inter text-white/75 text-sm sm:text-base leading-relaxed font-light">
                Whether you are evaluating residential acreage for your family home, exploring high-visibility commercial roadside plots, or need transparent property consulting in Balaghat, our local desk is here to assist.
              </p>
            </div>

            {/* Advisory Pillars */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#00221B]/70 border border-white/10 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-[#D8B879]/10 text-[#D8B879] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar size={16} />
                </div>
                <div>
                  <h4 className="text-white font-inter font-semibold text-xs sm:text-sm">
                    Book an Escorted Site Visit
                  </h4>
                  <p className="text-white/60 text-xs font-inter mt-0.5 leading-relaxed">
                    Walk through the site with our local engineers to physically review plot dimensions, internal road connectivity, and surrounding infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#00221B]/70 border border-white/10 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-[#D8B879]/10 text-[#D8B879] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileCheck size={16} />
                </div>
                <div>
                  <h4 className="text-white font-inter font-semibold text-xs sm:text-sm">
                    Documentation &amp; Registry Guidance
                  </h4>
                  <p className="text-white/60 text-xs font-inter mt-0.5 leading-relaxed">
                    Clear guidance on land titles, demarcation records, and registration processes in Balaghat without hidden clauses or intermediaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Office Working Hours & Google Map Card */}
            <div className="p-6 rounded-3xl bg-[#00221B]/80 border border-[#D8B879]/30 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2.5 text-[#D8B879] mb-3">
                <Clock size={16} />
                <span className="font-inter font-semibold text-xs tracking-wider uppercase">
                  Advisory Desk Timings
                </span>
              </div>
              <div className="space-y-2 text-xs font-inter border-b border-white/10 pb-4 mb-4">
                <div className="flex justify-between text-white/80">
                  <span>Monday – Saturday:</span>
                  <span className="font-semibold text-white">10:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Sunday:</span>
                  <span className="text-[#D8B879] font-medium">By Prior Site Appointment</span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h5 className="font-inter font-semibold text-xs text-white">
                    Registered Office in Balaghat
                  </h5>
                  <p className="text-white/60 text-[11px] font-inter mt-0.5">
                    Kumar Furniture Road, Near Hariom Nagar, Balaghat, M.P.
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kumar Furniture Road Near Hariom Nagar Balaghat')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#D8B879] hover:text-[#001D18] text-[#D8B879] text-xs font-inter font-semibold transition-all flex-shrink-0"
                >
                  <span>Directions</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Frequently Asked Questions Mini-Accordion */}
            <div className="pt-2">
              <h4 className="font-playfair text-xl font-bold text-white mb-3.5 flex items-center gap-2">
                <HelpCircle size={18} className="text-[#D8B879]" />
                <span>Frequently Asked Questions</span>
              </h4>
              <div className="space-y-2.5">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-[#00221B]/60 backdrop-blur-md overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-inter font-semibold text-white/90 hover:text-[#D8B879] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="text-[#D8B879] text-base flex-shrink-0">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4 text-xs font-inter text-white/70 leading-relaxed"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── Right Column (7 Cols): High-Conversion Glass Form ── */}
          <div className="lg:col-span-7">
            <div className="w-full bg-[#00221B]/95 border border-[#D8B879]/40 rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-black/80 text-left relative overflow-hidden">
              
              {/* Subtle top gold accent glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#D8B879]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Form Header */}
              <div className="relative z-10 mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00382D] border border-emerald-500/35 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-inter font-bold tracking-wider uppercase text-emerald-300">
                    Direct Priority Desk
                  </span>
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
                  Schedule a Site Visit or Consultation
                </h3>
                <p className="font-inter text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                  Share your requirements below. Our Balaghat advisory desk will connect with you with complete layout maps and plot details.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D8B879]/15 text-[#D8B879] border border-[#D8B879]/40 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2">
                    Enquiry Received
                  </h4>
                  <p className="font-inter text-sm text-white/75 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out to Vanam Valley. Our local advisory desk in Balaghat will contact you shortly with detailed plot layout formats.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={business.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-inter font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all"
                    >
                      <MessageCircle size={15} />
                      <span>Instant WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full border border-white/20 text-white font-inter text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 relative z-10">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Please enter your full name' })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D8B879] transition-colors"
                      />
                      {errors.name && (
                        <p className="text-amber-400 text-[11px] mt-1 font-inter">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3 text-xs font-mono text-white/50">+91</span>
                        <input
                          {...register('phone', {
                            required: '10-digit mobile number is required',
                            pattern: {
                              value: /^[6-9]\d{9}$/,
                              message: 'Enter a valid 10-digit Indian mobile number',
                            },
                          })}
                          placeholder="98200XXXXX"
                          className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D8B879] transition-colors"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-amber-400 text-[11px] mt-1 font-inter">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Property Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D8B879] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Plot / Service Interest
                      </label>
                      <select
                        {...register('category')}
                        className="w-full px-4 py-3 rounded-xl bg-[#001D18] border border-white/15 text-white font-inter text-sm focus:outline-none focus:border-[#D8B879] transition-colors"
                      >
                        <option value="residential">Residential Plots (1,200 – 2,000 Sq.ft)</option>
                        <option value="commercial">Commercial Road Frontage Parcels</option>
                        <option value="consulting">Property Consulting &amp; Registry Guidance</option>
                        <option value="both">Both Residential &amp; Commercial</option>
                      </select>
                    </div>
                  </div>

                  {/* Consultation Preference */}
                  <div>
                    <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                      Preferred Consultation Mode
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-black/30 border border-white/15 hover:border-[#D8B879]/60 cursor-pointer transition-colors text-xs font-inter text-white/80">
                        <input
                          type="radio"
                          value="site-visit"
                          {...register('consultationType')}
                          className="text-[#D8B879] focus:ring-0"
                        />
                        <span>Physical Site Visit</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-black/30 border border-white/15 hover:border-[#D8B879]/60 cursor-pointer transition-colors text-xs font-inter text-white/80">
                        <input
                          type="radio"
                          value="phone-call"
                          {...register('consultationType')}
                          className="text-[#D8B879] focus:ring-0"
                        />
                        <span>Phone Callback</span>
                      </label>
                      <label className="flex items-center gap-2.5 p-3 rounded-xl bg-black/30 border border-white/15 hover:border-[#D8B879]/60 cursor-pointer transition-colors text-xs font-inter text-white/80">
                        <input
                          type="radio"
                          value="whatsapp"
                          {...register('consultationType')}
                          className="text-[#D8B879] focus:ring-0"
                        />
                        <span>WhatsApp Details</span>
                      </label>
                    </div>
                  </div>

                  {/* Message / Requirements */}
                  <div>
                    <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/90 mb-2">
                      Specific Requirements / Notes (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Tell us about your preferred plot dimensions, budget range, or suitable day for a site visit..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white font-inter text-sm placeholder:text-white/30 focus:outline-none focus:border-[#D8B879] transition-colors"
                    />
                  </div>

                  {/* Submit Action */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'Submitting Details...' : 'Submit Priority Consultation Request'}</span>
                    <ArrowRight size={15} />
                  </button>

                  {/* Micro-trust indicators */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-[11px] font-inter text-white/50">
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-[#D8B879]" />
                      <span>100% Confidential</span>
                    </span>
                    <span>•</span>
                    <span>Direct Local Advisors</span>
                    <span>•</span>
                    <span>Zero Spam Assurance</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
