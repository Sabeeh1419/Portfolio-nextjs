// src/components/sections/About.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Typography } from '@/components/ui/Typography';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '+92 332 3583096',
      href: 'tel:+923323583096',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'sabeehhassanfarooqui@gmail.com',
      href: 'mailto:sabeehhassanfarooqui@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Linkedin,
      label: t('linkedin'),
      value: 'linkedin.com/in/sabeeh-farooqui',
      href: 'https://linkedin.com/in/sabeeh-farooqui',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Github,
      label: t('github'),
      value: 'github.com/sabeeh1419',
      href: 'https://github.com/sabeeh1419',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  return (
    <SectionWrapper id="about" className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 lg:py-32">
      <Container>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-28">
            <Typography variant="h2" className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('title')}
            </Typography>
            <div className="h-1.5 w-24 lg:w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Left Column - Profile Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Profile Card */}
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  
                  {/* Card */}
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                    {/* Profile Image */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
                      <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        {/* Placeholder - Replace with your image */}
                        <div className="text-8xl lg:text-9xl">👨‍💻</div>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute bottom-4 right-1/4 transform translate-x-1/2">
                        <div className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <span className="text-sm text-green-400 font-medium">{t('available')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center">
                      <Typography variant="h4" className="text-white mb-3 text-2xl lg:text-3xl font-bold">
                        {t('name')}
                      </Typography>
                      <Typography variant="body2" className="text-blue-400 font-medium text-lg lg:text-xl mb-3">
                        {t('role')}
                      </Typography>
                      <div className="flex items-center justify-center gap-2 mt-3 text-slate-400 text-base">
                        <MapPin className="w-5 h-5" />
                        <span>{t('location')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center justify-center gap-4 p-6 lg:p-8 rounded-2xl ${contact.bgColor} border ${contact.borderColor} hover:scale-105 transition-all duration-300 group/link min-h-[160px] lg:min-h-[180px]`}
                    >
                      <div className={`${contact.color} group-hover/link:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-slate-400 mb-2 font-medium">{contact.label}</div>
                        <div className={`text-sm ${contact.color} font-semibold break-all leading-relaxed`}>
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Introduction */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <Typography variant="h5" className="text-white mb-8 flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  {t('introTitle')}
                </Typography>
                
                <div className="space-y-6 text-slate-300 leading-relaxed text-base lg:text-lg">
                  <p>{t('introPara1')}</p>
                  <p>{t('introPara2')}</p>
                  <p>{t('introPara3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default About;