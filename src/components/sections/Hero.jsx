import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, ChevronLeft, ChevronRight, MessageSquare, HardHat } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Hero({ onOpenQuote, onExploreProjects }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4K Ultra-HD 2D Ongoing Building Construction Work Pictures
  const heroSlides = [
    {
      id: "ongoing-4k-multi-storey",
      title: "Multi-Storey RCC Structural Framework In Progress",
      location: "Active Construction Site • Tamil Nadu",
      category: "Active Building Construction",
      image: "/images/construction/ongoing-4k-1.jpg",
      tagline: "Heavy Scaffolding, Tower Cranes & Multi-Tier Column Casting",
    },
    {
      id: "ongoing-4k-engineers",
      title: "Civil Engineers Inspecting Ongoing Structural Reinforcement",
      location: "Trichy & Statewide Sites",
      category: "On-Site Civil Supervision",
      image: "/images/construction/ongoing-4k-2.jpg",
      tagline: "Quality Audits & Fe550D Steel Rebar Framework",
    },
    {
      id: "ongoing-4k-cranes",
      title: "High-Rise Building Erection & Tower Crane Operations",
      location: "Commercial Site • Tamil Nadu",
      category: "Structural Erection",
      image: "/images/construction/ongoing-4k-3.jpg",
      tagline: "Precision Tower Cranes Hoisting Structural Materials",
    },
    {
      id: "ongoing-4k-beams",
      title: "Structural Beam & Concrete Column Erection",
      location: "Active Project Site • Tamil Nadu",
      category: "Civil Engineering",
      image: "/images/construction/ongoing-4k-4.jpg",
      tagline: "Architectural Precision Erection & Foundation Casting",
    },
  ];

  // Auto-run background ongoing construction picture slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const active = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between bg-charcoal-950 text-white overflow-hidden">
      
      {/* 1. Fullscreen Dynamic 4K Ongoing Construction Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={active.image}
              alt={active.title}
              fetchpriority="high"
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.08] saturate-[1.12]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Seamless Radial & Directional Contrast Blend: Feathers smoothly into typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 via-45% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-charcoal-950/75" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-charcoal-950/30 to-charcoal-950/60" />
      </div>

      {/* Subtle Ambient Radial Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amberGold-500/10 rounded-full blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* 2. Seamlessly Blended Main Hero Content (No harsh boxed boundaries) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl space-y-6 text-left"
        >
          {/* Trust Certification Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-charcoal-950/70 border border-amberGold-500/40 text-amberGold-400 text-xs font-semibold backdrop-blur-md shadow-gold-glow">
            <ShieldCheck className="w-4 h-4 text-amberGold-500" />
            <span>DTCP, CMDA & Local Body Approved Engineers • All Tamil Nadu</span>
          </div>

          {/* Main Headline with Ambient Depth */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.06] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <span className="block text-white">
                Building Trust.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amberGold-400 via-amber-300 to-amber-500">
                Shaping Spaces.
              </span>
            </h1>
          </div>

          {/* Subtitle seamlessly reading over background */}
          <p className="text-base sm:text-lg text-gray-200/95 max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Premier turnkey building construction, architectural design, and luxury interiors across Tamil Nadu. Headquartered in Trichy, executing residential, commercial, and industrial landmarks with structural discipline, transparent itemized pricing, and on-time milestone delivery across all districts.
          </p>

          {/* Seamlessly Integrated CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="py-4 px-8 rounded-2xl bg-gradient-to-r from-amberGold-500 to-amber-400 text-charcoal-950 font-heading font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreProjects}
              className="py-4 px-7 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-amberGold-500/50 font-heading font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md shadow-lg"
            >
              <Layers className="w-4 h-4 text-amberGold-400" />
              <span>Explore Projects</span>
            </button>

            <a
              href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hello Thamizha Construction, I would like to enquire about a construction project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-7 rounded-2xl bg-emerald-600/80 hover:bg-emerald-600 text-white font-heading font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md border border-emerald-500/30 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-white stroke-none" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Organic Trust Stats Grid (Natural Glass Pods) */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            <div className="p-3 rounded-2xl bg-charcoal-950/40 backdrop-blur-md border border-white/5">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-white block">14+</span>
              <span className="text-[11px] text-gray-300 uppercase tracking-wider block">Years in Tamil Nadu</span>
            </div>
            <div className="p-3 rounded-2xl bg-charcoal-950/40 backdrop-blur-md border border-white/5">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-amberGold-400 block">180+</span>
              <span className="text-[11px] text-gray-300 uppercase tracking-wider block">Projects Handed Over</span>
            </div>
            <div className="p-3 rounded-2xl bg-charcoal-950/40 backdrop-blur-md border border-white/5">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-white block">38</span>
              <span className="text-[11px] text-gray-300 uppercase tracking-wider block">Districts Served</span>
            </div>
            <div className="p-3 rounded-2xl bg-charcoal-950/40 backdrop-blur-md border border-white/5">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-emerald-400 block">100%</span>
              <span className="text-[11px] text-gray-300 uppercase tracking-wider block">Vastu & DTCP Clear</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Blended Bottom Ambient Status Bar */}
      {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-charcoal-950/80 via-charcoal-950/50 to-charcoal-950/80 backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
           */}
          {/* Active Ongoing Construction Work Caption */}
          {/* <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="p-2.5 rounded-xl bg-amberGold-500/20 text-amberGold-400 shrink-0">
              <HardHat className="w-5 h-5 text-amberGold-500" />
            </div>
            <div className="text-left text-xs">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-amberGold-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  ONGOING SITE WORK ({currentSlide + 1} of {heroSlides.length})
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-amberGold-500/20 text-amberGold-300 border border-amberGold-500/30">
                  4K ULTRA-HD
                </span>
              </div>
              <span className="text-white font-bold block truncate max-w-xs sm:max-w-md drop-shadow-sm">
                {active.title}
              </span>
              <span className="text-gray-300 text-[11px] block">
                {active.tagline}
              </span>
            </div>
          </div> */}

          {/* Slide Navigation Controls */}
          {/* <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="flex items-center gap-1.5">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-6 bg-amberGold-500 shadow-gold-glow'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Show 4K site photo ${idx + 1}`}
                />
              ))}
            </div> */}

            {/* <div className="flex items-center gap-1 ml-2">
              <button
                onClick={handlePrev}
                className="w-7 h-7 rounded-lg bg-charcoal-950/80 hover:bg-charcoal-800 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Previous 4K construction photo"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-7 h-7 rounded-lg bg-charcoal-950/80 hover:bg-charcoal-800 text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Next 4K construction photo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div> */}
          {/* </div> */}
        {/* </div>
      </div> */}

    </section>
  );
}
