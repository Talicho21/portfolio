export type ProjectFallback = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  imageUrl: string;
};

export const projects: ProjectFallback[] = [
  {
    id: 1,
    title: 'Express Pharmaceutical Wholesale Suite',
    description: 'A production-ready wholesale platform for inventory tracking, compliance workflows, and invoice operations.',
    longDescription: 'This full-stack ecosystem integrates Next.js, Node.js, PostgreSQL, and Supabase to support real-time stock visibility, low-stock alerts, batch expiration indexing, and secure multi-user operations.',
    techStack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Supabase', 'Tailwind'],
    githubUrl: 'https://github.com/Talicho21/',
    liveUrl: 'https://express-pharmaceutical-wholesale.vercel.app',
    imageUrl: '/Express.png',
  },
  {
    id: 2,
    title: 'SALES-PORTAL',
    description: 'Sales Portal is a full-stack platform built for Little App - Ethiopia. It replaces manual paper tracking with a unified dashboard and cutting administrative friction for field agents and administrators',
    longDescription: 'The Little Ethiopia Sales Portal is a full-stack platform built for Little App - Ethiopia to eliminate operational friction between field agents and administrators.',
    techStack: ['React', 'Next.js', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/Talicho21/SALES-PORTAL',
    liveUrl: 'https://sales-portal-nu.vercel.app/login',
    imageUrl: '/Littlesales.png',
  },
  {
    id: 3,
    title: 'Hawan Drug Store',
    description: 'A comprehensive inventory, sales, and analytics dashboard designed for pharmaceutical operations.',
    longDescription: 'Hawan Drug Store is a secure, responsive full-stack platform built to streamline retail pharmacy workflows. It includes features for real-time stock tracking, quick order billing, and business intelligence reporting.',
    techStack: ['Next.js', 'React', 'Tailwind', 'PostgreSQL', 'Supabase'],
    githubUrl: 'https://github.com/Talicho21/',
    liveUrl: 'https://hawan-drug-store.vercel.app/login',
    imageUrl: '/Hawan.png',
  },
  {
    id: 4,
    title: 'Bishoftu Travel',
    description: 'An interactive, beautiful localized mapping platform exploring cultural tourist nodes.',
    longDescription: 'Enables visitors to easily map regional hotspots, view custom community landmarks, and read dynamic itineraries on fluid interfaces.',
    techStack: ['Dashboard','MySQL', 'Tailwind', 'Next.js', 'React'],
    githubUrl: 'https://github.com/Talicho21/Bishoftu-Travel',
    liveUrl: 'https://bishoftu-travel.vercel.app',
    imageUrl: '/Bishoftu.png',
  },
  {
    id: 5,
    title: 'Tali Shopping',
    description: 'Optimized e-commerce engine with real-time UI synchronization layers.',
    longDescription: 'Constructed with clean client state logic, instant cart validation hooks, and responsive catalogs that seamlessly cross-sync store products.',
    techStack: ['Dashboard','MySQL', 'Tailwind', 'Next.js', 'React'],
    githubUrl: 'https://github.com/Talicho21/Tali-shoping',
    liveUrl: 'https://tali-shoping.vercel.app/',
    imageUrl: '/Shopping.png',
  },
];
