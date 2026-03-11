export interface Template {
  id: string;
  name: string;
  description: string;
  pages: string[];
  componentsUsed: string[];
  color: string;
}

export const templates: Template[] = [
  {
    id: "portfolio",
    name: "Portfolio Template",
    description: "A clean developer portfolio with project showcase, skills section, and contact form.",
    pages: ["Home", "Projects", "About", "Contact"],
    componentsUsed: ["Navbar", "Cards", "Contact Form", "Footer"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "saas-landing",
    name: "SaaS Landing Page",
    description: "A conversion-optimized landing page for SaaS products with pricing and testimonials.",
    pages: ["Landing", "Pricing", "Features", "FAQ"],
    componentsUsed: ["Hero Section", "Pricing Cards", "Testimonials", "CTA Banners"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "admin-dashboard",
    name: "Admin Dashboard",
    description: "A feature-rich admin dashboard with charts, tables, and data management panels.",
    pages: ["Dashboard", "Users", "Analytics", "Settings"],
    componentsUsed: ["Sidebar", "Data Tables", "Charts", "Stat Cards"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "blog",
    name: "Blog Website",
    description: "A modern blog template with article listing, categories, and reading views.",
    pages: ["Home", "Article", "Categories", "About"],
    componentsUsed: ["Article Cards", "Navbar", "Tags", "Newsletter Form"],
    color: "from-orange-400 to-rose-400",
  },
  {
    id: "startup-landing",
    name: "Startup Landing Page",
    description: "A bold, attention-grabbing landing page designed for early-stage startups.",
    pages: ["Landing", "Features", "Team", "Contact"],
    componentsUsed: ["Hero Banner", "Feature Grid", "Team Cards", "Footer"],
    color: "from-violet-500 to-fuchsia-500",
  },
];
