import React from 'react';
import { ShieldCheck, Clock, Receipt, UserCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Lab-Tested Quality Materials",
      desc: "Direct factory supply of certified 53-grade cement, Fe550D rebar, and river sand/M-sand grade verification.",
      icon: ShieldCheck,
      stat: "Fe550D / Grade 53",
      statLabel: "Branded Material Quality",
    },
    {
      title: "Strict On-Time Delivery Guarantee",
      desc: "Legally bound completion milestones with penalty clause for any delay. 98.4% on-time track record.",
      icon: Clock,
      stat: "98.4%",
      statLabel: "On-Time Handover Record",
    },
    {
      title: "100% Transparent Itemized BOQ",
      desc: "Zero hidden costs. Comprehensive Bill of Quantities covering every bag of cement and electrical switch.",
      icon: Receipt,
      stat: "0 Hidden Fees",
      statLabel: "Itemized BOQ Contracts",
    },
    {
      title: "Licensed Structural Engineers",
      desc: "Every plan is vetted by senior structural consultants holding DTCP, CMDA, and Tamil Nadu municipal body empanelment.",
      icon: UserCheck,
      stat: "100% Empaneled",
      statLabel: "DTCP & CMDA Certified",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            The Thamizha Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Why Clients Across Tamil Nadu Choose Thamizha Constructions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            We bridge cultural sensitivity with world-class engineering discipline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;

            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800 hover:border-amberGold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amberGold-500/10 text-amberGold-500 flex items-center justify-center mb-6 group-hover:bg-amberGold-500 group-hover:text-charcoal-950 transition-colors">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {reason.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-gray-800/80">
                  <span className="text-xl font-heading font-extrabold text-amberGold-500 block">
                    {reason.stat}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">
                    {reason.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
