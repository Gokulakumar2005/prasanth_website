import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal-950 text-white border-t border-gray-800 relative overflow-hidden bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center shrink-0">
                <img
                  src="/images/logo.png"
                  alt="Thamizha Construction Logo"
                  className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight block text-white">
                  {siteConfig.brand.name}
                </span>
                <span className="text-[10px] text-amberGold-500 font-mono tracking-widest uppercase block">
                  TRICHY • ALL TAMIL NADU
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {siteConfig.brand.description}
            </p>

            <div className="space-y-1 text-xs text-gray-300 pt-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amberGold-500" />
                <span>+91 {siteConfig.contact.whatsappNumber}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amberGold-500" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amberGold-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-charcoal-900 hover:bg-amberGold-500 hover:text-charcoal-950 transition-colors text-gray-400" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-charcoal-900 hover:bg-amberGold-500 hover:text-charcoal-950 transition-colors text-gray-400" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-charcoal-900 hover:bg-amberGold-500 hover:text-charcoal-950 transition-colors text-gray-400" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-charcoal-900 hover:bg-amberGold-500 hover:text-charcoal-950 transition-colors text-gray-400" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-amberGold-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li><button onClick={() => handleLinkClick('hero')} className="hover:text-amberGold-400 transition-colors">Home</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-amberGold-400 transition-colors">About Us</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-amberGold-400 transition-colors">Services</button></li>
              <li><button onClick={() => handleLinkClick('projects')} className="hover:text-amberGold-400 transition-colors">Projects Portfolio</button></li>
              <li><button onClick={() => handleLinkClick('process')} className="hover:text-amberGold-400 transition-colors">Turnkey Process</button></li>
              <li><button onClick={() => handleLinkClick('estimator')} className="hover:text-amberGold-400 transition-colors">Cost Estimator</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-amberGold-400 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-amberGold-500">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs text-gray-400">
              <li>• Interior Designing</li>
              <li>• 2D & 3D Drawing</li>
              <li>• Structural Drawing</li>
              <li>• Approval Drawing</li>
              <li>• Estimation</li>
              <li>• Consulting</li>
              <li>• Labour Contract</li>
              <li>• Material Contract</li>
              <li>• Renovation Work</li>
              <li>• Building Maintenance</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-amberGold-500">
              Construction Insights
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get monthly architectural trends, Tamil Nadu property guidelines, and construction cost tips directly in your inbox.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Thamizha Constructions insights!"); }} className="space-y-2 pt-2">
              <div className="flex rounded-xl overflow-hidden border border-gray-800 bg-charcoal-900">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 bg-transparent text-xs text-white outline-none"
                />
                <button
                  type="submit"
                  className="px-3.5 bg-amberGold-500 text-charcoal-950 font-bold hover:bg-amber-400 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {year} Thamizha Constructions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400">
            <span>DTCP NO: TN/TRY/REG/2021</span>
            <span>•</span>
            <span>GST: 33AAAAA0000A1Z5</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
