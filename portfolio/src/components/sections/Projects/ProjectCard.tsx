'use client';

import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import type { Project } from './projects.data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects');

  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
      
      {/* Card */}
      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
          {/* Placeholder - Replace with actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30">💻</div>
          </div>

             <Image
            src={project.image}
            alt={t(project.titleKey)}
            fill
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/90 hover:bg-slate-700 rounded-full transition-colors duration-300 transform hover:scale-110"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/90 hover:bg-blue-500 rounded-full transition-colors duration-300 transform hover:scale-110"
                aria-label="View Demo"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
              {t('featured')}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {t(project.titleKey)}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {t(project.descriptionKey)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 hover:bg-slate-600/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>{t('github')}</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('demo')}</span>
              </a>
            )}
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl"></div>
      </div>
    </div>
  );
}














// // src/components/sections/Projects/ProjectCard.tsx
// 'use client';

// import { ExternalLink, Github } from 'lucide-react';
// import type { Project } from './projects.data';
// import Image from 'next/image';

// interface ProjectCardProps {
//   project: Project;
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <div className="group relative">
//       {/* Glow Effect */}
//       <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>
      
//       {/* Card */}
//       <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
//         {/* Image Container */}
//         <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
//           {/* Placeholder - Replace with actual image */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-6xl opacity-30">💻</div>
//           </div>
          
//           <Image
//             src={project.image}
//             alt={project.title}
//             fill
//             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//           />
         
          
//           {/* Overlay on Hover */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-slate-800/90 hover:bg-slate-700 rounded-full transition-colors duration-300 transform hover:scale-110"
//                 aria-label="View on GitHub"
//               >
//                 <Github className="w-5 h-5 text-white" />
//               </a>
//             )}
//             {project.demoUrl && (
//               <a
//                 href={project.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-blue-600/90 hover:bg-blue-500 rounded-full transition-colors duration-300 transform hover:scale-110"
//                 aria-label="View Demo"
//               >
//                 <ExternalLink className="w-5 h-5 text-white" />
//               </a>
//             )}
//           </div>

//           {/* Featured Badge */}
//           {project.featured && (
//             <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
//               Featured
//             </div>
//           )}
//         </div>

//         {/* Content */}
//         <div className="p-6 space-y-4">
//           {/* Title */}
//           <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
//             {project.title}
//           </h3>

//           {/* Description */}
//           <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
//             {project.description}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-slate-300 hover:bg-slate-600/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Links */}
//           <div className="flex items-center gap-4 pt-2">
//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 text-sm"
//               >
//                 <Github className="w-4 h-4" />
//                 <span>GitHub</span>
//               </a>
//             )}
//             {project.demoUrl && (
//               <a
//                 href={project.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 <span>Demo</span>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Decorative Corner */}
//         <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl"></div>
//       </div>
//     </div>
//   );
// }

// src/components/sections/Projects/ProjectCard.tsx