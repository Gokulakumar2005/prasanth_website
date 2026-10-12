import React from 'react';
import { ArrowRight, PhoneCall, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="py-20 bg-charcoal-950 text-white relative overflow-hidden bg-blueprint-grid border-t border-gray-800">
      {/* Amber Light Burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amberGold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900 border border-amberGold-500/40 text-amberGold-400 text-xs font-semibold shadow-gold-glow">
          <ShieldCheck className="w-4 h-4 text-amberGold-500" />
          <span>Ready to Build in Tamil Nadu?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight">
          Let’s Transform Your Land into a Lasting Architectural Landmark
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
          Schedule a complimentary site visit, soil feasibility consultation, and transparent BOQ price breakdown with our licensed chief engineers across Tamil Nadu.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-gradient-to-r from-amberGold-500 to-amber-400 text-charcoal-950 font-heading font-bold text-sm tracking-wide shadow-gold-glow hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Get a Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${siteConfig.contact.whatsappNumber}`}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-charcoal-900 border border-gray-700 hover:border-amberGold-500 text-white font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-amberGold-500" />
            <span>Call +91 {siteConfig.contact.whatsappNumber}</span>
          </a>

          <a
            href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hello Thamizha Constructions, I would like to discuss a construction project in Tamil Nadu.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-600/30"
          >
            <MessageSquare className="w-4 h-4 fill-white stroke-none" />
            <span>WhatsApp (+91 {siteConfig.contact.whatsappNumber})</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Free Consultation Request - Thamizha Constructions")}`}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-charcoal-900 border border-gray-700 hover:border-amberGold-500 text-amberGold-400 font-heading font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}
