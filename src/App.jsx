import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AnimatedCounters from './components/sections/AnimatedCounters';
import ServicesOverview from './components/sections/ServicesOverview';
import ScrollStorySection from './components/sections/ScrollStorySection';
import FeaturedProjectsSection from './components/sections/FeaturedProjectsSection';
import ProcessTimeline from './components/sections/ProcessTimeline';
import CostEstimatorSection from './components/sections/CostEstimatorSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ConsultingSection from './components/sections/ConsultingSection';
import AboutSection from './components/sections/AboutSection';
import CtaBanner from './components/sections/CtaBanner';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import FloatingActions from './components/ui/FloatingActions';
import LightboxModal from './components/ui/LightboxModal';
import ServiceDetailModal from './components/ui/ServiceDetailModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [prefilledContactService, setPrefilledContactService] = useState(null);

  // Initialize smooth scrolling with Lenis (respects prefers-reduced-motion)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    } catch (e) {
      console.warn("Lenis smooth scroll initialized with native fallback");
    }
  }, []);

  const handleOpenQuote = (serviceName = null) => {
    if (typeof serviceName === 'string') {
      setPrefilledContactService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-charcoal-950 text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300 font-body selection:bg-amberGold-500 selection:text-charcoal-950">
      {/* Sticky Navbar with Language Toggle (EN/Tamil) & Dark Mode */}
      <Navbar onNavigate={(id) => handleOpenQuote(id)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero 3D Scene */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. Animated Metrics Counters */}
        <AnimatedCounters />

        {/* 3. 5 Core Services with 3D Tilt Cards */}
        <ServicesOverview
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* 4. 3D Scroll Storytelling: 5 Construction Lifecycle Stages */}
        <ScrollStorySection />

        {/* 5. 3D Cylinder Project Gallery & Filterable Grid */}
        <FeaturedProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 7. 6-Stage Turnkey Process Timeline */}
        <ProcessTimeline />

        {/* 8. Construction Cost Estimator for Tamil Nadu */}
        <CostEstimatorSection
          onBookConsultation={() => handleOpenQuote("Turnkey Construction")}
        />

        {/* 9. Why Choose Us (Pillars & Quality) */}
        <WhyChooseUs />

        {/* 10. Consulting & Municipal Approvals (DTCP & Local Bodies) */}
        <ConsultingSection
          onBookConsultation={() => handleOpenQuote("DTCP & Municipal Approvals Consulting")}
        />

        {/* 11. About Us (Tamil Dravidian Heritage & Leadership) */}
        <AboutSection />

        {/* 13. Final CTA Banner */}
        <CtaBanner onOpenQuote={() => handleOpenQuote()} />

        {/* 14. Contact Form (React Hook Form + Zod, Maps, WhatsApp) */}
        <ContactSection prefilledService={prefilledContactService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons: WhatsApp, Call, Back to Top & Reading Progress Bar */}
      <FloatingActions />

      {/* Fullscreen Project Lightbox */}
      {selectedProject && (
        <LightboxModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={(proj) => {
            setSelectedProject(null);
            handleOpenQuote(`Custom project similar to ${proj.title}`);
          }}
        />
      )}

      {/* Detailed Service Deliverables Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onEnquire={(srv) => {
            setSelectedService(null);
            handleOpenQuote(srv.title);
          }}
        />
      )}
    </div>
  );
}
