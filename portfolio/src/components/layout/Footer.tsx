// src/components/layout/Footer.tsx
'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sabeeh1419',
      icon: Github,
      color: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sabeeh-hassan',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: t('email'),
      href: 'mailto:sabeehhassanfarooqui@gmail.com',
      icon: Mail,
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { label: t('about'), href: '#about' },
    { label: t('experience'), href: '#experience' },
    { label: t('skills'), href: '#skills' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800/50">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('name')}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('tagline')}
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-2.5 text-slate-400 ${social.color} bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('getInTouch')}</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <p className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                <a href="mailto:sabeehhassanfarooqui@gmail.com" className="hover:text-white transition-colors duration-300">
                  {t('gmail')}
                </a>
              </p>
              <p className="leading-relaxed">
                {t('availability')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              {t('copyright', { year: currentYear })}{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
              {t('madeWith')}
            </p>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              aria-label={t('scrollToTop')}
              className="group flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">{t('backToTop')}</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}

export default Footer;