import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/sandhya-portrait.asset.json";

export const Route = createFileRoute("/")({
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

function useTypewriter(text: string, speed = 18) {
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

function useFocusOnHover<T extends HTMLElement>(focus: Focus, set: (f: Focus) => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = () => set(focus);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.4) set(focus);
        });
      },
      { threshold: [0.4] },
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

function Index() {
  const [focus, setFocus] = useState<Focus>("default");
  const typed = useTypewriter(NARRATION[focus]);

  const deliveryRef = useFocusOnHover<HTMLDivElement>("delivery", setFocus);
  const aiRef = useFocusOnHover<HTMLDivElement>("ai", setFocus);
  const certsRef = useFocusOnHover<HTMLDivElement>("certs", setFocus);

  return (
    <main className="paper-grain relative min-h-screen overflow-hidden text-foreground">
      {/* Ambient glow layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.09 78 / 0.55), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.4 0.09 260 / 0.28), transparent 70%)" }}
      />

      {/* Top nav ribbon */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 md:px-14">
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          SH · Executive Portfolio / v2026
        </div>
        <div className="hidden font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground md:flex md:gap-8">
          <span>01 — Identity</span>
          <span>02 — Operations</span>
          <span>03 — Capabilities</span>
        </div>
        <div className="font-mono-tech text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
          Bengaluru · IN
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6 pb-16 pt-6 md:px-14">
        {/* Left twin panel */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-8 space-y-6">
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              // AI Twin · Live Commentary
            </div>
            <div className="rounded-lg border border-border/70 bg-card/60 p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_20px_60px_-30px_rgba(30,20,10,0.25)] backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold-strong)]" />
                </span>
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Signal · {focus}
                </span>
              </div>
              <p
                key={focus}
                className="font-mono-tech text-[13px] leading-relaxed text-foreground/90"
                style={{ animation: "fade-in-up 400ms ease-out both" }}
              >
                {typed}
                <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[2px] animate-pulse bg-[color:var(--gold-strong)]" />
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              <div className="rounded border border-border/60 px-2 py-1.5">CH · 01 SECURE</div>
              <div className="rounded border border-border/60 px-2 py-1.5">LAT · 12ms</div>
            </div>
          </div>
        </aside>

        {/* Center hero */}
        <div className="relative col-span-12 md:col-span-6">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[440px]">
            {/* Arch backdrop */}
            <svg
              aria-hidden
              viewBox="0 0 300 400"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="arch" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.94 0.02 85)" />
                  <stop offset="100%" stopColor="oklch(0.9 0.03 78)" />
                </linearGradient>
              </defs>
              <path d="M20,400 L20,150 A130,130 0 0 1 280,150 L280,400 Z" fill="url(#arch)" />
            </svg>
            {/* Gold vector flow */}
            <svg
              aria-hidden
              viewBox="0 0 300 400"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M8,180 A142,142 0 0 1 292,180 L292,395"
                stroke="oklch(0.72 0.11 75)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M292,120 Q330,80 360,90"
                stroke="oklch(0.72 0.11 75)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="2 4"
              />
            </svg>

            {/* Portrait */}
            <img
              src={portrait.url}
              alt="Dr. Sandhya Haridas"
              className="absolute inset-x-0 bottom-0 mx-auto h-[96%] w-auto max-w-full object-contain drop-shadow-[0_30px_40px_rgba(30,20,10,0.18)]"
            />

            {/* AI Advisor badge */}
            <div className="absolute -right-8 top-16 md:-right-16">
              <div className="relative h-28 w-28">
                <div
                  className="absolute inset-0 rounded-full border border-[color:var(--gold)]"
                  style={{ animation: "pulse-ring 3s ease-in-out infinite" }}
                />
                <div className="absolute inset-2 rounded-full border border-[color:var(--gold)]/60" />
                <div className="absolute inset-4 flex flex-col items-center justify-center rounded-full bg-background/80 backdrop-blur-md">
                  <span className="font-mono-tech text-[8px] uppercase tracking-[0.28em] text-muted-foreground">
                    AI ADVISOR
                  </span>
                  <span className="font-editorial text-2xl italic leading-none text-foreground">
                    Twin
                  </span>
                  <span className="font-mono-tech text-[8px] uppercase tracking-[0.28em] text-[color:var(--gold-strong)]">
                    ● LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mt-10 text-center">
            <div className="font-mono-tech text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Executive Profile · 01
            </div>
            <h1 className="mt-4 font-sans-display text-5xl font-black leading-[0.95] tracking-tight text-foreground md:text-7xl">
              Dr. Sandhya
              <br />
              <span className="font-editorial italic font-normal">Haridas</span>
            </h1>
            <p className="mt-5 font-mono-tech text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Director of Delivery Operations
              <span className="mx-2 text-[color:var(--gold-strong)]">//</span>
              AI Strategy &amp; Digital Transformation
            </p>
          </div>
        </div>

        {/* Right meta panel */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-8 space-y-6">
            <MetaStat label="Tenure" value="23+" unit="years" />
            <MetaStat label="Scope" value="$MM" unit="portfolio" />
            <MetaStat label="Domains" value="04" unit="verticals" />
            <div className="rounded-lg border border-border/70 bg-card/40 p-5 backdrop-blur-sm">
              <div className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Focus vector
              </div>
              <div className="mt-3 font-editorial text-2xl italic leading-tight text-foreground">
                Delivering the next decade of enterprise intelligence.
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Ribbon logos */}
      <section className="relative z-10 border-y border-border/70 bg-card/30 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-6 md:grid-cols-4 md:px-14">
          {[
            "Schneider Electric",
            "Digital Manufacturing",
            "Agile Enterprise Solutions",
            "AI & Risk Analytics",
          ].map((l) => (
            <div
              key={l}
              className="text-center font-sans-display text-sm font-semibold uppercase tracking-[0.24em] text-foreground/70"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* OPERATIONS TIMELINE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-14">
        <SectionHeader index="02" kicker="Operational leadership" title="Delivery tracks" />

        <div ref={deliveryRef} className="mt-16">
          <TimelineRow
            year="Now"
            role="Director, India-Delivery Operations / VP of Digital Manufacturing"
            company="Schneider Electric — Global Enterprise Domains"
            summary="Directing multimillion-dollar cross-functional portfolios, technical solutions delivery, and scalable enterprise operations pipelines."
            stats={["23+ Years", "Tech Leadership", "$MM Scope", "Enterprise Scale"]}
            footprints={[
              "Driving massive delivery execution using Scrum, Agile, and Lean methodologies to align emerging technology planes seamlessly with global corporate objectives.",
              "Heading complex web, mobile, and digital manufacturing software solution integrations optimized for modern high-scale environments.",
              "Acting as a visible industry authority and keynote speaker on Artificial Intelligence, Computer Vision models, and practical business applications.",
            ]}
            domains={[
              "Delivery Operations",
              "Digital Manufacturing",
              "Agile Transformation",
              "Enterprise Scale",
            ]}
          />
        </div>

        <div ref={aiRef} className="mt-4">
          <TimelineRow
            year="Track 02"
            role="Systems Analytics & Predictive Solutions Director"
            company="Cross-domain enterprise programs"
            summary="Orchestrating tech-driven solutions, downstream analytics tracking systems, and advanced AI application programs."
            stats={["AI Expert", "Data Science (CDS)", "Computer Vision", "Risk Analytics"]}
            footprints={[
              "Architecting predictive operational metrics frameworks and data analytics strategies to systematically reduce computing delivery overhead.",
              "Governing advanced data professional paradigms across multiple corporate domains, including specialized analytics for risk, finance, and enterprise resource tracks.",
            ]}
            domains={["Predictive Analytics", "Computer Vision", "Risk Modeling", "AI Strategy"]}
          />
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section
        ref={certsRef}
        className="relative z-10 border-t border-border/70 bg-card/20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-14">
          <SectionHeader
            index="03"
            kicker="Capabilities & credentials"
            title="Architecture matrix"
          />
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border/70 bg-border/70 md:grid-cols-3">
            <CapabilityCard
              tag="01"
              title="Executive Delivery"
              items={[
                "Scrum Orchestration",
                "Agile Framework Governance",
                "Lean Enterprise Scale",
                "Global Operations Management",
              ]}
            />
            <CapabilityCard
              tag="02"
              title="Emerging Technology"
              items={[
                "Artificial Intelligence Strategies",
                "Computer Vision Frameworks",
                "Business Data Analytics",
                "Predictive Modeling",
              ]}
            />
            <CapabilityCard
              tag="03"
              title="Verified Credentials"
              items={[
                "Certified Data Scientist (CDS)",
                "Certified Artificial Intelligence Expert",
                "Computer Vision Specialist",
              ]}
            />
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

function MetaStat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-lg border border-border/70 bg-card/40 p-4 backdrop-blur-sm">
      <div className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="font-sans-display text-4xl font-black text-foreground">{value}</span>
        <span className="font-mono-tech text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {unit}
        </span>
      </div>
    </div>
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

function TimelineRow({
  year,
  role,
  company,
  summary,
  stats,
  footprints,
  domains,
}: {
  year: string;
  role: string;
  company: string;
  summary: string;
  stats: string[];
  footprints: string[];
  domains: string[];
}) {
  return (
    <article className="group grid grid-cols-12 gap-6 border-t border-border/70 py-14 transition-colors hover:bg-card/30">
      <div className="col-span-12 md:col-span-2">
        <div className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {year}
        </div>
        <div className="mt-3 h-8 w-8 rounded-full border border-[color:var(--gold)] transition-transform group-hover:scale-110" />
      </div>
      <div className="col-span-12 md:col-span-6">
        <h3 className="font-sans-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
          {role}
        </h3>
        <div className="mt-2 font-mono-tech text-[11px] uppercase tracking-[0.24em] text-[color:var(--gold-strong)]">
          {company}
        </div>
        <p className="mt-5 font-editorial text-xl leading-snug italic text-foreground/80">
          {summary}
        </p>
        <ul className="mt-6 space-y-3">
          {footprints.map((f, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
              <span className="mt-2 h-px w-4 flex-shrink-0 bg-[color:var(--gold-strong)]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {domains.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border px-3 py-1 font-mono-tech text-[10px] uppercase tracking-[0.24em] text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div
              key={s}
              className="rounded-md border border-border/70 bg-background/60 p-3 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-foreground/80"
            >
              {s}
            </div>
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
