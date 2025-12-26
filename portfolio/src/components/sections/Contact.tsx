// src/components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/common/Container';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Typography } from '@/components/ui/Typography';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Call your API route to send email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(t('successMessage') || 'Message sent successfully!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setStatusMessage(data.error || t('errorMessage') || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage(t('errorMessage') || 'Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sabeehhassanfarooqui@gmail.com',
      href: 'mailto:sabeehhassanfarooqui@gmail.com',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 308 6169699',
      href: 'tel:+923086169699',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sabeeh1419',
      color: 'hover:text-purple-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sabeeh-farooqui',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-slate-800 to-slate-900 py-12 md:py-16 lg:py-32">
      <Container>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16 lg:mb-20">
            <Typography variant="h2" className="text-white mb-4 lg:mb-6 text-3xl md:text-4xl lg:text-6xl font-bold">
              {t('title')}
            </Typography>
            <div className="h-1 lg:h-1.5 w-20 md:w-24 lg:w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-4 lg:mb-6"></div>
            <Typography variant="body1" className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-4">
              {t('subtitle')}
            </Typography>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Form Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4 lg:mb-5">
                    <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" />
                    <Typography variant="h5" className="text-white text-lg lg:text-xl font-bold">
                      {t('formTitle')}
                    </Typography>
                  </div>

                  <Typography variant="body2" className="text-slate-400 mb-4 lg:mb-6 leading-relaxed text-xs md:text-sm">
                    {t('formDescription')}
                  </Typography>

                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                    {/* Status Message */}
                    {status !== 'idle' && (
                      <div
                        className={`p-3 lg:p-4 rounded-lg flex items-center gap-2 lg:gap-3 ${
                          status === 'success'
                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                            : status === 'error'
                            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                            : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                        }`}
                      >
                        {status === 'success' ? (
                          <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                        ) : status === 'error' ? (
                          <AlertCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                        ) : (
                          <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-current flex-shrink-0"></div>
                        )}
                        <span className="text-xs lg:text-sm font-medium">{statusMessage}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-xs lg:text-sm font-medium text-slate-300 mb-1.5 lg:mb-2">
                        {t('nameLabel')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 lg:px-4 py-2 lg:py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-xs lg:text-sm"
                        placeholder={t('namePlaceholder')}
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-xs lg:text-sm font-medium text-slate-300 mb-1.5 lg:mb-2">
                        {t('emailLabel')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 lg:px-4 py-2 lg:py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-xs lg:text-sm"
                        placeholder={t('emailPlaceholder')}
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block text-xs lg:text-sm font-medium text-slate-300 mb-1.5 lg:mb-2">
                        {t('messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 lg:px-4 py-2 lg:py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none text-xs lg:text-sm"
                        placeholder={t('messagePlaceholder')}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-2.5 lg:py-3 px-4 lg:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-sm lg:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-white"></div>
                          <span className="text-sm lg:text-base">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                          {t('sendButton')}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-4 lg:space-y-6">
                {/* Vertical CONTACT text - Only on large screens */}
                <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
                  <div className="text-slate-700 text-6xl font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                    CONTACT
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 lg:space-y-4">
                  {contactDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <a
                        key={index}
                        href={detail.href}
                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`group flex items-center gap-3 lg:gap-4 p-3 lg:p-5 rounded-lg lg:rounded-xl ${detail.bgColor} border ${detail.borderColor} hover:scale-105 transition-all duration-300`}
                      >
                        <div className={`${detail.color} bg-slate-900/50 p-2 lg:p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-slate-400 mb-0.5 font-medium">{detail.label}</div>
                          <div className={`text-sm lg:text-base ${detail.color} font-semibold truncate`}>{detail.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg lg:rounded-xl p-4 lg:p-6">
                  <Typography variant="h6" className="text-white mb-3 lg:mb-4 text-base lg:text-lg font-bold">
                    {t('socialTitle')}
                  </Typography>
                  <div className="flex gap-2 lg:gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={`group bg-slate-900/50 p-2.5 lg:p-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-slate-400 group-hover:text-current transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-lg lg:rounded-xl p-4 lg:p-6">
                  <Typography variant="h6" className="text-white mb-2 lg:mb-3 text-base lg:text-lg font-bold">
                    {t('availabilityTitle')}
                  </Typography>
                  <div className="flex items-center gap-2 mb-2 lg:mb-3">
                    <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-green-500"></span>
                    </span>
                    <Typography variant="body2" className="text-green-400 font-semibold text-sm lg:text-base">
                      {t('availableStatus')}
                    </Typography>
                  </div>
                  <Typography variant="body2" className="text-slate-400 leading-relaxed text-xs lg:text-sm">
                    {t('availabilityDescription')}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default Contact;