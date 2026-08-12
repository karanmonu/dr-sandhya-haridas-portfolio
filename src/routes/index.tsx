import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Briefcase,
  MapPin,
  ShieldAlert,
  GraduationCap,
  Award,
  Linkedin,
  Mail,
  ArrowUpRight,
  Radio,
  ExternalLink,
  ArrowUp,
} from "lucide-react";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Sandhya Haridas — VP & Global Delivery Unit Head" },
      {
        name: "description",
        content:
          "Executive portfolio of Dr. Sandhya Haridas — 26+ years leading global delivery, AI strategy, and digital transformation.",
      },
      { property: "og:title", content: "Dr. Sandhya Haridas — Executive Portfolio" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Focus = "default" | "accolades" | "delivery" | "aerospace" | "engineering" | "credentials";

const NARRATION: Record<Focus, string> = {
  default:
    "System online. Auditing a verified history spanning 26+ years of global technology delivery, Industry 4.0 adoption, and enterprise digital transformation.",

  accolades:
    "Laurels authenticated: Recognized on CXO Lanes Power List 2026 for India's Top IT Leaders. Winner of 7 enterprise innovation and leadership awards.",

  delivery:
    "Global Delivery tracks active: Directing P&L operations across Industry X.0 robotics, MES software pipelines, and AI-led recurring monetization frameworks.",

  aerospace:
    "Aerospace systems verified: Deployed SAFe Agile Release Trains, core edge flight-to-ground communication protocols, and A350XWB structural stress dossiers.",

  engineering:
    "Core engineering research mapped: Developed thermal algorithms for vacuum chambers at GE. Six-Sigma Green Belt & Best Kaizen Award recipient.",

  credentials:
    "Academic credentials verified: Swiss School of Business (DBA in AI), Harvard Business School (Disruptive Strategy), and Bangalore University Engineering.",
};

function useTypewriter(text: string, speed = 12) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

function useFocusOnScroll<T extends HTMLElement>(focus: Focus, set: (f: Focus) => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.2) set(focus);
        });
      },
      { threshold: [0.2] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [focus, set]);
  return ref;
}

type Job = {
  year: string;
  company: string;
  role: string;
  logoUrl: string;
  fallback?: string;
  location?: string;
  abstract: string;
  pillars?: { title: string; body: string }[];
  bullets?: string[];
  domains: string[];
};

// Official CXO Declaration Link (Direct LinkedIn Verification Post)
const CXO_DECLARATION_URL =
  "https://www.linkedin.com/feed/update/urn:li:share:7468164467697238016/";

// 1. ENTERPRISE AWARDS DATA (7 Awards)
const ENTERPRISE_AWARDS = [
  {
    title: "BU VP Choice Award",
    issuer: "Schneider Electric",
    date: "Apr 2025",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    body: "Awarded for bringing up a world-class state-of-the-art facility for One Automation in Mahape, Mumbai, featuring a digitally optimized manufacturing setup and sustainable campus.",
  },
  {
    title: "Global Digital Disruption Award",
    issuer: "Schneider Electric",
    date: "Mar 2024",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    body: "Recognized for driving enterprise-wide digital transformation and embedding AI across industrial automation pipelines.",
  },
  {
    title: "Program Management Excellence — Go Beyond",
    issuer: "Honeywell Connected Enterprise",
    date: "Dec 2020",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Recognized for dedication and perseverance in driving the 131-9 HEM encryption key project to successful, on-time completion.",
  },
  {
    title: "Go Beyond — STAR Award",
    issuer: "Honeywell Aerospace",
    date: "Jan 2018",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Led the Aerospace stall during Employee Day 2017 in Bangalore, winning the event's Science and Technology Award.",
  },
  {
    title: "Bronze Award — Be a Zealot for Growth",
    issuer: "Honeywell Aerospace",
    date: "Aug 2017",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Contributed to idea evaluations during Blitz Week, driving business case analysis for Fuel Analytics and SOP Monitoring apps.",
  },
  {
    title: "STAR Award — Connected World & IoT",
    issuer: "Honeywell Aerospace",
    date: "Mar 2017",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Delivered an insightful competitive analysis covering 10 major operating companies in Connected Aircraft and IoT services.",
  },
  {
    title: "Early Bird & Best Kaizen Awards",
    issuer: "UTC Aerospace & GE Healthcare",
    date: "2008 — 2009",
    logoUrl: "https://unavatar.io/gehealthcare.com",
    body: "Honored with the UTC Early Bird Award (Goodrich) and GE Healthcare Best Kaizen Award for thermal engineering process improvements.",
  },
];

// 2. KEYNOTES, PODCASTS & PANEL DISCUSSIONS DATA
const MEDIA_AND_TALKS = [
  {
    type: "PODCAST FEATURE",
    title: "Will AI Replace Your Job? Future of Work, Skills & Responsible AI",
    platform: "Pivot Podcast · Hosted by Pushpa Latha (CEO, PropLilly)",
    date: "2024",
    link: "https://www.youtube.com/watch?v=tIklWsbiTCs",
    body: "Featured guest discussing Industry 4.0/5.0, smart manufacturing in India, Responsible AI governance, and Women in Tech leadership. Key takeaway: 'The future is not about fearing AI, but learning how humans and intelligent technology work better together.'",
  },
  {
    type: "INTERNATIONAL KEYNOTE",
    title: "Sustainable & Innovative Practices in Business and Academia",
    platform: "JAIN (Deemed-to-be University) · CMS",
    date: "Dec 13–14, 2024",
    certificateUrl: "/certificates/jain-keynote.png",
    body: "Awarded Certificate of Appreciation as Keynote Speaker for the Two-Day International Conference on Sustainable, Innovative Practices in Business and Academia.",
  },
  {
    type: "EXPERT WEBINAR",
    title: "Smart Flying and XAI (Explainable AI) Applications",
    platform: "IABAC (International Association of Business Analytics Certification)",
    date: "Aug 30, 2023",
    certificateUrl: "/certificates/iabac-xai.jpeg",
    body: "Invited speaker for the 'Experts Speak' Webinar Series, presenting Explainable AI (XAI) models in aerospace, predictive maintenance, and flight analytics.",
  },
  {
    type: "ACADEMIC & INDUSTRY PANEL",
    title: "Responsible AI, Digitization & STEM Leadership",
    platform: "UC Irvine & Industry Summits",
    date: "2023 – Present",
    body: "Keynote speaker bridging academic research and industrial execution across IIoT, STEM advocacy, Industry X.0 transformation, and AI ethics.",
  },
];

// 3. PUBLICATIONS & PROJECTS DATA
const ARTIFACTS = {
  publication: {
    title: "Thermal Behaviour of Variable Conductance Heat Pipes in Vacuum Chambers",
    publisher: "GE Patenting Forum / GE Healthcare",
    date: "Oct 11, 2004",
    logoUrl: "https://unavatar.io/gehealthcare.com",
    body: "Published technical research evaluating thermal algorithms, heat sinks, and variable conductance pipe behavior inside vacuum environments for high-reliability medical equipment.",
  },
  projects: [
    {
      title: "Concessions — Premium Aerotech Augsburg Germany",
      client: "Creative Synergies / AIRBUS",
      date: "Oct 2011 – Feb 2012",
      logoUrl: "https://unavatar.io/creativesynergiesgroup.com",
      body: "Stress focal for Sec 16/18 CDS/PDS and Sec 13/14 RPB on A350XWB. Cleared primary and secondary structures (frames, stringers, rear pressure bulkhead) according to Airbus SAP and quality guidelines.",
    },
    {
      title: "A380 Fixed Trailing Edge Panel & B777 Damage Tolerance",
      client: "Singapore Airlines / Zodiac Aerospace",
      date: "Oct 2010 – Jul 2011",
      logoUrl: "https://unavatar.io/creativesynergiesgroup.com",
      body: "Engineered temporary 3mm aluminium panel replacement solutions for A380 wing layouts (22 panels) and conducted fatigue/damage tolerance analysis for B777 fleets.",
    },
  ],
};

// 4. VOLUNTEERING & ADVOCACY DATA
const VOLUNTEERING = [
  {
    role: "Director of Operations & Keynote Speaker",
    organization: "UC Irvine",
    period: "Apr 2026 – Present",
    domain: "Science & Technology",
    logoUrl: "https://unavatar.io/uci.edu",
    body: "Keynote speaker bridging academic research and industrial execution across IIoT, Responsible AI, and Industry 4.0/5.0 transformation models.",
  },
  {
    role: "Value Plus Education for Children",
    organization: "ISKCON, Bangalore",
    period: "Apr 2014 – Present",
    domain: "Education & Human Values",
    logoUrl: "https://unavatar.io/iskconbangalore.org",
    body: "Content planning and weekend session delivery focused on building value-based education, moral values, and human character for youth programs.",
  },
  {
    role: "Community Social Services Lead",
    organization: "GE Volunteers",
    period: "Apr 2003 – Oct 2005",
    domain: "Social Services",
    logoUrl: "https://unavatar.io/gehealthcare.com",
    body: "Active participant in community upliftment, educational outreach, and social service initiatives during tenure at GE.",
  },
];

const DELIVERY_JOBS: Job[] = [
  {
    year: "2026 — Present",
    company: "L&T Technology Services",
    role: "Vice President — Global Delivery Unit Head",
    logoUrl: "https://unavatar.io/ltts.com",
    location: "Bangalore, India · On-site",
    abstract:
      "Directing the Global Delivery Unit for Industry X.0, Robotics, MES, and advanced Digital Manufacturing Services across North America, Europe, and India.",
    domains: ["Industry X.0", "Robotics", "MES", "Digital Manufacturing"],
  },
  {
    year: "2022 — 2026",
    company: "Schneider Electric",
    role: "BU Head · Director India-Delivery Operations",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    abstract:
      "Full P&L accountability for the India Process Automation, Control, and Industrial Automation business lines.",
    pillars: [
      {
        title: "Strategic Growth Leadership",
        body: "Defining long-term vision, market expansion configurations, and disciplined capital allocation models.",
      },
      {
        title: "Digital & AI Transformation",
        body: "Championing enterprise-wide digital initiatives embedding AI across Reliability & Predictive Maintenance, Process Optimization, and Sustainability metrics.",
      },
    ],
    domains: ["P&L Operations", "AI Transformation", "Industrial Automation"],
  },
];

const AEROSPACE_JOBS: Job[] = [
  {
    year: "2015 — 2022",
    company: "Honeywell Aerospace",
    role: "Senior Manager — Next Gen Software Solutions",
    logoUrl: "https://unavatar.io/honeywell.com",
    abstract:
      "Overseeing global delivery operations for E-Commerce, SaaS offerings, and Next Generation Software Applications.",
    pillars: [
      {
        title: "SAFe Agile Execution",
        body: "Structured SDLC execution utilizing the SAFe Agile framework, serving as a Release Train Engineer and Solution Train Engineer.",
      },
      {
        title: "Core Edge Frameworks",
        body: "Built Core Edge frameworks executing real-time data transmission profiles from aircraft to ground communication systems.",
      },
    ],
    domains: ["SAFe Agile", "AIoT Systems", "Connected Engines"],
  },
  {
    year: "2012 — 2015",
    company: "AXISCADES",
    role: "Senior Manager Sales & Senior Technical Manager",
    logoUrl: "https://unavatar.io/axiscades.com",
    abstract:
      "Directed APAC aerospace sales and delivery roadmaps to meet AOP revenue targets. Led confidential legal contract sign-offs, gross margin calculations, and program management for A350XWB (Korean Airlines) cargo doors and B-737-900 static test plans.",
    domains: ["APAC Sales", "Gross Margins", "A350XWB", "Contracts"],
  },
  {
    year: "2011 — 2012",
    company: "Creative Synergies Group",
    role: "Senior Manager — Aerospace",
    logoUrl: "https://unavatar.io/creativesynergiesgroup.com",
    fallback: "CS",
    abstract:
      "Managed strategic planning and account profitability for onsite/offshore aerospace accounts. Ramped up offshore teams for Ferchau Engineering and Diehl Aircabin (A350/A380), achieving an outstanding 4.8/5 delivery scorecard rating.",
    domains: ["Account Management", "Offshore Delivery", "AIRBUS Programs"],
  },
];

const ENGINEERING_JOBS: Job[] = [
  {
    year: "2008 — 2010",
    company: "UTC Aerospace Systems",
    role: "Senior Engineer",
    logoUrl: "https://unavatar.io/collinsaerospace.com",
    abstract:
      "Executed Finite Element Analysis (FEA) and stress calculations for B787 Aerostructures nacelle fan cowls (GE/Rolls-Royce) and cargo handling systems. Coordinated with USA and Singapore strategy units for PDR/CDR milestones.",
    domains: ["FEA", "Stress Analysis", "B787 Aerostructures", "Composites"],
  },
  {
    year: "2005 — 2008",
    company: "CADES Digitech Private Limited",
    role: "Senior Engineer & Gas Turbine Project Lead",
    logoUrl: "https://unavatar.io/axiscades.com",
    abstract:
      "Performed thermal analysis for Ultraviolet Imaging Telescopes in orbit and compact fuel cell heat exchangers. Led gas turbine project scheduling and resource allocation managing a team of 13 engineers.",
    domains: ["Thermal Analysis", "Gas Turbines", "Team Leadership"],
  },
  {
    year: "2003 — 2005",
    company: "GE Healthcare",
    role: "Design Engineer",
    logoUrl: "https://unavatar.io/gehealthcare.com",
    abstract:
      'Developed thermal algorithms monitoring X-ray tube configurations. Published a recognized technical paper at the GE Patenting Forum titled "Thermal Management in Vacuum Environment using Variable Conductance Heat Pipes". Recipient of the Best Kaizen Award and certified Six-Sigma Green Belt.',
    domains: ["Thermal Algorithms", "X-Ray Systems", "Six-Sigma"],
  },
];

function CompanyLogo({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[color:var(--gold)]/15 font-mono-tech text-[10px] font-bold text-[color:var(--gold-strong)] uppercase tracking-tight">
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="h-full w-full object-contain p-0.5"
    />
  );
}

function Index() {
  const [focus, setFocus] = useState<Focus>("default");
  const [activeTab, setActiveTab] = useState<
    "powerlist" | "awards" | "talks" | "artifacts" | "impact"
  >("powerlist");
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const typed = useTypewriter(NARRATION[focus]);

  const deliveryRef = useFocusOnScroll<HTMLDivElement>("delivery", setFocus);
  const aerospaceRef = useFocusOnScroll<HTMLDivElement>("aerospace", setFocus);
  const engineeringRef = useFocusOnScroll<HTMLDivElement>("engineering", setFocus);
  const accoladesRef = useFocusOnScroll<HTMLDivElement>("accolades", setFocus);
  const credentialsRef = useFocusOnScroll<HTMLDivElement>("credentials", setFocus);

  // Monitor scroll for Floating Back-To-Top Dossier Button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="paper-grain relative min-h-screen text-foreground overflow-x-hidden">
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.09 78), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[-160px] h-[520px] w-[520px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.08 30), transparent 70%)" }}
      />

      {/* PREMIUM STICKY GLASSMORPHIC HEADBAR */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-14 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="flex items-center gap-3 font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground select-none">
          <div className="w-8 h-8 rounded-full border-2 border-foreground/60 flex items-center justify-center font-sans text-[11px] font-black tracking-normal text-foreground bg-background shadow-sm">
            SH
          </div>
          <span className="hidden sm:inline">
            Dossier <span className="text-muted-foreground/30 mx-1">/</span> v2026
          </span>
        </div>

        <nav className="hidden font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground md:flex md:gap-8">
          <a
            href="#identity"
            onClick={(e) => handleScrollTo(e, "identity")}
            className="hover:text-foreground transition-colors"
          >
            01 — Profile
          </a>
          <a
            href="#accolades"
            onClick={(e) => handleScrollTo(e, "accolades")}
            className="hover:text-foreground transition-colors"
          >
            02 — Laurels
          </a>
          <a
            href="#timeline"
            onClick={(e) => handleScrollTo(e, "timeline")}
            className="hover:text-foreground transition-colors"
          >
            03 — Experience
          </a>
          <a
            href="#credentials"
            onClick={(e) => handleScrollTo(e, "credentials")}
            className="hover:text-foreground transition-colors"
          >
            04 — Education
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/dr-sandhya-haridas-13a84217/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all bg-card/40"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="mailto:sharidas783@gmail.com"
            className="p-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all bg-card/40"
            aria-label="Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* SECTION 01: IDENTITY HERO */}
      <section
        id="identity"
        className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-14 scroll-mt-24"
      >
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
          <svg
            aria-hidden
            viewBox="0 0 400 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path d="M30,500 L30,190 A170,170 0 0 1 370,190 L370,500 Z" fill="url(#arch)" />
            <defs>
              <linearGradient id="arch" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.94 0.03 85)" />
                <stop offset="100%" stopColor="oklch(0.88 0.05 78)" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            aria-hidden
            viewBox="0 0 400 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M60,300 C130,240 270,240 340,300 C380,340 340,400 260,400 C170,400 100,360 80,320"
              stroke="oklch(0.68 0.12 70)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M340,300 C400,270 430,220 450,150"
              stroke="oklch(0.68 0.12 70)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeDasharray="2 5"
            />
          </svg>

          <img
            src={portraitImg}
            alt="Dr. Sandhya Haridas portrait"
            className="absolute inset-x-0 bottom-0 mx-auto h-[98%] w-auto max-w-full object-contain drop-shadow-[0_40px_50px_rgba(30,20,10,0.22)]"
          />

          {/* EXECUTIVE SEAL BADGE */}
          <div className="absolute -top-6 -right-2 z-20 md:-right-20 md:top-6">
            <div className="relative h-28 w-28 md:h-40 md:w-40">
              <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/50 animate-pulse" />
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 h-full w-full animate-[spin_32s_linear_infinite]"
              >
                <defs>
                  <path id="sealPath" d="M80,80 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
                </defs>
                <text
                  className="font-mono-tech"
                  fontSize="8.5"
                  fill="oklch(0.35 0.05 260)"
                  letterSpacing="3.6"
                >
                  <textPath href="#sealPath">
                    EXECUTIVE DOSSIER · GLOBAL DELIVERY · AI STRATEGY · LEADERSHIP ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-background/90 backdrop-blur-md md:inset-8">
                <span className="font-mono-tech text-[7px] md:text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                  Ledger
                </span>
                <span className="font-editorial text-xl md:text-2xl italic leading-none text-foreground my-0.5">
                  26+ Yrs
                </span>
                <span className="font-mono-tech text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] font-bold">
                  ● VERIFIED
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-[-8px] bottom-4 hidden w-[300px] md:block lg:left-[-40px] lg:w-[320px]">
            <div className="rounded-lg border border-border/70 bg-card/85 p-4 shadow-xl backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold-strong)]" />
                </span>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  Brief · {focus}
                </span>
              </div>
              <p
                key={focus}
                className="font-mono-tech text-[11px] leading-relaxed text-foreground/90"
              >
                {typed}
                <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[2px] animate-pulse bg-[color:var(--gold-strong)]" />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Executive Profile · 01
          </div>
          <h1 className="mt-4 font-sans-display text-6xl font-black leading-[0.9] tracking-tight text-foreground md:text-8xl uppercase">
            Dr. Sandhya{" "}
            <span className="font-editorial italic font-normal text-muted-foreground lowercase">
              Haridas
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-mono-tech text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:text-[12px]">
            Vice President &amp; Global Delivery Unit Head
            <span className="mx-2 text-[color:var(--gold-strong)]">//</span>
            AI Strategy &amp; Digital Transformation
          </p>
        </div>
      </section>

      {/* SECTION 02: DYNAMIC LAURELS, MEDIA & ADVOCACY HUB */}
      <section
        ref={accoladesRef}
        id="accolades"
        className="relative z-10 border-t border-border/70 bg-card/20 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-14">
          <SectionHeader
            index="02"
            kicker="Executive Laurels, Media & Impact"
            title="Recognition & Advocacy"
          />

          {/* TAB CONTROLS HEADER */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-border/60 pb-4 font-mono-tech text-[10px] uppercase tracking-[0.2em]">
            <button
              onClick={() => setActiveTab("powerlist")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all cursor-pointer ${
                activeTab === "powerlist"
                  ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] border border-[color:var(--gold)]/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Award className="w-3.5 h-3.5" /> 🏆 Power List 2026
            </button>

            <button
              onClick={() => setActiveTab("awards")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all cursor-pointer ${
                activeTab === "awards"
                  ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] border border-[color:var(--gold)]/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Award className="w-3.5 h-3.5" /> Enterprise Honors (7)
            </button>

            <button
              onClick={() => setActiveTab("talks")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all cursor-pointer ${
                activeTab === "talks"
                  ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] border border-[color:var(--gold)]/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Radio className="w-3.5 h-3.5" /> 🎙️ Keynotes &amp; Podcasts
            </button>

            <button
              onClick={() => setActiveTab("artifacts")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all cursor-pointer ${
                activeTab === "artifacts"
                  ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] border border-[color:var(--gold)]/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> Research &amp; Projects
            </button>

            <button
              onClick={() => setActiveTab("impact")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all cursor-pointer ${
                activeTab === "impact"
                  ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] border border-[color:var(--gold)]/40 font-bold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" /> STEM &amp; Volunteering
            </button>
          </div>

          {/* TAB 1: POWER LIST 2026 WITH HYPERLINK */}
          {activeTab === "powerlist" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start rounded-xl border border-border/80 bg-background/60 p-5 md:p-10 shadow-lg backdrop-blur-sm animate-fadeIn w-full min-w-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5">
              <div className="col-span-12 md:col-span-4 flex flex-col gap-3 min-w-0">
                <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1 font-mono-tech text-[10px] uppercase tracking-wider text-[color:var(--gold-strong)]">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Top IT Leader Attestation</span>
                </div>
                <h3 className="font-sans-display text-2xl sm:text-3xl font-black tracking-tight uppercase mt-2 break-words">
                  The Power List{" "}
                  <span className="font-editorial italic font-normal text-[color:var(--gold-strong)]">
                    2026
                  </span>
                </h3>
                <span className="font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Issued by CXO Lanes
                </span>

                <div className="mt-4">
                  <a
                    href={CXO_DECLARATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--gold)]/60 bg-[color:var(--gold)]/15 px-4 py-2.5 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-[color:var(--gold-strong)] hover:bg-[color:var(--gold)]/30 transition-all shadow-sm group"
                  >
                    <span>View Official Declaration ↗</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 space-y-4 min-w-0">
                <p className="font-editorial text-lg md:text-xl italic leading-relaxed text-foreground/90 break-words">
                  "Proud to be recognized among India’s Top IT Leaders – The Power List 2026 by CXO
                  Lanes for contributions to AI-driven transformation, digital innovation, and
                  industry leadership."
                </p>
                <div className="h-px w-16 bg-[color:var(--gold)]/60" />
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light break-words">
                  Nominated for outstanding deployment tracks across Process Automation,
                  Reliability, Intelligent Systems scaling, and sustainable digital industrial
                  setups across Schneider Electric, Honeywell Aerospace, UTC Aerospace, and GE
                  HealthCare.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: ENTERPRISE AWARDS */}
          {activeTab === "awards" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {ENTERPRISE_AWARDS.map((award) => (
                <div
                  key={award.title}
                  className="rounded-xl border border-border/80 bg-background/60 p-6 shadow-md backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)] font-bold">
                        Issued by {award.issuer}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                          {award.date}
                        </span>
                        <div className="h-7 w-7 rounded-full border border-[color:var(--gold)] bg-white p-0.5 overflow-hidden shrink-0">
                          <CompanyLogo
                            src={award.logoUrl}
                            alt={award.issuer}
                            fallback={award.issuer.substring(0, 2).toUpperCase()}
                          />
                        </div>
                      </div>
                    </div>

                    <h4 className="font-sans-display text-xl sm:text-2xl font-black uppercase text-foreground mt-4 leading-tight">
                      {award.title}
                    </h4>

                    <p className="font-editorial text-lg italic text-foreground/90 mt-3 leading-relaxed">
                      "{award.body.split(".")[0]}."
                    </p>

                    <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />

                    {award.body.split(".").slice(1).join(".").trim() && (
                      <p className="text-xs text-muted-foreground font-light leading-relaxed mt-3">
                        {award.body.split(".").slice(1).join(".").trim()}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: KEYNOTES, PODCASTS & CONFERENCES */}
          {activeTab === "talks" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {MEDIA_AND_TALKS.map((talk) => (
                <div
                  key={talk.title}
                  className="rounded-xl border border-border/80 bg-background/60 p-6 shadow-md backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-strong)] font-bold">
                        {talk.type}
                      </span>
                      <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                        {talk.date}
                      </span>
                    </div>

                    <h4 className="font-sans-display text-xl font-bold uppercase text-foreground mt-4 leading-snug">
                      {talk.title}
                    </h4>

                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-muted-foreground block mt-1">
                      {talk.platform}
                    </span>

                    <p className="font-editorial text-lg italic text-foreground/90 mt-4 leading-relaxed">
                      "{talk.body}"
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/30 flex flex-wrap items-center justify-between gap-3">
                    {talk.link && (
                      <a
                        href={talk.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] hover:underline"
                      >
                        <span>Watch Podcast Feature</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {talk.certificateUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedCert({ title: talk.title, url: talk.certificateUrl! })
                        }
                        className="inline-flex items-center gap-1.5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] hover:underline bg-transparent border-0 p-0 cursor-pointer"
                      >
                        <span>View Verified Certificate 📄</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: RESEARCH & PROJECTS */}
          {activeTab === "artifacts" && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="rounded-xl border border-[color:var(--gold)]/60 bg-background/60 p-6 sm:p-8 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--gold)]/5">
                <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <div className="inline-flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)] font-bold">
                    <BookOpen className="w-3.5 h-3.5" /> Published Technical Research
                  </div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                    {ARTIFACTS.publication.date}
                  </span>
                </div>

                <h4 className="font-sans-display text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground mt-4">
                  {ARTIFACTS.publication.title}
                </h4>

                <span className="font-mono-tech text-[11px] uppercase tracking-[0.25em] text-muted-foreground block mt-1">
                  Publisher // {ARTIFACTS.publication.publisher}
                </span>

                <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-4 leading-relaxed">
                  "{ARTIFACTS.publication.body}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ARTIFACTS.projects.map((proj) => (
                  <div
                    key={proj.title}
                    className="rounded-xl border border-border/80 bg-background/60 p-6 backdrop-blur-sm shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                        <span className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)] font-bold">
                          Client // {proj.client}
                        </span>
                        <span className="font-mono-tech text-[10px] uppercase tracking-widest text-muted-foreground">
                          {proj.date}
                        </span>
                      </div>

                      <h5 className="font-sans-display text-lg sm:text-xl font-bold uppercase text-foreground mt-4 leading-snug">
                        {proj.title}
                      </h5>

                      <p className="font-editorial text-lg italic text-foreground/90 mt-3 leading-relaxed">
                        "{proj.body}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ADVOCACY & VOLUNTEERING */}
          {activeTab === "impact" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              {VOLUNTEERING.map((vol) => (
                <div
                  key={vol.organization}
                  className="rounded-xl border border-border/80 bg-background/60 p-6 backdrop-blur-sm shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-strong)] font-bold">
                        {vol.domain}
                      </span>
                      <div className="h-7 w-7 rounded-full border border-[color:var(--gold)] bg-white p-0.5 overflow-hidden shrink-0">
                        <CompanyLogo
                          src={vol.logoUrl}
                          alt={vol.organization}
                          fallback={vol.organization.substring(0, 2).toUpperCase()}
                        />
                      </div>
                    </div>

                    <h4 className="font-sans-display text-xl font-bold uppercase text-foreground mt-4 leading-snug">
                      {vol.role}
                    </h4>

                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-muted-foreground block mt-1">
                      {vol.organization} · {vol.period}
                    </span>

                    <p className="font-editorial text-lg italic text-foreground/90 mt-4 leading-relaxed">
                      "{vol.body}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 03: EXPERIENCE TIMELINE */}
      <section
        id="timeline"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-14 border-t border-border/70 scroll-mt-24"
      >
        <SectionHeader index="03" kicker="Executive enterprise tracks" title="Delivery ledger" />

        <div ref={deliveryRef} className="mt-16 space-y-4">
          <TrackLabel label="Global Delivery · AI Transformation" />
          {DELIVERY_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div ref={aerospaceRef} className="mt-16 space-y-4">
          <TrackLabel label="Aerospace · Connected Systems" />
          {AEROSPACE_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div ref={engineeringRef} className="mt-16 space-y-4">
          <TrackLabel label="Foundational Engineering · Research" />
          {ENGINEERING_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>
      </section>

      {/* SECTION 04: REAL EDUCATIONAL TIMELINE LEDGER */}
      <section
        ref={credentialsRef}
        id="credentials"
        className="relative z-10 border-t border-border/70 bg-card/10 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeader
            index="04"
            kicker="Academic &amp; verified credentials"
            title="Education ledger"
          />

          <div className="mt-16 space-y-4">
            {[
              {
                year: "2021 — 2025",
                institution: "Swiss School of Business and Management",
                degree: "Doctor's Degree, Artificial Intelligence (DBA)",
                logoUrl: "https://unavatar.io/ssbm.ch",
                meta: "Grade: DBA · Global GDBA Integration Track",
                abstract:
                  "Building synergies between technology, innovation, disruption and business opportunities in the niche area of Artificial Intelligence and Digital Transformation.",
                pillars: [
                  {
                    title: "Explainable AI Research (XAI)",
                    body: "Thesis focus: Implementation of Explainable AI framework layers to solve operational transparency, analytical accuracy, and human trust configurations inside high-vulnerability data systems.",
                  },
                ],
                domains: ["Artificial Intelligence", "DBA", "XAI Systems", "Disruption Frameworks"],
              },
              {
                year: "2016",
                institution: "Harvard Business School Online",
                degree: "Disruptive Strategy Innovation with Clayton Christensen",
                logoUrl: "https://unavatar.io/hbs.edu",
                meta: "Grade: Pass · Certificate Program",
                abstract:
                  "HBX intensive core development track centered on corporate disruption models, market ecosystem evolution tracking, strategic capital deployments, and structural uncertainty governance.",
                domains: ["Disruption Theory", "Harvard Online", "Strategy Mapping"],
              },
              {
                year: "2007 — 2009",
                institution: "Annamalai University",
                degree: "MBA, International Business",
                logoUrl: "https://unavatar.io/annamalaiuniversity.ac.in",
                meta: "Grade: Distinction",
                abstract:
                  "Advanced validation curves exploring multinational organizational alignment mechanics, international market trade metrics, and global logistics value chain architectures.",
                domains: ["MBA", "International Business", "Value Chains"],
              },
              {
                year: "1996 — 2000",
                institution: "Bangalore University",
                degree: "B.E, Mechanical Engineering",
                logoUrl: "https://unavatar.io/bangaloreuniversity.ac.in",
                meta: "Grade: First Class",
                abstract:
                  "Core structural computations, macro fluid dynamics dynamics, thermodynamics matrix planning, and manufacturing asset engineering parameters.",
                pillars: [
                  {
                    title: "NCC Airwing Frameworks",
                    body: "Active operational leader trained in high-altitude Paragliding, Scale Aircraft Static Model Construction, formal debate dynamics, and impromptu leadership panels.",
                  },
                  {
                    title: "Athletic Distinctions",
                    body: "Decorated institutional athlete winning consecutive university medals across Interclass Badminton and Table Tennis competitive brackets.",
                  },
                ],
                domains: ["Mechanical Eng", "NCC Airwing", "Thermodynamics", "Scale Modeling"],
              },
            ].map((edu) => (
              <article
                key={edu.institution}
                className="group grid grid-cols-12 gap-6 rounded-xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 md:p-8"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {edu.year}
                  </div>

                  <div className="mt-3 h-10 w-10 rounded-full border border-[color:var(--gold)] bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
                    <CompanyLogo
                      src={edu.logoUrl}
                      alt={`${edu.institution} logo`}
                      fallback={edu.institution.slice(0, 2).toUpperCase()}
                    />
                  </div>

                  <div className="mt-4 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
                    {edu.meta}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)]">
                    {edu.institution}
                  </div>
                  <h3 className="mt-2 font-sans-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-4 font-editorial text-lg italic leading-snug text-foreground/80 md:text-xl">
                    {edu.abstract}
                  </p>

                  {edu.pillars && (
                    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {edu.pillars.map((p) => (
                        <div
                          key={p.title}
                          className="rounded-md border border-border/70 bg-background/60 p-4 shadow-sm"
                        >
                          <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[color:var(--gold-strong)] font-bold">
                            ● {p.title}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-foreground/80 font-light">
                            {p.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {edu.domains.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-border px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-muted-foreground bg-background/40"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESTIGE FOOTER ACCENT */}
      <footer className="relative z-10 border-t border-border/70 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 px-6 py-10 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-14">
          <div className="flex flex-col gap-1 items-center md:items-start">
            <span>© 2026 · Dr. Sandhya Haridas</span>
            <span className="text-[8px] text-muted-foreground/50 tracking-widest">
              Executive Workspace Interface · Secure
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-mono-tech text-muted-foreground tracking-widest lowercase">
            <a
              href="https://www.linkedin.com/in/dr-sandhya-haridas-13a84217/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors group"
            >
              linkedin{" "}
              <ArrowUpRight className="w-3 h-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="mailto:sharidas783@gmail.com"
              className="flex items-center gap-1 hover:text-foreground transition-colors group"
            >
              email{" "}
              <ArrowUpRight className="w-3 h-3 text-muted-foreground/60 group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BACK TO TOP DOSSIER ACTION */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 bg-background/85 px-4 py-2.5 font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--gold)]/20 cursor-pointer animate-fadeIn"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}

      {/* CERTIFICATE LIGHTBOX MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border/80 rounded-xl p-4 md:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] font-bold">
                Verified Certificate Attestation
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="text-muted-foreground hover:text-foreground font-mono-tech text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-background/60 border border-border transition-colors cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>

            <div className="mt-4 max-h-[75vh] overflow-y-auto rounded-lg border border-border/40 bg-black/40 flex items-center justify-center p-2">
              <img
                src={selectedCert.url}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function SectionHeader({ index, kicker, title }: { index: string; kicker: string; title: string }) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          § {index} — {kicker}
        </div>
        <h2 className="mt-3 font-sans-display text-4xl font-black tracking-tight text-foreground md:text-6xl uppercase">
          {title}
        </h2>
      </div>
      <div className="hidden h-px flex-1 max-w-xs bg-gradient-to-r from-[color:var(--gold)] to-transparent md:block" />
    </div>
  );
}

function TrackLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-[color:var(--gold-strong)]" />
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-[color:var(--gold-strong)]">
        {label}
      </span>
    </div>
  );
}

function TimelineCard({ job }: { job: Job }) {
  return (
    <article className="group grid grid-cols-12 gap-6 rounded-xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 md:p-8">
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {job.year}
        </div>

        <div className="h-8 w-8 rounded-full border border-[color:var(--gold)] bg-white p-0.5 overflow-hidden shrink-0 shadow-sm mt-2">
          <CompanyLogo
            src={job.logoUrl}
            alt={job.company}
            fallback={job.fallback || job.company.substring(0, 2).toUpperCase()}
          />
        </div>

        {job.location && (
          <div className="mt-4 font-mono-tech text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {job.location}
          </div>
        )}
      </div>

      <div className="col-span-12 md:col-span-9">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)]">
          {job.company}
        </div>
        <h3 className="mt-2 font-sans-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
          {job.role}
        </h3>
        <p className="mt-4 font-editorial text-lg italic leading-snug text-foreground/80 md:text-xl">
          {job.abstract}
        </p>

        {job.pillars && (
          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {job.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-md border border-border/70 bg-background/60 p-4"
              >
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[color:var(--gold-strong)] font-bold">
                  ● {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {job.domains.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
