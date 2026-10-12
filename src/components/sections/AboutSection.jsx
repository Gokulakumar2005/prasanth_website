import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function AboutSection() {

  return (
    <section id="about" className="py-24 bg-white dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Our Heritage & Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Rooted in Trust, Engineered for Tomorrow
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            {siteConfig.brand.description}
          </p>
        </div>

        {/* Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
              Building Tamil Nadu's Future With Uncompromising Integrity
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Headquartered in Trichy and operating across Tamil Nadu, <strong className="text-amberGold-500">Thamizha Constructions</strong> was founded on a singular conviction: that every home, commercial complex, or institutional landmark deserves the highest standards of structural safety, honest billing, and architectural beauty.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Drawing inspiration from historic temple craftsmanship and contemporary engineering, we deliver energy-efficient villas and modern commercial hubs across Tamil Nadu.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800">
                <Target className="w-5 h-5 text-amberGold-500 mb-2" />
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Our Vision</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  To be Tamil Nadu's most trusted name in turnkey architectural construction.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800">
                <Compass className="w-5 h-5 text-amberGold-500 mb-2" />
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Our Mission</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Deliver turnkey projects on time, on budget, and with zero structural compromise.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
              <img
                src="/images/projects/project-temple.jpg"
                alt="Thamizha Constructions Architectural Masterpiece"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amberGold-400 font-mono text-xs uppercase tracking-wider block mb-1">
                  LANDMARK HERITAGE PORTFOLIO
                </span>
                <p className="text-lg font-heading font-bold">
                  Proposed Sai Baba Temple & Community Hall
                </p>
                <p className="text-xs text-gray-300 mt-0.5">
                  Akarapatti, Tamil Nadu — 18,200 sq.ft
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-8">
          
         
        </div>

      </div>
    </section>
  );
}
