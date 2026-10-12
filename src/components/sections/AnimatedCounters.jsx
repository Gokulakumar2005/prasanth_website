import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '../../data/siteConfig';

function CounterItem({ stat, isVisible, className = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = stat.value;
    const duration = 1800; // ms
    const incrementTime = 25;
    const step = (end / (duration / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:border-amberGold-500/40 transition-colors group ${className}`}>
      <div className="flex items-baseline gap-0.5">
        <span className="text-4xl sm:text-5xl font-heading font-extrabold text-gray-900 dark:text-white group-hover:text-amberGold-500 transition-colors">
          {count}
        </span>
        <span className="text-2xl sm:text-3xl font-heading font-bold text-amberGold-500">
          {stat.suffix}
        </span>
      </div>
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300 mt-2 text-center">
        {stat.label}
      </span>
    </div>
  );
}

export default function AnimatedCounters() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-12 bg-gray-100 dark:bg-charcoal-950 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              stat={stat}
              isVisible={isVisible}
              className={idx === 4 ? "col-span-2 md:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
