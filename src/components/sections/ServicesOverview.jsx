import React from 'react';
import { 
  Home, 
  Compass, 
  Layers, 
  FileCheck2, 
  Calculator, 
  Users, 
  HardHat, 
  Package, 
  RefreshCw, 
  Wrench, 
  Building2, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import { siteConfig } from '../../data/siteConfig';

const iconMap = {
  Home,
  Compass,
  Layers,
  FileCheck2,
  Calculator,
  Users,
  HardHat,
  Package,
  RefreshCw,
  Wrench,
  Building2,
};

export default function ServicesOverview({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-white dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Comprehensive Construction & Engineering Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            From 2D/3D design and structural blueprints to material contracts, full execution, and building maintenance across Tamil Nadu.
          </p>
        </div>

        {/* 10 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {siteConfig.services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Building2;

            return (
              <TiltCard
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group p-8 rounded-3xl border bg-gray-50/80 dark:bg-charcoal-950/80 border-gray-200 dark:border-gray-800/80 hover:border-amberGold-500/50 hover:shadow-gold-glow transition-all duration-300 text-gray-900 dark:text-white flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-amberGold-500 text-charcoal-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-7 h-7 stroke-[2]" />
                    </div>

                    <div className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-amberGold-500 group-hover:text-charcoal-950 group-hover:border-amberGold-500 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amberGold-500 block mb-1">
                      SERVICE // {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amberGold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-gray-200/50 dark:border-gray-800/60">
                    {service.scope.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amberGold-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-900">
                  <span className="text-xs font-heading font-bold text-amberGold-500 uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                    View Service Scope & Enquire &rarr;
                  </span>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
