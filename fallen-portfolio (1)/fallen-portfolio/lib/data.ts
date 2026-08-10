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
    org: "Fallen",
    role: "Lead Systems Architect & Operations Manager",
    status: "Active",
    summary:
      "Own the architecture and day-to-day operations across every project under Fallen. Set technical direction, design the frameworks other developers build on top of, and make the operational calls — staffing, process, priorities — that keep things moving without me in every conversation.",
    tags: ["Architecture", "Operations", "Leadership"],
  },
  {
    org: "Solaryn Network",
    role: "Developer",
    status: "Active",
    summary:
      "Build and maintain core plugin systems — economy, permissions, cross-server data sync. Work close to the infrastructure layer: the parts that have to be correct before anything player-facing can be trusted.",
    tags: ["Java / Kotlin", "Plugin Architecture", "Backend"],
  },
  {
    org: "TimeNetwork",
    role: "Developer",
    status: "Active",
    summary:
      "Similar remit to Solaryn, different codebase and different constraints. Contribute to shared systems design and handle plugin work that has to survive contact with a live player base, not just a test server.",
    tags: ["Java / Kotlin", "Systems Design", "Live Ops"],
  },
  {
    org: "Independent",
    role: "Pentester",
    status: "Ongoing",
    summary:
      "Test infrastructure and applications for the kind of gaps that don't show up until someone's actually looking for them — network exposure, auth flow weaknesses, permission boundaries that don't hold under pressure. Write reports people can act on, not just a list of findings.",
    tags: ["Network Security", "Recon", "Reporting"],
  },
  {
    org: "Independent",
    role: "Game Developer",
    status: "Ongoing",
    summary:
      "Build small original games and tools outside of network and plugin work, mostly to keep the habit of designing something from a blank canvas instead of extending an existing system.",
    tags: ["Game Design", "Systems", "Prototyping"],
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
