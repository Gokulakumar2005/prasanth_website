import React from 'react';
import { MessageSquareText, PenTool, FileCheck, Hammer, Sparkles, KeyRound, Check } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Plot Review",
      desc: "In-depth discussion of your lifestyle, plot topography, budget, and Vastu requirements.",
      icon: MessageSquareText,
      duration: "Week 1",
    },
    {
      num: "02",
      title: "Architectural 3D Design",
      desc: "2D floor plans, photorealistic external renders, and virtual 3D walkthrough models.",
      icon: PenTool,
      duration: "Week 2 - 3",
    },
    {
      num: "03",
      title: "Local Body Approvals",
      desc: "Handling DTCP, CMDA, and local Municipal Corporation structural clearances across Tamil Nadu.",
      icon: FileCheck,
      duration: "Week 3 - 5",
    },
    {
      num: "04",
      title: "RCC Structural Construction",
      desc: "Supervised structural casting with daily photo logs, lab-tested cement, and branded rebar.",
      icon: Hammer,
      duration: "Month 2 - 6",
    },
    {
      num: "05",
      title: "Interior & Finishing",
      desc: "Plumbing, electrical, false ceilings, luxury flooring, custom woodwork, and facade painting.",
      icon: Sparkles,
      duration: "Month 6 - 8",
    },
    {
      num: "06",
      title: "Milestone Key Handover",
      desc: "Deep site cleaning, handover documentation, 10-year structural warranty, and Griha Pravesham assistance.",
      icon: KeyRound,
      duration: "Final Handover",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 dark:bg-charcoal-950 transition-colors duration-300 relative bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Transparent Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our 6-Stage Turnkey Process
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            We eliminate stress with transparent timelines, live site logs, and milestone-based payments.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.num}
                className="relative p-8 rounded-3xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-amberGold-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-heading font-extrabold text-amberGold-500 group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-600 dark:text-gray-300 font-medium">
                      {step.duration}
                    </span>
                  </div>

                  {/* Step Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-amberGold-500/15 text-amberGold-500 flex items-center justify-center mb-4 group-hover:bg-amberGold-500 group-hover:text-charcoal-950 transition-colors">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Verification Check */}
                <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Quality Verified Engineering Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
