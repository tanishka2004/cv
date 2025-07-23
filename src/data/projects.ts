import type { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'KrishiSarthi',
    description: 'Developed a full-stack web platform combining AI assistance and smart contract farming to support Indian farmers with crop advice, weather alerts, market insights, and secure agreement management. Designed an interactive, responsive frontend and integrated voice/text-based AI chatbot for multilingual user support and personalized farming solutions.',
    techStack: ['Python', 'React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    imageUrl: '/krishi.png',
    dataAiHint: 'AI farming assistant platform',
    liveLink: '', // Add live link if available
    repoLink: 'https://github.com/tanishka2004/KrishiSarthi', // Update with actual repo link
  },
  {
    id: '2',
    title: 'Smart Folder Locker and Analyzer',
    description: 'Developed a C++ command-line tool to encrypt and decrypt ‘.txt‘ files in a folder using XOR-based logic and user-provided keys, showcasing file handling, string processing, and DSA concepts. Implemented file analysis to extract word count, line count, and unique word metrics, exporting the results as structured CSV reports to simulate data analytics workflows.',
    techStack: ['C++', 'File I/O', 'Algorithms', 'CSV'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'file encryption and analysis tool',
    repoLink: 'https://github.com/tanishka2004/folder-locker', // Update with actual repo link
  },
  {
    id: '3',
    title: 'Automatic Pill Dispenser',
    description: 'Developed an intelligent, time-triggered pill dispenser using Arduino, integrating real-time scheduling, sensor-based user confirmation, and actuator control. Implemented robust logic to manage servo motors, detect missed doses via ultrasonic sensor, and ensure safe redirection of medication.',
    techStack: ['C', 'C++', 'Arduino', 'IoT', 'Electronics'],
    imageUrl: '/circuit_diagram.png',
    dataAiHint: 'IoT pill dispenser',
    repoLink: 'https://github.com/tanishka2004/Automatic-Pill-Dispenser', // Update with actual repo link
  },
];

export const miniProjectsData: Project[] = [
  {
    id: 'm1',
    title: 'To-Do List',
    description: 'A simple to-do list app to manage daily tasks with add, edit, and delete functionality.',
    techStack: ['React.js', 'JavaScript', 'CSS'],
    imageUrl: 'https://placehold.co/400x250.png',
    dataAiHint: 'to-do list app',
    liveLink: '', // Add live link if available
    repoLink: 'https://github.com/tanishka2004/To-do-list', // Add repo link if available
  },
  {
    id: 'm2',
    title: 'Netflix Show Clustering',
    description: 'A data science project that clusters Netflix shows based on genres and user ratings using Python and scikit-learn.',
    techStack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    imageUrl: 'https://placehold.co/400x250.png',
    dataAiHint: 'netflix clustering',
    liveLink: '', // Add live link if available
    repoLink: 'https://github.com/tanishka2004/Netflix_Show_Clustering', // Add repo link if available
  },
  {
    id: 'm3',
    title: 'Amazon Clone',
    description: 'A mini Amazon clone with product listing, cart, and checkout features using React.js and Firebase.',
    techStack: ['React.js', 'Firebase', 'CSS'],
    imageUrl: 'https://placehold.co/400x250.png',
    dataAiHint: 'amazon clone',
    liveLink: '', // Add live link if available
    repoLink: '', // Add repo link if available
  },
  // Add more mini projects as needed
];
