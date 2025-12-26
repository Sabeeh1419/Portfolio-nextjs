// src/components/sections/Hero.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/common/Container';
import { Download, MessageCircle, Mail } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');

  const handleDownloadResume = () => {
    // Add your resume download logic here
    window.open('/documents/resume.pdf', '_blank');
  };

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/923323583096', '_blank');
  };

  const handleContact = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-6 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-2 md:space-y-8 text-center lg:text-left">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm text-blue-300 font-medium">{t('greeting')}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                {t('name')}
              </span>
            </h1>

            {/* Title with typing effect styling */}
            <div className="space-y-1 md:space-y-2">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-blue-400">
                {t('title')}
              </h2>
              <div className="h-1 w-24 md:w-39 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description */}
            <p className="text-1xl md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={handleContact}
                variant="primary"
                size="lg"
                className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                <Mail className="w-1 md:w-5 h-1 md:h-5 md:mr-2" />
                <span>{t('contactButton')}</span>
              </Button>

              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="group border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white hover:bg-blue-500/10 transition-all duration-300"
              >
                <Download className="w-1 md:w-5 h-1 md:h-5 md:mr-2 group-hover:animate-bounce" />
                <span>{t('downloadResume')}</span>
              </Button>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="lg"
                className="group border-slate-600 hover:border-green-500 text-slate-300 hover:text-white hover:bg-green-500/10 transition-all duration-300"
              >
                <MessageCircle className="w-1 md:w-5 h-1 md:h-5 md:mr-2" />
                <span>{t('whatsapp')}</span>
              </Button>
            </div>

            {/* Stats or Social Links */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8 text-sm">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-slate-400">{t('yearsExperience')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-slate-400">{t('projectsCompleted')}</div>
              </div>
              {/* <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-slate-400">{t('happyClients')}</div>
              </div> */}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Image container with border gradient */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-2xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent"></div>
                  <Image
                    src="/images/sabeeh.jpg"
                    alt="Sabeeh Hassan"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2 shadow-xl animate-float">
                <div className="text-xs text-slate-400">{t('specialized')}</div>
                <div className="text-sm font-semibold text-blue-400">{t('skills')}</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg px-4 py-2 shadow-xl animate-float-delay">
                <div className="text-xs text-slate-400">{t('basedIn')}</div>
                <div className="text-sm font-semibold text-purple-400">{t('location')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}

export default Hero;