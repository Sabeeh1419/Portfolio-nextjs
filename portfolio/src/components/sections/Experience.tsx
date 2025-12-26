// src/components/sections/Experience.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Typography } from '@/components/ui/Typography';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  current?: boolean;
}

export function Experience() {
  const t = useTranslations('experience');

  const experiences: ExperienceItem[] = [
    {
      period: t('job1Period'),
      role: t('job1Role'),
      company: t('job1Company'),
      description: t('job1Description'),
      current: true,
    },
    {
      period: t('job2Period'),
      role: t('job2Role'),
      company: t('job2Company'),
      description: t('job2Description'),
    },
    // Add more experiences as needed
  ];

  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-white mb-4">
              {t('title')}
            </Typography>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Left Side - Illustration (Desktop only) */}
                  <div className={`hidden lg:flex justify-center ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative group">
                      {/* Animated Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
                      
                      {/* Illustration Container */}
                      <div className="relative w-80 h-80 flex items-center justify-center">
                        {/* 3D Isometric Laptop Illustration */}
                        <div className="relative transform hover:scale-105 transition-transform duration-500">
                          {/* Coffee Cup */}
                          <div className="absolute -left-16 top-8 w-16 h-20 bg-gradient-to-b from-purple-400 to-purple-600 rounded-t-lg rounded-b-md shadow-2xl transform rotate-12 hover:rotate-6 transition-transform">
                            <div className="absolute top-1 left-1 right-1 h-2 bg-purple-300 rounded-t-lg opacity-50"></div>
                            <div className="absolute -right-6 top-6 w-8 h-10 border-4 border-purple-400 rounded-full"></div>
                          </div>

                          {/* Laptop Base */}
                          <div className="relative w-72 h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg shadow-2xl transform perspective-1000 rotate-x-60">
                            {/* Laptop Screen */}
                            <div className="absolute -top-36 left-4 right-4 h-40 bg-gradient-to-br from-slate-800 to-slate-950 rounded-t-lg border-4 border-slate-700 shadow-2xl overflow-hidden">
                              {/* Screen Content */}
                              <div className="absolute inset-2 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded flex flex-col p-3">
                                {/* Code Lines */}
                                <div className="space-y-1.5">
                                  <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                  </div>
                                  <div className="h-1.5 w-20 bg-blue-400 rounded animate-pulse"></div>
                                  <div className="h-1.5 w-32 bg-purple-400 rounded animate-pulse delay-100"></div>
                                  <div className="h-1.5 w-16 bg-pink-400 rounded animate-pulse delay-200"></div>
                                  <div className="h-1.5 w-28 bg-blue-400 rounded animate-pulse delay-300"></div>
                                </div>
                              </div>
                              {/* Screen Reflection */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                            </div>

                            {/* Keyboard */}
                            <div className="absolute inset-4 top-2 grid grid-cols-12 gap-0.5 opacity-50">
                              {[...Array(48)].map((_, i) => (
                                <div key={i} className="h-2 bg-slate-600 rounded-sm"></div>
                              ))}
                            </div>

                            {/* Touchpad */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-16 border-2 border-slate-600 rounded-lg"></div>
                          </div>

                          {/* Mouse */}
                          <div className="absolute -right-12 bottom-8 w-12 h-16 bg-gradient-to-b from-slate-600 to-slate-800 rounded-t-2xl rounded-b-lg shadow-xl">
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-slate-700"></div>
                          </div>

                          {/* Floating Particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
                            <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-delay opacity-60"></div>
                            <div className="absolute bottom-20 left-20 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content Card */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                          <Briefcase className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
                      
                      {/* Card */}
                      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                        {/* Period Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                          {/* {exp.current && (
                            <span className="ml-2 px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400">
                              {t('current')}
                            </span>
                          )} */}
                        </div>

                        {/* Role */}
                        <Typography variant="h5" className="text-white mb-2">
                          {exp.role}
                        </Typography>

                        {/* Company */}
                        <Typography variant="h6" className="text-purple-400 mb-4">
                          {exp.company}
                        </Typography>

                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </SectionWrapper>
  );
}

export default Experience;