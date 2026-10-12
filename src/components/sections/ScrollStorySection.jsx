import React, { useState } from 'react';
import { Shovel, HardHat, Home, Paintbrush, Award, CheckCircle2 } from 'lucide-react';

export default function ScrollStorySection() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "1. Foundation & Soil Engineering",
      desc: "Borehole soil analysis, Cauvery alluvial depth testing, raft/isolated footings, and anti-termite damp-proof plinth beam casting.",
      icon: Shovel,
      tag: "Site Prep & Substructure",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Soil bearing capacity test", "Seismic isolated footings", "Anti-termite chemical barrier"],
    },
    {
      id: 2,
      title: "2. RCC Structural Framework",
      desc: "Fe550D TMT earthquake-resistant columns, Grade-30 lab-tested concrete slabs, and vibration-compacted beam casting.",
      icon: HardHat,
      tag: "Earthquake-Resistant RCC",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      highlights: ["Certified 53-grade cement", "Fe550D primary reinforcement", "Cube compression strength testing"],
    },
    {
      id: 3,
      title: "3. Masonry & Exterior Enclosure",
      desc: "Chamber-burnt wire-cut clay bricks, AAC block insulation, architectural jaali screens, and weatherproof exterior plastering.",
      icon: Home,
      tag: "Brickwork & Elevation Jaali",
      image: "/images/projects/project-srirangam.jpg",
      highlights: ["Srirangam-style brick jaali", "Weather-shield plaster coats", "Cavity wall thermal insulation"],
    },
    {
      id: 4,
      title: "4. Interior Craftsmanship & Finishes",
      desc: "Concealed electrical conduit, luxury plumbing, Italian marble flooring, and bespoke modular teak carpentry.",
      icon: Paintbrush,
      tag: "Teak Carpentry & MEP",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      highlights: ["German hardware fittings", "Gypsum cove false ceilings", "Vastu-aligned pooja space"],
    },
    {
      id: 5,
      title: "5. Final Handover & Quality Audit",
      desc: "120-point quality compliance checklist, local authority completion certificate, and key handover with 10-year warranty.",
      icon: Award,
      tag: "10-Year Warranty Handover",
      image: "/images/projects/project-temple.jpg",
      highlights: ["120-point quality signoff", "Corporation completion cert", "10-year structural warranty"],
    },
  ];

  const current = stages.find((s) => s.id === activeStage) || stages[0];

  return (
    <section className="py-24 bg-gray-50 dark:bg-charcoal-950 transition-colors duration-300 relative overflow-hidden bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Construction Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            How We Build: From Groundwork to Handover
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Click through our 5 engineering phases to see how we deliver structural durability and quality across Tamil Nadu.
          </p>
        </div>

        {/* 2-Column Story: Left Stage Cards, Right 2D Architectural Picture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Stage Selector Cards */}
          <div className="lg:col-span-6 space-y-3">
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;

              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-white dark:bg-charcoal-900 border-amberGold-500 shadow-gold-glow scale-[1.02]'
                      : 'bg-white/60 dark:bg-charcoal-900/50 border-gray-200 dark:border-gray-800 hover:border-amberGold-500/40 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-amberGold-500 text-charcoal-950'
                          : 'bg-gray-100 dark:bg-charcoal-800 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amberGold-500 font-semibold">
                          {stage.tag}
                        </span>
                        {isActive && (
                          <span className="text-[10px] uppercase font-bold text-amberGold-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amberGold-500 animate-pulse" />
                            Active Stage
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-base font-heading font-bold text-gray-900 dark:text-white">
                        {stage.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 2D Stage Picture Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-charcoal-900 shadow-2xl h-[420px] sm:h-[480px]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-transparent" />

              {/* Stage Badge & Specs */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-amberGold-500/40 text-xs font-mono text-amberGold-400 backdrop-blur-md">
                PHASE 0{current.id} OF 05
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-wider text-amberGold-400 block mb-1">
                  {current.tag}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white mb-3">
                  {current.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/10">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amberGold-500 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Selector Dots */}
            <div className="flex justify-center items-center gap-3 mt-4">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeStage === stage.id
                      ? 'w-8 bg-amberGold-500 shadow-gold-glow'
                      : 'w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-amberGold-500/50'
                  }`}
                  aria-label={`Jump to stage ${stage.id}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
