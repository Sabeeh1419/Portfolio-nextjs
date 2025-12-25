// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   githubUrl?: string;
//   demoUrl?: string;
//   featured?: boolean;
// }

// export const projectsData: Project[] = [
//   {
//     id: 'testify',
//     title: 'Testify – AI-Powered Quiz Application',
//     description: 'Developed Testify, an AI-powered quiz web application using React, Node.js, and MySQL. Implemented automated quiz generation and secure file upload functionality. Designed role-based dashboards for admins, instructors, and students. Enabled student performance tracking and result analytics.',
//     image: '/images/projects/testify.jpg',
//     tags: ['React', 'Node.js', 'MySQL', 'AI'],
//     githubUrl: 'https://github.com/yourusername/testify',
//     demoUrl: 'https://testify-demo.com',
//     featured: true,
//   },
//   {
//     id: 'project-management',
//     title: 'Project Management System',
//     description: 'Created a full-stack web application with React (Frontend), Node.js (Backend), and MongoDB (Database). Designed and implemented RESTful APIs to handle client–server communication. Implemented CRUD operations (Create, Read, Update, Delete) for efficient project record management.',
//     image: '/images/projects/project-management.jpg',
//     tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
//     githubUrl: 'https://github.com/Sabeeh1419/communication/tree/main/src',
//     demoUrl: ' https://my-projects-two-theta.vercel.app/',
//     featured: true,
//   },
//   {
//     id: 'crazy-eight',
//     title: 'Crazy Eight Card Game',
//     description: 'Designed and developed an interactive Crazy Eight card game using JavaScript. Implemented core gameplay mechanics including card shuffling, dealing, and rule enforcement. Features smooth animations and intuitive user interface.',
//     image: '/images/projects/crazy-eight.jpg',
//     tags: ['JavaScript', 'Game', 'HTML5', 'CSS3'],
//     githubUrl: 'https://github.com/Sabeeh1419/Crazy-8-Game',
//     demoUrl: 'https://crazy-eight.netlify.app/index.html',
//   },
//   {
//     id: 'cipher-tool',
//     title: 'Cipher Tool – Encryption & Decryption',
//     description: 'Built a web-based cipher encoding and decoding tool. Supported multiple classical encryption techniques such as Caesar, Rail Fence, Columnar Transposition, and OTP. User-friendly interface for learning cryptography concepts.',
//     image: '/images/projects/cipher-tool.jpg',
//     tags: ['JavaScript', 'Security', 'Cryptography', 'Web'],
//     githubUrl: 'https://github.com/Sabeeh1419/Cipher',
//     demoUrl: 'https://select-cipher.netlify.app/',
//   },
// ];

// // Categories for filtering
// export const projectCategories = [
//   'All',
//   'React',
//   'Node.js',
//   'JavaScript',
//   'AI',
//   'Game',
//   'Security',
//   'Full Stack',
//   'MongoDB',
//   'MySQL',
// ];
// src/components/sections/Projects/projects.data.ts

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'testify',
    titleKey: 'project1Title',
    descriptionKey: 'project1Description',
    image: '/images/projects/testify.jpg',
    tags: ['React', 'Node.js', 'MySQL', 'AI'],
    githubUrl: 'https://github.com/yourusername/testify',
    demoUrl: 'https://testify-demo.com',
    featured: true,
  },
  {
    id: 'project-management',
    titleKey: 'project2Title',
    descriptionKey: 'project2Description',
    image: '/images/projects/project-management.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/Sabeeh1419/communication/tree/main/src',
    demoUrl: 'https://my-projects-two-theta.vercel.app/',
    featured: true,
  },
  {
    id: 'crazy-eight',
    titleKey: 'project3Title',
    descriptionKey: 'project3Description',
    image: '/images/projects/crazy-eight.jpg',
    tags: ['JavaScript', 'Game', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Sabeeh1419/Crazy-8-Game',
    demoUrl: 'https://crazy-eight.netlify.app/index.html',
  },
  {
    id: 'cipher-tool',
    titleKey: 'project4Title',
    descriptionKey: 'project4Description',
    image: '/images/projects/cipher-tool.jpg',
    tags: ['JavaScript', 'Security', 'Cryptography', 'Web'],
    githubUrl: 'https://github.com/Sabeeh1419/Cipher',
    demoUrl: 'https://select-cipher.netlify.app/',
  },
];

// Categories for filtering
export const projectCategories = [
  'All',
  'React',
  'Node.js',
  'JavaScript',
  'AI',
  'Game',
  'Security',
  'Full Stack',
  'MongoDB',
  'MySQL',
];