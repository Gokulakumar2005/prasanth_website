import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Maximize2, ShieldCheck, CheckCircle2, MessageSquare, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function LightboxModal({ project, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white dark:bg-charcoal-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal-950/70 hover:bg-charcoal-950 text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-95"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto">
            {/* Project Hero Image */}
            <div className="relative w-full h-[280px] sm:h-[400px] bg-charcoal-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amberGold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Project Specs Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amberGold-500/10 text-amberGold-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Built-up Area</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {project.area}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Year</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Delivery</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Scope & Description */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Scope of Work</h4>
                <p className="text-sm font-medium text-amberGold-500 bg-amberGold-500/10 border border-amberGold-500/20 px-3.5 py-2 rounded-xl inline-block mb-3">
                  {project.scope}
                </p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3">Key Engineering Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-amberGold-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a
                  href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Thamizha Constructions, I am interested in building a project similar to: "${project.title}" (${project.location}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                    `Enquiry for Project Similar to: ${project.title}`
                  )}&body=${encodeURIComponent(
                    `Hello Thamizha Constructions,\n\nI saw your project "${project.title}" located at ${project.location} on your website and would like to discuss a similar project.\n\nPlease contact me.`
                  )}`}
                  className="flex-1 py-3 px-5 rounded-xl bg-amberGold-500 hover:bg-amber-400 text-charcoal-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-gold-glow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
