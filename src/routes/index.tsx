import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/sandhya-portrait.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Sandhya Haridas — VP & Global Delivery Unit Head" },
      {
        name: "description",
        content:
          "Executive portfolio of Dr. Sandhya Haridas — 23+ years leading global delivery, AI strategy, and digital transformation across L&T Technology Services, Schneider Electric, Honeywell Aerospace, and more.",
      },
      { property: "og:title", content: "Dr. Sandhya Haridas — Executive Portfolio" },
      {
        property: "og:description",
        content:
          "23+ years of global technology delivery, AI-led transformation, and enterprise operations leadership.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Focus = "default" | "delivery" | "aerospace" | "engineering" | "credentials";

const NARRATION: Record<Focus, string> = {
  default:
    "System online. I am Dr. Sandhya's digital twin interface layer. Auditing a verified history spanning 23+ years of global technology delivery and digital transformation.",
  delivery:
    "Analyzing Global Delivery tracks: Industry X.0 robotics, MES software pipelines, and AI-led monetization channels are fully operational.",
  aerospace:
    "Analyzing aerospace systems: SAFe Agile frameworks deployed. Core Edge aircraft communication data protocols and structural stress dossiers successfully verified.",
  engineering:
    "Accessing early core research parameters: Thermal algorithms for vacuum environments mapped. Six-Sigma verification metrics validated.",
  credentials:
    "Credentials authenticated: Google Cybersecurity, Azure, AWS, Certified Data Scientist and AI Expert matrices actively mapped to layout infrastructure.",
};

function useTypewriter(text: string, speed = 14) {
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
    const enter = () => set(focus);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.35) set(focus);
        });
      },
      { threshold: [0.35] },
    );
    el.addEventListener("mouseenter", enter);
    io.observe(el);
    return () => {
      el.removeEventListener("mouseenter", enter);
      io.disconnect();
    };
  }, [focus, set]);
  return ref;
}

type Job = {
  year: string;
  company: string;
  role: string;
  location?: string;
  abstract: string;
  pillars?: { title: string; body: string }[];
  bullets?: string[];
  domains: string[];
};

const DELIVERY_JOBS: Job[] = [
  {
    year: "2026 —",
    company: "L&T Technology Services",
    role: "Vice President — Global Delivery Unit Head",
    location: "Bangalore, India · On-site",
    abstract:
      "Directing the Global Delivery Unit for Industry X.0, Robotics, MES, and advanced Digital Manufacturing Services across North America, Europe, and India.",
    domains: ["Industry X.0", "Robotics", "MES", "Digital Manufacturing"],
  },
  {
    year: "2022 — 2026",
    company: "Schneider Electric",
    role: "BU Head · Director India-Delivery Operations — One Automation | Digitization",
    abstract:
      "Full P&L accountability for the India Process Automation, Control, and Industrial Automation business lines.",
    pillars: [
      {
        title: "Strategic & Growth Leadership",
        body: "Defining long-term vision, market expansion configurations, and disciplined capital allocation models.",
      },
      {
        title: "Digital & AI-Led Transformation",
        body: "Championing enterprise-wide digital initiatives embedding AI across Reliability & Predictive Maintenance, Process Optimization, Intelligent Automation, and AI-driven Sustainability / ESG metrics.",
      },
      {
        title: "Operational Excellence",
        body: "Leading integrated operations across Engineering, Manufacturing, Finance, Supply Chain, and Customer Service to optimize delivery lifecycle windows.",
      },
    ],
    domains: ["P&L", "AI Transformation", "Industrial Automation", "ESG"],
  },
];

const AEROSPACE_JOBS: Job[] = [
  {
    year: "2015 — 2022",
    company: "Honeywell Aerospace",
    role: "Senior Manager — Next Gen Software Solutions, NPIs, Connected Enterprise Solutions",
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
      {
        title: "AIoT & Predictive Maintenance",
        body: "Headed AIoT programs, Connected Engines, and Data Analytics configurations for Predictive Maintenance and Condition-Based Advisors.",
      },
      {
        title: "Industry Speaker",
        body: "Official invited speaker for competitive forums including Women In Technology and the Aerowomen's Council on AI.",
      },
    ],
    domains: ["SAFe Agile", "AIoT", "Connected Engines", "SaaS"],
  },
  {
    year: "2012 — 2015",
    company: "AXISCADES",
    role: "Senior Manager Sales & Senior Technical Manager",
    abstract:
      "Managed regional aerospace business sales and delivery targets for the APAC zone. Handled legal contract signing, confidentiality agreements, and gross margin optimization tracks.",
    bullets: [
      "Program Manager for A350XWB (Korean Airlines) overseeing Aft and Forward Cargo Door installations.",
      "Delivery In-Charge for the Driessen Galley Project (B-737-900) managing static test plans and stress dossiers for Zodiac Aerospace.",
    ],
    domains: ["APAC Sales", "A350XWB", "B-737-900", "Contracts"],
  },
  {
    year: "2011 — 2012",
    company: "Creative Synergies Group",
    role: "Senior Manager — Aerospace",
    abstract:
      "Handled strategic planning for onsite and offshore aerospace accounts, account management, and quality process implementations. Maintained an excellent 4.8/5 delivery scorecard rating.",
    domains: ["Account Management", "Quality", "Offshore Delivery"],
  },
];

const ENGINEERING_JOBS: Job[] = [
  {
    year: "2008 — 2010",
    company: "UTC Aerospace Systems",
    role: "Senior Engineer",
    abstract:
      "Handled Finite Element Analysis (FEA) and Stress Analysis routines for B787 Aerostructures Group, fan cowl composites, and cargo handling configurations.",
    domains: ["FEA", "Stress Analysis", "B787", "Composites"],
  },
  {
    year: "2005 — 2008",
    company: "CADES Digitech",
    role: "Senior Engineer & Gas Turbine Project Lead",
    abstract:
      "Directed thermal analysis models for Ultraviolet Imaging Telescopes and led gas turbine scheduling loops managing a team of 13 engineers.",
    domains: ["Thermal Analysis", "UV Imaging", "Gas Turbines", "Team Lead"],
  },
  {
    year: "2003 — 2005",
    company: "GE Healthcare",
    role: "Design Engineer",
    abstract:
      "Developed thermal algorithms monitoring X-ray tube configurations. Published a recognized technical paper at the GE Patenting Forum titled \"Thermal Management in Vacuum Environment using Variable Conductance Heat Pipes\". Recipient of the Best Kaizen Award and certified Six-Sigma Green Belt.",
    domains: ["Thermal Algorithms", "X-Ray", "Kaizen", "Six-Sigma"],
  },
];

function Index() {
  const [focus, setFocus] = useState<Focus>("default");
  const typed = useTypewriter(NARRATION[focus]);

  const deliveryRef = useFocusOnScroll<HTMLDivElement>("delivery", setFocus);
  const aerospaceRef = useFocusOnScroll<HTMLDivElement>("aerospace", setFocus);
  const engineeringRef = useFocusOnScroll<HTMLDivElement>("engineering", setFocus);
  const credentialsRef = useFocusOnScroll<HTMLDivElement>("credentials", setFocus);

  return (
    <main className="paper-grain relative min-h-screen overflow-hidden text-foreground">
      {/* Ambient glow layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.09 78 / 0.55), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 right-[-160px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.08 30 / 0.35), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.09 300 / 0.22), transparent 70%)" }}
      />

      {/* Top nav ribbon */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-14">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          SH · Executive Portfolio / v2026
        </div>
        <div className="hidden font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground md:flex md:gap-8">
          <span>01 — Identity</span>
          <span>02 — Timeline</span>
          <span>03 — Capabilities</span>
          <span>04 — Credentials</span>
        </div>
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          Bengaluru · IN
        </div>
      </header>

      {/* HERO — centered portrait */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-10 md:px-14">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px]">
          {/* Arch backdrop */}
          <svg
            aria-hidden
            viewBox="0 0 400 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="arch" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.94 0.03 85)" />
                <stop offset="100%" stopColor="oklch(0.88 0.05 78)" />
              </linearGradient>
            </defs>
            <path d="M30,500 L30,190 A170,170 0 0 1 370,190 L370,500 Z" fill="url(#arch)" />
          </svg>

          {/* Gold vector flow wrapping the torso */}
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

          {/* Portrait */}
          <img
            src={portrait.url}
            alt="Dr. Sandhya Haridas portrait"
            className="absolute inset-x-0 bottom-0 mx-auto h-[98%] w-auto max-w-full object-contain drop-shadow-[0_40px_50px_rgba(30,20,10,0.22)]"
          />

          {/* AI Twin Advisor circular badge */}
          <div className="absolute -right-6 top-10 md:-right-24 md:top-6">
            <div className="relative h-32 w-32 md:h-40 md:w-40">
              <div
                className="absolute inset-0 rounded-full border border-[color:var(--gold)]"
                style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
              />
              <div className="absolute inset-2 rounded-full border border-[color:var(--gold)]/60" />
              <svg viewBox="0 0 160 160" className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite]">
                <defs>
                  <path id="twinPath" d="M80,80 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
                </defs>
                <text className="font-mono-tech" fontSize="9" fill="oklch(0.35 0.05 260)" letterSpacing="4">
                  <textPath href="#twinPath">
                    LIVE AI TWIN ADVISOR · MONITORING · LIVE AI TWIN ADVISOR ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-background/85 backdrop-blur-md md:inset-8">
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.3em] text-muted-foreground">
                  Twin · v2.4
                </span>
                <span className="font-editorial text-3xl italic leading-none text-foreground">
                  Live
                </span>
                <span className="font-mono-tech text-[8px] uppercase tracking-[0.3em] text-[color:var(--gold-strong)]">
                  ● ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Narration box adjacent to badge */}
          <div className="absolute left-[-8px] bottom-4 hidden w-[300px] md:block lg:left-[-40px] lg:w-[320px]">
            <div className="rounded-lg border border-border/70 bg-card/70 p-4 shadow-[0_20px_60px_-30px_rgba(30,20,10,0.35)] backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold-strong)]" />
                </span>
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                  Signal · {focus}
                </span>
              </div>
              <p
                key={focus}
                className="font-mono-tech text-[12px] leading-relaxed text-foreground/90"
                style={{ animation: "fade-in-up 400ms ease-out both" }}
              >
                {typed}
                <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[2px] animate-pulse bg-[color:var(--gold-strong)]" />
              </p>
            </div>
          </div>
        </div>

        {/* Name anchor */}
        <div className="mt-12 text-center">
          <div className="font-mono-tech text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Executive Profile · 01
          </div>
          <h1 className="mt-4 font-sans-display text-6xl font-black leading-[0.9] tracking-tight text-foreground md:text-8xl">
            Dr. Sandhya <span className="font-editorial italic font-normal">Haridas</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-mono-tech text-[11px] uppercase tracking-[0.28em] text-muted-foreground md:text-[12px]">
            Vice President &amp; Global Delivery Unit Head
            <span className="mx-2 text-[color:var(--gold-strong)]">//</span>
            AI Strategy &amp; Digital Transformation
          </p>
        </div>

        {/* Mobile narration */}
        <div className="mt-8 md:hidden">
          <div className="rounded-lg border border-border/70 bg-card/70 p-4 backdrop-blur-md">
            <div className="mb-2 font-mono-tech text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              Twin Signal · {focus}
            </div>
            <p key={focus} className="font-mono-tech text-[12px] leading-relaxed text-foreground/90">
              {typed}
            </p>
          </div>
        </div>
      </section>

      {/* Company ribbon */}
      <section className="relative z-10 border-y border-border/70 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-6 md:grid-cols-4 md:px-14 lg:grid-cols-8">
          {[
            "L&T Technology",
            "Schneider Electric",
            "Honeywell",
            "AXISCADES",
            "Creative Synergies",
            "UTC Aerospace",
            "CADES Digitech",
            "GE Healthcare",
          ].map((l) => (
            <div
              key={l}
              className="text-center font-sans-display text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE — Block A */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-14">
        <SectionHeader index="02" kicker="Executive enterprise tracks" title="Delivery ledger" />

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

      {/* CAPABILITIES — Block B */}
      <section className="relative z-10 border-t border-border/70 bg-card/20 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeader
            index="03"
            kicker="Capabilities mapping"
            title="Architecture matrix"
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/70 md:grid-cols-3">
            <CapabilityCard
              tag="01"
              title="Portfolio Strategy"
              items={[
                "Strategic Planning",
                "Full P&L Accountability",
                "Global Delivery Operations",
                "Gross Margin Optimization",
                "Enterprise Growth Architecture",
              ]}
            />
            <CapabilityCard
              tag="02"
              title="Digital Innovation"
              items={[
                "Artificial Intelligence Monetization",
                "Computer Vision Architectures",
                "AIoT Connected Engines",
                "Process & Product Optimization",
                "Predictive Maintenance Analytics",
              ]}
            />
            <CapabilityCard
              tag="03"
              title="Methodologies & Tools"
              items={[
                "SAFe Agile Framework",
                "Scrum Master Management",
                "Lean System Governance",
                "Finite Element Analysis (FEA)",
                "Splunk · Tableau Dashboards",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CREDENTIALS — Block C */}
      <section ref={credentialsRef} className="relative z-10 border-t border-border/70">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:px-14">
          <div className="md:col-span-4">
            <SectionHeader
              index="04"
              kicker="Academic & verified credentials"
              title="Signals"
            />
          </div>
          <div className="md:col-span-8 space-y-10">
            <div className="rounded-xl border border-border/70 bg-card/40 p-8 backdrop-blur-sm">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Education
              </div>
              <h3 className="mt-3 font-sans-display text-3xl font-bold leading-tight text-foreground">
                Manipal Institute of Technology (MIT)
              </h3>
              <p className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[color:var(--gold-strong)]">
                B.Tech · Computer Science
              </p>
              <p className="mt-4 font-editorial text-lg italic leading-snug text-foreground/80">
                Specialized in modern web technologies, user interface design, interactive
                systems, and application security.
              </p>
            </div>

            <div>
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Certifications array
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  "Google Cybersecurity Professional Certificate",
                  "Azure Professional Certificate",
                  "AWS Certified Cloud Practitioner",
                  "Certified Data Scientist (CDS)",
                  "Certified Artificial Intelligence Expert",
                  "Computer Vision Specialist",
                  "Six-Sigma Green Belt",
                ].map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-md border border-border/70 bg-background/60 px-4 py-3 font-mono-tech text-[11px] uppercase tracking-[0.18em] text-foreground/85"
                  >
                    <span className="text-[color:var(--gold-strong)]">◆</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:px-14">
          <span>© 2026 · Dr. Sandhya Haridas</span>
          <span>Twin Interface · v2.4.0 · secure</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          § {index} — {kicker}
        </div>
        <h2 className="mt-3 font-sans-display text-4xl font-black tracking-tight text-foreground md:text-6xl">
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
    <article className="group grid grid-cols-12 gap-6 rounded-xl border border-border/70 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:bg-card/70 md:p-8">
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {job.year}
        </div>
        <div className="mt-3 h-8 w-8 rounded-full border border-[color:var(--gold)] transition-transform group-hover:scale-110" />
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
                <div className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-[color:var(--gold-strong)]">
                  ● {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {job.bullets && (
          <ul className="mt-6 space-y-3">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                <span className="mt-2 h-px w-4 flex-shrink-0 bg-[color:var(--gold-strong)]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
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

function CapabilityCard({
  tag,
  title,
  items,
}: {
  tag: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-background/80 p-8 backdrop-blur-sm transition-colors hover:bg-background">
      <div className="flex items-baseline justify-between">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Track {tag}
        </div>
        <div className="h-1 w-8 bg-[color:var(--gold-strong)]" />
      </div>
      <h3 className="mt-6 font-sans-display text-3xl font-black leading-tight text-foreground">
        {title}
      </h3>
      <ul className="mt-8 space-y-4">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-start gap-3 border-t border-border/60 pt-4 font-mono-tech text-[12px] uppercase tracking-[0.18em] text-foreground/80"
          >
            <span className="text-[color:var(--gold-strong)]">◆</span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}