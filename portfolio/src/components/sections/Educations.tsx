// src/components/sections/Education.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Typography } from '@/components/ui/Typography';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  current?: boolean;
}

export function Education() {
  const t = useTranslations('education');

  const educations: EducationItem[] = [
    {
      period: t('edu1Period'),
      degree: t('edu1Degree'),
      institution: t('edu1Institution'),
      current: true,
    },
    {
      period: t('edu2Period'),
      degree: t('edu2Degree'),
      institution: t('edu2Institution'),
    },
    {
      period: t('edu3Period'),
      degree: t('edu3Degree'),
      institution: t('edu3Institution'),
    },
  ];

  return (
    <SectionWrapper id="education" className="bg-slate-900">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-white mb-4">
              {t('title')}
            </Typography>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Illustration */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Illustration Container */}
                <div className="relative w-96 h-96 flex items-center justify-center">
                  {/* 3D Isometric Platform */}
                  <div className="relative transform hover:scale-105 transition-transform duration-500">
                    {/* Base Platform */}
                    <div className="relative w-80 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl shadow-2xl transform perspective-1000 rotate-x-15">
                      {/* Platform Depth */}
                      <div className="absolute inset-0 bg-gradient-to-b from-pink-600 to-pink-800 rounded-3xl transform translate-y-2"></div>
                      
                      {/* Platform Top Shine */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-transparent rounded-3xl"></div>
                    </div>

                    {/* Laptop on Platform */}
                    <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
                      {/* Laptop Screen */}
                      <div className="relative w-48 h-32 bg-gradient-to-br from-slate-800 to-slate-950 rounded-t-lg border-4 border-slate-700 shadow-2xl overflow-hidden">
                        {/* Screen Content - Dashboard */}
                        <div className="absolute inset-2 bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded flex flex-col p-2 gap-2">
                          {/* Profile Icon */}
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="h-1 w-16 bg-blue-400 rounded"></div>
                              <div className="h-1 w-12 bg-purple-400 rounded"></div>
                            </div>
                          </div>
                          {/* Progress Bars */}
                          <div className="space-y-1">
                            <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
                              <div className="h-full w-4/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded animate-pulse"></div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
                              <div className="h-full w-3/5 bg-gradient-to-r from-purple-400 to-purple-500 rounded animate-pulse delay-100"></div>
                            </div>
                            <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
                              <div className="h-full w-2/3 bg-gradient-to-r from-pink-400 to-pink-500 rounded animate-pulse delay-200"></div>
                            </div>
                          </div>
                        </div>
                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      </div>

                      {/* Laptop Base */}
                      <div className="relative w-52 h-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-b-lg shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/50 to-transparent rounded-b-lg"></div>
                      </div>
                    </div>

                    {/* Floating Icons Around */}
                    {/* Book Icon */}
                    <div className="absolute -left-16 top-4 group">
                      <div className="w-12 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform animate-float">
                        <div className="absolute inset-2 border-l-2 border-purple-300"></div>
                        <div className="absolute top-1 left-1 right-1 h-1 bg-purple-300 rounded"></div>
                      </div>
                    </div>

                    {/* Graduation Cap Icon */}
                    <div className="absolute -right-12 -top-8 group">
                      <div className="relative w-16 h-16 animate-float-delay">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform rotate-45 shadow-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-600"></div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                      </div>
                    </div>

                    {/* Certificate Icon */}
                    <div className="absolute -left-8 -bottom-16 group">
                      <div className="w-14 h-10 bg-gradient-to-br from-pink-500 to-pink-700 rounded shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform animate-float">
                        <div className="absolute inset-2 border border-pink-300 rounded"></div>
                        <div className="absolute bottom-1 right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="text-xs">✓</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Cubes */}
                    <div className="absolute -right-20 bottom-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded transform rotate-45 shadow-xl animate-float"></div>
                    <div className="absolute right-0 -bottom-12 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded transform rotate-12 shadow-xl animate-float-delay"></div>
                    
                    {/* Character/Person on Laptop */}
                    <div className="absolute -top-44 left-1/2 transform -translate-x-1/2 -translate-x-8">
                      {/* Head */}
                      <div className="w-8 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full relative">
                        <div className="absolute top-2 left-2 w-1 h-1 bg-slate-800 rounded-full"></div>
                        <div className="absolute top-2 right-2 w-1 h-1 bg-slate-800 rounded-full"></div>
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-500 rounded-full"></div>
                      </div>
                      {/* Body */}
                      <div className="w-10 h-12 bg-gradient-to-b from-purple-500 to-purple-700 rounded-b-lg -mt-1 mx-auto">
                        <div className="absolute -left-3 top-2 w-6 h-1.5 bg-purple-600 rounded transform -rotate-45"></div>
                        <div className="absolute -right-3 top-2 w-6 h-1.5 bg-purple-600 rounded transform rotate-45"></div>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-12 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
                      <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-delay opacity-60"></div>
                      <div className="absolute bottom-12 left-16 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60"></div>
                      <div className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delay opacity-60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Education Cards */}
            <div className="space-y-6 order-1 lg:order-2">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Period */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm text-emerald-400 font-medium">{edu.period}</span>
                          {edu.current && (
                            <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
                              {t('current')}
                            </span>
                          )}
                        </div>

                        {/* Degree */}
                        <Typography variant="h5" className="text-white mb-2">
                          {edu.degree}
                        </Typography>

                        {/* Institution */}
                        <p className="text-slate-400">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tr-2xl"></div>
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
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
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
      `}</style>
    </SectionWrapper>
  );
}

export default Education;