// src/pages/Home/EnquiryConciergeSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, PhoneCall, CheckCircle, ShieldCheck } from 'lucide-react';
import { business } from '../../data/siteData';

const EnquiryConciergeSection = () => {
  const [selectedType, setSelectedType] = useState('residential');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-[#001D18] via-[#002620] to-[#001713] text-white py-24 md:py-36 px-5 md:px-10 lg:px-16 relative overflow-hidden border-t border-gold/20">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#D8B879]/10 to-[#075C4A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold font-inter font-semibold text-xs tracking-[0.28em] uppercase">
              VIP LAND CONCIERGE
            </span>
          </div>

          <h2 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Begin Your Story at <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
              Vanam Valley.
            </span>
          </h2>

          <p className="font-inter text-white/75 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
            Connect directly with our land advisory desk in Balaghat. Review dimension layouts, discuss commercial requirements, or schedule a guided on-site preview.
          </p>
        </div>

        {/* ── Bespoke Concierge Card ── */}
        <div className="bg-[#001D18]/90 backdrop-blur-2xl rounded-3xl border border-gold/30 p-8 sm:p-12 md:p-16 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-playfair font-bold text-2xl sm:text-3xl text-white mb-3">
                Thank You, {formData.name || 'Valued Landowner'}.
              </h3>
              <p className="font-inter text-white/70 text-sm leading-relaxed mb-8">
                Your consultation request has been delivered to our Balaghat property desk. Our advisor will connect with you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline-gold text-xs px-6 py-2.5"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Category Selector */}
              <div>
                <label className="block text-xs font-inter uppercase tracking-widest text-gold mb-3 font-semibold text-left">
                  1. Select Area of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'residential', label: 'Residential Sanctuary Plot' },
                    { id: 'commercial', label: 'Commercial Frontage Parcel' },
                    { id: 'site_visit', label: 'Guided Balaghat Site Preview' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedType(cat.id)}
                      className={`p-3.5 rounded-xl border text-xs font-inter transition-all text-left ${
                        selectedType === cat.id
                          ? 'bg-gold text-[#002620] border-gold font-semibold shadow-gold'
                          : 'bg-white/5 border-white/15 text-white/80 hover:border-gold/40'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-inter uppercase tracking-wider text-white/60 mb-2 text-left">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-inter uppercase tracking-wider text-white/60 mb-2 text-left">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98200XXXXX"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-inter uppercase tracking-wider text-white/60 mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-inter uppercase tracking-wider text-white/60 mb-2 text-left">
                  Bespoke Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any preferred dimensions, business intent, or preferred time for a call..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-inter focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              {/* Dual Action Triggers */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
                <button
                  type="submit"
                  className="btn-gold text-xs px-9 py-4 shadow-gold hover:shadow-gold-glow w-full sm:w-auto justify-center"
                >
                  <span>Request Priority Consultation</span>
                  <ArrowRight size={14} />
                </button>

                <div className="flex items-center gap-4 text-xs font-inter">
                  <span className="text-white/40">or instant inquiry:</span>
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all font-medium"
                  >
                    <MessageSquare size={15} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </form>
          )}

          {/* Direct Office Contact Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-inter text-white/50">
            <div className="flex items-center gap-2">
              <PhoneCall size={14} className="text-gold" />
              <span>Direct lines:</span>
              <a href={`tel:${business.phone[0]}`} className="text-gold hover:underline">
                +91 {business.phone[0]}
              </a>
              <span>/</span>
              <a href={`tel:${business.phone[1]}`} className="text-gold hover:underline">
                +91 {business.phone[1]}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-gold" />
              <span>Balaghat Office Consultation • 10:00 AM – 7:00 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EnquiryConciergeSection;

