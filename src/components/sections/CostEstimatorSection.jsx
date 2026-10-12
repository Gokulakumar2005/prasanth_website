import React from 'react';
import CostEstimator from '../ui/CostEstimator';

export default function CostEstimatorSection({ onBookConsultation }) {
  return (
    <section id="estimator" className="py-24 bg-gray-50 dark:bg-charcoal-950 transition-colors duration-300 relative bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator onBookConsultation={onBookConsultation} />
      </div>
    </section>
  );
}
