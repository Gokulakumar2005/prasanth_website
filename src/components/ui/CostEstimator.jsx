import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CostEstimator({ onBookConsultation }) {
  const [area, setArea] = useState(2200);
  const [tier, setTier] = useState('premium'); // standard, premium, luxury
  const [serviceType, setServiceType] = useState('residential');

  // Pricing rates per sq.ft based on tier
  const tierRates = {
    standard: {
      rate: 1950,
      name: 'Standard Quality',
      subtitle: '53-Grade cement, Fe550D TMT, premium vitrified tiles, Asian Paints exterior, Jaguar fittings.',
    },
    premium: {
      rate: 2450,
      name: 'Premium Architectural',
      subtitle: 'Teak main door, granite/marble touches, soundproof UPVC windows, Kohler fittings, designer elevation.',
    },
    luxury: {
      rate: 3150,
      name: 'Ultra Luxury Turnkey',
      subtitle: 'Italian marble, smart automation, custom teak woodwork, architectural jaali facade.',
    },
  };

  // Multiplier for service type
  const serviceMultipliers = {
    residential: 1.0,
    commercial: 1.08,
    interior: 0.65,
    exterior: 0.40,
  };

  const selectedTier = tierRates[tier];
  const ratePerSqFt = Math.round(selectedTier.rate * (serviceMultipliers[serviceType] || 1.0));
  const baseTotal = area * ratePerSqFt;
  const lowerRange = Math.round(baseTotal * 0.96);
  const upperRange = Math.round(baseTotal * 1.04);

  // Format in Indian Lakhs / Crores
  const formatIndianCurrency = (num) => {
    if (num >= 10000000) {
      return `₹${(num / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(num / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
              Tamil Nadu Construction Cost Estimator
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Calculate an immediate approximate budget range based on your built-up square footage and specification tier.
            </p>
          </div>

          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Select Service Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'residential', label: 'Residential' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'interior', label: 'Interior Only' },
                { id: 'exterior', label: 'Elevation Only' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setServiceType(item.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                    serviceType === item.id
                      ? 'bg-amberGold-500 text-charcoal-950 font-bold border-amberGold-500 shadow-md'
                      : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-amberGold-500/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Built-up Area Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Built-up Area (Sq Ft)
              </label>
              <span className="font-heading font-bold text-lg text-amberGold-500">
                {area.toLocaleString()} sq.ft
              </span>
            </div>
            <input
              type="range"
              min="600"
              max="12000"
              step="100"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2.5 bg-gray-200 dark:bg-charcoal-800 rounded-lg appearance-none cursor-pointer accent-amberGold-500"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>600 sq.ft (Compact)</span>
              <span>3,500 sq.ft (Villa)</span>
              <span>12,000+ sq.ft (Commercial)</span>
            </div>
          </div>

          {/* Specification Tier Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Material Quality Specification
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(tierRates).map(([key, item]) => (
                <div
                  key={key}
                  onClick={() => setTier(key)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    tier === key
                      ? 'bg-amberGold-500/10 border-amberGold-500 shadow-sm'
                      : 'border-gray-200 dark:border-gray-800 hover:border-amberGold-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      {item.name}
                    </span>
                    {tier === key && <CheckCircle2 className="w-4 h-4 text-amberGold-500" />}
                  </div>
                  <span className="text-xs font-semibold text-amberGold-500">
                    ₹{item.rate}/sq.ft
                  </span>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card Column */}
        <div className="lg:col-span-5 bg-gray-50 dark:bg-charcoal-950 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-inner flex flex-col justify-between h-full space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block mb-1">
              Estimated Construction Budget
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-gray-900 dark:text-white">
                {formatIndianCurrency(lowerRange)}
              </span>
              <span className="text-gray-400 font-medium">to</span>
              <span className="text-2xl sm:text-3xl font-heading font-bold text-amberGold-500">
                {formatIndianCurrency(upperRange)}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Based on ₹{ratePerSqFt}/sq.ft for {area.toLocaleString()} sq.ft built-up area across Tamil Nadu.
            </p>
          </div>

          {/* Breakdown bars */}
          <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
              Estimated Cost Breakdown
            </span>
            
            {/* Visual Bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-gray-200 dark:bg-charcoal-800">
              <div style={{ width: '52%' }} className="bg-amberGold-500 h-full" title="Civil & RCC: 52%" />
              <div style={{ width: '24%' }} className="bg-amber-400 h-full" title="Finishing & Flooring: 24%" />
              <div style={{ width: '14%' }} className="bg-yellow-300 h-full" title="Plumbing & Electrical: 14%" />
              <div style={{ width: '10%' }} className="bg-orange-500 h-full" title="Elevation & Facade: 10%" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 dark:text-gray-400 pt-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amberGold-500" />
                <span>Civil Structure (52%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Finishing & Tiling (24%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-yellow-300" />
                <span>Plumbing/Electric (14%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>Facade & Jaali (10%)</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 dark:text-gray-500 italic">
            *Estimates are indicative for projects across Tamil Nadu. Site topography and customized architectural elevations may adjust exact figures. Request a personalized consultation.
          </p>

          <button
            type="button"
            onClick={onBookConsultation}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amberGold-500 to-amber-400 text-charcoal-950 font-heading font-bold text-sm shadow-gold-glow hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <span>Lock in Your Free Site Visit & BOQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
