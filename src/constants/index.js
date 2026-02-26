export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
  id: 3,
  name: 'Resume',
  href: 'https://github.com/sarthak360/Resume/blob/main/resume_Sarthak_kumar.pdf',
  target: '_blank',
},
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: '🤖 AI Customer Support Bot',
    desc: 'A fully local, AI-powered chatbot designed to handle customer support queries with contextual memory and smart escalation capabilities. This project runs 100% on your local machine, ensuring data privacy and no API costs.',
    subdesc:
      'Ollama,Flask,HTML,CSS,JS',
    href: 'https://github.com/sarthak360/ai-customer-support-bot',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/ollama.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/js.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/flask.png',
      },
      
    ],
  },
  {
    title: 'DocPro - AI Health Insight Portal',
    desc: 'Smart health insights, powered by AI Real-time Monitoring:Track your health metrics in real time,Secure & Private:Your data is encrypted and protected,AI-Powered Analysis:Get intelligent insights from your reports',
    subdesc:
      '',
    href: 'https://docpro1.lovable.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
 
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const certifications = [
  {
    id: 1,
    name: 'Machine Learning Specialization',
    pos:"Deeplearning.ai",
    duration: 'Dec 2024',
    icon: '/assets/deeplearning.jpg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cloud Computing',
    pos: 'NPTEL',
    duration: 'May 2024',
    icon: '/assets/nptel.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'MERN Stack Certification Program',
    pos: 'Ethnus',
    duration: 'Apr 2025',
    icon: '/assets/ethnus.png',
    animation: 'salute',

  },
  {
    id: 4,
    name: 'Mastering C++ Language',
    pos: 'Coursera',
    duration: 'Jun 2025',
    icon: '/assets/coursera.png',
    animation: 'victory',

  },
   {
    id: 4,
    name: 'HTML, CSS, and Javascript for Web Developers',
    pos: 'Coursera',
    duration: 'Dec 2023',
    icon: '/assets/coursera.png',
    animation: 'clapping',

  },
 

];

export const technicalSkills = [
  {
    id: 1,
    category: 'Languages',
    skills: 'Python, C, C++, Java',
  },
  {
    id: 2,
    category: 'Web Development',
    skills: 'HTML, CSS, JavaScript, React, Node.js, Three.js',
  },
  {
    id: 3,
    category: 'Database',
    skills: 'MySQL, MongoDB',
  },
  {
    id: 4,
    category: 'Tools',
    skills: 'Git, GitHub, Figma',
  },
  {
    id: 5,
    category: 'Platforms',
    skills: 'Visual Studio Code, IntelliJ IDEA',
  },
];