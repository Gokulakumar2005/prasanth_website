import React from 'react';
import { Building, Compass, Layers, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export default function ConsultingSection({ onBookConsultation }) {
  const services = [
    {
      title: "DTCP, CMDA & Municipal Approvals",
      desc: "Smooth clearance of residential and commercial building permits under Tamil Nadu Combined Development and Building Rules (TNCDBR) across all districts.",
      icon: Building,
      badge: "Statewide Planning Sanctions",
    },
    {
      title: "Scientific Vastu Shastra Audit",
      desc: "Harmonizing natural energy channels, central courtyard zoning, and cardinal room placements without sacrificing modern ergonomics.",
      icon: Compass,
      badge: "Scientific Vastu Orientation",
    },
    {
      title: "Soil Load & Structural Feasibility",
      desc: "Standard penetration tests (SPT) to identify soil strata depth and design customized pile, raft, or isolated footings for any terrain across Tamil Nadu.",
      icon: Layers,
      badge: "Soil & Geo-Technical Audit",
    },
    {
      title: "Project Management & Quantity Audits",
      desc: "Independent technical supervision, material wastage audits, and contractor billing cross-verification for peace of mind.",
      icon: FileText,
      badge: "Third-Party BOQ Audits",
    },
  ];

  return (
    <section id="consulting" className="py-24 bg-gray-50 dark:bg-charcoal-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Regulatory & Technical Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Tamil Nadu Construction Consulting & Compliance
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Overcome bureaucratic roadblocks with our in-house municipal liaisons, DTCP experts, and structural consultants.
          </p>
        </div>

        {/* 4 Technical Consulting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-gray-800 shadow-md hover:border-amberGold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amberGold-500/10 text-amberGold-500 flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-charcoal-800 text-amberGold-500 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs font-semibold text-amberGold-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Available for Independent Plots & Commercial Layouts Across Tamil Nadu</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Consulting Banner Box */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-charcoal-900 via-charcoal-950 to-charcoal-900 border border-amberGold-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Planning a construction or need DTCP / Local Body plan sanctions?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak with our senior regulatory liaison engineer for a complimentary 30-minute regulatory review anywhere in Tamil Nadu.
            </p>
          </div>

          <button
            onClick={onBookConsultation}
            className="py-3.5 px-7 rounded-xl bg-amberGold-500 text-charcoal-950 font-heading font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-gold-glow shrink-0 flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
