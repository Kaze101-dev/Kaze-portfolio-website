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
  { label: "Services", href: "/services" },
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
      "As FreshSMP's Lead Systems Architect & Operations Manager, I handle both the tech and the day‑to‑day operations. I set the direction, build the systems our devs work inside, and make the calls on staffing, workflow, and priorities. My focus is making sure things keep moving even when I'm offline, teams should run because the structure is solid, not because I'm watching over them.",
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
      "FracturedSMP is My multi‑server Minecraft network built with a structured technical framework, scalable systems, and a polished gameplay experience. I lead the architecture, gameplay design, and operations, creating stable, player‑focused environments across Survival, Lifesteal, SkyGen, and the network's core infrastructure.",
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
    name: "FreshSMP",
    category: "60k+ Members Minecraft server",
    description:
      "A structured multi server Minecraft network featuring Survival, Lifesteal, and SkyGen. Built with strong systems, polished gameplay loops, and a solid technical framework.",
    tags: ["Python", "Server Architecture", "Systems Design", "60k+ Players"],
    status: "Personal",
  },
  {
    name: "Solaryn Network Development",
    category: "Backend Development",
    description:
      "Work across plugin architecture, gameplay systems, staff operations, and server optimisation focused on building reliable, strong infrastructure for a live player base.",
    tags: ["Java / Kotlin", "Architecture", "Development"],
    status: "Internal",
  },
  {
    name: "Pentesting Toolkit / Recon Workflow",
    category: "Website Penetration",
    description:
      "A structured pentesting methodology and toolset used for recon, enumeration, and access‑control testing in real security engagements.",
    tags: ["Pentesting", "Security", "Methodology"],
    status: "Internal",
  },
  {
    name: "Game Development (Steam Project)",
    category: "Solo Game Project",
    description:
      "Early game development work exploring systems design, workflow planning, and long‑term project structure.",
    tags: ["Godot / GDScript", "Game Design", "Systems"],
    status: "Personal",
  },
];

export const contact = {
  discord: "fallen",
  discordDisplay: "@fallen",
  email: "fallen.dev@outlook.com",
};

export type Service = {
  name: string;
  price: string;
  description: string;
  features: string[];
  availability: string;
};

export type ServiceGroup = {
  title: string;
  featured?: boolean;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Foundation Packages",
    featured: true,
    services: [
      {
        name: "Starter Server Setup",
        price: "$120",
        description: "Perfect for small servers or first-time owners.",
        features: [
          "Full plugin configuration",
          "Permissions setup",
          "Basic optimisation",
          "Clean, stable foundation ready for players",
        ],
        availability: "Open",
      },
      {
        name: "Advanced Server Build",
        price: "$250",
        description: "For servers wanting a polished, scalable setup.",
        features: [
          "Full configuration + gameplay tuning",
          "Performance optimisation",
          "Crash/lag diagnosis",
          "System structure for long-term growth",
        ],
        availability: "Open",
      },
      {
        name: "Network Architecture Package",
        price: "$350",
        description:
          "For multi-server networks (Survival, Lifesteal, SkyGen, etc.).",
        features: [
          "Technical architecture plan",
          "Cross-server systems design",
          "Progression + economy framework",
          "Operational workflow recommendations",
        ],
        availability: "Open",
      },
    ],
  },
  {
    title: "Operations & Staff Packages",
    services: [
      {
        name: "Staff Framework Package",
        price: "$180",
        description: "For servers needing structure and stability.",
        features: [
          "Staff hierarchy",
          "Punishment system",
          "Workflow + documentation",
          "Operational processes",
        ],
        availability: "Open",
      },
      {
        name: "Monthly Operations Management",
        price: "$450/mo",
        description: "Hands-on management for servers that want stability.",
        features: [
          "Updates + monitoring",
          "Issue response",
          "Staff oversight",
          "Weekly optimisation",
        ],
        availability: "Open",
      },
    ],
  },
  {
    title: "Security & Performance Packages",
    services: [
      {
        name: "Performance Boost Package",
        price: "$150",
        description: "Fix lag, crashes, and instability.",
        features: [
          "Profiling",
          "Plugin load analysis",
          "Optimisation",
          "Actionable fixes",
        ],
        availability: "Open",
      },
      {
        name: "Security Audit / Pentest",
        price: "$200",
        description:
          "For websites or Minecraft servers needing security checks.",
        features: [
          "Recon",
          "Enumeration",
          "Access-control testing",
          "Vulnerability report",
        ],
        availability: "Open",
      },
    ],
  },
  {
    title: "Consulting",
    services: [
      {
        name: "Technical Direction Session",
        price: "$75/hr",
        description: "For owners who need clarity, planning, or guidance.",
        features: [
          "Systems review",
          "Gameplay loop analysis",
          "Scaling advice",
          "Roadmap planning",
        ],
        availability: "Open",
      },
    ],
  },
];
