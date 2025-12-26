// // src/components/sections/About.tsx
// 'use client';

// import { useTranslations } from 'next-intl';
// import { Container } from '@/components/common/Container';
// import { SectionWrapper } from '@/components/common/SectionWrapper';
// import { Typography } from '@/components/ui/Typography';
// import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

// export function About() {
//   const t = useTranslations('about');

//   const contactInfo = [
//     {
//       icon: Phone,
//       label: t('phone'),
//       value: '+92 332 3583096',
//       href: 'tel:+923323583096',
//       color: 'text-green-400',
//       bgColor: 'bg-green-500/10',
//       borderColor: 'border-green-500/20',
//     },
//     {
//       icon: Mail,
//       label: t('email'),
//       value: 'sabeehhassanfarooqui@gmail.com',
//       href: 'mailto:sabeehhassanfarooqui@gmail.com',
//       color: 'text-blue-400',
//       bgColor: 'bg-blue-500/10',
//       borderColor: 'border-blue-500/20',
//     },
//     {
//       icon: Linkedin,
//       label: t('linkedin'),
//       value: 'linkedin.com/in/sabeeh-farooqui',
//       href: 'https://linkedin.com/in/sabeeh-farooqui',
//       color: 'text-blue-400',
//       bgColor: 'bg-blue-500/10',
//       borderColor: 'border-blue-500/20',
//     },
//     {
//       icon: Github,
//       label: t('github'),
//       value: 'github.com/sabeeh1419',
//       href: 'https://github.com/sabeeh1419',
//       color: 'text-purple-400',
//       bgColor: 'bg-purple-500/10',
//       borderColor: 'border-purple-500/20',
//     },
//   ];

//   return (
//     <SectionWrapper id="about" className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 lg:py-32">
//       <Container>
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header */}
//           <div className="text-center mb-20 lg:mb-28">
//             <Typography variant="h2" className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
//               {t('title')}
//             </Typography>
//             <div className="h-1.5 w-24 lg:w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
//             {/* Left Column - Profile Image */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24">
//                 {/* Profile Card */}
//                 <div className="relative group">
//                   {/* Glow effect */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  
//                   {/* Card */}
//                   <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
//                     {/* Profile Image */}
//                     <div className="relative mb-8">
//                       <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
//                       <div className="relative w-56 h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
//                         {/* Placeholder - Replace with your image */}
//                         <div className="text-8xl lg:text-9xl">👨‍💻</div>
//                       </div>
//                       {/* Status Badge */}
//                       <div className="absolute bottom-4 right-1/4 transform translate-x-1/2">
//                         <div className="bg-slate-800 border border-slate-700 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
//                           <span className="relative flex h-3 w-3">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//                           </span>
//                           <span className="text-sm text-green-400 font-medium">{t('available')}</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Name and Title */}
//                     <div className="text-center">
//                       <Typography variant="h4" className="text-white mb-3 text-2xl lg:text-3xl font-bold">
//                         {t('name')}
//                       </Typography>
//                       <Typography variant="body2" className="text-blue-400 font-medium text-lg lg:text-xl mb-3">
//                         {t('role')}
//                       </Typography>
//                       <div className="flex items-center justify-center gap-2 mt-3 text-slate-400 text-base">
//                         <MapPin className="w-5 h-5" />
//                         <span>{t('location')}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Content */}
//             <div className="lg:col-span-2 space-y-10">
//               {/* Contact Info Row */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
//                 {contactInfo.map((contact, index) => {
//                   const Icon = contact.icon;
//                   return (
//                     <a
//                       key={index}
//                       href={contact.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`flex flex-col items-center justify-center gap-4 p-6 lg:p-8 rounded-2xl ${contact.bgColor} border ${contact.borderColor} hover:scale-105 transition-all duration-300 group/link min-h-[160px] lg:min-h-[180px]`}
//                     >
//                       <div className={`${contact.color} group-hover/link:scale-110 transition-transform`}>
//                         <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
//                       </div>
//                       <div className="text-center">
//                         <div className="text-sm text-slate-400 mb-2 font-medium">{contact.label}</div>
//                         <div className={`text-sm ${contact.color} font-semibold break-all leading-relaxed`}>
//                           {contact.value}
//                         </div>
//                       </div>
//                     </a>
//                   );
//                 })}
//               </div>

//               {/* Introduction */}
//               <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
//                 <Typography variant="h5" className="text-white mb-8 flex items-center gap-4 text-2xl lg:text-3xl font-bold">
//                   <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
//                   {t('introTitle')}
//                 </Typography>
                
//                 <div className="space-y-6 text-slate-300 leading-relaxed text-base lg:text-lg">
//                   <p>{t('introPara1')}</p>
//                   <p>{t('introPara2')}</p>
//                   <p>{t('introPara3')}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }

// export default About;

// src/components/sections/About.tsx



// // src/components/sections/Education.tsx
// 'use client';

// import { useTranslations } from 'next-intl';
// import { Container } from '@/components/common/Container';
// import { SectionWrapper } from '@/components/common/SectionWrapper';
// import { Typography } from '@/components/ui/Typography';
// import { GraduationCap } from 'lucide-react';

// interface EducationItem {
//   period: string;
//   degree: string;
//   institution: string;
//   current?: boolean;
// }

// export function Education() {
//   const t = useTranslations('education');

//   const educations: EducationItem[] = [
//     {
//       period: t('edu1Period'),
//       degree: t('edu1Degree'),
//       institution: t('edu1Institution'),
//       current: true,
//     },
//     {
//       period: t('edu2Period'),
//       degree: t('edu2Degree'),
//       institution: t('edu2Institution'),
//     },
//     {
//       period: t('edu3Period'),
//       degree: t('edu3Degree'),
//       institution: t('edu3Institution'),
//     },
//   ];

//   return (
//     <SectionWrapper id="education" className="bg-slate-900">
//       <Container>
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <Typography variant="h2" className="text-white mb-4">
//               {t('title')}
//             </Typography>
//             <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side - Illustration */}
//             <div className="flex justify-center lg:justify-start order-2 lg:order-1">
//               <div className="relative">
//                 {/* Animated Background Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                
//                 {/* Illustration Container */}
//                 <div className="relative w-96 h-96 flex items-center justify-center">
//                   {/* 3D Isometric Platform */}
//                   <div className="relative transform hover:scale-105 transition-transform duration-500">
//                     {/* Base Platform */}
//                     <div className="relative w-80 h-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl shadow-2xl transform perspective-1000 rotate-x-15">
//                       {/* Platform Depth */}
//                       <div className="absolute inset-0 bg-gradient-to-b from-pink-600 to-pink-800 rounded-3xl transform translate-y-2"></div>
                      
//                       {/* Platform Top Shine */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 to-transparent rounded-3xl"></div>
//                     </div>

//                     {/* Laptop on Platform */}
//                     <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
//                       {/* Laptop Screen */}
//                       <div className="relative w-48 h-32 bg-gradient-to-br from-slate-800 to-slate-950 rounded-t-lg border-4 border-slate-700 shadow-2xl overflow-hidden">
//                         {/* Screen Content - Dashboard */}
//                         <div className="absolute inset-2 bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded flex flex-col p-2 gap-2">
//                           {/* Profile Icon */}
//                           <div className="flex items-center gap-2">
//                             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
//                               <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                             <div className="flex-1 space-y-1">
//                               <div className="h-1 w-16 bg-blue-400 rounded"></div>
//                               <div className="h-1 w-12 bg-purple-400 rounded"></div>
//                             </div>
//                           </div>
//                           {/* Progress Bars */}
//                           <div className="space-y-1">
//                             <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
//                               <div className="h-full w-4/5 bg-gradient-to-r from-blue-400 to-blue-500 rounded animate-pulse"></div>
//                             </div>
//                             <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
//                               <div className="h-full w-3/5 bg-gradient-to-r from-purple-400 to-purple-500 rounded animate-pulse delay-100"></div>
//                             </div>
//                             <div className="h-1.5 w-full bg-slate-700 rounded overflow-hidden">
//                               <div className="h-full w-2/3 bg-gradient-to-r from-pink-400 to-pink-500 rounded animate-pulse delay-200"></div>
//                             </div>
//                           </div>
//                         </div>
//                         {/* Screen Reflection */}
//                         <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
//                       </div>

//                       {/* Laptop Base */}
//                       <div className="relative w-52 h-4 bg-gradient-to-br from-slate-700 to-slate-900 rounded-b-lg shadow-xl">
//                         <div className="absolute inset-0 bg-gradient-to-r from-slate-600/50 to-transparent rounded-b-lg"></div>
//                       </div>
//                     </div>

//                     {/* Floating Icons Around */}
//                     {/* Book Icon */}
//                     <div className="absolute -left-16 top-4 group">
//                       <div className="w-12 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-xl transform rotate-12 hover:rotate-6 transition-transform animate-float">
//                         <div className="absolute inset-2 border-l-2 border-purple-300"></div>
//                         <div className="absolute top-1 left-1 right-1 h-1 bg-purple-300 rounded"></div>
//                       </div>
//                     </div>

//                     {/* Graduation Cap Icon */}
//                     <div className="absolute -right-12 -top-8 group">
//                       <div className="relative w-16 h-16 animate-float-delay">
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform rotate-45 shadow-xl"></div>
//                         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full"></div>
//                         <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-600"></div>
//                         <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
//                       </div>
//                     </div>

//                     {/* Certificate Icon */}
//                     <div className="absolute -left-8 -bottom-16 group">
//                       <div className="w-14 h-10 bg-gradient-to-br from-pink-500 to-pink-700 rounded shadow-xl transform -rotate-12 hover:-rotate-6 transition-transform animate-float">
//                         <div className="absolute inset-2 border border-pink-300 rounded"></div>
//                         <div className="absolute bottom-1 right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
//                           <div className="text-xs">✓</div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Floating Cubes */}
//                     <div className="absolute -right-20 bottom-8 w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded transform rotate-45 shadow-xl animate-float"></div>
//                     <div className="absolute right-0 -bottom-12 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded transform rotate-12 shadow-xl animate-float-delay"></div>
                    
//                     {/* Character/Person on Laptop */}
//                     <div className="absolute -top-44 left-1/2 transform -translate-x-1/2 -translate-x-8">
//                       {/* Head */}
//                       <div className="w-8 h-10 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full relative">
//                         <div className="absolute top-2 left-2 w-1 h-1 bg-slate-800 rounded-full"></div>
//                         <div className="absolute top-2 right-2 w-1 h-1 bg-slate-800 rounded-full"></div>
//                         <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-pink-500 rounded-full"></div>
//                       </div>
//                       {/* Body */}
//                       <div className="w-10 h-12 bg-gradient-to-b from-purple-500 to-purple-700 rounded-b-lg -mt-1 mx-auto">
//                         <div className="absolute -left-3 top-2 w-6 h-1.5 bg-purple-600 rounded transform -rotate-45"></div>
//                         <div className="absolute -right-3 top-2 w-6 h-1.5 bg-purple-600 rounded transform rotate-45"></div>
//                       </div>
//                     </div>

//                     {/* Floating Particles */}
//                     <div className="absolute inset-0 pointer-events-none">
//                       <div className="absolute top-0 left-12 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
//                       <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-delay opacity-60"></div>
//                       <div className="absolute bottom-12 left-16 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-60"></div>
//                       <div className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-delay opacity-60"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Education Cards */}
//             <div className="space-y-6 order-1 lg:order-2">
//               {educations.map((edu, index) => (
//                 <div
//                   key={index}
//                   className="relative group"
//                 >
//                   {/* Glow Effect */}
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500"></div>
                  
//                   {/* Card */}
//                   <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
//                     <div className="flex gap-4">
//                       {/* Icon */}
//                       <div className="flex-shrink-0">
//                         <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
//                           <GraduationCap className="w-6 h-6 text-white" />
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1">
//                         {/* Period */}
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className="text-sm text-emerald-400 font-medium">{edu.period}</span>
//                           {/* {edu.current && (
//                             <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs text-emerald-400">
//                               {t('current')}
//                             </span>
//                           )} */}
//                         </div>

//                         {/* Degree */}
//                         <Typography variant="h5" className="text-white mb-2">
//                           {edu.degree}
//                         </Typography>

//                         {/* Institution */}
//                         <p className="text-slate-400">
//                           {edu.institution}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Decorative Corner */}
//                     <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-tr-2xl"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Container>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(12deg); }
//           50% { transform: translateY(-10px) rotate(12deg); }
//         }
//         @keyframes float-delay {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-float-delay {
//           animation: float-delay 4s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//       `}</style>
//     </SectionWrapper>
//   );
// }
// export default Education;

// src/components/sections/Education.tsx





// // src/components/sections/Contact.tsx
// 'use client';

// import { useState } from 'react';
// import { useTranslations } from 'next-intl';
// import { Container } from '@/components/common/Container';
// import { SectionWrapper } from '@/components/common/SectionWrapper';
// import { Typography } from '@/components/ui/Typography';
// import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

// export function Contact() {
//   const t = useTranslations('contact');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
//   const [statusMessage, setStatusMessage] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');

//     try {
//       // Call your API route to send email
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus('success');
//         setStatusMessage(t('successMessage') || 'Message sent successfully!');
//         // Reset form
//         setFormData({ name: '', email: '', message: '' });
        
//         // Reset status after 5 seconds
//         setTimeout(() => {
//           setStatus('idle');
//           setStatusMessage('');
//         }, 5000);
//       } else {
//         setStatus('error');
//         setStatusMessage(data.error || t('errorMessage') || 'Failed to send message. Please try again.');
//       }
//     } catch (error) {
//       setStatus('error');
//       setStatusMessage(t('errorMessage') || 'Failed to send message. Please try again.');
//       console.error('Error sending message:', error);
//     }
//   };

//   const contactDetails = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'sabeehhassanfarooqui@gmail.com',
//       href: 'mailto:sabeehhassanfarooqui@gmail.com',
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
//       href: 'https://github.com/sabeeh1419',
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

//           <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
//             {/* Left Column - Contact Form */}
//             <div className="order-2 lg:order-1">
//               <div className="relative group">
//                 {/* Glow effect */}
//                 <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
                
//                 {/* Form Card */}
//                 <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl">
//                   <div className="flex items-center gap-2 mb-5">
//                     <MessageSquare className="w-6 h-6 text-purple-400" />
//                     <Typography variant="h5" className="text-white text-xl font-bold">
//                       {t('formTitle')}
//                     </Typography>
//                   </div>

//                   <Typography variant="body2" className="text-slate-400 mb-6 leading-relaxed text-sm">
//                     {t('formDescription')}
//                   </Typography>

//                   <form onSubmit={handleSubmit} className="space-y-5">
//                     {/* Status Message */}
//                     {status !== 'idle' && (
//                       <div
//                         className={`p-4 rounded-lg flex items-center gap-3 ${
//                           status === 'success'
//                             ? 'bg-green-500/10 border border-green-500/20 text-green-400'
//                             : status === 'error'
//                             ? 'bg-red-500/10 border border-red-500/20 text-red-400'
//                             : 'bg-blue-500/10 border border-blue-500/20 text-blue-400'
//                         }`}
//                       >
//                         {status === 'success' ? (
//                           <CheckCircle className="w-5 h-5" />
//                         ) : status === 'error' ? (
//                           <AlertCircle className="w-5 h-5" />
//                         ) : (
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
//                         )}
//                         <span className="text-sm font-medium">{statusMessage}</span>
//                       </div>
//                     )}

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
//                         className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
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
//                         className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
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
//                         rows={5}
//                         className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none text-sm"
//                         placeholder={t('messagePlaceholder')}
//                         required
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                       type="submit"
//                       disabled={status === 'loading'}
//                       className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                     >
//                       {status === 'loading' ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5" />
//                           {t('sendButton')}
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Info */}
//             <div className="order-1 lg:order-2">
//               <div className="lg:sticky lg:top-24 space-y-6">
//                 {/* Vertical CONTACT text */}
//                 <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
//                   <div className="text-slate-700 text-6xl font-bold tracking-wider" style={{ writingMode: 'vertical-rl' }}>
//                     CONTACT
//                   </div>
//                 </div>

//                 {/* Contact Details */}
//                 <div className="space-y-4">
//                   {contactDetails.map((detail, index) => {
//                     const Icon = detail.icon;
//                     return (
//                       <a
//                         key={index}
//                         href={detail.href}
//                         target={detail.href.startsWith('http') ? '_blank' : undefined}
//                         rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                         className={`group flex items-center gap-4 p-5 rounded-xl ${detail.bgColor} border ${detail.borderColor} hover:scale-105 transition-all duration-300`}
//                       >
//                         <div className={`${detail.color} bg-slate-900/50 p-3 rounded-lg group-hover:scale-110 transition-transform`}>
//                           <Icon className="w-6 h-6" />
//                         </div>
//                         <div className="flex-1">
//                           <div className="text-xs text-slate-400 mb-0.5 font-medium">{detail.label}</div>
//                           <div className={`text-base ${detail.color} font-semibold`}>{detail.value}</div>
//                         </div>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 {/* Social Links */}
//                 <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
//                   <Typography variant="h6" className="text-white mb-4 text-lg font-bold">
//                     {t('socialTitle')}
//                   </Typography>
//                   <div className="flex gap-3">
//                     {socialLinks.map((social, index) => {
//                       const Icon = social.icon;
//                       return (
//                         <a
//                           key={index}
//                           href={social.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           aria-label={social.label}
//                           className={`group bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 ${social.color}`}
//                         >
//                           <Icon className="w-6 h-6 text-slate-400 group-hover:text-current transition-colors" />
//                         </a>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Additional Info */}
//                 <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
//                   <Typography variant="h6" className="text-white mb-3 text-lg font-bold">
//                     {t('availabilityTitle')}
//                   </Typography>
//                   <div className="flex items-center gap-2 mb-3">
//                     <span className="relative flex h-3 w-3">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//                     </span>
//                     <Typography variant="body2" className="text-green-400 font-semibold text-base">
//                       {t('availableStatus')}
//                     </Typography>
//                   </div>
//                   <Typography variant="body2" className="text-slate-400 leading-relaxed text-sm">
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

// export default Contact;