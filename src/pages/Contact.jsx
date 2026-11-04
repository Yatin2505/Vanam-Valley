// src/pages/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, MapPin, MessageCircle, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';

const ContactPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Form data (demo):', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch"
        breadcrumb={[{ label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85"
      />

      <section className="bg-ivory section-pad" ref={ref} id="location">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Contact Us</p>
            <span className="gold-line" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-dark-text leading-tight mb-5">
              We'd Love to Hear From You
            </h2>
            <p className="font-inter text-dark-text/65 text-base leading-relaxed mb-8">
              Whether you have questions about our plots, want to schedule a site visit, or simply need more information — our team is here to help.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {business.phone.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/20 hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest/8 border border-forest/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Phone size={18} className="text-forest" />
                  </div>
                  <div>
                    <p className="text-dark-text/50 font-inter text-xs mb-0.5">Call Us</p>
                    <p className="text-dark-text font-inter font-semibold text-base">{num}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gold/20">
                <div className="w-10 h-10 rounded-lg bg-forest/8 border border-forest/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-forest" />
                </div>
                <div>
                  <p className="text-dark-text/50 font-inter text-xs mb-0.5">Address</p>
                  <p className="text-dark-text font-inter text-sm leading-relaxed">
                    {business.address.street},<br />
                    {business.address.city}, {business.address.state} – {business.address.pin}
                  </p>
                </div>
              </div>

              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/20 hover:border-gold/50 hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-forest/8 border border-forest/10 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="text-forest">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-dark-text/50 font-inter text-xs mb-0.5">Instagram</p>
                  <p className="text-dark-text font-inter font-semibold text-sm">@{business.instagram}</p>
                </div>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/15 transition-all duration-300 w-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <p className="text-dark-text font-inter font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-dark-text/50 font-inter text-xs">Quick response guaranteed</p>
              </div>
              <ArrowRight size={16} className="text-dark-text/40 ml-auto" />
            </a>

            {/* Map placeholder */}
            <div className="mt-8">
              <div className="relative h-48 rounded-xl overflow-hidden border border-gold/20 bg-forest/5 flex items-center justify-center">
                <div className="text-center px-6">
                  <MapPin size={28} className="text-gold mx-auto mb-2" />
                  <p className="font-inter text-dark-text/60 text-xs mb-3">
                    Map placeholder — project site location to be confirmed
                  </p>
                  <a
                    href="https://maps.google.com/?q=Balaghat,Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs py-2 px-4 inline-flex"
                  >
                    View on Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl border border-gold/20 shadow-card p-7 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-dark-text mb-2">
                    Message Received!
                  </h3>
                  <p className="font-inter text-dark-text/60 text-sm leading-relaxed mb-2">
                    Thank you for reaching out. This is a demo submission — your message has not been sent to the business yet.
                  </p>
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mt-2 text-left">
                    <AlertCircle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="font-inter text-amber-700 text-xs">
                      To complete your enquiry, please call us directly or message us on WhatsApp.
                    </p>
                  </div>
                  <button
                    className="btn-gold mt-6 text-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-playfair text-2xl font-semibold text-dark-text mb-1">
                    Send an Enquiry
                  </h3>
                  <p className="font-inter text-dark-text/50 text-sm mb-6">
                    Fill in the form and we'll be in touch shortly.
                  </p>

                  {/* Demo notice */}
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3 mb-5">
                    <AlertCircle size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="font-inter text-amber-700 text-xs leading-relaxed">
                      <strong>Demo mode:</strong> This form does not currently send emails. Please call or WhatsApp us directly for immediate assistance.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className={`form-input ${errors.name ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                          placeholder="Your name"
                          {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'At least 2 characters' } })}
                        />
                        {errors.name && <p className="text-red-500 font-inter text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          className={`form-input ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                          placeholder="10-digit number"
                          {...register('phone', {
                            required: 'Phone is required',
                            pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid Indian mobile number' },
                          })}
                        />
                        {errors.phone && <p className="text-red-500 font-inter text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                        placeholder="your@email.com"
                        {...register('email', {
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                        })}
                      />
                      {errors.email && <p className="text-red-500 font-inter text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="form-label">Plot Interest *</label>
                      <select
                        className={`form-input ${errors.interest ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                        {...register('interest', { required: 'Please select an option' })}
                      >
                        <option value="">Select plot type</option>
                        <option value="residential">Residential Plot</option>
                        <option value="commercial">Commercial Plot</option>
                        <option value="both">Both / Not Sure</option>
                        <option value="other">Other Query</option>
                      </select>
                      {errors.interest && <p className="text-red-500 font-inter text-xs mt-1">{errors.interest.message}</p>}
                    </div>

                    <div>
                      <label className="form-label">Message</label>
                      <textarea
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Tell us about your requirements..."
                        {...register('message')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-forest-deep/30 border-t-forest-deep rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Enquiry
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
