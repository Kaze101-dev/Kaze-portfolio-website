// ---------------------------------------------------------------------------
// Site content lives here. Update copy, links, and contact details in one
// place rather than hunting through page files.
// ---------------------------------------------------------------------------

export const site = {
  name: "Fallen",
  title: "Fallen — Systems Architect, Developer & Security Researcher",
  description:
    "Fallen is a systems architect and operations manager building backend architecture, plugin frameworks and security tooling for multiplayer networks — based in Gisborne, New Zealand.",
  url: "https://fallen.dev",
  location: "Gisborne, New Zealand",
  timezone: "NZST — UTC+13",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const roles = [
  {
    org: "Fallen",
    title: "Lead Systems Architect & Operations Manager",
  },
  {
    org: "Solaryn Network",
    title: "Developer",
  },
  {
    org: "TimeNetwork",
    title: "Developer",
  },
  {
    org: "Independent",
    title: "Pentester",
  },
];

export type Experience = {
  org: string;
  role: string;
  status: string;
  summary: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    org: "FreshSMP",
    role: "Lead Systems Architect & Operations Manager",
    status: "Resigned",
    summary:
      "As FreshSMP’s Lead Systems Architect & Operations Manager, I handle both the tech and the day‑to‑day operations. I set the direction, build the systems our devs work inside, and make the calls on staffing, workflow, and priorities. My focus is making sure things keep moving even when I’m offline, teams should run because the structure is solid, not because I’m watching over them.",
    tags: ["Architecture", "Operations", "Leadership"],
  },
  {
    org: "Solaryn Network",
    role: "Developer",
    status: "Resigned",
    summary:
      "As the developer at Solaryn Network my job was to Build and maintain core plugin systems economy, permissions, cross-server data sync. Work close to the infrastructure layer: the parts that have to be correct before anything player-facing can be trusted.",
    tags: ["Java / Kotlin", "Plugin Architecture", "Backend"],
  },
  {
    org: "TimeNetwork",
    role: "Developer",
    status: "Resigned",
    summary:
      "Similar to my work at Solaryn, but with a different codebase and a new set of constraints. I contribute to shared systems design and handle plugin work that needs to hold up under real players not just on a controlled test server. Everything I build has to survive live gameplay, unpredictable player behavior, and real‑time load.",
    tags: ["Java / Kotlin", "Systems Design", "Live Ops"],
  },
  {
    org: "My own work ;) ",
    role: "Pentester",
    status: "Active",
    summary:
      "I Test infrastructure and applications for the kind of gaps that don't show up until someone's actually looking for them network exposure, locate and Identify auth flow weaknesses, permission boundaries that don't hold under pressure. Finally, Write reports people can act on.",
    tags: ["Network Security", "Recon", "Reporting"],
  },
  {
    org: "FracturedSMP",
    role: " Developer & Owner",
    status: "Active",
    summary:
      "FracturedSMP is My multi‑server Minecraft network built with a structured technical framework, scalable systems, and a polished gameplay experience. I lead the architecture, gameplay design, and operations, creating stable, player‑focused environments across Survival, Lifesteal, SkyGen, and the network’s core infrastructure.",
    tags: ["Ownership", "Systems", "Prototyping"],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  tags: string[];
  status: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Vantage",
    category: "Reconnaissance Toolkit",
    description:
      "A command-line recon toolkit built for the scoping phase of an engagement — subdomain enumeration, service fingerprinting and exposure mapping in one pass instead of five separate tools stitched together by hand.",
    tags: ["Python", "Networking", "CLI", "Security"],
    status: "Personal",
  },
  {
    name: "Core",
    category: "Shared Systems Framework",
    description:
      "The framework underneath both TimeNetwork and Solaryn Network's plugin ecosystems — a shared data layer, permission model and messaging bus, so a new plugin doesn't reinvent account handling or cross-server communication from scratch.",
    tags: ["Java / Kotlin", "Architecture", "Distributed Systems"],
    status: "Internal",
  },
  {
    name: "Ledger",
    category: "Cross-Server Economy Plugin",
    description:
      "A currency and economy system that stays consistent across every server in a network — no split-brain balances, no race conditions when a player moves servers mid-transaction. Built on top of Core's data layer.",
    tags: ["Java / Kotlin", "Concurrency", "Economy Systems"],
    status: "Internal",
  },
  {
    name: "Fault Line",
    category: "Solo Game Project",
    description:
      "A short, systems-heavy 2D game built solo — movement, physics, inventory and save state, all written from scratch. Built to practice designing systems that stay legible as they grow, the same problem as everything else, just with a jump button.",
    tags: ["Godot / GDScript", "Game Design", "Systems"],
    status: "Personal",
  },
];

export const contact = {
  discord: "fallen",
  discordDisplay: "@fallen",
  email: "hello@fallen.dev",
};
