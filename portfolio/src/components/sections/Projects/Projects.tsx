// src/components/sections/Projects/Projects.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Typography } from '@/components/ui/Typography';
import { ProjectCard } from './ProjectCard';
import { projectsData, projectCategories } from './projects.data';

export function Projects() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => 
        project.tags.includes(activeFilter)
      );

  return (
    <SectionWrapper id="projects" className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">

      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Typography variant="h2" className="text-white mb-4">
              {t('title')}
            </Typography>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                {t('noProjects')}
              </p>
            </div>
          )}

          {/* View More Button (Optional) */}
          {filteredProjects.length > 0 && (
            <div className="text-center mt-12">
              <a
                href="https://github.com/sabeeh1419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 text-white rounded-lg transition-all duration-300 hover:scale-105"
              >
                <span>{t('viewMore')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default Projects;