// src/components/InteractivePlotCalculator.jsx
// Interactive Plot Area, Setback & Cost Estimator for Vanam Valley Balaghat
// Provides real-time architectural setbacks, ground coverage, and indicative pricing

import React, { useState } from 'react';
import { 
  Calculator, 
  Maximize2, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Home,
  Layers,
  Sparkles
} from 'lucide-react';
import { business } from '../data/siteData';

const plotPresets = [
  { label: '1,200 Sq.Ft', sqft: 1200, width: 30, depth: 40, type: 'Compact Duplex' },
  { label: '1,500 Sq.Ft', sqft: 1500, width: 30, depth: 50, type: 'Spacious Family Villa' },
  { label: '1,800 Sq.Ft', sqft: 1800, width: 30, depth: 60, type: 'Premium Villa + Lawn' },
  { label: '2,000 Sq.Ft', sqft: 2000, width: 40, depth: 50, type: 'Corner Executive Plot' },
  { label: '2,400 Sq.Ft', sqft: 2400, width: 40, depth: 60, type: 'Grand Estate Plot' },
];

const InteractivePlotCalculator = ({ onOpenEnquiry }) => {
  const [sqft, setSqft] = useState(1500);
  const [plotCategory, setPlotCategory] = useState('residential'); // 'residential' | 'commercial'
  const [facing, setFacing] = useState('East');

  // Rates in Balaghat (indicative for modern gated plotting)
  const ratePerSqft = plotCategory === 'residential' ? 1200 : 1850;
  const estimatedCost = sqft * ratePerSqft;

  // Approximate setback dimensions
  const width = Math.round(Math.sqrt(sqft * 0.6));
  const depth = Math.round(sqft / width);
  const frontSetback = 10; // ft
  const rearSetback = 6;  // ft
  const sideSetback = 4;  // ft each side
  const buildableWidth = Math.max(15, width - sideSetback * 2);
  const buildableDepth = Math.max(20, depth - (frontSetback + rearSetback));
  const groundCoverage = buildableWidth * buildableDepth;
  const totalBuildableG1 = Math.round(groundCoverage * 1.85); // G+1 floor area

  const handlePresetSelect = (presetSqft) => {
    setSqft(presetSqft);
  };

  const whatsappMessage = `Hello Vanam Valley Team, I calculated plot requirements on your website:\n• Plot Size: ${sqft.toLocaleString()} Sq.Ft (${width}ft × ${depth}ft)\n• Category: ${plotCategory === 'residential' ? 'Residential Plot' : 'Commercial Frontage'}\n• Orientation: ${facing} Facing\n• Est. Land Cost: ₹${(estimatedCost / 100000).toFixed(2)} Lakhs\nPlease arrange a site visit and share layout availability.`;

  return (
    <div className="w-full bg-[#001D18] border border-[#D8B879]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden text-white">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8B879]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D8B879]/30 text-[#D8B879] text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Real Estate Estimator</span>
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
            Custom Plot Area &amp; Setback Visualizer
          </h3>
          <p className="font-inter text-xs sm:text-sm text-white/70 mt-1">
            Simulate your dream home dimensions, permissible ground coverage, and indicative plot value in Balaghat.
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex items-center gap-1 bg-[#001410] p-1.5 rounded-2xl border border-white/10 self-start">
          <button
            type="button"
            onClick={() => setPlotCategory('residential')}
            className={`px-4 py-2 rounded-xl text-xs font-inter font-semibold transition-all ${
              plotCategory === 'residential'
                ? 'bg-[#D8B879] text-[#001D18] shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Residential Enclave
          </button>
          <button
            type="button"
            onClick={() => setPlotCategory('commercial')}
            className={`px-4 py-2 rounded-xl text-xs font-inter font-semibold transition-all ${
              plotCategory === 'commercial'
                ? 'bg-[#075C4A] text-white shadow'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Commercial Frontage
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Controls (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Quick Presets */}
          <div>
            <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/70 mb-2.5">
              Select Standard Plot Format:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {plotPresets.map((p) => (
                <button
                  key={p.sqft}
                  type="button"
                  onClick={() => handlePresetSelect(p.sqft)}
                  className={`p-2.5 rounded-xl border text-left transition-all ${
                    sqft === p.sqft
                      ? 'border-[#D8B879] bg-[#D8B879]/15 text-white ring-1 ring-[#D8B879]'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <div className="font-mono text-xs font-bold text-white">{p.label}</div>
                  <div className="text-[10px] text-white/50">{p.width}ft × {p.depth}ft</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sizing Range Slider */}
          <div className="bg-[#001410] p-4 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-inter text-white/80 font-medium">Fine-Tune Plot Area:</span>
              <span className="font-mono text-base font-bold text-[#D8B879]">
                {sqft.toLocaleString()} Sq.Ft
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="3500"
              step="50"
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D8B879]"
            />
            <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1.5">
              <span>1,000 Sq.Ft</span>
              <span>2,000 Sq.Ft</span>
              <span>3,500 Sq.Ft</span>
            </div>
          </div>

          {/* Orientation Facing */}
          <div>
            <label className="block text-xs font-inter font-semibold uppercase tracking-wider text-white/70 mb-2">
              Preferred Orientation / Vastu:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['East', 'North', 'West', 'South'].map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => setFacing(dir)}
                  className={`py-2 rounded-xl text-xs font-inter font-medium text-center border transition-all ${
                    facing === dir
                      ? 'bg-[#D8B879] text-[#001D18] font-bold border-[#D8B879]'
                      : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {dir} Facing
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specifications Checklist */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-xs text-white/80">
              <ShieldCheck className="w-4 h-4 text-[#D8B879]" />
              <span>100% Freehold Title &amp; Clear Demarcation</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-[#D8B879]" />
              <span>30–40 ft Wide Internal Paved Avenue Connectivity</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Home className="w-4 h-4 text-[#D8B879]" />
              <span>Full Vastu Alignment with Road Frontage</span>
            </div>
          </div>
        </div>

        {/* Right Visual Architectural Footprint & Valuation (6 Cols) */}
        <div className="lg:col-span-6 bg-[#001410] rounded-2xl border border-[#D8B879]/30 p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider">
                Architectural Setback Preview
              </span>
              <span className="text-xs font-mono font-bold text-[#D8B879]">
                {width} ft (W) × {depth} ft (L)
              </span>
            </div>

            {/* SVG Visualizer of Setbacks */}
            <div className="w-full aspect-[16/10] bg-[#001D18] rounded-xl border border-white/10 p-4 relative flex items-center justify-center">
              <svg viewBox="0 0 200 130" className="w-full h-full">
                {/* Outer Boundary (Total Land Parcel) */}
                <rect
                  x="20"
                  y="15"
                  width="160"
                  height="100"
                  rx="4"
                  fill="#002922"
                  stroke="#D8B879"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />

                {/* Buildable Footprint */}
                <rect
                  x="40"
                  y="35"
                  width="120"
                  height="65"
                  rx="3"
                  fill="#075C4A"
                  stroke="#52B788"
                  strokeWidth="1"
                />

                {/* Dimension Labels */}
                <text x="100" y="27" fill="#D8B879" fontSize="6.5" textAnchor="middle" fontWeight="bold">
                  Front Setback: 10 ft
                </text>
                <text x="100" y="110" fill="#D8B879" fontSize="6.5" textAnchor="middle">
                  Rear Setback: 6 ft
                </text>
                <text x="27" y="70" fill="#94A3B8" fontSize="6" textAnchor="middle" transform="rotate(-90 27 70)">
                  Side 4ft
                </text>
                <text x="173" y="70" fill="#94A3B8" fontSize="6" textAnchor="middle" transform="rotate(90 173 70)">
                  Side 4ft
                </text>

                {/* Building Footprint Center Text */}
                <text x="100" y="65" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle">
                  Buildable Ground Area
                </text>
                <text x="100" y="77" fill="#E5C378" fontSize="7" fontStyle="italic" textAnchor="middle">
                  ~{groundCoverage.toLocaleString()} Sq.Ft
                </text>
              </svg>

              {/* Road Indicator at top */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 px-2.5 py-0.5 rounded bg-black/60 text-[9px] font-mono text-[#D8B879] tracking-wider uppercase border border-white/10">
                ▲ Paved Access Road ({facing} Facing)
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="mt-5 space-y-2.5 text-xs font-inter">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Permissible Ground Coverage:</span>
                <span className="font-mono font-bold text-white">~{groundCoverage.toLocaleString()} Sq.Ft</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Potential G+1 Built-Up Living Area:</span>
                <span className="font-mono font-bold text-emerald-400">~{totalBuildableG1.toLocaleString()} Sq.Ft</span>
              </div>
              <div className="flex items-center justify-between py-2 bg-white/5 px-3 rounded-xl border border-[#D8B879]/20">
                <span className="text-white/90 font-semibold">Indicative Plot Value (Balaghat):</span>
                <span className="font-playfair text-lg font-bold text-[#D8B879]">
                  ₹{(estimatedCost / 100000).toFixed(2)} Lakhs*
                </span>
              </div>
              <p className="text-[10px] text-white/50 italic leading-snug">
                *Approximate pricing based on standard sector placement. Corner plots, arterial road frontage, and prime east facing parcels may carry nominal location premiums.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-inter font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="flex-1 py-3 px-4 rounded-xl bg-[#D8B879] hover:bg-[#F4E9D4] text-[#001D18] font-inter font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlotCalculator;
