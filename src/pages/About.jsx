// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Target, Leaf, CheckCircle2, Trees, Compass, Shield } from 'lucide-react';
import PageBanner from '../components/PageBanner';
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
    <>
      <PageBanner
        title="About Vanam Valley"
        subtitle="A Sanctuary Crafted for Generations"
        breadcrumb={[{ label: 'About Us' }]}
        image={aboutBannerImg}
      />

      {/* Brand Introduction */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Left */}
          <div className="lg:col-span-7 text-left">
            <SectionBlock>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
                <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                  OUR STORY &amp; ORIGIN
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-6">
                A Vision for Greener, <br />
                <span className="italic font-normal text-[#075C4A]">Generational Living.</span>
              </h2>
              <p className="font-inter text-[#18231F]/80 text-base leading-relaxed mb-4 font-light">
                Vanam Valley Group is a premier residential and commercial plotting venture rooted in Balaghat, Madhya Pradesh. We believe that every family and enterprise deserves land that balances pristine nature with modern infrastructure.
              </p>
              <p className="font-inter text-[#18231F]/70 text-sm sm:text-base leading-relaxed mb-4 font-light">
                Our layouts are conceptualized to respect natural topography rather than imposing aggressive leveling. From wide internal access roads to dedicated green buffer belts, our focus remains on long-term sustainability.
              </p>
              <p className="font-inter text-[#18231F]/70 text-sm sm:text-base leading-relaxed mb-8 font-light">
                We operate with absolute transparency — clear title documentation, accessible office coordinates in Balaghat, and direct communication with prospective landowners.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
                  <span>Connect with Our Team</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/projects" className="btn-outline-gold inline-flex items-center gap-2 text-xs text-[#002D26] border-[#002D26]/30 hover:border-[#002D26]">
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
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-left">
                  <span className="text-[10px] font-inter text-[#D8B879] uppercase tracking-wider font-semibold block">
                    Balaghat Region
                  </span>
                  <p className="text-xs font-playfair font-bold text-white mt-0.5">
                    Thoughtfully Planned Plotted Acreage
                  </p>
                </div>
              </div>
            </SectionBlock>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#002620] text-white py-20 md:py-28 px-5 md:px-10 lg:px-16 border-t border-b border-gold/15">
        <div className="max-w-7xl mx-auto">
          <SectionBlock>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-gold font-inter font-semibold text-xs tracking-[0.25em] uppercase">
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
              <div className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-8 sm:p-10 h-full text-left shadow-xl hover:border-gold/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6 text-gold">
                  <Eye size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed font-light">
                  To be the benchmark for plotted communities in central India — establishing developments where environmental respect, legal veracity, and architectural foresight come together seamlessly.
                </p>
              </div>
            </SectionBlock>

            <SectionBlock delay={0.2}>
              <div className="bg-[#001D18]/90 border border-gold/25 rounded-3xl p-8 sm:p-10 h-full text-left shadow-xl hover:border-gold/50 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mb-6 text-gold">
                  <Target size={24} />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed font-light">
                  To provide homebuyers and commercial entrepreneurs with genuine, clear-titled land parcels backed by direct advisory and disciplined infrastructure execution.
                </p>
              </div>
            </SectionBlock>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Pillars */}
      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionBlock>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
                <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                  GUIDING PILLARS
                </span>
              </div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-4">
                Nature · Lifestyle · Investment
              </h2>
              <p className="font-inter text-[#18231F]/70 text-sm sm:text-base font-light">
                The three foundational principles that guide every boundary line, access avenue, and customer relationship.
              </p>
            </div>
          </SectionBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: 'Respecting Nature',
                desc: 'Preserving existing native vegetation, natural gradient drainage, and generous open buffer zones.',
              },
              {
                icon: Compass,
                title: 'Enhancing Lifestyle',
                desc: 'Thoughtful spatial allocation separating tranquil living zones from high-visibility business corridors.',
              },
              {
                icon: Shield,
                title: 'Securing Value',
                desc: 'Strict legal transparency, verified paperwork, and strategic placement along Balaghat growth axes.',
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <SectionBlock key={p.title} delay={idx * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-[#002D26]/10 shadow-md text-left hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-[#002D26]/5 flex items-center justify-center text-[#075C4A] mb-6">
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

      {/* Bottom CTA */}
      <section className="bg-[#001713] text-white py-16 px-5 border-t border-gold/15">
        <div className="max-w-3xl mx-auto text-center">
          <SectionBlock>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
              Begin Your Land Legacy at Vanam Valley
            </h2>
            <p className="font-inter text-white/70 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto">
              Connect directly with our Balaghat property desk for masterplan walk-throughs and on-site visits.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
              <span>Schedule a Consultation</span>
              <ArrowRight size={14} />
            </Link>
          </SectionBlock>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
