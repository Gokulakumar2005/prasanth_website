import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// Validation Schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9+ -]{10,14}$/, "Enter a valid 10-digit Indian phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a required service"),
  budget: z.string().min(1, "Please select an estimated budget range"),
  message: z.string().min(10, "Please describe your project location or details (at least 10 characters)"),
});

export default function ContactSection({ prefilledService = null }) {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: prefilledService || 'Turnkey Building Construction',
      budget: '₹35 Lakhs - ₹75 Lakhs',
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  // Helper to construct WhatsApp URL
  const getWhatsAppUrl = (data) => {
    const text = 
`*New Construction Enquiry - Thamizha Constructions*
----------------------------------------
👤 *Name:* ${data.name || 'Not provided'}
📱 *Phone:* ${data.phone || 'Not provided'}
📧 *Email:* ${data.email || 'Not provided'}
🏗️ *Service:* ${data.service || 'Turnkey Construction'}
💰 *Budget:* ${data.budget || '₹35L - ₹75L'}
📍 *Plot & Project Details:*
${data.message || 'No additional details provided'}
----------------------------------------
_Sent from thamizhaconstructions.com_`;

    return `https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Helper to construct mailto URL directed to gokulakumar2005@gmail.com
  const getMailtoUrl = (data) => {
    const subject = `Construction Project Enquiry: ${data.service || 'Turnkey Construction'} - ${data.name || 'Client'}`;
    const body = 
`Dear Thamizha Constructions Team,

I would like to enquire about a construction project in Tamil Nadu.

Here are my project details:
----------------------------------------
• Client Name: ${data.name || ''}
• Contact Phone: ${data.phone || ''}
• Email Address: ${data.email || ''}
• Required Service: ${data.service || ''}
• Estimated Budget: ${data.budget || ''}

Project Location & Scope:
${data.message || ''}
----------------------------------------

Looking forward to your response and scheduling a site evaluation.

Warm regards,
${data.name || 'Client'}`;

    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Handle WhatsApp action
  const handleSendViaWhatsApp = (data) => {
    setSubmittedData(data);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#22c55e', '#F59E0B', '#111827'],
    });
    window.open(getWhatsAppUrl(data), '_blank');
  };

  // Handle Email action
  const handleSendViaEmail = (data) => {
    setSubmittedData(data);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#F59E0B', '#111827'],
    });
    window.location.href = getMailtoUrl(data);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
            Let's Build Your Vision Across Tamil Nadu
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Headquartered in Trichy with projects statewide. Schedule a complimentary site evaluation or reach out to our team via WhatsApp and Email for direct blueprint discussions.
          </p>
        </div>

        {/* 2-Column Layout: Left Contact Form, Right Map & Quick Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Client-Side Interactive Form */}
          <div className="lg:col-span-7 bg-gray-50 dark:bg-charcoal-950 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
              Request a Free Blueprint & BOQ Estimate
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8">
              Fill out your details below. You can send your enquiry directly to our chief engineer via <strong>WhatsApp (+91 {siteConfig.contact.whatsappNumber})</strong> or launch your <strong>Email application</strong> to <strong>{siteConfig.contact.email}</strong> with one click.
            </p>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anand Kumar"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 99443 XXXXX"
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all"
                  />
                  {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="anand@example.com"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all"
                />
                {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Service Type */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all"
                  >
                    <option value="Interior Designing">Interior Designing</option>
                    <option value="2D & 3D Drawing">2D & 3D Drawing</option>
                    <option value="Structural Drawing">Structural Drawing</option>
                    <option value="Approval Drawing">Approval Drawing</option>
                    <option value="Estimation">Estimation</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Labour Contract">Labour Contract</option>
                    <option value="Material Contract">Material Contract</option>
                    <option value="Renovation Work">Renovation Work</option>
                    <option value="Building Maintenance">Building Maintenance</option>
                  </select>
                  {errors.service && <span className="text-xs text-red-500 mt-1 block">{errors.service.message}</span>}
                </div>

                {/* Budget Range in ₹ */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all"
                  >
                    <option value="₹20 Lakhs - ₹40 Lakhs">₹20 Lakhs - ₹40 Lakhs</option>
                    <option value="₹40 Lakhs - ₹75 Lakhs">₹40 Lakhs - ₹75 Lakhs</option>
                    <option value="₹75 Lakhs - ₹1.5 Crores">₹75 Lakhs - ₹1.5 Crores</option>
                    <option value="₹1.5 Crores - ₹3+ Crores">₹1.5 Crores - ₹3+ Crores</option>
                    <option value="Consulting Only (< ₹5 Lakhs)">Consulting Only (&lt; ₹5 Lakhs)</option>
                  </select>
                  {errors.budget && <span className="text-xs text-red-500 mt-1 block">{errors.budget.message}</span>}
                </div>
              </div>

              {/* Message / Plot Details */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                  Project Details & Plot Location *
                </label>
                <textarea
                  rows="4"
                  placeholder="Plot location (e.g. Trichy, Chennai, Coimbatore, Madurai, Salem, Thanjavur...), built-up area in sq.ft, number of floors, timeline..."
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-charcoal-900 border border-gray-300 dark:border-gray-700 focus:border-amberGold-500 focus:ring-1 focus:ring-amberGold-500 text-gray-900 dark:text-white text-sm outline-none transition-all resize-none"
                />
                {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
              </div>

              {/* Success Notification */}
              {submittedData && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Enquiry created! Navigating to Thamizha Constructions. Our team will get back to you shortly.</span>
                </div>
              )}

              {/* Dual Contact Actions: WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* 1. Primary WhatsApp Action Button */}
                <button
                  type="button"
                  onClick={handleSubmit(handleSendViaWhatsApp)}
                  className="py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  <span>Send via WhatsApp</span>
                </button>

                {/* 2. Direct Email Navigation Button */}
                <button
                  type="button"
                  onClick={handleSubmit(handleSendViaEmail)}
                  className="py-4 px-6 rounded-2xl bg-gradient-to-r from-amberGold-500 to-amber-400 text-charcoal-950 font-heading font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center pt-1">
                Enquiries are directed to WhatsApp <strong>+91 {siteConfig.contact.whatsappNumber}</strong> or Email <strong>{siteConfig.contact.email}</strong>.
              </p>
            </form>
          </div>

          {/* Right Column: Google Maps & Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-8 rounded-3xl bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800 shadow-lg space-y-6">
              <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">
                Thamizha Constructions Head Office & Statewide Operations
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amberGold-500/10 text-amberGold-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Address</span>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {siteConfig.contact.address.full}
                    </p>
                    <span className="text-xs text-amberGold-500 block mt-0.5">
                      Landmark: {siteConfig.contact.address.landmark}
                    </span>
                  </div>
                </div>

                {/* Direct Phone Call */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Call Direct</span>
                    <a
                      href={`tel:${siteConfig.contact.whatsappNumber}`}
                      className="text-base font-bold text-gray-900 dark:text-white hover:text-amberGold-500 transition-colors block"
                    >
                      +91 {siteConfig.contact.whatsappNumber}
                    </a>
                    <span className="text-xs text-gray-400">Landline: {siteConfig.contact.altPhone}</span>
                  </div>
                </div>

                {/* Direct Email Navigation */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Email Inquiries</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent("Construction Consultation Enquiry - Tamil Nadu")}`}
                      className="text-sm font-bold text-gray-900 dark:text-white hover:text-amberGold-500 transition-colors block"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="text-[11px] text-gray-400">Click to compose email</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">Working Hours</span>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {siteConfig.contact.workingHours.weekdays}
                    </p>
                    <p className="text-xs text-gray-400">
                      {siteConfig.contact.workingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Instant WhatsApp Button */}
              <a
                href={`https://wa.me/91${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent("Hello Thamizha Constructions, I would like to enquire about a construction project in Tamil Nadu.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-emerald-600/30 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                <span>Chat on WhatsApp (+91 {siteConfig.contact.whatsappNumber})</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
