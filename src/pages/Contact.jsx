// src/pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, MapPin, MessageCircle, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { business } from '../data/siteData';
import bannerImg from '../assets/images/property-consulting-discussion.jpg';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Enquiry received:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Connect with Our Balaghat Property Desk"
        breadcrumb={[{ label: 'Contact' }]}
        image={bannerImg}
      />

      <section className="bg-[#F8F6EF] text-[#18231F] py-20 md:py-28 px-5 md:px-10 lg:px-16" id="location">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 text-left"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#075C4A]" />
              <span className="text-[#075C4A] font-inter font-semibold text-xs tracking-[0.25em] uppercase">
                DIRECT ADVISORY
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#002D26] leading-tight mb-5">
              We Are Here to <br />
              <span className="italic font-normal text-[#075C4A]">Assist You.</span>
            </h2>

            <p className="font-inter text-[#18231F]/75 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Whether you are evaluating residential acreage, planning a commercial showroom, or scheduling a physical on-site survey, our local advisory team in Balaghat is at your service.
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {business.phone.map((num) => (
                <a
                  key={num}
                  href={`tel:${num}`}
                  className="flex items-center gap-4 p-4.5 bg-white rounded-2xl border border-[#002D26]/15 hover:border-[#D8B879] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#002D26]/5 group-hover:bg-[#002D26] group-hover:text-[#D8B879] flex items-center justify-center text-[#075C4A] transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[#18231F]/50 font-inter text-[11px] uppercase tracking-wider mb-0.5">Direct Line</p>
                    <p className="text-[#002D26] font-inter font-semibold text-base">+91 {num}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-start gap-4 p-4.5 bg-white rounded-2xl border border-[#002D26]/15">
                <div className="w-11 h-11 rounded-xl bg-[#002D26]/5 flex items-center justify-center text-[#075C4A] flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[#18231F]/50 font-inter text-[11px] uppercase tracking-wider mb-0.5">Registered Office</p>
                  <p className="text-[#002D26] font-inter text-sm leading-relaxed font-medium">
                    {business.address.street},<br />
                    Near Hariom Nagar, {business.address.city},<br />
                    {business.address.state} – {business.address.pin}
                  </p>
                </div>
              </div>

              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-2xl text-[#128C7E] font-inter text-sm font-semibold transition-all"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-[#25D366]" />
                  <span>Instant WhatsApp Assistance</span>
                </div>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Location Map Placeholder Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#002D26]/15 text-left">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#075C4A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-playfair font-bold text-base text-[#002D26] mb-1">
                    Project Site Geolocation
                  </h4>
                  <p className="text-xs font-inter text-[#18231F]/65 leading-relaxed mb-4">
                    Exact project boundaries and coordinates will be published upon conclusion of formal land survey releases.
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Kumar Furniture Road Near Hariom Nagar Balaghat')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold text-[#075C4A] hover:underline"
                  >
                    <span>View Registered Office on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Lead Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#002D26]/15 shadow-xl text-left">
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#002D26] mb-2">
                Send an Enquiry
              </h3>
              <p className="font-inter text-[#18231F]/65 text-xs sm:text-sm mb-8 font-light">
                Fill out the details below. Our property desk in Balaghat will connect with you within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#075C4A]/10 text-[#075C4A] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-[#002D26] mb-2">
                    Enquiry Received
                  </h4>
                  <p className="font-inter text-sm text-[#18231F]/70 max-w-sm mx-auto mb-6">
                    Thank you for your interest in Vanam Valley. Our team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold text-xs px-6 py-2.5"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-[#002D26] mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#002D26]/20 font-inter text-sm focus:outline-none focus:border-[#075C4A] transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-600 text-[11px] mt-1 font-inter">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-[#002D26] mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone', {
                          required: 'Phone is required',
                          pattern: {
                            value: /^[6-9]\d{9}$/,
                            message: 'Enter a valid 10-digit Indian mobile number',
                          },
                        })}
                        placeholder="98200XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#002D26]/20 font-inter text-sm focus:outline-none focus:border-[#075C4A] transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-[11px] mt-1 font-inter">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-[#002D26] mb-2">
                        Email Address
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="rajesh@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#002D26]/20 font-inter text-sm focus:outline-none focus:border-[#075C4A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-[#002D26] mb-2">
                        Plot Interest
                      </label>
                      <select
                        {...register('category')}
                        className="w-full px-4 py-3 rounded-xl border border-[#002D26]/20 font-inter text-sm focus:outline-none focus:border-[#075C4A] bg-white transition-colors"
                      >
                        <option value="residential">Residential Sanctuary Plot</option>
                        <option value="commercial">Commercial Frontage Parcel</option>
                        <option value="general">General Masterplan Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-[#002D26] mb-2">
                      Message / Preferred Contact Time
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Share your requirements or preferred time for a callback..."
                      className="w-full px-4 py-3 rounded-xl border border-[#002D26]/20 font-inter text-sm focus:outline-none focus:border-[#075C4A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full justify-center text-xs py-3.5 shadow-md hover:shadow-xl transition-all"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Priority Consultation Request'}</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;
