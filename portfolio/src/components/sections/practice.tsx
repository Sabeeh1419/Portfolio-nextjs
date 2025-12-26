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



// "use client";
// import React, { useState } from 'react';
// import { useTranslations } from 'next-intl';

// export function SkillsSection() {
//   const t = useTranslations('skills');
//   const [activeCategory, setActiveCategory] = useState('all');

//   const skills = [
//     {
//       name: 'React',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-12 md:h-12">
//           <circle cx="12" cy="12" r="3" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
//           <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/>
//           <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(-60 12 12)"/>
//           <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
//         </svg>
//       ),
//       color: 'from-cyan-400 to-blue-500'
//     },
//     {
//       name: 'Next.js',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M11.5 0C5.15 0 0 5.15 0 11.5S5.15 23 11.5 23 23 17.85 23 11.5 17.85 0 11.5 0zm5.5 15.5l-3.5-5v5h-1.5V7.5L15.5 12v-4.5H17v8z"/>
//         </svg>
//       ),
//       color: 'from-gray-200 to-gray-400'
//     },
//     {
//       name: 'JavaScript',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
//           <path d="M13.5 16.5c0 1.5.8 2.5 2.5 2.5 1.2 0 2-.6 2.3-1.5M9 16.5c0 1.5.8 2.5 2.5 2.5 1.2 0 2-.6 2.3-1.5" stroke="#000" strokeWidth="1" fill="none"/>
//         </svg>
//       ),
//       color: 'from-yellow-300 to-yellow-500'
//     },
//     {
//       name: 'TypeScript',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <rect width="24" height="24" rx="3" fill="#3178C6"/>
//           <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TS</text>
//         </svg>
//       ),
//       color: 'from-blue-500 to-blue-700'
//     },
//     {
//       name: 'HTML',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z" fill="#E34F26"/>
//           <path d="M12 4.5h6l-.5 6h-5.5v3h4.5l-.3 3.5-4.2 1.5v-3.2l2.8-1 .2-1.8H12v-3h5l.2-2H12V4.5z" fill="white"/>
//         </svg>
//       ),
//       color: 'from-orange-500 to-red-500'
//     },
//     {
//       name: 'CSS',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z" fill="#1572B6"/>
//           <path d="M12 4.5V19l5.8-2 .7-12.5H12z" fill="#33A9DC"/>
//         </svg>
//       ),
//       color: 'from-blue-400 to-blue-600'
//     },
//     {
//       name: 'Tailwind CSS',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06B6D4"/>
//         </svg>
//       ),
//       color: 'from-cyan-400 to-cyan-600'
//     },
//     {
//       name: 'Bootstrap',
//       category: 'frontend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <rect width="24" height="24" rx="3" fill="#7952B3"/>
//           <text x="12" y="17" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">B</text>
//         </svg>
//       ),
//       color: 'from-purple-500 to-purple-700'
//     },
//     {
//       name: 'Vite',
//       category: 'tools',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M21 2L12 22 3 2l9 4 9-4z" fill="url(#vite-gradient)"/>
//           <defs>
//             <linearGradient id="vite-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#41D1FF"/>
//               <stop offset="100%" stopColor="#BD34FE"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       ),
//       color: 'from-purple-400 to-blue-400'
//     },
//     {
//       name: 'MySQL',
//       category: 'backend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M16.5 9.5c-1.5 0-2.5.5-3 1.5-.5-1-1.5-1.5-3-1.5-2 0-3 1.5-3 3.5v5h2v-5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5v5h2v-5c0-1 .5-1.5 1.5-1.5s1.5.5 1.5 1.5v5h2v-5c0-2-1-3.5-3-3.5z" fill="#00758F"/>
//           <circle cx="6" cy="8" r="1.5" fill="#F29111"/>
//         </svg>
//       ),
//       color: 'from-blue-600 to-orange-500'
//     },
//     {
//       name: 'MongoDB',
//       category: 'backend',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M12 3l-1 8 1 10 1-10-1-8z" fill="#4DB33D"/>
//           <ellipse cx="12" cy="12" rx="6" ry="10" fill="#3FA037" opacity="0.3"/>
//         </svg>
//       ),
//       color: 'from-green-500 to-green-700'
//     },
//     {
//       name: 'GitHub',
//       category: 'tools',
//       icon: (
//         <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-12 md:h-12">
//           <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
//         </svg>
//       ),
//       color: 'from-gray-600 to-gray-800'
//     },
//     {
//       name: 'Figma',
//       category: 'tools',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <circle cx="12" cy="12" r="3" fill="#1ABCFE"/>
//           <circle cx="12" cy="6" r="3" fill="#0ACF83"/>
//           <circle cx="12" cy="18" r="3" fill="#F24E1E"/>
//           <circle cx="6" cy="12" r="3" fill="#FF7262"/>
//           <circle cx="18" cy="12" r="3" fill="#A259FF"/>
//         </svg>
//       ),
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       name: 'Microsoft Office',
//       category: 'tools',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <rect x="4" y="4" width="7" height="7" fill="#D83B01"/>
//           <rect x="13" y="4" width="7" height="7" fill="#00A4EF"/>
//           <rect x="4" y="13" width="7" height="7" fill="#7FBA00"/>
//           <rect x="13" y="13" width="7" height="7" fill="#FFB900"/>
//         </svg>
//       ),
//       color: 'from-orange-500 to-blue-500'
//     },
//     {
//       name: 'OOP',
//       category: 'concepts',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12">
//           <rect x="4" y="4" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.8"/>
//           <rect x="14" y="4" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.6"/>
//           <rect x="4" y="14" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.9"/>
//           <rect x="14" y="14" width="6" height="6" rx="1" fill="#8B5CF6" opacity="0.7"/>
//         </svg>
//       ),
//       color: 'from-violet-500 to-purple-600'
//     },
//     {
//       name: 'Data Structures',
//       category: 'concepts',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="#10B981" strokeWidth="2">
//           <circle cx="12" cy="6" r="2"/>
//           <circle cx="6" cy="18" r="2"/>
//           <circle cx="18" cy="18" r="2"/>
//           <line x1="12" y1="8" x2="12" y2="12"/>
//           <line x1="12" y1="12" x2="8" y2="16"/>
//           <line x1="12" y1="12" x2="16" y2="16"/>
//         </svg>
//       ),
//       color: 'from-green-500 to-emerald-600'
//     },
//     {
//       name: 'Responsive Design',
//       category: 'concepts',
//       icon: (
//         <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="#3B82F6" strokeWidth="1.5">
//           <rect x="3" y="4" width="18" height="14" rx="2"/>
//           <rect x="7" y="8" width="10" height="6" rx="1"/>
//           <line x1="9" y1="18" x2="15" y2="18"/>
//           <line x1="12" y1="18" x2="12" y2="20"/>
//         </svg>
//       ),
//       color: 'from-blue-400 to-indigo-600'
//     }
//   ];

//   const categories = [
//     { id: 'all', name: t('categories.all'), icon: '🚀' },
//     { id: 'frontend', name: t('categories.frontend'), icon: '🎨' },
//     { id: 'backend', name: t('categories.backend'), icon: '⚙️' },
//     { id: 'tools', name: t('categories.tools'), icon: '🛠️' },
//     { id: 'concepts', name: t('categories.concepts'), icon: '💡' }
//   ];

//   const filteredSkills = activeCategory === 'all' 
//     ? skills 
//     : skills.filter(skill => skill.category === activeCategory);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             {t('title')}
//           </h2>
//           <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
//           <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
//             {t('subtitle')}
//           </p>
//         </div>
//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`
//                 group relative px-1 py-1 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300
//                 ${activeCategory === category.id
//                   ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
//                   : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/50'
//                 }
//               `}
//             >
//               <span className="flex items-center gap-2">
//                 <span>{category.icon}</span>
//                 <span>{category.name}</span>
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {filteredSkills.map((skill, index) => (
//             <div
//               key={skill.name}
//               className="group relative "
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
//               }}
//             >
//               <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2">
//                 {/* Gradient overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
//                 {/* Icon */}
//                 <div className="relative flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                   {skill.icon}
//                 </div>
                
//                 {/* Skill Name */}
//                 <h4 className="relative text-center text-white font-semibold text-sm">
//                   {skill.name}
//                 </h4>

//                 {/* Animated border */}
//                 <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             { label: t('stats.technologies'), value: '17+' },
//             { label: t('stats.projects'), value: '20+' },
//             { label: t('stats.experience'), value: '2+ Years' },
//             { label: t('stats.learning'), value: t('stats.learningValue') }
//           ].map((stat, index) => (
//             <div
//               key={stat.label}
//               className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 md:p-6 text-center hover:border-slate-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
//               style={{
//                 animation: `fadeInUp 0.6s ease-out ${1 + index * 0.1}s both`
//               }}
//             >
//               <div className="text-xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default SkillsSection;