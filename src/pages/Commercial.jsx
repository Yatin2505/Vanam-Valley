// src/pages/Commercial.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import PlotCard from '../components/PlotCard';
import { commercialPlots } from '../data/siteData';

const features = [
  'High-visibility road frontage',
  'Proximity to Balaghat markets',
  'Wide approach roads',
  'Growing commercial area',
  'Clear title documentation',
  'Flexible plot sizes',
];

const CommercialPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <>
      <PageBanner
        title="Commercial Plots"
        subtitle="Prime Business Locations"
        breadcrumb={[{ label: 'Projects', path: '/projects' }, { label: 'Commercial Plots' }]}
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85"
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
            <p className="section-label">Commercial Plots</p>
            <span className="gold-line" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-5">
              The Right Space for Your Business to Grow
            </h2>
            <p className="font-inter text-dark-text/70 text-base leading-relaxed mb-6">
              Vanam Valley's commercial plots are strategically positioned to give your business the advantage of visibility, accessibility and a growing customer base. Whether you're establishing a retail outlet, office or service center, these plots offer the right foundation.
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              alt="Commercial development"
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
              Illustrative Commercial Plot Types
            </h2>
            <p className="font-inter text-white/50 text-sm mt-3 max-w-md mx-auto">
              The below plots are illustrative examples. Please contact us for confirmed availability, actual dimensions and current pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialPlots.map((plot, i) => (
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
          Looking for a Commercial Plot?
        </h2>
        <p className="font-inter text-dark-text/60 text-sm mb-6">
          Connect with us to discuss options that match your business requirements.
        </p>
        <Link to="/contact" className="btn-forest inline-flex">
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </>
  );
};

export default CommercialPage;

