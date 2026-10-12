import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sticky transparent navbar that turns frosted glass on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: "Home" },
    { id: 'about', label: "About Us" },
    { id: 'services', label: "Services" },
    { id: 'projects', label: "Projects" },
    { id: 'process', label: "Our Process" },
    { id: 'consulting', label: "Consulting & Approvals" },
    { id: 'estimator', label: "Cost Estimator" },
    { id: 'contact', label: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-charcoal-950/95 backdrop-blur-md shadow-xl border-b border-gray-800/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/images/logo.png"
              alt="Thamizha Construction Logo"
              className="h-11 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div>
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-amberGold-500 transition-colors block leading-tight">
              {siteConfig.brand.name}
            </span>
            <span className="text-[10px] text-amberGold-400 font-mono tracking-widest uppercase block">
              TRICHY • ALL TAMIL NADU
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-amberGold-400 transition-colors relative py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-charcoal-900 border border-gray-800 text-gray-200 hover:text-amberGold-400 hover:border-amberGold-500/50 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-950/98 backdrop-blur-xl border-b border-gray-800/80 px-6 py-6 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="flex items-center justify-between text-left py-3 text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-amberGold-400 border-b border-gray-900 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-amberGold-500" />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
