// src/pages/Home/InteractiveMasterplanSection.jsx
// Section 04: Interactive Masterplan / Plotting Map — Explore the Project Layout

import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Info, CheckCircle2, Compass, Layers, AlertCircle, ArrowRight } from 'lucide-react';
import { sampleMasterplanPlots } from '../../data/siteData';
import EnquiryModal from '../../components/EnquiryModal';

const InteractiveMasterplanSection = () => {
  const [selectedPlot, setSelectedPlot] = useState(sampleMasterplanPlots[0]);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'residential' | 'commercial'
  const [zoomLevel, setZoomLevel] = useState(1);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.min(Math.max(0.8, prev + delta), 1.6));
  };

  const handleReset = () => {
    setZoomLevel(1);
  };

  const filteredPlots = sampleMasterplanPlots.filter((p) => {
    if (filterType === 'all') return true;
    return p.type === filterType;
  });

  return (
    <>
      <section className="bg-[#001713] text-white py-24 md:py-32 px-5 sm:px-8 lg:px-12 relative overflow-hidden border-t border-b border-[#D8B879]/15">
        
        {/* Subtle decorative grid background */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #D8B879 1px, transparent 1px), linear-gradient(to bottom, #D8B879 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D8B879]" />
              <span className="text-[#D8B879] font-inter font-semibold text-xs tracking-[0.2em] uppercase">
                Section 04 · Interactive Plotting Map
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-4">
              Explore the <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D8B879] via-[#F4E9D4] to-[#C4A45F] bg-clip-text text-transparent">
                Project Layout.
              </span>
            </h2>

            <p className="font-inter text-white/70 text-base sm:text-lg font-light leading-relaxed">
              Explore our sample layout grid below. Click on individual plot parcels to view dimensions, road access, and orientation formats.
            </p>
          </div>

          {/* Mandatory Disclaimers Alert Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-[#002D26]/70 border border-[#D8B879]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-start sm:items-center gap-3">
              <AlertCircle className="w-5 h-5 text-[#D8B879] flex-shrink-0 mt-0.5 sm:mt-0" />
              <p className="font-inter text-xs text-white/80 leading-normal">
                <strong className="text-[#D8B879] font-semibold">Illustrative Conceptual Layout:</strong> Actual survey plan and official RERA-registered demarcations will be issued upon formal layout release. Sample plot dimensions are shown for representative visualization only.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#D8B879]/20 text-[#D8B879] text-[10px] font-mono tracking-widest uppercase flex-shrink-0">
              Sample Format
            </div>
          </div>

          {/* Masterplan Viewer Grid: Interactive Canvas on Left, Details & Legend on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ── Left / Canvas Card (8 Columns) ── */}
            <div className="lg:col-span-8 bg-[#001D18] rounded-3xl border border-white/10 p-5 sm:p-7 shadow-2xl relative flex flex-col">
              
              {/* Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 mb-5">
                {/* Category Filter Tabs */}
                <div className="flex items-center gap-1 bg-[#001410] p-1 rounded-xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFilterType('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-inter font-medium transition-all ${
                      filterType === 'all'
                        ? 'bg-[#D8B879] text-[#001D18] shadow'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    All Plots
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('residential')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-inter font-medium transition-all ${
                      filterType === 'residential'
                        ? 'bg-[#D8B879] text-[#001D18] shadow'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Residential ({sampleMasterplanPlots.filter(p => p.type === 'residential').length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('commercial')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-inter font-medium transition-all ${
                      filterType === 'commercial'
                        ? 'bg-[#075C4A] text-white shadow'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Commercial ({sampleMasterplanPlots.filter(p => p.type === 'commercial').length})
                  </button>
                </div>

                {/* Zoom & Reset Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleZoom(0.15)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
                    title="Zoom In"
                    aria-label="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleZoom(-0.15)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
                    title="Zoom Out"
                    aria-label="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-colors"
                    title="Reset Zoom"
                    aria-label="Reset View"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <span className="text-[11px] font-mono text-white/50 pl-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                </div>
              </div>

              {/* Interactive SVG / 2D Canvas Area */}
              <div className="relative w-full aspect-[16/10] bg-[#001410] rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center p-3 select-none">
                
                {/* Compass Marker */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-center bg-[#001713]/80 p-2 rounded-xl border border-white/10 backdrop-blur-md">
                  <Compass className="w-5 h-5 text-[#D8B879] animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-white/80 tracking-widest mt-0.5">NORTH</span>
                </div>

                {/* Zoomable Container */}
                <div
                  className="w-full h-full relative transition-transform duration-300 ease-out origin-center"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Background Land Boundary */}
                    <rect
                      x="4"
                      y="4"
                      width="92"
                      height="92"
                      rx="4"
                      fill="#00241E"
                      stroke="#075C4A"
                      strokeWidth="0.8"
                      strokeDasharray="2 2"
                    />

                    {/* Green Setbacks / Open Buffer Spaces */}
                    <path
                      d="M 6 6 L 94 6 L 94 16 L 6 16 Z"
                      fill="#033A30"
                      stroke="#075C4A"
                      strokeWidth="0.5"
                    />
                    <text x="50" y="12" fill="#52B788" fontSize="2.8" fontWeight="bold" textAnchor="middle" letterSpacing="0.3">
                      PLANNED GREEN OPEN BUFFER &amp; WALKING SETBACK
                    </text>

                    {/* Sector Road 1 (Avenue 24ft) */}
                    <rect x="6" y="24" width="88" height="6" fill="#18231F" stroke="#334155" strokeWidth="0.4" />
                    <text x="50" y="28" fill="#94A3B8" fontSize="2.2" fontStyle="italic" textAnchor="middle">
                      INTERNAL RESIDENTIAL AVENUE (24 FT PLANNED CORRIDOR)
                    </text>

                    {/* Sector Road 2 (Commercial Main Corridor 40ft) */}
                    <rect x="6" y="56" width="88" height="8" fill="#18231F" stroke="#334155" strokeWidth="0.5" />
                    <text x="50" y="61" fill="#D8B879" fontSize="2.4" fontWeight="600" textAnchor="middle">
                      CONNECTIVITY CORRIDOR &amp; MAIN FRONTAGE ROAD
                    </text>

                    {/* Render Interactive Plots */}
                    {sampleMasterplanPlots.map((plot) => {
                      const isSelected = selectedPlot?.id === plot.id;
                      const isFiltered = filterType === 'all' || filterType === plot.type;
                      const isRes = plot.type === 'residential';

                      const fill = isSelected
                        ? isRes ? '#D8B879' : '#097760'
                        : isRes ? '#00332B' : '#07483B';

                      const stroke = isSelected
                        ? '#FFFFFF'
                        : isRes ? '#D8B879' : '#10B981';

                      const textColor = isSelected
                        ? isRes ? '#001D18' : '#FFFFFF'
                        : '#FFFFFF';

                      return (
                        <g
                          key={plot.id}
                          className="cursor-pointer transition-all duration-200"
                          style={{ opacity: isFiltered ? 1 : 0.25 }}
                          onClick={() => setSelectedPlot(plot)}
                        >
                          <rect
                            x={plot.x}
                            y={plot.y}
                            width={plot.w}
                            height={plot.h}
                            rx="1.5"
                            fill={fill}
                            stroke={stroke}
                            strokeWidth={isSelected ? '1.2' : '0.6'}
                            className="hover:filter hover:brightness-125 transition-all"
                          />
                          <text
                            x={plot.x + plot.w / 2}
                            y={plot.y + plot.h / 2 - 1.5}
                            fill={textColor}
                            fontSize="3"
                            fontWeight="bold"
                            textAnchor="middle"
                            dominantBaseline="central"
                          >
                            {plot.id}
                          </text>
                          <text
                            x={plot.x + plot.w / 2}
                            y={plot.y + plot.h / 2 + 3}
                            fill={textColor}
                            fontSize="2"
                            textAnchor="middle"
                            opacity={isSelected ? 1 : 0.8}
                          >
                            {plot.size}
                          </text>
                        </g>
                      );
                    })}

                    {/* Entrance Marker */}
                    <g transform="translate(6, 88)">
                      <rect x="0" y="0" width="28" height="6" rx="1" fill="#D8B879" />
                      <text x="14" y="4" fill="#001D18" fontSize="2.4" fontWeight="bold" textAnchor="middle">
                        MAIN ENTRY GATEWAY
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Bottom Canvas Helper Text */}
                <div className="absolute bottom-3 left-4 text-[10px] font-mono text-white/50 pointer-events-none">
                  * Click any colored parcel to inspect sample dimensions and specifications
                </div>
              </div>

              {/* Canvas Legend */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-inter text-white/70">
                <span className="font-semibold text-white text-[11px] uppercase tracking-wider">Legend:</span>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#00332B] border border-[#D8B879]" />
                  <span>Residential Format</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#07483B] border border-emerald-400" />
                  <span>Commercial Frontage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#18231F] border border-slate-500" />
                  <span>Planned Internal Road</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded bg-[#033A30] border border-[#52B788]" />
                  <span>Green Buffer</span>
                </div>
              </div>
            </div>

            {/* ── Right / Selected Plot Detail Card (4 Columns) ── */}
            <div className="lg:col-span-4 bg-[#001D18] rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between sticky top-28">
              {selectedPlot ? (
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
                        Selected Plot Format
                      </span>
                      <h3 className="font-playfair text-3xl font-bold text-white mt-1">
                        Plot {selectedPlot.id}
                      </h3>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase tracking-wider ${
                        selectedPlot.type === 'residential'
                          ? 'bg-[#D8B879]/20 text-[#D8B879] border border-[#D8B879]/40'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-600/40'
                      }`}
                    >
                      {selectedPlot.type}
                    </span>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-white/60">Representative Area:</span>
                      <span className="font-semibold text-white font-mono text-sm">{selectedPlot.size}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-white/60">Primary Orientation:</span>
                      <span className="font-semibold text-white">{selectedPlot.facing} Facing</span>
                    </div>

                    <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-white/60">Layout Verification:</span>
                      <span className="text-[#D8B879] font-medium">{selectedPlot.status}</span>
                    </div>
                  </div>

                  <p className="font-inter text-xs text-white/75 leading-relaxed bg-[#001410] p-3.5 rounded-xl border border-white/5 mb-6">
                    {selectedPlot.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B879]" />
                      <span>Standard layout geometry</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B879]" />
                      <span>Direct access to internal avenue</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8B879]" />
                      <span>Ready for future survey demarcation</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => setEnquiryOpen(true)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#D8B879] hover:bg-[#F4E9D4] text-[#001D18] font-inter font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
                  >
                    <span>Enquire About Plot {selectedPlot.id}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 text-white/50 text-sm">
                  Click any plot on the layout map to view details.
                </div>
              )}

              {/* Informational Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-white/50 font-inter">
                <Info className="w-3.5 h-3.5 text-[#D8B879] flex-shrink-0" />
                <span>Dimensions are illustrative sample formats.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Global Accessible Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultPropertyInterest={selectedPlot?.type || 'residential'}
        title={`Enquire About Plot Format ${selectedPlot?.id || ''}`}
        subtitle="Our Balaghat team will provide layout drawings, sizing options, and on-ground site visit availability."
        source="interactive_masterplan_section_04"
      />
    </>
  );
};

export default InteractiveMasterplanSection;

