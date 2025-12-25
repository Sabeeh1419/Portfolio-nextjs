// // src/components/sections/Contact.tsx
// 'use client';

// import { useState } from 'react';
// import { useTranslations } from 'next-intl';
// import { Container } from '@/components/common/Container';
// import { SectionWrapper } from '@/components/common/SectionWrapper';
// import { Typography } from '@/components/ui/Typography';
// import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

// export function Contact() {
//   const t = useTranslations('contact');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const contactDetails = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'sabeehfarooqui@gmail.com',
//       href: 'mailto:sabeehfarooqui@gmail.com',
//       color: 'text-blue-400',
//       bgColor: 'bg-blue-500/10',
//       borderColor: 'border-blue-500/20',
//     },
//     {
//       icon: Phone,
//       label: 'Phone',
//       value: '+92 308 6169699',
//       href: 'tel:+923086169699',
//       color: 'text-green-400',
//       bgColor: 'bg-green-500/10',
//       borderColor: 'border-green-500/20',
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Karachi, Pakistan',
//       href: '#',
//       color: 'text-purple-400',
//       bgColor: 'bg-purple-500/10',
//       borderColor: 'border-purple-500/20',
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       label: 'GitHub',
//       href: 'https://github.com/sabeehfarooqui',
//       color: 'hover:text-purple-400',
//     },
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: 'https://linkedin.com/in/sabeeh-farooqui',
//       color: 'hover:text-blue-400',
//     },
//   ];

//   return (
//     <SectionWrapper id="contact" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 lg:py-32">
//       <Container>
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-20">
//             <Typography variant="h2" className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
//               {t('title')}
//             </Typography>
//             <div className="h-1.5 w-24 lg:w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
//             <Typography variant="body1" className="text-slate-400 max-w-2xl mx-auto text-lg">
//               {t('subtitle')}
//             </Typography>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//             {/* Left Column - Contact Form */}
//             <div className="order-2 lg:order-1">
//               <div className="relative group">
//                 {/* Glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
//                 {/* Form Card */}
//                 <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
//                   <div className="flex items-center gap-3 mb-6">
//                     <MessageSquare className="w-7 h-7 text-purple-400" />
//                     <Typography variant="h5" className="text-white text-2xl font-bold">
//                       {t('formTitle')}
//                     </Typography>
//                   </div>

//                   <Typography variant="body2" className="text-slate-400 mb-8 leading-relaxed">
//                     {t('formDescription')}
//                   </Typography>

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Name Input */}
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
//                         {t('nameLabel')}
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
//                         placeholder={t('namePlaceholder')}
//                         required
//                       />
//                     </div>

//                     {/* Email Input */}
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
//                         {t('emailLabel')}
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
//                         placeholder={t('emailPlaceholder')}
//                         required
//                       />
//                     </div>

//                     {/* Message Input */}
//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
//                         {t('messageLabel')}
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={6}
//                         className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
//                         placeholder={t('messagePlaceholder')}
//                         required
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-lg"
//                     >
//                       <Send className="w-5 h-5" />
//                       {t('sendButton')}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Info */}
//             <div className="order-1 lg:order-2">
//               <div className="lg:sticky lg:top-24 space-y-8">
//                 {/* Vertical CONTACT text */}
//                 <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
//                   <div className="text-slate-700 text-7xl font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
//                     CONTACT
//                   </div>
//                 </div>

//                 {/* Contact Details */}
//                 <div className="space-y-6">
//                   {contactDetails.map((detail, index) => {
//                     const Icon = detail.icon;
//                     return (
//                       <a
//                         key={index}
//                         href={detail.href}
//                         target={detail.href.startsWith('http') ? '_blank' : undefined}
//                         rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                         className={`group flex items-center gap-5 p-6 rounded-2xl ${detail.bgColor} border ${detail.borderColor} hover:scale-105 transition-all duration-300`}
//                       >
//                         <div className={`${detail.color} bg-slate-900/50 p-4 rounded-xl group-hover:scale-110 transition-transform`}>
//                           <Icon className="w-7 h-7" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-sm text-slate-400 mb-1 font-medium">{detail.label}</div>
//                           <div className={`text-lg ${detail.color} font-semibold`}>{detail.value}</div>
//                         </div>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 {/* Social Links */}
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
//                   <Typography variant="h6" className="text-white mb-6 text-xl font-bold">
//                     {t('socialTitle')}
//                   </Typography>
//                   <div className="flex gap-4">
//                     {socialLinks.map((social, index) => {
//                       const Icon = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label={social.label}
//                           className={`group bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 ${social.color}`}
//                         >
//                           <Icon className="w-7 h-7 text-slate-400 group-hover:text-current transition-colors" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
//                   <Typography variant="h6" className="text-white mb-4 text-xl font-bold">
//                     {t('availabilityTitle')}
//                   </Typography>
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="relative flex h-4 w-4">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
//                     </span>
//                     <Typography variant="body2" className="text-green-400 font-semibold text-lg">
//                       {t('availableStatus')}
//                     </Typography>
//                   </div>
//                   <Typography variant="body2" className="text-slate-400 leading-relaxed">
//                     {t('availabilityDescription')}
//                   </Typography>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

// export default Contact
// src/components/sections/Contact.tsx
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
    <SectionWrapper id="contact" className="bg-gradient-to-b from-slate-800 to-slate-900 py-20 lg:py-32">
      <Container>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <Typography variant="h2" className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('title')}
            </Typography>
            <div className="h-1.5 w-24 lg:w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            <Typography variant="body1" className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t('subtitle')}
            </Typography>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
                {/* Form Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-5">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                    <Typography variant="h5" className="text-white text-xl font-bold">
                      {t('formTitle')}
                    </Typography>
                  </div>

                  <Typography variant="body2" className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {t('formDescription')}
                  </Typography>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Status Message */}
                    {status !== 'idle' && (
                      <div
                        className={`p-4 rounded-lg flex items-center gap-3 ${
                          status === 'success'
                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                            : status === 'error'
                            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
                            : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
                        }`}
                      >
                        {status === 'success' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : status === 'error' ? (
                          <AlertCircle className="w-5 h-5" />
                        ) : (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                        )}
                        <span className="text-sm font-medium">{statusMessage}</span>
                      </div>
                    )}

                    {/* Name Input */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        {t('nameLabel')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
                        placeholder={t('namePlaceholder')}
                        required
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        {t('emailLabel')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
                        placeholder={t('emailPlaceholder')}
                        required
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                        {t('messageLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none text-sm"
                        placeholder={t('messagePlaceholder')}
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
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
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Vertical CONTACT text */}
                <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
                  <div className="text-slate-700 text-6xl font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
                    CONTACT
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <a
                        key={index}
                        href={detail.href}
                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                        rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`group flex items-center gap-4 p-5 rounded-xl ${detail.bgColor} border ${detail.borderColor} hover:scale-105 transition-all duration-300`}
                      >
                        <div className={`${detail.color} bg-slate-900/50 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-slate-400 mb-0.5 font-medium">{detail.label}</div>
                          <div className={`text-base ${detail.color} font-semibold`}>{detail.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                  <Typography variant="h6" className="text-white mb-4 text-lg font-bold">
                    {t('socialTitle')}
                  </Typography>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={`group bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <Icon className="w-6 h-6 text-slate-400 group-hover:text-current transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                  <Typography variant="h6" className="text-white mb-3 text-lg font-bold">
                    {t('availabilityTitle')}
                  </Typography>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <Typography variant="body2" className="text-green-400 font-semibold text-base">
                      {t('availableStatus')}
                    </Typography>
                  </div>
                  <Typography variant="body2" className="text-slate-400 leading-relaxed text-sm">
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