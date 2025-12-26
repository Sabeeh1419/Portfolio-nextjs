"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';

export function SkillsSection() {
  const t = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    {
      name: 'React',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-12 md:h-12">
          <circle cx="12" cy="12" r="3" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(-60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zm5.5 15.5l-3.5-5v5h-1.5V7.5L15.5 12v-4.5H17v8z"/>
        </svg>
      ),
      color: 'from-gray-200 to-gray-400'
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
          <path d="M13.5 16.5c0 1.5.8 2.5 2.5 2.5 1.2 0 2-.6 2.3-1.5M9 16.5c0 1.5.8 2.5 2.5 2.5 1.2 0 2-.6 2.3-1.5" stroke="#000" strokeWidth="1" fill="none"/>
        </svg>
      ),
      color: 'from-yellow-300 to-yellow-500'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'HTML',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z" fill="#E34F26"/>
          <path d="M12 4.5h6l-.5 6h-5.5v3h4.5l-.3 3.5-4.2 1.5v-3.2l2.8-1 .2-1.8H12v-3h5l.2-2H12V4.5z" fill="white"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'CSS',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z" fill="#1572B6"/>
          <path d="M12 4.5V19l5.8-2 .7-12.5H12z" fill="#33A9DC"/>
        </svg>
      ),
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06B6D4"/>
        </svg>
      ),
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <rect width="24" height="24" rx="3" fill="#7952B3"/>
          <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">B</text>
        </svg>
      ),
      color: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Vite',
      category: 'tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M21 2L12 22 3 2l9 4 9-4z" fill="url(#vite-gradient)"/>
          <defs>
            <linearGradient id="vite-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF"/>
              <stop offset="100%" stopColor="#BD34FE"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: 'from-purple-400 to-blue-400'
    },
    {
      name: 'MySQL',
      category: 'backend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M16.5 9.5c-1.5 0-2.5.5-3 1.5-.5-1-1.5-1.5-3-1.5-2 0-3 1.5-3 3.5v5h2v-5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5v5h2v-5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5v5h2v-5c0-2-1-3.5-3-3.5z" fill="#00758F"/>
          <circle cx="6" cy="8" r="1.5" fill="#F29111"/>
        </svg>
      ),
      color: 'from-blue-600 to-orange-500'
    },
    {
      name: 'MongoDB',
      category: 'backend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M12 3l-1 8 1 10 1-10-1-8z" fill="#4DB33D"/>
          <ellipse cx="12" cy="12" rx="6" ry="10" fill="#3FA037" opacity="0.3"/>
        </svg>
      ),
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'GitHub',
      category: 'tools',
      icon: (
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-12 md:h-12">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      ),
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <circle cx="12" cy="12" r="3" fill="#1ABCFE"/>
          <circle cx="12" cy="6" r="3" fill="#0ACF83"/>
          <circle cx="12" cy="18" r="3" fill="#F24E1E"/>
          <circle cx="6" cy="12" r="3" fill="#FF7262"/>
          <circle cx="18" cy="12" r="3" fill="#A259FF"/>
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Microsoft Office',
      category: 'tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <rect x="4" y="4" width="7" height="7" fill="#D83B01"/>
          <rect x="13" y="4" width="7" height="7" fill="#00A4EF"/>
          <rect x="4" y="13" width="7" height="7" fill="#7FBA00"/>
          <rect x="13" y="13" width="7" height="7" fill="#FFB900"/>
        </svg>
      ),
      color: 'from-orange-500 to-blue-500'
    },
    {
      name: 'OOP',
      category: 'concepts',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
          <rect x="4" y="4" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.8"/>
          <rect x="14" y="4" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.6"/>
          <rect x="4" y="14" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.9"/>
          <rect x="14" y="14" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.7"/>
        </svg>
      ),
      color: 'from-violet-500 to-purple-600'
    },
    {
      name: 'Data Structures',
      category: 'concepts',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="#10B981" strokeWidth="2">
          <circle cx="12" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="12" x2="8" y2="16"/>
          <line x1="12" y1="12" x2="16" y2="16"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Responsive Design',
      category: 'concepts',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="#3B82F6" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="14" rx="2"/>
          <rect x="7" y="8" width="10" height="6" rx="1"/>
          <line x1="9" y1="18" x2="15" y2="18"/>
          <line x1="12" y1="18" x2="12" y2="20"/>
        </svg>
      ),
      color: 'from-blue-400 to-indigo-600'
    }
  ];

  const categories = [
    { id: 'all', name: t('categories.all'), icon: '🚀' },
    { id: 'frontend', name: t('categories.frontend'), icon: '🎨' },
    { id: 'backend', name: t('categories.backend'), icon: '⚙️' },
    { id: 'tools', name: t('categories.tools'), icon: '🛠️' },
    { id: 'concepts', name: t('categories.concepts'), icon: '💡' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Container>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('title')}
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  group relative px-1 py-1 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300
                  ${activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h4 className="relative text-center text-white font-semibold text-sm">
                    {skill.name}
                  </h4>

                  {/* Animated border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: t('stats.technologies'), value: '15+' },
              { label: t('stats.projects'), value: '10+' },
              { label: t('stats.experience'), value: '3+ Months' },
              { label: t('stats.learning'), value: t('stats.learningValue') }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 md:p-6 text-center hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${1 + index * 0.1}s both`
                }}
              >
                <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SectionWrapper>
  );
}

export default SkillsSection;