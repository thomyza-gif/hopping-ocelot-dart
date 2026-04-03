/**
 * Site Configuration - EDIT THIS FILE to customize your site
 * All metadata, OG images, and branding read from here automatically.
 */

export const siteConfig = {
  // Basic Info
  name: "HostNest",
  tagline: "Votre partenaire de confiance pour vos locations courte durée",
  description:
    "HostNest gère vos locations touristiques courte durée et bail mobilité à Paris, en Île-de-France, dans le sud et à la montagne. Service complet, gestion optimale et hôtes satisfaits.",

  // Site URL (replaced automatically on deploy)
  url: process.env.NEXT_PUBLIC_URL || "https://your-app.kleap.io",

  // Layout: navbar is hidden by default. Set to true for marketing/landing sites.
  showNavbar: true,

  // Navigation links (only used when showNavbar is true)
  navLinks: [
    { title: "Séjours", link: "#travelers" },
    { title: "Propriétaires", link: "#owners" },
    { title: "Services", link: "#services" },
    { title: "Contact", link: "#contact" },
  ] as { title: string; link: string }[],

  // SEO Keywords
  keywords: ["keyword1", "keyword2", "keyword3"],

  // Author/Company
  author: "Your Name",
  company: "Your Company",

  // Social
  twitter: "@yourtwitter",

  // OG Image: set to a generated image URL for rich link previews
  ogImage: "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/14302/images/1775221491322-hero-villa",

  // Theme colors for OG image (fallback when ogImage is empty)
  ogBackground: "#020022",
  ogAccent1: "#1a1a4e",
  ogAccent2: "#2d1b4e",
};

export type SiteConfig = typeof siteConfig;
