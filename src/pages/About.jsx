// src/pages/About.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Eye, Target, Leaf } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const ABOUT_BANNER = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85';
const ABOUT_IMG1 = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80';
const ABOUT_IMG2 = 'https://images.unsplash.com/photo-1587302912306-cf6f9e37b30f?w=800&q=80';

const SectionBlock = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
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
        subtitle="Our Story"
        breadcrumb={[{ label: 'About Us' }]}
        image={ABOUT_BANNER}
      />

      {/* Brand Introduction */}
      <section className="bg-ivory section-pad">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionBlock>
            <p className="section-label">About Vanam Valley</p>
            <span className="gold-line" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-5">
              A Vision for a Greener Tomorrow
            </h2>
            <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-4">
              Vanam Valley Group is a residential and commercial plotting venture rooted in the vibrant city of Balaghat, Madhya Pradesh. We believe that every family and business deserves a space that blends natural beauty with modern convenience.
            </p>
            <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-4">
              Our developments are thoughtfully designed to offer well-planned plots in serene, nature-rich surroundings — giving our customers a foundation to build their dreams.
            </p>
            <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-8">
              We are committed to transparent dealings, clear documentation, and a customer-first approach that makes the process of buying land as smooth and trustworthy as possible.
            </p>
            <Link to="/contact" className="btn-gold inline-flex">
              Get in Touch
              <ArrowRight size={15} />
            </Link>
          </SectionBlock>

          <SectionBlock delay={0.2}>
            <div className="relative">
              <img
                src={ABOUT_IMG1}
                alt="Vanam Valley development landscape"
                className="rounded-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-card">
                <img
                  src={ABOUT_IMG2}
                  alt="Nature surroundings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SectionBlock>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-forest section-pad">
        <div className="max-w-6xl mx-auto">
          <SectionBlock>
            <div className="text-center mb-12">
              <p className="section-label text-gold/70">Our Direction</p>
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white leading-tight mt-1">
                Vision &amp; Mission
              </h2>
            </div>
          </SectionBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'To be the most trusted and respected plotted development company in central India — creating green, well-planned communities where families and businesses can thrive for generations.',
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To provide high-quality, transparently documented residential and commercial plots in prime locations, ensuring every customer receives honest guidance and a genuinely valuable investment opportunity.',
              },
            ].map((item, i) => (
              <SectionBlock key={item.title} delay={i * 0.15}>
                <div className="bg-white/8 border border-gold/20 rounded-2xl p-8 h-full hover:border-gold/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5">
                    <item.icon size={22} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="font-inter text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              </SectionBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="bg-ivory section-pad">
        <div className="max-w-4xl mx-auto text-center">
          <SectionBlock>
            <p className="section-label">Our Philosophy</p>
            <span className="block w-12 h-0.5 bg-gold mx-auto mb-5" />
            <div className="w-14 h-14 rounded-full bg-forest/8 border border-forest/15 flex items-center justify-center mx-auto mb-6">
              <Leaf size={24} className="text-forest" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-6">
              Nature • Lifestyle • Investment
            </h2>
            <p className="font-inter text-dark-text/65 text-base leading-relaxed mb-4">
              At Vanam Valley, we don't just sell land. We offer a vision — a thoughtfully conceived living environment where the natural world and human ambition coexist harmoniously.
            </p>
            <p className="font-inter text-dark-text/55 text-sm leading-relaxed mb-8">
              Every decision we make is guided by three principles: respecting nature, enhancing lifestyle, and delivering genuine investment value.
            </p>
            <Link to="/projects" className="btn-forest inline-flex">
              View Our Projects
              <ArrowRight size={15} />
            </Link>
          </SectionBlock>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionBlock>
            <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Be Part of Vanam Valley?
            </h2>
            <p className="font-inter text-white/55 text-sm mb-6">
              Reach out to us today for detailed information about our plots and projects.
            </p>
            <Link to="/contact" className="btn-gold inline-flex">
              Contact Us
              <ArrowRight size={15} />
            </Link>
          </SectionBlock>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

