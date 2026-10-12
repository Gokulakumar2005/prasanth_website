import React, { useState } from 'react';
import { MapPin, Maximize2, Calendar, ArrowRight, Layers } from 'lucide-react';
import { projectsData, projectCategories } from '../../data/projects';

export default function FeaturedProjectsSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-charcoal-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amberGold-500/10 border border-amberGold-500/30 text-amberGold-500 text-xs font-semibold uppercase tracking-wider">
              Craftsmanship In Action
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 dark:text-white tracking-tight">
              Featured Architectural Portfolio
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Explore landmark spiritual temples, contemporary commercial developments, and luxury residences built by Thamizha Constructions across Tamil Nadu.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gray-100 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-500 dark:text-gray-400">
            <span>Showing {filteredProjects.length} Projects</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`py-2 px-4 rounded-xl text-xs font-medium whitespace-nowrap border transition-all ${
                activeFilter === cat.id
                  ? 'bg-charcoal-900 text-amberGold-400 dark:bg-amberGold-500 dark:text-charcoal-950 font-bold border-amberGold-500 shadow-sm'
                  : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-amberGold-500/50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Responsive 2D Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-3xl overflow-hidden bg-gray-50 dark:bg-charcoal-950 border border-gray-200 dark:border-gray-800 hover:border-amberGold-500/50 transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* 2D Image Viewport with Hover Zoom */}
                <div className="relative w-full h-64 overflow-hidden bg-charcoal-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-amberGold-500/40 text-amberGold-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-amberGold-500" />
                      {project.location}
                    </span>
                    <span className="font-mono text-amberGold-400 font-semibold">
                      {project.area}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-amberGold-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-900 text-xs font-heading font-bold text-amberGold-500">
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
