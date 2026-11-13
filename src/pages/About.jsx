// src/pages/About.jsx
// Professional Editorial Redesign for Vanam Valley Group — Balaghat, M.P.

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  Target,
  Trees,
  Compass,
  Shield,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Building2,
  Sparkles,
} from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';
import aboutBannerImg from '../assets/images/aerial-plotted-land.jpg';
import landscapeImg from '../assets/images/why-vanam-valley.jpg';
import parcelImg from '../assets/images/residential-plots.jpg';

const SectionBlock = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-[#FAF8F2] text-[#18231F]">
      {/* ── Page Banner: Dark Emerald with Gold Accent ── */}
      <PageBanner
        title="About Vanam Valley"
        subtitle="A Sanctuary Crafted for Generations"
        breadcrumb={[{ label: 'About Us' }]}
        image={aboutBannerImg}
      />

      {/* ── Brand Narrative & Origin: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Left */}
          <div className="lg:col-span-7 text-left">
            <SectionBlock>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
                <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.22em] uppercase">
                  OUR STORY &amp; ORIGIN
                </span>
              </div>

              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-6">
                A Vision for Greener, <br />
                <span className="italic font-normal text-[#075C4A]">Generational Living in Balaghat.</span>
              </h2>

              <p className="font-inter text-[#18231F]/85 text-base leading-relaxed mb-5 font-light">
                <strong className="text-[#002D26] font-semibold">Vanam Valley Group</strong> is a premier residential and commercial plotting venture rooted in Balaghat, Madhya Pradesh. We believe that every family and enterprise deserves land that balances natural serenity with modern planned infrastructure.
              </p>

              <p className="font-inter text-[#18231F]/75 text-sm sm:text-base leading-relaxed mb-5 font-light">
                Our plotted layouts are conceptualized to respect natural topography rather than imposing aggressive leveling. From wide internal access roads to dedicated landscaped green buffer belts, our masterplan prioritizes long-term living quality and community prosperity.
              </p>

              <p className="font-inter text-[#18231F]/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
                We operate with absolute transparency — clear title deeds, demarcated plot boundaries, verified registry guidance, and direct communication with our local advisory desk in Balaghat.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center gap-2 text-xs uppercase tracking-wider py-3.5 px-7 shadow-lg"
                >
                  <span>Connect with Our Team</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-white/80 border border-[#002D26]/20 text-[#002D26] font-inter font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Explore Masterplan</span>
                </Link>
              </div>
            </SectionBlock>
          </div>

          {/* Authentic Imagery Right */}
          <div className="lg:col-span-5">
            <SectionBlock delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#002D26]/15 group">
                <img
                  src={landscapeImg}
                  alt="Vanam Valley masterplan development landscape"
                  className="w-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D18]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-left">
                  <div className="flex items-center gap-2 text-[#D8B879] text-[10px] font-inter uppercase tracking-wider font-semibold">
                    <MapPin size={12} />
                    <span>Balaghat Region, M.P.</span>
                  </div>
                  <p className="text-xs font-playfair font-bold text-white mt-1">
                    Thoughtfully Planned Plotted Acreage
                  </p>
                </div>
              </div>
            </SectionBlock>
          </div>

        </div>
      </section>

      {/* ── Vision & Mission: Deep Forest Emerald Section ── */}
      <section className="bg-[#002620] text-white py-20 md:py-24 px-4 sm:px-6 lg:px-10 border-t border-b border-[#D8B879]/20">
        <div className="max-w-[1440px] mx-auto">
          <SectionBlock>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-[#D8B879]/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D8B879]" />
                <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                  OUR DIRECTION
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Vision &amp; Purpose
              </h2>
            </div>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionBlock delay={0.1}>
              <div className="bg-[#001D18]/90 border border-[#D8B879]/30 rounded-3xl p-8 sm:p-10 h-full text-left shadow-2xl hover:border-[#D8B879]/60 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#D8B879]/15 flex items-center justify-center mb-6 text-[#D8B879] border border-[#D8B879]/30">
                  <Eye size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Our Vision</h3>
                <p className="font-inter text-white/75 text-sm sm:text-base leading-relaxed font-light">
                  To be the benchmark for planned plotted communities in central India — establishing developments where environmental respect, legal veracity, and architectural foresight come together seamlessly.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock delay={0.2}>
              <div className="bg-[#001D18]/90 border border-[#D8B879]/30 rounded-3xl p-8 sm:p-10 h-full text-left shadow-2xl hover:border-[#D8B879]/60 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#D8B879]/15 flex items-center justify-center mb-6 text-[#D8B879] border border-[#D8B879]/30">
                  <Target size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-3">Our Mission</h3>
                <p className="font-inter text-white/75 text-sm sm:text-base leading-relaxed font-light">
                  To provide homebuyers and commercial entrepreneurs with genuine, clear-titled land parcels backed by direct local advisory, disciplined road infrastructure execution, and lifetime value.
                </p>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* ── Brand Philosophy Pillars: Warm Luxury Ivory Section ── */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <SectionBlock>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#002D26]/15 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
                <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                  GUIDING PILLARS
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-4">
                Nature · Lifestyle · Investment
              </h2>
              <p className="font-inter text-[#18231F]/70 text-sm sm:text-base font-light">
                The three foundational principles that guide every boundary line, access avenue, and customer relationship at Vanam Valley.
              </p>
            </div>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: 'Respecting Nature',
                desc: 'Preserving natural gradients, open green avenues, and native foliage to create a tranquil living environment.',
              },
              {
                icon: Compass,
                title: 'Enhancing Lifestyle',
                desc: 'Thoughtful spatial zoning separating quiet residential living sanctuaries from high-traffic commercial frontage.',
              },
              {
                icon: Shield,
                title: 'Securing Value',
                desc: 'Strict legal transparency, verified paperwork, and strategic placement along Balaghat growth corridors.',
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <SectionBlock key={p.title} delay={idx * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-[#002D26]/12 shadow-md hover:shadow-xl hover:border-[#D8B879] transition-all duration-300 text-left">
                    <div className="w-12 h-12 rounded-2xl bg-[#002D26]/5 flex items-center justify-center text-[#075C4A] mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-[#002D26] mb-3">{p.title}</h3>
                    <p className="font-inter text-[#18231F]/70 text-sm font-light leading-relaxed">{p.desc}</p>
                  </div>
                </SectionBlock>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA: Deep Forest Section ── */}
      <section className="bg-[#001D18] text-white py-20 px-4 sm:px-6 lg:px-10 border-t border-[#D8B879]/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionBlock>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Begin Your Land Legacy at Vanam Valley
            </h2>
            <p className="font-inter text-white/75 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto leading-relaxed">
              Connect directly with our Balaghat property desk for masterplan walk-throughs, plot allocations, and escorted on-site visits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D8B879] hover:bg-[#F4E9D4] text-[#002620] font-inter font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${business.phone[0]}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-inter font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <Phone size={14} className="text-[#D8B879]" />
                <span>Call +91 {business.phone[0]}</span>
              </a>
            </div>
          </SectionBlock>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
