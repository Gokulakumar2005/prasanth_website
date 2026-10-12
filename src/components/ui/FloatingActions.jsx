import React, { useState, useEffect } from 'react';
import { MessageSquare, PhoneCall, ArrowUp, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FloatingActions() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-amberGold-500 via-amber-300 to-amber-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons: Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-charcoal-900/90 text-amberGold-400 border border-gray-700 hover:border-amberGold-500 flex items-center justify-center shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Direct Phone Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
          title="Call Thamizha Office"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-charcoal-900 border border-amberGold-500/50 text-amberGold-500 flex items-center justify-center shadow-gold-glow hover:scale-110 active:scale-95 transition-all group"
          aria-label="Call Thamizha Constructions"
        >
          <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
        </a>

        {/* Direct Email Navigation Button */}
        <a
          href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Construction Enquiry - Thamizha Constructions")}`}
          title="Send Email to Thamizha Constructions"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-charcoal-900 border border-gray-700 hover:border-amberGold-500 text-gray-200 hover:text-amberGold-400 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
          aria-label="Send Email"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* Floating WhatsApp Click-to-Chat Button */}
        <a
          href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hello Thamizha Constructions, I would like to discuss a construction project in Tamil Nadu.")}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`Instant WhatsApp Consultation (+91 ${siteConfig.contact.whatsappNumber})`}
          className="p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all animate-pulse-slow"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-white stroke-none" />
          <span className="hidden sm:inline text-xs font-bold font-heading">
            WhatsApp (+91 {siteConfig.contact.whatsappNumber})
          </span>
        </a>
      </div>
    </>
  );
}
