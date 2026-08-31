export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Live" | "In progress";
  role: string;
  tech: string[];
  description: string[];
  features: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "meditour-global",
    name: "Meditour Global",
    tagline: "Global medical tourism platform",
    status: "In progress",
    role: "Backend Engineer",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description: [
      "A medical tourism platform connecting international patients with treatment providers, hospitals and doctors worldwide.",
      "Handles patient inquiries, provider matching, booking flows and case management for four different portal types under one unified API.",
    ],
    features: [
      "Role-based access for patients, doctors, hospitals and admins",
      "Unified booking and case management API",
      "Multi-portal architecture from a single backend",
    ],
    images: [
      "/projects/meditour-global/1.jpg",
      "/projects/meditour-global/2.jpg",
      "/projects/meditour-global/3.jpg",
    ],
  },
  {
    slug: "casino-gaming-platform",
    name: "Casino Gaming Platform",
    tagline: "Realtime multi-game platform",
    status: "Live",
    role: "Full stack (solo)",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    description: [
      "Realtime multiplayer gaming platform with Aviator, Mines and Jackpot games, built from scratch.",
      "Server-authoritative game logic over Socket.io, with a full admin panel, user wallet and transaction history.",
    ],
    features: [
      "Realtime game state engine with zero desync",
      "Wallet ledger with transaction integrity",
      "Full admin panel for live monitoring",
    ],
    images: [
      "/projects/casino-gaming-platform/1.jpg",
      "/projects/casino-gaming-platform/2.jpg",
      "/projects/casino-gaming-platform/3.jpg",
    ],
  },
  {
    slug: "saas-dashboard",
    name: "SaaS Dashboard & Admin Panel",
    tagline: "Multi-tenant subscription SaaS",
    status: "Live",
    role: "Full stack (solo)",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind"],
    description: [
      "Multi-tenant SaaS product with Stripe billing, subscription management and dynamic analytics.",
      "Complete role-based admin panel for managing tenants, plans and usage.",
    ],
    features: [
      "Stripe subscription billing and webhooks",
      "Role-based access control",
      "Live analytics dashboard",
    ],
    images: [
      "/projects/saas-dashboard/1.jpg",
      "/projects/saas-dashboard/2.jpg",
      "/projects/saas-dashboard/3.jpg",
    ],
  },
  {
    slug: "trendoura",
    name: "Trendoura",
    tagline: "Influencer–brand collaboration platform",
    status: "Live",
    role: "Full stack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description: [
      "A three-dashboard marketplace connecting brands with content creators for collaborations.",
      "Separate portals for brands, creators and admins, each with tailored workflows.",
    ],
    features: [
      "Three-dashboard architecture (brand, creator, admin)",
      "Collaboration and campaign tracking",
      "Creator discovery and matching",
    ],
    images: [
      "/projects/trendoura/1.jpg",
      "/projects/trendoura/2.jpg",
      "/projects/trendoura/3.jpg",
    ],
  },
  {
    slug: "learn-and-earn",
    name: "Learn & Earn",
    tagline: "Hyperlocal micro-task marketplace",
    status: "Live",
    role: "Full stack (final year project)",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description: [
      "A hyperlocal marketplace where Pakistani students get instant academic help (10–30 minutes) at PKR 100–500.",
      "Includes skill-bartering, escrow payments and micro-mentorship between students.",
    ],
    features: [
      "Escrow-based payment flow",
      "Skill-barter matching system",
      "Fully responsive React frontend",
    ],
    images: [
      "/projects/learn-and-earn/1.jpg",
      "/projects/learn-and-earn/2.jpg",
      "/projects/learn-and-earn/3.jpg",
    ],
  },
  {
    slug: "freelancer-reply-ai",
    name: "Freelancer Reply AI",
    tagline: "AI proposal assistant for freelancers",
    status: "Live",
    role: "Full stack",
    tech: ["React", "Node.js", "OpenAI API", "Prompt Engineering"],
    description: [
      "An AI assistant that writes high-conversion proposal replies for freelancers.",
      "Addresses the communication gap that stops freelancers from closing deals and managing difficult clients.",
    ],
    features: [
      "AI-generated, high-conversion replies",
      "Tone and context-aware prompt engineering",
      "Built for real freelancer workflows",
    ],
    images: [
      "/projects/freelancer-reply-ai/1.jpg",
      "/projects/freelancer-reply-ai/2.jpg",
      "/projects/freelancer-reply-ai/3.jpg",
    ],
  },
  {
    slug: "leasing-management-system",
    name: "Leasing Management System",
    tagline: "Enterprise leasing ERP",
    status: "Live",
    role: "Full stack (.NET)",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server"],
    description: [
      "An enterprise system for a leasing business covering chart of accounts, stock management, invoicing and reporting.",
      "Delivered and running live for a paying client.",
    ],
    features: [
      "Full chart of accounts",
      "Stock and inventory management",
      "Invoicing and financial reporting",
    ],
    images: [
      "/projects/leasing-management-system/1.jpg",
      "/projects/leasing-management-system/2.jpg",
      "/projects/leasing-management-system/3.jpg",
    ],
  },
  {
    slug: "pos-system",
    name: "Point of Sale System",
    tagline: "Retail POS for an active business",
    status: "Live",
    role: "Full stack (.NET)",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server"],
    description: [
      "A full retail point-of-sale system with inventory tracking, sales processing and daily/monthly reporting.",
      "Running in an active business today.",
    ],
    features: [
      "Real-time inventory tracking",
      "Sales processing workflow",
      "Daily and monthly reporting",
    ],
    images: [
      "/projects/pos-system/1.jpg",
      "/projects/pos-system/2.jpg",
      "/projects/pos-system/3.jpg",
    ],
  },
  {
    slug: "distribution-erp",
    name: "Distribution Management System",
    tagline: "Distributor inventory ERP",
    status: "Live",
    role: "Full stack (.NET)",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server"],
    description: [
      "An enterprise inventory system built for a distribution business to track stock across warehouses.",
    ],
    features: [
      "Multi-warehouse stock tracking",
      "Distributor-facing order flow",
      "Reporting for business owners",
    ],
    images: [
      "/projects/distribution-erp/1.jpg",
      "/projects/distribution-erp/2.jpg",
      "/projects/distribution-erp/3.jpg",
    ],
  },
  {
    slug: "assar-patches",
    name: "Assar Patches",
    tagline: "Business website & catalog",
    status: "Live",
    role: "Frontend",
    tech: ["React", "Tailwind CSS"],
    description: [
      "A responsive business website and product catalog for a patches and embroidery business.",
    ],
    features: [
      "Product catalog with filtering",
      "Fully responsive design",
      "Fast, SEO-friendly build",
    ],
    images: [
      "/projects/assar-patches/1.jpg",
      "/projects/assar-patches/2.jpg",
      "/projects/assar-patches/3.jpg",
    ],
  },
  {
    slug: "c4-creation",
    name: "C4 Creation",
    tagline: "Business website",
    status: "Live",
    role: "Frontend",
    tech: ["React", "Tailwind CSS"],
    description: [
      "A modern business website built for client presentation and lead generation.",
    ],
    features: [
      "Clean, modern design",
      "Contact and inquiry forms",
      "Optimized for fast loading",
    ],
    images: [
      "/projects/c4-creation/1.jpg",
      "/projects/c4-creation/2.jpg",
      "/projects/c4-creation/3.jpg",
    ],
  },
];