// src/components/InteractivePlotCalculator.jsx
import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Home,
  Building2,
  Compass,
} from 'lucide-react';
import { business } from '../data/siteData';

const plotPresets = [
  { label: '1,200', sqft: 1200, width: 30, depth: 40, type: 'Compact Duplex' },
  { label: '1,500', sqft: 1500, width: 30, depth: 50, type: 'Family Villa' },
  { label: '1,800', sqft: 1800, width: 30, depth: 60, type: 'Premium Villa' },
  { label: '2,000', sqft: 2000, width: 40, depth: 50, type: 'Corner Executive' },
  { label: '2,400', sqft: 2400, width: 40, depth: 60, type: 'Grand Estate' },
];

const InteractivePlotCalculator = ({ onOpenEnquiry }) => {
  const [sqft, setSqft] = useState(1500);
  const [plotCategory, setPlotCategory] = useState('residential');
  const [facing, setFacing] = useState('East');

  const ratePerSqft = plotCategory === 'residential' ? 1200 : 1850;
  const estimatedCost = sqft * ratePerSqft;

  const width = Math.round(Math.sqrt(sqft * 0.6));
  const depth = Math.round(sqft / width);
  const frontSetback = 10;
  const rearSetback = 6;
  const sideSetback = 4;
  const buildableWidth = Math.max(15, width - sideSetback * 2);
  const buildableDepth = Math.max(20, depth - (frontSetback + rearSetback));
  const groundCoverage = buildableWidth * buildableDepth;
  const totalBuildableG1 = Math.round(groundCoverage * 1.85);

  const sliderPercent = ((sqft - 1000) / (3500 - 1000)) * 100;

  const whatsappMessage = `Hello Vanam Valley Team, I calculated plot requirements on your website:\n• Plot Size: ${sqft.toLocaleString()} Sq.Ft (${width}ft × ${depth}ft)\n• Category: ${plotCategory === 'residential' ? 'Residential Plot' : 'Commercial Frontage'}\n• Orientation: ${facing} Facing\n• Est. Land Cost: ₹${(estimatedCost / 100000).toFixed(2)} Lakhs\nPlease arrange a site visit and share layout availability.`;

  return (
    <div className="w-full bg-white rounded-3xl border border-[#1a1a1a]/[0.06] shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-10 pt-8 pb-6 border-b border-[#1a1a1a]/[0.06]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-lg bg-[#2D5A43]/[0.08] flex items-center justify-center">
                <Calculator size={16} className="text-[#2D5A43]" />
              </span>
              <span className="text-xs font-outfit font-semibold tracking-[0.15em] uppercase text-[#2D5A43]">
                Plot Estimator
              </span>
            </div>
            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-[#1a1a1a]">
              Calculate Your Plot Dimensions & Value
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#1a1a1a]/50 mt-1">
              Simulate your plot area, setbacks, and indicative pricing in Balaghat.
            </p>
          </div>

          {/* Category Toggle */}
          <div className="inline-flex bg-[#f8faf9] p-1.5 rounded-full border border-[#1a1a1a]/[0.06] self-start">
            <button
              type="button"
              onClick={() => setPlotCategory('residential')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-outfit font-semibold transition-all ${
                plotCategory === 'residential'
                  ? 'bg-[#1a3c2a] text-white shadow-md'
                  : 'text-[#1a1a1a]/50 hover:text-[#1a1a1a]'
              }`}
            >
              <Home size={13} />
              Residential
            </button>
            <button
              type="button"
              onClick={() => setPlotCategory('commercial')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-outfit font-semibold transition-all ${
                plotCategory === 'commercial'
                  ? 'bg-[#1a3c2a] text-white shadow-md'
                  : 'text-[#1a1a1a]/50 hover:text-[#1a1a1a]'
              }`}
            >
              <Building2 size={13} />
              Commercial
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 sm:px-8 lg:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Left: Controls ── */}
          <div className="space-y-6">
            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-outfit font-semibold text-[#1a1a1a]/60 uppercase tracking-wider mb-3">
                Select Plot Size
              </label>
              <div className="grid grid-cols-5 gap-2">
                {plotPresets.map((p) => (
                  <button
                    key={p.sqft}
                    type="button"
                    onClick={() => setSqft(p.sqft)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      sqft === p.sqft
                        ? 'border-[#2D5A43] bg-[#2D5A43]/[0.06] ring-1 ring-[#2D5A43]/30'
                        : 'border-[#1a1a1a]/[0.06] bg-[#f8faf9] hover:border-[#2D5A43]/20'
                    }`}
                  >
                    <div className="font-outfit font-bold text-sm text-[#1a1a1a]">{p.label}</div>
                    <div className="text-[10px] text-[#1a1a1a]/40 font-inter">Sq.Ft</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider */}
            <div className="bg-[#f8faf9] p-5 rounded-2xl border border-[#1a1a1a]/[0.06]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-outfit font-semibold text-[#1a1a1a]/60">Fine-Tune Area</span>
                <span className="font-outfit font-bold text-lg text-[#2D5A43]">
                  {sqft.toLocaleString()} Sq.Ft
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="1000"
                  max="3500"
                  step="50"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #2D5A43 0%, #2D5A43 ${sliderPercent}%, #e5e7eb ${sliderPercent}%, #e5e7eb 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-inter text-[#1a1a1a]/30 mt-2">
                <span>1,000</span>
                <span>2,000</span>
                <span>3,500</span>
              </div>
            </div>

            {/* Orientation */}
            <div>
              <label className="block text-xs font-outfit font-semibold text-[#1a1a1a]/60 uppercase tracking-wider mb-3">
                Preferred Orientation
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['East', 'North', 'West', 'South'].map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    onClick={() => setFacing(dir)}
                    className={`py-2.5 rounded-xl text-xs font-outfit font-semibold text-center border transition-all ${
                      facing === dir
                        ? 'bg-[#1a3c2a] text-white border-[#1a3c2a]'
                        : 'bg-[#f8faf9] border-[#1a1a1a]/[0.06] text-[#1a1a1a]/60 hover:border-[#2D5A43]/20'
                    }`}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="p-4 rounded-2xl bg-[#f8faf9] border border-[#1a1a1a]/[0.06] space-y-2.5">
              {[
                { icon: ShieldCheck, text: '100% Freehold Title & Clear Demarcation' },
                { icon: CheckCircle2, text: '30–40 ft Wide Internal Paved Avenues' },
                { icon: Compass, text: `Full Vastu Alignment · ${facing} Facing` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-inter text-[#1a1a1a]/70">
                  <item.icon size={14} className="text-[#2D5A43] flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Visualizer & Results ── */}
          <div className="bg-[#1a3c2a] rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-white">
            {/* SVG Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-[11px] font-outfit font-semibold text-white/50 uppercase tracking-wider">
                Setback Preview
              </span>
              <span className="text-xs font-outfit font-bold text-[#D8B879]">
                {width}ft × {depth}ft
              </span>
            </div>

            {/* SVG */}
            <div className="w-full aspect-[16/10] bg-[#15332a] rounded-xl border border-white/10 p-4 relative flex items-center justify-center mb-5">
              <svg viewBox="0 0 200 130" className="w-full h-full">
                <rect x="20" y="15" width="160" height="100" rx="4" fill="#1a4a3a" stroke="#D8B879" strokeWidth="1.5" strokeDasharray="4 3" />
                <rect x="40" y="35" width="120" height="65" rx="3" fill="#2D5A43" stroke="#52B788" strokeWidth="1" />
                <text x="100" y="27" fill="#D8B879" fontSize="6.5" textAnchor="middle" fontWeight="bold">Front Setback: 10 ft</text>
                <text x="100" y="110" fill="#D8B879" fontSize="6.5" textAnchor="middle">Rear Setback: 6 ft</text>
                <text x="27" y="70" fill="#94A3B8" fontSize="6" textAnchor="middle" transform="rotate(-90 27 70)">Side 4ft</text>
                <text x="173" y="70" fill="#94A3B8" fontSize="6" textAnchor="middle" transform="rotate(90 173 70)">Side 4ft</text>
                <text x="100" y="63" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">Buildable Area</text>
                <text x="100" y="77" fill="#D8B879" fontSize="7.5" fontWeight="bold" textAnchor="middle">~{groundCoverage.toLocaleString()} Sq.Ft</text>
              </svg>
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/40 backdrop-blur text-[9px] font-outfit font-semibold text-[#D8B879] tracking-wider uppercase border border-white/10">
                ▲ {facing} Facing Road
              </div>
            </div>

            {/* Results */}
            <div className="space-y-2.5 text-sm font-inter">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50 text-xs">Ground Coverage</span>
                <span className="font-outfit font-bold text-white">~{groundCoverage.toLocaleString()} Sq.Ft</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-white/50 text-xs">G+1 Built-Up Area</span>
                <span className="font-outfit font-bold text-emerald-300">~{totalBuildableG1.toLocaleString()} Sq.Ft</span>
              </div>
              <div className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.06] border border-[#D8B879]/20">
                <span className="text-white/80 text-xs font-semibold">Indicative Value</span>
                <span className="font-outfit text-xl font-bold text-[#D8B879]">
                  ₹{(estimatedCost / 100000).toFixed(2)} L
                </span>
              </div>
              <p className="text-[10px] text-white/35 italic leading-snug">
                *Approximate pricing. Corner plots & prime facing carry location premiums.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#1a1a1a] font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="flex-1 py-3 px-4 rounded-full bg-[#D8B879] hover:bg-[#e8ca92] text-[#1a3c2a] font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                Schedule Visit
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlotCalculator;
