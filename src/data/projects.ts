import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my skills and projects, built with modern web technologies for a sleek and responsive user experience. Features dynamic content and AI-generated testimonials.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'ShadCN UI', 'Genkit'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    liveLink: 'https://tanishka-garg-portfolio.web.app/', 
    repoLink: 'https://github.com/tanishka2004/portfolio',
  },
  {
    id: '2',
    title: 'VisionVault - Image SaaS',
    description: 'An AI-powered image SaaS platform offering features like image restoration, recoloring, generative fill, object removal, and background removal. Integrated with Cloudinary for image management and Stripe for payments.',
    techStack: ['Next.js', 'MongoDB', 'Cloudinary AI', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'AI image editor',
    liveLink: 'https://vision-vault.vercel.app/',
    repoLink: 'https://github.com/tanishka2004/VisionVault',
  },
  {
    id: '3',
    title: 'QuickCanvas - Collaborative Whiteboard',
    description: 'A real-time collaborative whiteboard application enabling users to draw, brainstorm, and share ideas seamlessly. Built with Next.js and Convex for backend services.',
    techStack: ['Next.js', 'Convex', 'Liveblocks', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'collaborative whiteboard',
    liveLink: 'https://quick-canvas-beta.vercel.app/',
    repoLink: 'https://github.com/tanishka2004/QuickCanvas',
  },
  {
    id: '4',
    title: 'ScribbleSphere - Blogging Platform',
    description: 'A dynamic blogging platform where users can create, read, update, and delete posts. Features include user authentication and rich text editing.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'blog platform',
    repoLink: 'https://github.com/tanishka2004/ScribbleSphere',
  },
];
