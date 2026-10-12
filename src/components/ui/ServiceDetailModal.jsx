import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ServiceDetailModal({ service, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.93, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.93, opacity: 0, y: 15 }}
          className="relative w-full max-w-2xl bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 dark:bg-charcoal-800 text-gray-500 dark:text-gray-400 hover:text-white hover:bg-charcoal-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amberGold-500/15 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider mb-3">
            Thamizha Service Deliverables
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {service.description}
          </p>

          <div className="space-y-3 mb-8">
            <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400">
              What Is Included:
            </h4>
            <div className="space-y-2.5">
              {service.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amberGold-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
            <a
              href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                `Hello Thamizha Constructions, I would like to consult about your service: "${service.title}".`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Consult via WhatsApp</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                `Consultation Request: ${service.title}`
              )}&body=${encodeURIComponent(
                `Dear Thamizha Constructions,\n\nI am interested in your service: "${service.title}". Please get in touch with me to discuss requirements and site evaluation in Tamil Nadu.\n\nThank you.`
              )}`}
              className="flex-1 py-3.5 px-5 rounded-xl bg-amberGold-500 hover:bg-amber-400 text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow flex items-center justify-center gap-2 transition-all"
            >
              <span>Consult via Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
