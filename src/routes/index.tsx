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
  Sparkles,
  Terminal,
  Activity,
  Layers,
  Home,
  Trophy,
  History,
  Send,
  User,
  Globe,
  FileText,
  PlayCircle,
  Share2,
  BookmarkCheck,
  CheckCircle2,
  Maximize2,
  Calendar,
} from "lucide-react";
import portraitImg from "@/assets/portrait.jpg";

// ==========================================
// 1. LIVE DOSSIER TELEMETRY HUD DATA & LOGIC
// ==========================================
type TelemetryKey =
  | "overview"
  | "accolades"
  | "delivery"
  | "aerospace"
  | "engineering"
  | "credentials";

interface TelemetryStream {
  id: TelemetryKey;
  label: string;
  code: string;
  metric: string;
  headline: string;
  body: string;
}

const DOSSIER_STREAMS: Record<TelemetryKey, TelemetryStream> = {
  overview: {
    id: "overview",
    label: "OVERVIEW",
    code: "CORP.26Y",
    metric: "26+ Yrs Scope",
    headline: "Global Technology Operations & Executive Delivery",
    body: "Directing multi-region P&L structures, scalable Industry 4.0/5.0 roadmaps, autonomous edge software, and enterprise AI transformation programs.",
  },
  accolades: {
    id: "accolades",
    label: "HONORS",
    code: "CXO.2026",
    metric: "Top 50 IT Leader",
    headline: "CXO Lanes Power List 2026 Attestation",
    body: "Recognized among India's premier IT leaders. Recipient of 7 enterprise honors across Schneider Electric, Honeywell, UTC, and GE Healthcare.",
  },
  delivery: {
    id: "delivery",
    label: "DELIVERY",
    code: "GDU.LTTS",
    metric: "Global P&L Head",
    headline: "Autonomous MES & Industry X.0 Systems",
    body: "Leading global delivery units across North America, Europe, and India with dedicated focus on smart factory robotics and cloud telemetry.",
  },
  aerospace: {
    id: "aerospace",
    label: "AERO",
    code: "AVIO.SAFE",
    metric: "Flight Critical",
    headline: "Commercial Avionics & Mission Data Protocols",
    body: "Spearheaded SAFe Agile Release Trains, aircraft-to-ground edge communications, and A350XWB structural stress certification dossiers.",
  },
  engineering: {
    id: "engineering",
    label: "RESEARCH",
    code: "PAT.GE04",
    metric: "Six-Sigma Green",
    headline: "Thermal Physics & High-Vacuum Algorithms",
    body: "Authored technical research on variable conductance heat pipe behaviour in vacuum chambers for GE Healthcare. Recipient of Best Kaizen Award.",
  },
  credentials: {
    id: "credentials",
    label: "ACADEMIA",
    code: "DBA.AI25",
    metric: "Doctorate in AI",
    headline: "Doctor of Business Administration & HBS Strategy",
    body: "Doctoral research focused on Explainable AI (XAI) frameworks and high-trust enterprise adoption models from Swiss School of Business (SSBM).",
  },
};

const STREAM_KEYS: TelemetryKey[] = [
  "overview",
  "accolades",
  "delivery",
  "aerospace",
  "engineering",
  "credentials",
];

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

function ExecutiveHUD({
  activeFocus,
  onSelectFocus,
}: {
  activeFocus: TelemetryKey;
  onSelectFocus: (key: TelemetryKey) => void;
}) {
  const current = DOSSIER_STREAMS[activeFocus] || DOSSIER_STREAMS.overview;
  const typedBody = useTypewriter(current.body, 14);

  useEffect(() => {
    const timer = setInterval(() => {
      onSelectFocus(STREAM_KEYS[(STREAM_KEYS.indexOf(activeFocus) + 1) % STREAM_KEYS.length]);
    }, 8500);
    return () => clearInterval(timer);
  }, [activeFocus, onSelectFocus]);

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[color:var(--gold)]/80 hover:shadow-[0_20px_40px_rgba(180,130,40,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(180,130,40,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(180,130,40,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />

      <div className="relative z-10 flex items-center justify-between border-b border-border/50 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--gold)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--gold-strong)]" />
          </span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold-strong)]">
            TRACK · {current.code}
          </span>
        </div>

        <span className="rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-[color:var(--gold-strong)]">
          {current.metric}
        </span>
      </div>

      <div className="relative z-10 mt-3 min-h-[85px] sm:min-h-[75px]">
        <h5 className="font-sans text-xs sm:text-[13px] font-bold text-foreground transition-colors duration-200 leading-snug">
          {current.headline}
        </h5>
        <p className="mt-1.5 font-mono text-[10.5px] sm:text-[11px] leading-relaxed text-muted-foreground/90 font-normal">
          {typedBody}
          <span className="ml-0.5 inline-block h-2.5 w-1 translate-y-[2px] animate-pulse bg-[color:var(--gold-strong)]" />
        </p>
      </div>

      <div className="relative z-10 mt-3 pt-2.5 border-t border-border/40 flex flex-wrap items-center justify-between gap-1">
        <div className="flex flex-wrap items-center gap-1">
          {STREAM_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => onSelectFocus(k)}
              className={`rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider transition-all cursor-pointer border ${
                activeFocus === k
                  ? "border-[color:var(--gold)] bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-xs"
                  : "border-transparent text-muted-foreground/70 hover:text-foreground hover:bg-card/60"
              }`}
            >
              {DOSSIER_STREAMS[k].label}
            </button>
          ))}
        </div>

        <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/40 hidden sm:inline">
          LIVE AUDIT
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 2. CXO POWER LIST HOVER-REVEAL CARD
// ==========================================
function PowerListCard({ onInspect }: { onInspect: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mt-8 relative min-h-[380px] overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-6 md:p-10 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-2xl hover:shadow-[color:var(--gold)]/15 flex flex-col justify-between"
    >
      <div
        className={`pointer-events-none absolute inset-0 z-10 overflow-hidden flex items-center justify-center p-3 bg-black/10 transition-all duration-500 ease-out ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src="/events/cxo-powerlist-2026.jpg"
          alt="CXO Lanes IT Power List 2026 Top 50 Winners"
          className="h-full w-full object-contain object-center drop-shadow-xl"
        />
      </div>

      <div
        className={`relative z-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full transition-all duration-300 ease-out ${
          isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="col-span-12 md:col-span-5 flex flex-col gap-3 min-w-0">
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--gold-strong)] font-bold">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Top IT Leader Attestation</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight mt-2 break-words text-foreground">
            The Power List{" "}
            <span className="font-editorial italic font-normal text-[color:var(--gold-strong)] lowercase">
              2026
            </span>
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Issued by CXO Lanes
          </span>
        </div>

        <div className="col-span-12 md:col-span-7 space-y-4 min-w-0">
          <p className="font-editorial text-lg sm:text-xl italic leading-relaxed text-foreground/90 break-words">
            "Proud to be recognized among India’s Top IT Leaders – The Power List 2026 by CXO Lanes
            for contributions to AI-driven transformation, digital innovation, and industry
            leadership."
          </p>
          <div className="h-px w-16 bg-[color:var(--gold)]/60" />
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light break-words">
            Nominated for outstanding deployment tracks across Process Automation, Reliability,
            Intelligent Systems scaling, and sustainable digital industrial setups across Schneider
            Electric, Honeywell Aerospace, UTC Aerospace, and GE HealthCare.
          </p>
        </div>
      </div>

      <div className="relative z-20 pt-4 mt-6 border-t border-border/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:share:7468164467697238016/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--gold)]/60 bg-background/90 hover:bg-[color:var(--gold)]/20 px-3.5 sm:px-4 py-2 text-xs font-semibold text-[color:var(--gold-strong)] transition-all shadow-md backdrop-blur-md"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>View Official Declaration</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onInspect}
            className="inline-flex items-center gap-2 rounded-xl bg-background/90 hover:text-[color:var(--gold-strong)] hover:border-[color:var(--gold)]/50 border border-border/80 px-3.5 sm:px-4 py-2 text-xs font-semibold text-foreground transition-all cursor-pointer backdrop-blur-md shadow-md"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect Cohort Poster</span>
          </button>
        </div>

        <span
          className={`font-mono text-[10px] uppercase tracking-wider transition-all ${
            isHovered ? "text-white bg-black/70 px-2.5 py-1 rounded-md" : "text-muted-foreground"
          }`}
        >
          {isHovered ? "Viewing Cohort" : "Hover to Focus Poster"}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 3. MAIN ROUTE CONFIGURATION
// ==========================================
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

const NAV_ITEMS = [
  { id: "identity", label: "Profile", icon: User },
  { id: "accolades", label: "Laurels", icon: Trophy },
  { id: "timeline", label: "Experience", icon: History },
  { id: "credentials", label: "Education", icon: GraduationCap },
];

function useFocusOnScroll<T extends HTMLElement>(
  focus: TelemetryKey,
  set: (f: TelemetryKey) => void,
) {
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

const CXO_DECLARATION_URL =
  "https://www.linkedin.com/feed/update/urn:li:share:7468164467697238016/";

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

type TalkCategory = "all" | "keynotes" | "panels" | "stem";

type VerifiedEngagement = {
  category: "keynotes" | "panels" | "stem";
  tag: string;
  title: string;
  host: string;
  date: string;
  summary: string;
  highlightPill: string;
  actionType: "youtube" | "video" | "certificate" | "linkedin" | "modal";
  actionUrl: string;
  actionLabel: string;
  previewImage?: string;
  hasHoverReveal: boolean;
};

const VERIFIED_ENGAGEMENTS: VerifiedEngagement[] = [
  {
    category: "keynotes",
    tag: "BROADCAST INTERVIEW · BSMART",
    title: "Opportunities in Automated Manufacturing & Industry AI",
    host: "Business Standard",
    date: "Jul 21, 2026",
    summary:
      "Executive leadership broadcast exploring the human element in smart automated manufacturing, industrial AI adoption, and career trajectories.",
    highlightPill: "Featured Broadcast",
    actionType: "video",
    actionUrl:
      "https://www.business-standard.com/video-gallery/education/opportunities-in-automated-manufacturing-179110.htm",
    actionLabel: "Watch on Business Standard",
    previewImage: "/events/business-standard.jpg",
    hasHoverReveal: true,
  },
  {
    category: "panels",
    tag: "NATIONAL LEADERSHIP SUMMIT",
    title: "CII Women in STEM Leadership Summit 2026",
    host: "Confederation of Indian Industry (CII) · New Delhi",
    date: "2026",
    summary:
      "Invited panelist alongside leaders from government, industrial manufacturing, and global academia on accelerating women's executive participation in digital transformation.",
    highlightPill: "Summit Panel",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_cii-womeninstem-womenleadership-ugcPost-7492107007378817025-KLT5/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/cii-summit.jpg",
    hasHoverReveal: true,
  },
  {
    category: "keynotes",
    tag: "INTERNATIONAL CONFERENCE KEYNOTE",
    title: "Next-Generation Data Engineering & Analytics (INDEA-2026)",
    host: "University of Salford (Manchester, UK) & Universal Inovators / Springer",
    date: "Aug 21–22, 2026",
    summary:
      "Invited Keynote Speaker presenting state-of-the-art architectures in Explainable AI (XAI), scalable edge computing, and industrial telemetry analytics.",
    highlightPill: "Springer Verified",
    actionType: "certificate",
    actionUrl: "/certificates/indea-2026.png",
    actionLabel: "View Verified Certificate",
    hasHoverReveal: false,
  },
  {
    category: "keynotes",
    tag: "ACADEMIC SYMPOSIUM 2.0",
    title: "Reimagining Manufacturing with Cognitive AI",
    host: "PES University · Center for Cognitive Computing (C3I), Bangalore",
    date: "Feb 14, 2026",
    summary:
      "Inaugural keynote address delivered on bridging cognitive AI models with edge deployment across smart factory shop-floors and real-time sensor networks.",
    highlightPill: "Keynote Address",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-pooja-agarwal_aiformanufacturing-aisymposium-manufacturinginnovation-ugcPost-7425879188433186816-MC2g/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/pes-symposium.png",
    hasHoverReveal: true,
  },
  {
    category: "stem",
    tag: "FEATURED KEYNOTE & MENTOR",
    title: "Katalyst India Alumni Leadership Meet",
    host: "Katalyst India · Bangalore",
    date: "2024",
    summary:
      "Featured guest speaker alongside Sanjay Gopinath (MathWorks), mentoring 50+ women engineering scholars and alumni on technical mastery, executive presence, and career resilience.",
    highlightPill: "500+ Coached",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/sahana113_katalystindia-alumnimeet-networking-ugcPost-7477746463570317312-nyb_",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/katalyst-alumni.jpg",
    hasHoverReveal: true,
  },
  {
    category: "panels",
    tag: "CXO INDUSTRY MASTERCLASS",
    title: "Mastering the AI Shift: Strategizing Tech Teams for the Future",
    host: "Simplilearn & The Brainalytics CXO Platform",
    date: "May 10, 2024",
    summary:
      "CXO speaker on managing enterprise AI transformation, addressing organizational inertia, and building resilient engineering teams aligned with market shifts.",
    highlightPill: "CXO Masterclass",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_this-was-an-insightful-cxo-session-by-industry-ugcPost-7202948918026883072-dH6Y/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/simplilearn-ai.jpg",
    hasHoverReveal: true,
  },
  {
    category: "stem",
    tag: "CORPORATE BRAND AMBASSADOR",
    title: "Women in Industrial Automation & Sustainable Cloud",
    host: "Schneider Electric Official Campaign",
    date: "2024",
    summary:
      "Official brand ambassador feature spotlighting executive leadership: 'Bringing together AI, IoT, cloud, and sustainability to create the next generation of solutions.'",
    highlightPill: "Brand Ambassador",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_great-opportunities-at-schneider-electric-share-7235709854378553345-_hCl/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/schneider-women.jpg",
    hasHoverReveal: true,
  },
  {
    category: "keynotes",
    tag: "INTERNATIONAL CONFERENCE KEYNOTE",
    title: "Sustainable & Innovative Practices in Business and Academia",
    host: "JAIN (Deemed-to-be University) · CMS",
    date: "Dec 13–14, 2024",
    summary:
      "Awarded Certificate of Appreciation as Keynote Speaker for the Two-Day International Conference on Sustainable, Innovative Practices in Business and Academia.",
    highlightPill: "Keynote Certificate",
    actionType: "certificate",
    actionUrl: "/certificates/jain-keynote.png",
    actionLabel: "View Verified Certificate",
    hasHoverReveal: false,
  },
  {
    category: "stem",
    tag: "WOMEN'S DAY KEYNOTE",
    title: "Women@Chryso: Inspiring Talent in Modern Engineering",
    host: "CHRYSO India",
    date: "Mar 8, 2024",
    summary:
      "Special keynote session connecting with women talent in manufacturing on leading through disruption, continuous upskilling, and executive growth in STEM.",
    highlightPill: "Keynote",
    actionType: "linkedin",
    actionUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7171836166986227712/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/chryso-keynote.jpg",
    hasHoverReveal: true,
  },
  {
    category: "keynotes",
    tag: "EXECUTIVE PODCAST FEATURE",
    title: "Will AI Replace Your Job? Future of Work & Responsible AI",
    host: "Pivot Podcast · Hosted by Pushpa Latha (CEO, PropLilly)",
    date: "2024",
    summary:
      "Featured guest evaluating smart manufacturing in India, Responsible AI guardrails, and workforce evolution: 'The future is about learning how humans and intelligent technology work together.'",
    highlightPill: "Full Episode",
    actionType: "youtube",
    actionUrl: "https://www.youtube.com/watch?v=tIklWsbiTCs",
    actionLabel: "Watch Episode on YouTube",
    previewImage: "/events/pivot-podcast.png",
    hasHoverReveal: true,
  },
  {
    category: "keynotes",
    tag: "EXPERT WEBINAR SERIES",
    title: "Smart Flying and XAI (Explainable AI) Applications",
    host: "IABAC (International Association of Business Analytics Certification)",
    date: "Aug 30, 2023",
    summary:
      "Invited speaker for the 'Experts Speak' Series, presenting operational Explainable AI (XAI) models in aerospace and predictive flight analytics.",
    highlightPill: "IABAC Certified",
    actionType: "certificate",
    actionUrl: "/certificates/iabac-xai.jpeg",
    actionLabel: "View Verified Certificate",
    hasHoverReveal: false,
  },
  {
    category: "stem",
    tag: "ENGINEERING FORUM LEAD",
    title: "Role of Data Analytics & AI in the Enterprise World",
    host: "Honeywell Women In Technology (WIT) Hub",
    date: "Jun 21, 2022",
    summary:
      "Technical lecture exploring aerospace telemetry architectures, ML production pipelines, and operational ROI modeling for Honeywell global engineering units.",
    highlightPill: "Tech Lecture",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_ai-share-ml-share-6958044738864263168-d4Zf/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/honeywell-ai.png",
    hasHoverReveal: true,
  },
  {
    category: "keynotes",
    tag: "AERO WOMEN'S COUNCIL INAUGURAL",
    title: "Commercial Artificial Intelligence Solutions in Aerospace",
    host: "Honeywell Aero Women's Council (AWC)",
    date: "Jun 28, 2022",
    summary:
      "Keynote presentation providing a global aerospace engineering audience a comprehensive overview of machine learning paradigms, flight-to-ground edge data, and business aviation applications.",
    highlightPill: "AWC Keynote",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_datascience-automation-technology-share-6952524441356558336-JukE/?utm_source=social_share_send&utm_medium=ios_app&rcm=ACoAAAOBYj4B0RumuNaF4wBL-DxvKyVNISc-aXE",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/aero-awc.png",
    hasHoverReveal: true,
  },
];

const ARTIFACTS = {
  academicRoles: [
    {
      title: "Conference Chair & University Paper Presentation Reviewer",
      organization: "International Research Conferences & Academic Hubs",
      period: "2023 — Present",
      body: "Serving as University Paper Presentation Session Chair and Technical Paper Peer Reviewer across premier international IEEE and Springer conference symposiums.",
    },
  ],
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
      body: "Stress focal for Sec 16/18 CDS/PDS and Sec 13/14 RPB on A350XWB. Cleared primary and secondary structures according to Airbus SAP and quality guidelines.",
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
      <div className="flex h-full w-full items-center justify-center bg-[color:var(--gold)]/15 font-mono text-[10px] font-bold text-[color:var(--gold-strong)] uppercase tracking-tight">
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
  const [focus, setFocus] = useState<TelemetryKey>("overview");
  const [activeNav, setActiveNav] = useState("identity");
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<
    "powerlist" | "talks" | "awards" | "artifacts" | "impact"
  >("powerlist");
  const [talkFilter, setTalkFilter] = useState<TalkCategory>("all");
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const deliveryRef = useFocusOnScroll<HTMLDivElement>("delivery", setFocus);
  const aerospaceRef = useFocusOnScroll<HTMLDivElement>("aerospace", setFocus);
  const engineeringRef = useFocusOnScroll<HTMLDivElement>("engineering", setFocus);
  const accoladesRef = useFocusOnScroll<HTMLDivElement>("accolades", setFocus);
  const credentialsRef = useFocusOnScroll<HTMLDivElement>("credentials", setFocus);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredTalks = VERIFIED_ENGAGEMENTS.filter((t) =>
    talkFilter === "all" ? true : t.category === talkFilter,
  );

  return (
    <main className="paper-grain relative min-h-screen text-foreground overflow-x-hidden font-sans">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30">
        <div
          className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, oklch(0.86 0.09 78), transparent 70%)" }}
        />
        <div
          className="absolute top-60 right-[-160px] h-[550px] w-[550px] rounded-full blur-3xl opacity-35"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.08 30), transparent 70%)" }}
        />
      </div>

      {/* EXPANDING DOCK NAVIGATION */}
      <header className="sticky top-3.5 z-50 mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/85 px-3 sm:px-6 py-2.5 backdrop-blur-xl shadow-lg">
          <button
            onClick={() => handleScrollTo("identity")}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer border-0 bg-transparent p-0"
            aria-label="Profile"
          >
            <div className="w-8 h-8 rounded-xl border border-[color:var(--gold)]/50 bg-[color:var(--gold)]/10 flex items-center justify-center font-sans text-xs font-black text-foreground group-hover:border-[color:var(--gold)] transition-colors shadow-sm">
              SH
            </div>
            <div className="text-left hidden sm:block">
              <span className="font-sans text-xs font-bold tracking-tight text-foreground group-hover:text-[color:var(--gold-strong)] transition-colors block">
                Dr. Sandhya Haridas
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground block -mt-0.5">
                Executive Dossier
              </span>
            </div>
          </button>

          <nav className="flex items-center gap-1 bg-card/60 border border-border/70 rounded-xl p-1 shadow-inner">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isExpanded = hoveredNavId ? hoveredNavId === item.id : activeNav === item.id;

              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setHoveredNavId(item.id)}
                  onMouseLeave={() => setHoveredNavId(null)}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 h-8 sm:h-9 px-2 sm:px-3 rounded-lg font-sans text-xs font-medium transition-all duration-300 ease-out cursor-pointer overflow-hidden border-0 ${
                    isExpanded
                      ? "bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/80 bg-transparent"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span
                    className={`transition-all duration-300 ease-out overflow-hidden whitespace-nowrap text-xs ${
                      isExpanded
                        ? "max-w-[90px] opacity-100 translate-x-0"
                        : "max-w-0 opacity-0 -translate-x-2"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="https://www.linkedin.com/in/dr-sandhya-haridas-13a84217/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-border/70 text-muted-foreground hover:text-foreground hover:border-[color:var(--gold)]/50 transition-all bg-card/40 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:sharidas783@gmail.com"
              className="p-2 rounded-xl border border-border/70 text-muted-foreground hover:text-foreground hover:border-[color:var(--gold)]/50 transition-all bg-card/40 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 01: IDENTITY HERO */}
      <section
        id="identity"
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-12 pt-8 md:pt-10 md:px-14 scroll-mt-24"
      >
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[540px] flex items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0 -m-8 opacity-25 pointer-events-none flex items-center justify-center overflow-hidden"
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(180, 130, 40, 0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(180, 130, 40, 0.25) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, black 45%, transparent 80%)",
              }}
            />
          </div>

          <svg
            aria-hidden
            viewBox="0 0 400 500"
            className="absolute inset-0 h-full w-full opacity-70"
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

          <img
            src={portraitImg}
            alt="Dr. Sandhya Haridas portrait"
            className="relative z-10 mx-auto h-[96%] w-auto max-w-full object-contain drop-shadow-[0_30px_45px_rgba(30,20,10,0.18)]"
          />

          {/* SEAL INDICATOR */}
          <div className="absolute -top-3 -right-1 z-20 sm:-top-4 sm:-right-2 md:-right-16 md:top-4">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36">
              <div className="absolute inset-0 rounded-full border border-[color:var(--gold)]/50 animate-pulse" />
              <svg
                viewBox="0 0 160 160"
                className="absolute inset-0 h-full w-full animate-[spin_32s_linear_infinite]"
              >
                <defs>
                  <path id="sealPath" d="M80,80 m-64,0 a64,64 0 1,1 128,0 a64,64 0 1,1 -128,0" />
                </defs>
                <text
                  className="font-mono text-[8.5px]"
                  fill="oklch(0.35 0.05 260)"
                  letterSpacing="3.6"
                >
                  <textPath href="#sealPath">
                    EXECUTIVE DOSSIER · GLOBAL DELIVERY · AI STRATEGY · LEADERSHIP ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-3 sm:inset-3.5 flex flex-col items-center justify-center rounded-full bg-background/95 backdrop-blur-md md:inset-7 shadow-lg">
                <span className="font-mono text-[6.5px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                  Ledger
                </span>
                <span className="font-editorial text-lg sm:text-xl md:text-2xl italic leading-none text-foreground my-0.5">
                  26+ Yrs
                </span>
                <span className="font-mono text-[6.5px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] font-bold">
                  ● VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* DESKTOP FLOATING HUD */}
          <div className="absolute left-[-20px] bottom-1 z-20 hidden w-[340px] md:block lg:left-[-60px] lg:w-[380px]">
            <ExecutiveHUD activeFocus={focus} onSelectFocus={(k) => setFocus(k)} />
          </div>
        </div>

        {/* MOBILE RESPONSIVE HUD */}
        <div className="mt-6 block md:hidden w-full max-w-[420px] mx-auto">
          <ExecutiveHUD activeFocus={focus} onSelectFocus={(k) => setFocus(k)} />
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Executive Profile · 01
          </div>
          <h1 className="mt-3 sm:mt-4 font-sans-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-foreground uppercase">
            Dr. Sandhya{" "}
            <span className="font-editorial italic font-normal text-muted-foreground lowercase">
              Haridas
            </span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-muted-foreground md:text-[12px] px-2">
            Vice President &amp; Global Delivery Unit Head
            <span className="mx-2 text-[color:var(--gold-strong)]">·</span>
            AI Strategy &amp; Digital Transformation
          </p>

          {/* EDITORIAL STAT LEDGER */}
          <div className="mx-auto mt-8 sm:mt-10 max-w-4xl rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Leadership
                  </span>
                  <Activity className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  26
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    +
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Years Global Delivery
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Doctorate
                  </span>
                  <GraduationCap className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  DBA
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Artificial Intelligence
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Laurels
                  </span>
                  <Award className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  7
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    x
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Enterprise Awards
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Scope
                  </span>
                  <Globe className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  P&amp;L
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Global Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: RECOGNITION, KEYNOTES & PANELS */}
      <section
        ref={accoladesRef}
        id="accolades"
        className="relative z-10 border-t border-border/70 bg-card/20 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:px-14">
          <SectionHeader
            index="02"
            kicker="Executive Laurels, Media & Impact"
            title="Recognition & Advocacy"
          />

          {/* Segment Controls */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 border-b border-border/60 pb-4 text-xs font-medium">
            <button
              onClick={() => setActiveTab("powerlist")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer border ${
                activeTab === "powerlist"
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Award className="w-4 h-4 text-[color:var(--gold-strong)]" />
              <span>Power List 2026</span>
            </button>

            <button
              onClick={() => setActiveTab("talks")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer border ${
                activeTab === "talks"
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Radio className="w-4 h-4 text-[color:var(--gold-strong)]" />
              <span>Keynotes, Panels &amp; Broadcasts ({VERIFIED_ENGAGEMENTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("awards")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer border ${
                activeTab === "awards"
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Enterprise Honors (7)</span>
            </button>

            <button
              onClick={() => setActiveTab("artifacts")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer border ${
                activeTab === "artifacts"
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Research &amp; Academic Chair</span>
            </button>

            <button
              onClick={() => setActiveTab("impact")}
              className={`flex items-center gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer border ${
                activeTab === "impact"
                  ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>STEM &amp; Volunteering</span>
            </button>
          </div>

          {/* TAB 1: POWER LIST 2026 */}
          {activeTab === "powerlist" && (
            <PowerListCard
              onInspect={() =>
                setSelectedCert({
                  title: "CXO Lanes IT Power List 2026 — Official Top 50 Winners Cohort",
                  url: "/events/cxo-powerlist-2026.jpg",
                })
              }
            />
          )}

          {/* TAB 2: KEYNOTES, PANELS & BROADCASTS (STANDARDIZED EDITORIAL SERIF & UPPERCASE TITLES) */}
          {activeTab === "talks" && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  { id: "all", label: "All Engagements" },
                  { id: "keynotes", label: "Keynotes & Summits" },
                  { id: "panels", label: "Panel Discussions" },
                  { id: "stem", label: "Women in STEM & Mentorship" },
                ].map((pill) => (
                  <button
                    key={pill.id}
                    onClick={() => setTalkFilter(pill.id as TalkCategory)}
                    className={`rounded-lg px-3 py-1.5 transition-all cursor-pointer border ${
                      talkFilter === pill.id
                        ? "border-[color:var(--gold)] bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                        : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {filteredTalks.map((talk) => {
                  // 1. Static Layout for Certificates (No hover image fade)
                  if (!talk.hasHoverReveal) {
                    return (
                      <div
                        key={talk.title}
                        className="relative rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/80 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                              {talk.tag}
                            </span>
                            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
                              {talk.date}
                            </span>
                          </div>

                          <div className="mt-4 flex items-start justify-between gap-2">
                            <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground leading-tight">
                              {talk.title}
                            </h4>
                            <span className="shrink-0 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:var(--gold-strong)] font-bold">
                              {talk.highlightPill}
                            </span>
                          </div>

                          <span className="font-sans text-xs text-muted-foreground font-medium block mt-1">
                            {talk.host}
                          </span>

                          <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-3.5 leading-relaxed">
                            "{talk.summary}"
                          </p>

                          <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
                        </div>

                        <div className="pt-4 mt-5 border-t border-border/30 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedCert({ title: talk.title, url: talk.actionUrl })
                            }
                            className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--gold)]/10 hover:bg-[color:var(--gold)]/25 px-3.5 sm:px-4 py-2 text-xs font-semibold text-[color:var(--gold-strong)] transition-all cursor-pointer border border-[color:var(--gold)]/30 shadow-sm"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>{talk.actionLabel}</span>
                          </button>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60">
                            Verified Attestation
                          </span>
                        </div>
                      </div>
                    );
                  }

                  // 2. Interactive focal reveals for event photos and posters
                  return (
                    <div
                      key={talk.title}
                      className="group relative min-h-[380px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-2xl hover:shadow-[color:var(--gold)]/15 flex flex-col justify-between"
                    >
                      {talk.previewImage && (
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center p-2.5 bg-black/5">
                          <img
                            src={talk.previewImage}
                            alt={talk.title}
                            className="h-full w-full object-contain object-center opacity-0 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
                          />
                        </div>
                      )}

                      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-border/40 pb-3 transition-opacity duration-300 ease-out group-hover:opacity-0 group-hover:pointer-events-none">
                        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                          {talk.tag}
                        </span>
                        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
                          {talk.date}
                        </span>
                      </div>

                      <div className="relative z-10 flex-1 flex flex-col justify-center py-3 sm:py-4 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:pointer-events-none">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground leading-tight">
                            {talk.title}
                          </h4>
                          <span className="shrink-0 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:var(--gold-strong)] font-bold">
                            {talk.highlightPill}
                          </span>
                        </div>

                        <span className="font-sans text-xs text-muted-foreground font-medium block mt-1">
                          {talk.host}
                        </span>

                        <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-3.5 leading-relaxed">
                          "{talk.summary}"
                        </p>

                        <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
                      </div>

                      <div className="relative z-20 pt-3 border-t border-border/30 group-hover:border-transparent flex items-center justify-between">
                        {talk.actionType === "modal" ? (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedCert({ title: talk.title, url: talk.actionUrl })
                            }
                            className="inline-flex items-center gap-2 rounded-xl bg-background/90 group-hover:bg-black/75 group-hover:text-amber-300 group-hover:border-amber-400/60 px-3.5 py-1.5 text-xs font-semibold text-[color:var(--gold-strong)] transition-all cursor-pointer border border-border/60 shadow-md backdrop-blur-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{talk.actionLabel}</span>
                          </button>
                        ) : (
                          <a
                            href={talk.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-background/90 group-hover:bg-black/75 group-hover:text-amber-300 group-hover:border-amber-400/60 px-3.5 py-1.5 text-xs font-semibold text-[color:var(--gold-strong)] transition-all border border-border/60 shadow-md backdrop-blur-md"
                          >
                            {talk.actionType === "youtube" || talk.actionType === "video" ? (
                              <PlayCircle className="w-3.5 h-3.5" />
                            ) : (
                              <Linkedin className="w-3.5 h-3.5" />
                            )}
                            <span>{talk.actionLabel}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground group-hover:text-white/80 group-hover:bg-black/60 group-hover:px-2 group-hover:py-0.5 group-hover:rounded transition-all">
                          Hover to Focus
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: ENTERPRISE AWARDS */}
          {activeTab === "awards" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {ENTERPRISE_AWARDS.map((award) => (
                <div
                  key={award.title}
                  className="rounded-2xl border border-border/80 bg-background/60 p-5 sm:p-6 shadow-md backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                        Issued by {award.issuer}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
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

                    <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground mt-4 leading-tight">
                      {award.title}
                    </h4>

                    <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-3.5 leading-relaxed">
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

          {/* TAB 4: RESEARCH & ACADEMIC CHAIR */}
          {activeTab === "artifacts" && (
            <div className="mt-8 space-y-6 animate-fadeIn">
              {ARTIFACTS.academicRoles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl border border-[color:var(--gold)]/60 bg-background/60 p-6 sm:p-8 backdrop-blur-sm shadow-md"
                >
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                    <BookmarkCheck className="w-4 h-4" /> Academic Leadership &amp; Peer Review
                  </div>
                  <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground mt-3">
                    {role.title}
                  </h4>
                  <span className="font-sans text-xs text-muted-foreground block mt-1">
                    {role.organization} &bull; {role.period}
                  </span>
                  <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-4 leading-relaxed">
                    "{role.body}"
                  </p>
                  <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
                </div>
              ))}

              <div className="rounded-2xl border border-border/80 bg-background/60 p-5 sm:p-8 backdrop-blur-sm shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[color:var(--gold)]/5">
                <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                    <BookOpen className="w-3.5 h-3.5" /> Published Technical Research
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {ARTIFACTS.publication.date}
                  </span>
                </div>

                <h4 className="font-sans text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground mt-4">
                  {ARTIFACTS.publication.title}
                </h4>

                <span className="font-sans text-xs text-muted-foreground block mt-1">
                  Publisher: {ARTIFACTS.publication.publisher}
                </span>

                <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-4 leading-relaxed">
                  "{ARTIFACTS.publication.body}"
                </p>
                <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {ARTIFACTS.projects.map((proj) => (
                  <div
                    key={proj.title}
                    className="rounded-2xl border border-border/80 bg-background/60 p-5 sm:p-6 backdrop-blur-sm shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                          Client // {proj.client}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {proj.date}
                        </span>
                      </div>

                      <h5 className="font-sans text-lg sm:text-xl font-bold uppercase text-foreground mt-4 leading-snug">
                        {proj.title}
                      </h5>

                      <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-3 leading-relaxed">
                        "{proj.body}"
                      </p>
                      <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ADVOCACY & VOLUNTEERING */}
          {activeTab === "impact" && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 animate-fadeIn">
              {VOLUNTEERING.map((vol) => (
                <div
                  key={vol.organization}
                  className="rounded-2xl border border-border/80 bg-background/60 p-5 sm:p-6 backdrop-blur-sm shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
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

                    <h4 className="font-sans text-xl font-bold uppercase text-foreground mt-4 leading-snug">
                      {vol.role}
                    </h4>

                    <span className="font-sans text-xs text-muted-foreground block mt-1">
                      {vol.organization} · {vol.period}
                    </span>

                    <p className="font-editorial text-lg italic text-foreground/90 mt-4 leading-relaxed">
                      "{vol.body}"
                    </p>
                    <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
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
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 md:px-14 border-t border-border/70 scroll-mt-24"
      >
        <SectionHeader index="03" kicker="Executive enterprise tracks" title="Delivery ledger" />

        <div ref={deliveryRef} className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Global Delivery · AI Transformation" />
          {DELIVERY_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div ref={aerospaceRef} className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Aerospace · Connected Systems" />
          {AEROSPACE_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div ref={engineeringRef} className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Foundational Engineering · Research" />
          {ENGINEERING_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>
      </section>

      {/* SECTION 04: EDUCATIONAL TIMELINE LEDGER */}
      <section
        ref={credentialsRef}
        id="credentials"
        className="relative z-10 border-t border-border/70 bg-card/10 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 md:px-14">
          <SectionHeader
            index="04"
            kicker="Academic &amp; verified credentials"
            title="Education ledger"
          />

          <div className="mt-12 sm:mt-16 space-y-4">
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
                className="group grid grid-cols-12 gap-5 sm:gap-6 rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {edu.year}
                  </div>

                  <div className="mt-3 h-10 w-10 rounded-full border border-[color:var(--gold)] bg-white p-0.5 shadow-sm overflow-hidden flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
                    <CompanyLogo
                      src={edu.logoUrl}
                      alt={`${edu.institution} logo`}
                      fallback={edu.institution.slice(0, 2).toUpperCase()}
                    />
                  </div>

                  <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    {edu.meta}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-9">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--gold-strong)]">
                    {edu.institution}
                  </div>
                  <h3 className="mt-2 font-sans text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="mt-3.5 font-editorial text-base sm:text-lg md:text-xl italic leading-snug text-foreground/80">
                    {edu.abstract}
                  </p>

                  {edu.pillars && (
                    <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                      {edu.pillars.map((p) => (
                        <div
                          key={p.title}
                          className="rounded-xl border border-border/70 bg-background/60 p-4 shadow-sm"
                        >
                          <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                            ● {p.title}
                          </div>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80 font-light">
                            {p.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                    {edu.domains.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/40"
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

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border/70 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 px-4 sm:px-6 py-8 sm:py-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:px-14">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span>© 2026 · Dr. Sandhya Haridas</span>
            <span className="text-[8px] text-muted-foreground/50 tracking-widest">
              Executive Workspace Interface · Secure
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-mono text-muted-foreground tracking-widest lowercase">
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

      {/* FLOATING BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 bg-background/85 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[color:var(--gold)]/20 cursor-pointer animate-fadeIn"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}

      {/* CERTIFICATE / MEDIA LIGHTBOX MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border/80 rounded-2xl p-4 md:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold truncate pr-2">
                {selectedCert.title || "Verified Record Attestation"}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-background/60 border border-border transition-colors cursor-pointer shrink-0"
              >
                Close [ESC]
              </button>
            </div>

            <div className="mt-4 max-h-[75vh] overflow-y-auto rounded-xl border border-border/40 bg-black/40 flex items-center justify-center p-2">
              <img
                src={selectedCert.url}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
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
    <div className="flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          § {index} — {kicker}
        </div>
        <h2 className="mt-2 sm:mt-3 font-sans text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase">
          {title}
        </h2>
      </div>
      <div className="hidden h-px flex-1 max-w-xs bg-gradient-to-r from-[color:var(--gold)] to-transparent md:block" />
    </div>
  );
}

function TrackLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-px w-8 sm:w-10 bg-[color:var(--gold-strong)]" />
      <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)]">
        {label}
      </span>
    </div>
  );
}

function TimelineCard({ job }: { job: Job }) {
  return (
    <article className="group grid grid-cols-12 gap-5 sm:gap-6 rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-card/70 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5">
      <div className="col-span-12 md:col-span-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
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
          <div className="mt-3 sm:mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {job.location}
          </div>
        )}
      </div>

      <div className="col-span-12 md:col-span-9">
        <div className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--gold-strong)]">
          {job.company}
        </div>
        <h3 className="mt-2 font-sans text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-foreground">
          {job.role}
        </h3>
        <p className="mt-3.5 font-editorial text-base sm:text-lg md:text-xl italic leading-snug text-foreground/80">
          {job.abstract}
        </p>

        {job.pillars && (
          <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
            {job.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border/70 bg-background/60 p-4 shadow-sm"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                  ● {p.title}
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80 font-light">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
          {job.domains.map((d) => (
            <span
              key={d}
              className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/40"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
