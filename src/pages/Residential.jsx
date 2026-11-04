// src/pages/Residential.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Home, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PlotCard from '../components/PlotCard';
import { residentialPlots } from '../data/siteData';

const features = [
  'Wide internal roads',
  'Lush green surroundings',
  'Planned layout design',
  'Transparent documentation',
  'Proximity to Balaghat city',
  'Natural drainage planning',
];

const ResidentialPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <PageBanner
        title="Residential Plots"
        subtitle="Your Dream Home Starts Here"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Residential Plots' }]}
        image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85"
      />

      {/* Intro */}
      <section className="bg-ivory section-pad">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Residential Plots</p>
            <span className="gold-line" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-5">
              Build Your Dream Home in a Peaceful Environment
            </h2>
            <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-6">
              Our residential plots are thoughtfully laid out to give you the ideal canvas for your dream home. Set amidst lush green surroundings, these plots offer a rare combination of natural tranquility and urban accessibility.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-dark-text/70 font-inter text-sm">
                  <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold inline-flex">
              Enquire Now <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
              alt="Residential plot landscape"
              className="rounded-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Plot Cards */}
      <section className="bg-forest section-pad" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-gold/70">Available Plots</p>
            <h2 className="font-playfair text-3xl font-semibold text-white leading-tight mt-1">
              Illustrative Plot Types
            </h2>
            <p className="font-inter text-white/50 text-sm mt-3 max-w-md mx-auto">
              The below plots are illustrative examples. Please contact us for confirmed availability, actual dimensions and current pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialPlots.map((plot, i) => (
              <motion.div
                key={plot.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <PlotCard plot={plot} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-16 px-4 text-center">
        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-dark-text mb-4">
          Interested in a Residential Plot?
        </h2>
        <p className="font-inter text-dark-text/60 text-sm mb-6">
          Reach out to us and we'll help you find the right plot for your needs.
        </p>
        <Link to="/contact" className="btn-forest inline-flex">
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
};

export default ResidentialPage;

