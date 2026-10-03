import { createFileRoute } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
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
  ShieldCheck,
  Cpu,
  Orbit,
  AlertTriangle,
  Compass,
} from "lucide-react";
import portraitImg from "@/assets/portrait.jpg";

// =========================================================================
// 1. DYNAMIC 5-PANEL EXECUTIVE PROOF BADGE WITH LOGOS
// =========================================================================
const EXECUTIVE_PROOFS = [
  {
    domain: "CRITICAL INFRASTRUCTURE",
    code: "CERT-IN.NAT",
    title: "CERT-In Empanelled Lead",
    quote:
      "Secured apex national cybersecurity empanelment across 300+ mission-critical facilities.",
    tag: "Apex Authority",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    fallback: "SE",
  },
  {
    domain: "ENTERPRISE AI BENCHMARK",
    code: "SE.GLOBAL",
    title: "+60% AI Engineering Gain",
    quote:
      "Authored proprietary optimization methodology exported as global benchmark across international plants.",
    tag: "Top 1–2% Rank",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    fallback: "SE",
  },
  {
    domain: "AEROSPACE & AIRWORTHINESS",
    code: "AERO.SAFE",
    metric: "Flight-Critical",
    title: "Airbus A350XWB Stress Clearance",
    quote:
      "Cleared primary structural stress calculations and real-time flight edge telemetry protocols.",
    tag: "Flight-Critical",
    logoUrl: "https://unavatar.io/airbus.com",
    fallback: "AB",
  },
  {
    domain: "GLOBAL SPACE MENTORSHIP",
    code: "NASA.LA26",
    title: "NASA Space Apps 2026 Mentor",
    quote:
      "Selected technical mentor guiding elite cohorts on mission telemetry blockers using open NASA datasets.",
    tag: "Space Apps '26",
    logoUrl: "https://unavatar.io/nasa.gov",
    fallback: "NA",
  },
  {
    domain: "DOCTORAL RESEARCH",
    code: "SSBM.DBA",
    title: "Explainable AI (XAI) Doctorate",
    quote:
      "Formalized operational trust calibration and human-in-the-loop diagnostic auditing layers.",
    tag: "DBA in AI",
    logoUrl: "https://unavatar.io/ssbm.ch",
    fallback: "DB",
  },
];

function CompanyLogo({ src, alt, fallback }: { src?: string; alt: string; fallback: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[color:var(--gold)]/20 font-mono text-[9px] font-bold text-[color:var(--gold-strong)] uppercase tracking-tight">
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

interface ExecutiveBadgeProps {
  activeFocus?: string;
  onSelectFocus?: (k: string) => void;
}

function ExecutiveHUD({ onSelectFocus }: ExecutiveBadgeProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % EXECUTIVE_PROOFS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = EXECUTIVE_PROOFS[activeIdx];

  const handleSelect = (idx: number) => {
    setActiveIdx(idx);
    if (onSelectFocus) {
      onSelectFocus(EXECUTIVE_PROOFS[idx].code);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--gold)]/50 bg-background/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-[color:var(--gold)] hover:shadow-[0_16px_36px_rgba(180,130,40,0.18)]">
      {/* Ambient Gold Radial Glow */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[color:var(--gold)]/15 blur-2xl" />

      {/* Top Header Row with Logo Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/40 pb-2.5">
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded-full border border-[color:var(--gold)]/60 bg-white p-0.5 shadow-xs overflow-hidden shrink-0 flex items-center justify-center">
            <CompanyLogo src={current.logoUrl} alt={current.domain} fallback={current.fallback} />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[color:var(--gold-strong)]">
            {current.domain}
          </span>
        </div>

        <span className="rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase tracking-wider text-[color:var(--gold-strong)]">
          {current.tag}
        </span>
      </div>

      {/* Dynamic Headline & Quote */}
      <div className="relative z-10 mt-3.5 min-h-[70px] flex flex-col justify-center">
        <h4 className="font-sans text-xs sm:text-[14px] font-black uppercase tracking-tight text-foreground">
          {current.title}
        </h4>
        <p className="font-editorial text-xs sm:text-[13px] italic text-foreground/80 mt-1 leading-snug">
          "{current.quote}"
        </p>
      </div>

      {/* 5-Step Progress Indicators */}
      <div className="relative z-10 mt-3.5 pt-2.5 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {EXECUTIVE_PROOFS.map((proof, i) => (
            <button
              key={proof.code}
              type="button"
              onClick={() => handleSelect(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 ${
                activeIdx === i
                  ? "w-6 bg-[color:var(--gold-strong)]"
                  : "w-2 bg-muted hover:bg-muted-foreground/40"
              }`}
              aria-label={`Switch to ${proof.title}`}
            />
          ))}
        </div>

        <span className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground/70 font-semibold">
          Verified Field Record ({activeIdx + 1}/5)
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 2. CXO POWER LIST COHORT CARD
// ==========================================
function PowerListCard({ onInspect }: { onInspect: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mt-8 relative min-h-[380px] overflow-hidden rounded-2xl border border-border/80 bg-background/95 p-6 md:p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-2xl hover:shadow-[color:var(--gold)]/15 flex flex-col justify-between"
    >
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-full md:w-1/2 z-0 overflow-hidden flex items-center justify-center p-4 transition-all duration-500 ease-out ${
          isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4"
        }`}
      >
        <div className="relative h-full max-h-[340px] aspect-square rounded-xl overflow-hidden border border-[color:var(--gold)]/40 shadow-2xl">
          <img
            src="/events/cxo-powerlist-2026.jpg"
            alt="CXO Lanes IT Power List 2026 Top 50 Winners"
            className="h-full w-full object-contain bg-black"
          />
          <div
            className="absolute rounded border border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.8)] pointer-events-none animate-pulse"
            style={{
              left: "23.4%",
              top: "86.8%",
              width: "10.8%",
              height: "12.2%",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start w-full">
        <div className="col-span-12 md:col-span-6 flex flex-col gap-3 min-w-0 bg-background/80 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-2 md:p-0 rounded-xl">
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-md border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[color:var(--gold-strong)] font-bold">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Peer Benchmarking · Top 50 National Distinction</span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 text-foreground">
            The Power List{" "}
            <span className="font-editorial italic font-normal text-[color:var(--gold-strong)] lowercase">
              2026
            </span>
          </h3>

          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Issued by CXO Lanes · Verified Executive Attribution
          </span>

          <p className="font-editorial text-lg sm:text-xl italic leading-relaxed text-foreground/90 mt-2">
            "Recognized among India's top IT and operational technology leaders for architecting
            mission-critical AI adoption across highly regulated industrial environments."
          </p>

          <div className="h-px w-16 bg-[color:var(--gold)]/60 my-1" />

          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-light">
            Independently audited attestation benchmarking contributions across Distributed Control
            Systems (DCS), safety instrumented architecture, and OT cybersecurity governance.
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
            <span>Inspect Cohort Placement</span>
          </button>
        </div>

        <span
          className={`font-mono text-[10px] uppercase tracking-wider transition-all ${
            isHovered
              ? "text-amber-300 bg-black/80 px-2.5 py-1 rounded-md border border-amber-500/30"
              : "text-muted-foreground"
          }`}
        >
          {isHovered ? "● Dr. Sandhya Haridas Attestation" : "Hover to Preview Roster"}
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
      { title: "Dr. Sandhya Haridas — Authority in Industrial AI & OT/IT Convergence" },
      {
        name: "description",
        content:
          "Authoritative body of work by Dr. Sandhya Haridas — Architect of safe industrial AI, national CERT-In OT cybersecurity infrastructure, and flight-critical avionics.",
      },
      { property: "og:title", content: "Dr. Sandhya Haridas — Field Authority & Record" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV_ITEMS = [
  { id: "agenda", label: "Mandate", icon: Compass },
  { id: "identity", label: "Authority", icon: User },
  { id: "accolades", label: "Evidence", icon: Trophy },
  { id: "timeline", label: "Trajectory", icon: History },
  { id: "credentials", label: "Research", icon: GraduationCap },
];

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

// 11 Formal Evidentiary Categories Structure
type CategoryKey =
  | "industry_impact"
  | "distinguished_talks"
  | "media_links"
  | "expert_judging"
  | "patents"
  | "conference_articles"
  | "journal_articles"
  | "textbooks"
  | "certifications"
  | "memberships"
  | "other_activities";

interface CategoryMeta {
  id: CategoryKey;
  label: string;
  icon: LucideIcon;
  count: number;
}

const CATEGORIES: CategoryMeta[] = [
  { id: "industry_impact", label: "INDUSTRY IMPACT", icon: Award, count: 4 },
  { id: "distinguished_talks", label: "DISTINGUISHED TALKS", icon: Radio, count: 6 },
  { id: "media_links", label: "MEDIA LINKS", icon: PlayCircle, count: 3 },
  { id: "expert_judging", label: "EXPERT JUDGING", icon: BookmarkCheck, count: 4 },
  { id: "patents", label: "PATENTS & IP", icon: Layers, count: 3 },
  { id: "conference_articles", label: "CONFERENCE ARTICLES", icon: BookOpen, count: 3 },
  { id: "journal_articles", label: "JOURNAL ARTICLES", icon: FileText, count: 1 },
  { id: "textbooks", label: "TEXT BOOKS", icon: BookOpen, count: 1 },
  { id: "certifications", label: "CERTIFICATIONS", icon: ShieldCheck, count: 8 },
  { id: "memberships", label: "MEMBERSHIPS", icon: User, count: 4 },
  { id: "other_activities", label: "OTHER ACTIVITIES", icon: GraduationCap, count: 4 },
];

const ENTERPRISE_AWARDS = [
  {
    title: "Global Disruptor Award",
    issuer: "Schneider Electric (Global President)",
    date: "2023",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    body: "Conferred by the Global President for pioneering AI engineering optimization frameworks that yielded over 60% efficiency improvement and 50% effort reduction across mission-critical execution pipelines.",
  },
  {
    title: "BU Vice President Choice Award",
    issuer: "Schneider Electric",
    date: "Apr 2025",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    body: "Awarded for architecting a digitally optimized, sustainable One Automation facility in Mahape, establishing real-time digital staging dashboards that accelerated plant turnaround by 25–30%.",
  },
  {
    title: "Program Management Excellence — Go Beyond",
    issuer: "Honeywell Connected Enterprise",
    date: "Dec 2020",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Recognized for critical resolution and leadership on the 131-9 HEM auxiliary power unit encryption key protocol for commercial aviation fleets.",
  },
  {
    title: "Go Beyond — STAR Award",
    issuer: "Honeywell Aerospace",
    date: "Jan 2018",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Directed technical demonstrations in Bangalore, winning the annual Science and Technology distinction across aerospace engineering operations.",
  },
  {
    title: "Bronze Award — Be a Zealot for Growth",
    issuer: "Honeywell Aerospace",
    date: "Aug 2017",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Formulated foundational operational business architecture and algorithmic parameters for airline Fuel Analytics and Standard Operating Procedure (SOP) flight monitoring.",
  },
  {
    title: "STAR Award — Connected World & IoT",
    issuer: "Honeywell Aerospace",
    date: "Mar 2017",
    logoUrl: "https://unavatar.io/honeywell.com",
    body: "Delivered authoritative industry positioning and technical differentiation across ten global aerospace operators in Connected Aircraft and edge IoT data networks.",
  },
  {
    title: "Best Kaizen & Early Bird Awards",
    issuer: "GE Healthcare & UTC Aerospace",
    date: "2008 — 2009",
    logoUrl: "https://unavatar.io/gehealthcare.com",
    body: "Honored with the GE Healthcare Best Kaizen Award for thermodynamic mathematical models inside high-vacuum imaging systems, and UTC Early Bird Award for B787 aerostructure nacelle calculations.",
  },
];

type VerifiedEngagement = {
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

const DISTINGUISHED_TALKS: VerifiedEngagement[] = [
  {
    tag: "ACADEMIC SYMPOSIUM KEYNOTE",
    title: "Reimagining Manufacturing with Cognitive AI",
    host: "PES University · Center for Cognitive Computing (C3I), Bangalore",
    date: "Feb 14, 2026",
    summary:
      "Inaugural keynote address delivered on bridging cognitive AI models with edge deployment across smart factory shop-floors and real-time sensor networks.",
    highlightPill: "Keynote Address",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-pooja-agarwal_aiformanufacturing-aisymposium-manufacturinginnovation-ugcPost-7425879188433186816-MC2g/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/pes-symposium.png",
    hasHoverReveal: true,
  },
  {
    tag: "NATIONAL LEADERSHIP SUMMIT",
    title: "CII Women in STEM Leadership Summit 2026",
    host: "Confederation of Indian Industry (CII) · New Delhi",
    date: "2026",
    summary:
      "Invited panelist alongside leaders from government, industrial manufacturing, and global academia on accelerating women's executive participation in digital transformation.",
    highlightPill: "Summit Panel",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_cii-womeninstem-womenleadership-ugcPost-7492107007378817025-KLT5/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/cii-summit.jpg",
    hasHoverReveal: true,
  },
  {
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
    tag: "AERO WOMEN'S COUNCIL INAUGURAL",
    title: "Commercial Artificial Intelligence Solutions in Aerospace",
    host: "Honeywell Aero Women's Council (AWC)",
    date: "Jun 28, 2022",
    summary:
      "Keynote presentation providing a global aerospace engineering audience a comprehensive overview of machine learning paradigms, flight-to-ground edge data, and business aviation applications.",
    highlightPill: "AWC Keynote",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_datascience-automation-technology-share-6952524441356558336-JukE/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/aero-awc.png",
    hasHoverReveal: true,
  },
  {
    tag: "ENGINEERING FORUM LEAD",
    title: "Role of Data Analytics & AI in the Enterprise World",
    host: "Honeywell Women In Technology (WIT) Hub",
    date: "Jun 21, 2022",
    summary:
      "Technical lecture exploring aerospace telemetry architectures, ML production pipelines, and operational ROI modeling for Honeywell global engineering units.",
    highlightPill: "Tech Lecture",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/dr-sandhya-haridas-13a84217_ai-share-ml-share-6958044738864263168-d4Zf/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/honeywell-ai.png",
    hasHoverReveal: true,
  },
  {
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
];

const MEDIA_ENGAGEMENTS: VerifiedEngagement[] = [
  {
    tag: "EXECUTIVE ACADEMIC SYMPOSIUM · BSMART",
    title: "The AI-First MBA: What Should We Still Teach When AI Can Do Almost Everything?",
    host: "Business Standard BSmart Insight Talk",
    date: "Sep 9, 2026",
    summary:
      "Featured keynote panelist alongside Deans and Leadership from IIM Bangalore, SP Jain Global, and MAHE evaluating human cognitive oversight in autonomous enterprise architectures.",
    highlightPill: "Featured Keynote",
    actionType: "youtube",
    actionUrl: "https://www.youtube.com/watch?v=yebJUmHuWS0",
    actionLabel: "Watch Broadcast on YouTube",
    previewImage: "/events/bsmart-mba.jpg",
    hasHoverReveal: true,
  },
  {
    tag: "BROADCAST INTERVIEW · BSMART",
    title: "Opportunities in Automated Manufacturing & Industry AI",
    host: "Business Standard",
    date: "Jul 21, 2026",
    summary:
      "Broadcast leadership feature addressing non-delegable human accountability required when deploying autonomous cognitive models in continuous manufacturing and heavy industrial plants.",
    highlightPill: "Featured Broadcast",
    actionType: "video",
    actionUrl:
      "https://www.business-standard.com/video-gallery/education/opportunities-in-automated-manufacturing-179110.htm",
    actionLabel: "Watch on Business Standard",
    previewImage: "/events/business-standard.jpg",
    hasHoverReveal: true,
  },
  {
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
];

const EXPERT_JUDGING_ITEMS: VerifiedEngagement[] = [
  {
    tag: "INTERNATIONAL CONFERENCE SESSION CHAIR",
    title: "Session Chair — ICDPN-2026 (Data-Processing & Networking)",
    host: "VŠTE Czech Republic, Slovak Univ. of Agriculture, Igor Sikorsky KPI Ukraine & CIT",
    date: "Sep 25–26, 2026",
    summary:
      "Presided as official Session Chair for the International Conference on Data-Processing and Networking (ICDPN-2026) in cooperation with Springer, adjudicating scholarly presentations across distributed computing and intelligent systems.",
    highlightPill: "Session Chair",
    actionType: "certificate",
    actionUrl: "/certificates/icdpn-2026-session-chair.jpg",
    actionLabel: "Inspect Chair Certificate",
    hasHoverReveal: false,
  },
  {
    tag: "IEEE TECHNICAL PEER REVIEWER",
    title: "Official Reviewer — 7th IEEE INDISCON 2026",
    host: "IEEE India Council & IEEE Rajasthan Subsection · MNIT Jaipur",
    date: "Sep 11–13, 2026",
    summary:
      "Served as technical peer reviewer for the 7th IEEE India Council International Subsections Conference (INDISCON 2026), evaluating technical rigor and original research contributions across advanced computing and communication tracks.",
    highlightPill: "IEEE Reviewer",
    actionType: "certificate",
    actionUrl: "/certificates/ieee-indiscon-2026.jpg",
    actionLabel: "Inspect IEEE Certificate",
    hasHoverReveal: false,
  },
  {
    tag: "GLOBAL AEROSPACE MENTORSHIP",
    title: "NASA Space Apps Challenge Los Angeles 2026",
    host: "NASA Space Apps Organizing Team · Los Angeles",
    date: "Oct 2026",
    summary:
      "Selected as Official Technical Mentor to guide high-intensity multidisciplinary engineering teams troubleshooting blockers and designing solutions using NASA open telemetry datasets.",
    highlightPill: "NASA Mentor",
    actionType: "linkedin",
    actionUrl: "https://www.spaceappschallenge.org/",
    actionLabel: "Visit Space Apps Global",
    previewImage: "/events/nasa-spaceapps-la.png",
    hasHoverReveal: true,
  },
  {
    tag: "FEATURED KEYNOTE & MENTOR",
    title: "Katalyst India Alumni Leadership Meet",
    host: "Katalyst India · Bangalore",
    date: "2024",
    summary:
      "Featured guest speaker alongside Sanjay Gopinath (MathWorks), mentoring and evaluating 50+ women engineering scholars and alumni on technical mastery and executive leadership.",
    highlightPill: "500+ Coached",
    actionType: "linkedin",
    actionUrl:
      "https://www.linkedin.com/posts/sahana113_katalystindia-alumnimeet-networking-ugcPost-7477746463570317312-nyb_/",
    actionLabel: "Open Post on LinkedIn",
    previewImage: "/events/katalyst-alumni.jpg",
    hasHoverReveal: true,
  },
];

const PATENTS_IP_ITEMS = [
  {
    tag: "PATENT PROCEEDINGS / GE RESEARCH",
    title: "Thermal Behaviour of Variable Conductance Heat Pipes in Vacuum Chambers",
    meta: "GE Patenting Forum / GE Healthcare · Oct 11, 2004",
    summary:
      "Developed mathematical thermal management models and heat dissipation algorithms for high-vacuum medical imaging equipment, published via the GE Patenting Forum.",
  },
  {
    tag: "PROPRIETARY INDUSTRIAL AI FRAMEWORK",
    title: "Deterministic AI Optimization Engine for Plant Automation",
    meta: "Schneider Electric Enterprise Intellectual Property · 2023",
    summary:
      "Pioneered proprietary engineering optimization methodology yielding 60%+ efficiency improvement and 50% effort reduction across mission-critical execution pipelines.",
  },
  {
    tag: "SECURE AVIONICS TELEMETRY ARCHITECTURE",
    title: "131-9 HEM APU Encryption Protocol & Connected Aircraft Engine",
    meta: "Honeywell Connected Enterprise · Dec 2020",
    summary:
      "Architected secure auxiliary power unit encryption key management and flight-to-ground edge telemetry channels for commercial aviation fleets.",
  },
];

const CONFERENCE_ARTICLES = [
  {
    tag: "SPRINGER / INTERNATIONAL CONFERENCE KEYNOTE",
    title: "Next-Generation Data Engineering & Analytics (INDEA-2026)",
    meta: "University of Salford (Manchester, UK) & Universal Inovators / Springer · Aug 2026",
    summary:
      "Keynote proceedings presenting state-of-the-art architectures in Explainable AI (XAI), scalable edge computing, and industrial telemetry analytics.",
    certUrl: "/certificates/indea-2026.png",
  },
  {
    tag: "INTERNATIONAL CONFERENCE PROCEEDINGS",
    title: "Sustainable & Innovative Practices in Business and Academia",
    meta: "JAIN (Deemed-to-be University) · CMS · Dec 2024",
    summary:
      "Conference keynote address evaluating sustainable cloud transformation, resilient supply chains, and AI adoption frameworks across regulated environments.",
    certUrl: "/certificates/jain-keynote.png",
  },
  {
    tag: "AEROSPACE CONCESSIONS & DAMAGE TOLERANCE",
    title: "Airbus A350XWB & A380 Primary Airframe Stress Clearances",
    meta: "Premium Aerotech Augsburg & Creative Synergies · 2011 – 2012",
    summary:
      "Stress focal clearing structural concessions on A350XWB fuselage sections and B777 fatigue/damage tolerance under strict EASA/Airbus quality protocols.",
  },
];

const CERTIFICATION_ITEMS = [
  {
    tag: "INTERNATIONAL ACADEMIC EXCELLENCE AWARD",
    title: "Responsible AI & Ethics Excellence Award (FUSION Awards 2026)",
    meta: "ICDPN-2026 · Czech Republic, Slovakia & Ukraine Consortium · Sep 2026",
    summary:
      "Conferred Certificate of Excellence following competitive peer evaluation across 2,500+ global submissions, recognizing top 1–2% distinction for groundbreaking impact in Responsible AI and ethical framework governance.",
    certUrl: "/certificates/fusion-awards-2026.jpg",
  },
  {
    tag: "EXECUTIVE CREDENTIAL",
    title: "Disruptive Strategy Innovation with Clayton Christensen",
    meta: "Harvard Business School Online · Boston, MA · 2016",
    summary:
      "Advanced mastery of Christensen disruption frameworks, market barrier navigation, and strategic resource allocation during technology paradigm shifts.",
  },
  {
    tag: "QUALITY EXCELLENCE",
    title: "Six-Sigma Green Belt Certification",
    meta: "GE Healthcare · 2005",
    summary:
      "Certified in statistical process control, root cause elimination, and DMAIC methodologies applied to critical medical manufacturing systems.",
  },
  {
    tag: "ACCREDITATION",
    title: "Explainable AI (XAI) in Aerospace Systems",
    meta: "IABAC (International Association of Business Analytics Certification) · 2023",
    summary:
      "Specialized credential validating operational Explainable AI application standards in flight analytics.",
    certUrl: "/certificates/iabac-xai.jpeg",
  },
  {
    tag: "CONFERENCE HONOR",
    title: "Keynote Appreciation Award — INDEA 2026",
    meta: "University of Salford & Springer · Aug 2026",
    summary:
      "Official certificate recognizing authoritative keynote contributions in scalable data analytics and edge AI.",
    certUrl: "/certificates/indea-2026.png",
  },
  {
    tag: "ACADEMIC HONOR",
    title: "Keynote Appreciation Certificate — JAIN University",
    meta: "CMS International Conference · Dec 2024",
    summary:
      "Official citation conferred for keynote address on sustainable technological innovation in industry.",
    certUrl: "/certificates/jain-keynote.png",
  },
  {
    tag: "SUSTAINABILITY CREDENTIAL",
    title: "Sustainability and Circular Economy",
    meta: "University of Glasgow · 2023",
    summary:
      "Advanced executive training in circular economy principles, sustainable industrial design, and ESG framework alignment across manufacturing ecosystems.",
  },
  {
    tag: "ADVANCED IoT SPECIALIZATION",
    title: "Industrial Internet of Things (IIoT)",
    meta: "King's College London · 2018",
    summary:
      "Professional accreditation in edge computing protocols, sensor telemetry, and connected smart manufacturing network architecture.",
  },
];

const MEMBERSHIP_ITEMS = [
  {
    tag: "NATIONAL COUNCIL",
    title: "CII Women in STEM Leadership Council",
    meta: "Confederation of Indian Industry (CII) · 2026",
    summary:
      "Executive member contributing to national policy dialogs on accelerating women leadership in industrial technology and manufacturing.",
  },
  {
    tag: "GLOBAL AMBASSADOR",
    title: "Women in Industrial Automation & Sustainable Cloud",
    meta: "Schneider Electric Official Global Campaign · 2024",
    summary:
      "Official corporate brand ambassador representing leadership across AI, IoT, cloud, and sustainable energy.",
  },
  {
    tag: "AEROSPACE LEADERSHIP",
    title: "Honeywell Aero Women's Council (AWC)",
    meta: "Honeywell Aerospace · 2022",
    summary:
      "Founding technical speaker and leadership mentor across Honeywell's global engineering councils.",
  },
  {
    tag: "MILITARY AVIATION WING",
    title: "National Cadet Corps (NCC) Airwing Alumna",
    meta: "Bangalore University · Airwing Division",
    summary:
      "Trained in high-altitude Paragliding and Scale Aircraft Aerodynamics, fostering aeronautical discipline.",
  },
];

const VOLUNTEERING = [
  {
    role: "Official Technical Mentor — Space Apps 2026",
    organization: "NASA Space Apps Challenge Los Angeles",
    period: "Oct 2026",
    domain: "Aerospace & Mission Data",
    logoUrl: "https://unavatar.io/nasa.gov",
    body: "Advising multidisciplinary engineering teams on utilizing NASA open data architecture to overcome high-consequence space and planetary mission challenges.",
  },
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
    role: "Business Unit Head · Director India-Operations & Delivery",
    logoUrl: "https://unavatar.io/schneider-electric.com",
    abstract:
      "Full P&L and operational accountability over $97.2M USD revenue and 350+ engineers. Managed 300+ mission-critical installations across refineries, power plants, and chemical manufacturing with zero safety incidents.",
    pillars: [
      {
        title: "Pioneering CERT-In Empanelment",
        body: "Secured apex national cybersecurity auditing empanelment from the Ministry of Electronics & IT, qualifying the unit to audit government and critical infrastructure operational technology assets.",
      },
      {
        title: "Proprietary AI Engineering Framework",
        body: "Engineered and deployed proprietary AI optimization models resulting in 60%+ efficiency improvement and 50% effort reduction, subsequently adopted across Schneider Electric international sites.",
      },
    ],
    domains: ["$97.2M P&L", "CERT-In Empanelment", "60% AI Efficiency", "Zero Incident Safety"],
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
  {
    year: "2000 — 2003",
    company: "GTRE & ISRO Satellite Centre",
    role: "Trainee Engineer — Aerospace Propulsion & Satellite Systems",
    logoUrl: "https://unavatar.io/isro.gov.in",
    fallback: "ISRO",
    location: "Bangalore, India",
    abstract:
      "Conducted structural and thermal analysis on India's indigenous Kaveri Engine turbine discs and compressor stages for GTRE, qualifying components for Department Scientist sign-off. Built thermal algorithm POC software for ISRO scientists to validate satellite temperature control models in orbit.",
    domains: [
      "Kaveri Engine",
      "ISRO Satellite Centre",
      "Thermal POC Software",
      "Turbine Aerodynamics",
    ],
  },
];

function EngagementCard({
  item,
  onSelectCert,
}: {
  item: VerifiedEngagement;
  onSelectCert: (cert: { title: string; url: string }) => void;
}) {
  const isReveal = Boolean(item.hasHoverReveal && item.previewImage);

  return (
    <div className="group relative min-h-[380px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-border/80 bg-background/90 p-5 sm:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-2xl hover:shadow-[color:var(--gold)]/15 flex flex-col justify-between">
      {/* Background image — only rendered when an image exists */}
      {isReveal && item.previewImage && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center p-2.5 bg-black/5">
          <img
            src={item.previewImage}
            alt={item.title}
            className="h-full w-full object-contain object-center opacity-0 scale-95 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100"
          />
        </div>
      )}

      {/* Header — only fades on hover if an image reveal is active */}
      <div
        className={`relative z-10 flex items-center justify-between gap-2 border-b border-border/40 pb-3 transition-opacity duration-300 ease-out ${
          isReveal ? "group-hover:opacity-0 group-hover:pointer-events-none" : ""
        }`}
      >
        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
          {item.tag}
        </span>
        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">
          {item.date}
        </span>
      </div>

      {/* Main Content — remains 100% visible if there is no background image */}
      <div
        className={`relative z-10 flex-1 flex flex-col justify-center py-3 sm:py-4 transition-all duration-300 ease-out ${
          isReveal ? "group-hover:opacity-0 group-hover:pointer-events-none" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground leading-tight">
            {item.title}
          </h4>
          <span className="shrink-0 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/15 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:var(--gold-strong)] font-bold">
            {item.highlightPill}
          </span>
        </div>

        <span className="font-sans text-xs text-muted-foreground font-medium block mt-1">
          {item.host}
        </span>

        <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-3.5 leading-relaxed">
          "{item.summary}"
        </p>

        <div className="h-px w-12 bg-[color:var(--gold)]/50 mt-4" />
      </div>

      {/* Action Footer */}
      <div
        className={`relative z-20 pt-3 border-t border-border/30 flex items-center justify-between ${
          isReveal ? "group-hover:border-transparent" : ""
        }`}
      >
        {item.actionType === "certificate" || item.actionType === "modal" ? (
          <button
            type="button"
            onClick={() => onSelectCert({ title: item.title, url: item.actionUrl })}
            className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-semibold text-[color:var(--gold-strong)] transition-all cursor-pointer border shadow-md backdrop-blur-md ${
              isReveal
                ? "bg-background/90 group-hover:bg-black/75 group-hover:text-amber-300 group-hover:border-amber-400/60 border-border/60"
                : "bg-[color:var(--gold)]/10 hover:bg-[color:var(--gold)]/25 border-[color:var(--gold)]/30"
            }`}
          >
            {item.actionType === "modal" ? (
              <Maximize2 className="w-3.5 h-3.5" />
            ) : (
              <FileText className="w-3.5 h-3.5" />
            )}
            <span>{item.actionLabel}</span>
          </button>
        ) : (
          <a
            href={item.actionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-background/90 group-hover:bg-black/75 group-hover:text-amber-300 group-hover:border-amber-400/60 px-3.5 py-1.5 text-xs font-semibold text-[color:var(--gold-strong)] transition-all border border-border/60 shadow-md backdrop-blur-md"
          >
            {item.actionType === "youtube" || item.actionType === "video" ? (
              <PlayCircle className="w-3.5 h-3.5" />
            ) : (
              <Linkedin className="w-3.5 h-3.5" />
            )}
            <span>{item.actionLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}

        <span
          className={`font-mono text-[9px] uppercase tracking-wider text-muted-foreground transition-all ${
            isReveal
              ? "group-hover:text-white/80 group-hover:bg-black/60 group-hover:px-2 group-hover:py-0.5 group-hover:rounded"
              : ""
          }`}
        >
          {isReveal ? "Hover to Preview" : "Verified Record"}
        </span>
      </div>
    </div>
  );
}

function Index() {
  const [activeNav, setActiveNav] = useState("identity");
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("industry_impact");
  const [selectedCert, setSelectedCert] = useState<{ title: string; url: string } | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const agendaRef = useRef<HTMLDivElement | null>(null);

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

      {/* MINIMALIST HEADER DOCK */}
      <header className="sticky top-3.5 z-50 mx-auto max-w-6xl px-3 sm:px-6 md:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/85 px-4 sm:px-6 py-2.5 backdrop-blur-xl shadow-lg">
          <button
            onClick={() => handleScrollTo("identity")}
            className="group cursor-pointer border-0 bg-transparent p-0 transition-all duration-200 focus:outline-none select-none text-left"
            aria-label="Dr. Sandhya Haridas"
          >
            <div className="font-sans text-[13.5px] font-black tracking-tight text-foreground uppercase transition-colors group-hover:text-[color:var(--gold-strong)] leading-none">
              Dr. Sandhya Haridas
            </div>
            <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
              Industrial AI &amp; Critical Systems
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
                  className={`relative flex items-center gap-1.5 sm:gap-2 h-8 sm:h-9 px-2.5 sm:px-3 rounded-lg font-sans text-xs font-medium transition-all duration-300 ease-out cursor-pointer overflow-hidden border-0 ${
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
                    EXTRAORDINARY ABILITY · INDUSTRIAL AI · OT/IT CONVERGENCE · CRITICAL SYSTEMS ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-3 sm:inset-3.5 flex flex-col items-center justify-center rounded-full bg-background/95 backdrop-blur-md md:inset-7 shadow-lg">
                <span className="font-mono text-[6.5px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.25em] text-muted-foreground">
                  USCIS
                </span>
                <span className="font-editorial text-lg sm:text-xl md:text-2xl italic leading-none text-foreground my-0.5">
                  Top 1%
                </span>
                <span className="font-mono text-[6.5px] sm:text-[7px] md:text-[8px] uppercase tracking-[0.2em] text-[color:var(--gold-strong)] font-bold">
                  ● PEER RANK
                </span>
              </div>
            </div>
          </div>

          <div className="absolute left-[-20px] bottom-1 z-20 hidden w-[340px] md:block lg:left-[-60px] lg:w-[380px]">
            <ExecutiveHUD />
          </div>
        </div>

        <div className="mt-6 block md:hidden w-full max-w-[420px] mx-auto">
          <ExecutiveHUD />
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Extraordinary Ability Evidentiary Record · 01
          </div>
          <h1 className="mt-3 sm:mt-4 font-sans-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-foreground uppercase">
            Dr. Sandhya{" "}
            <span className="font-editorial italic font-normal text-muted-foreground lowercase">
              Haridas
            </span>
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-muted-foreground md:text-[12px] px-2">
            Vice President &amp; Global Delivery Unit Head · L&amp;T Technology Services
            <span className="mx-2 text-[color:var(--gold-strong)]">·</span>
            Former BU Head &amp; Director · Schneider Electric
          </p>

          {/* QUANTITATIVE BENCHMARK LEDGER */}
          <div className="mx-auto mt-8 sm:mt-10 max-w-4xl rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md shadow-sm overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    P&amp;L Authority
                  </span>
                  <Activity className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  $97.2
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    M
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Led 350+ Engineers
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Efficiency Gain
                  </span>
                  <Cpu className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  60
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    %+
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  AI Engineering Benchmark
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Cybersecurity
                  </span>
                  <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  CERT
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    -In
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  National OT Empanelment
                </div>
              </div>

              <div className="p-4 sm:p-6 text-left flex flex-col justify-between hover:bg-card/60 transition-colors">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">
                    NASA Mission
                  </span>
                  <Orbit className="h-3.5 w-3.5 text-[color:var(--gold-strong)]" />
                </div>
                <div className="mt-2 sm:mt-3 font-sans text-2xl sm:text-4xl font-black text-foreground tracking-tight">
                  LA
                  <span className="font-editorial italic font-normal text-lg sm:text-xl text-[color:var(--gold-strong)]">
                    '26
                  </span>
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground font-medium">
                  Space Apps Technical Mentor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01B: ABOUT ME — EXECUTIVE PROFILE & BIOGRAPHY */}
      <section
        id="agenda"
        ref={agendaRef}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:px-14 border-t border-border/70 scroll-mt-24"
      >
        <SectionHeader index="01" kicker="Executive Profile & Biography" title="About Me" />

        {/* 3-COLUMN EXECUTIVE DOSSIER (BIO + SCOPE + DOMAIN EXPERTISE) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* COLUMN 1: BIOGRAPHICAL NARRATIVE */}
          <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-8 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[color:var(--gold-strong)]">
                  Personal Biography
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Leadership Journey
                </span>
              </div>

              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
                Dr. Sandhya Haridas
              </h3>
              <div className="font-mono text-xs text-[color:var(--gold-strong)] -mt-2">
                Vice President · Global Delivery Unit Head
              </div>

              <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-normal">
                Dr. Sandhya Haridas is an accomplished global technology executive with over 26
                years of cross-functional leadership across Industrial Automation, Commercial
                Aerospace, Defense, and Enterprise AI transformation.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                Her engineering foundation began in propulsion and satellite systems, conducting
                structural and thermal analysis on India&apos;s indigenous Kaveri fighter engine at
                the Gas Turbine Research Establishment (GTRE) and developing orbital thermal control
                simulation models for Indian Space Research Organisation (ISRO) scientists.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                Over two decades, she transitioned from solving flight-critical airframe stresses
                (Airbus A350XWB, A380, and Boeing 787) and high-vacuum medical thermodynamic
                algorithms at GE Healthcare to managing multi-million-dollar delivery portfolios and
                country-level business units for global enterprises including Honeywell, Schneider
                Electric, and L&amp;T Technology Services.
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal">
                She holds a Doctor of Business Administration (DBA) in Artificial Intelligence from
                the Swiss School of Business and Management (Geneva), focusing on Explainable AI
                (XAI) verification layers and enterprise risk governance in automated physical
                systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span>Academic Heritage</span>
              <span className="text-[color:var(--gold-strong)] font-semibold">
                DBA · MBA · B.E. Mechanical
              </span>
            </div>
          </div>

          {/* COLUMN 2: EXECUTIVE PROFILE & GOVERNANCE SCOPE */}
          <div className="lg:col-span-4 rounded-2xl border border-[color:var(--gold)]/50 bg-gradient-to-b from-background via-[color:var(--gold)]/[0.03] to-background p-6 sm:p-8 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[color:var(--gold)]/30 pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[color:var(--gold-strong)]">
                  Executive Profile
                </span>
                <span className="rounded-md border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2 py-0.5 font-mono text-[9px] font-bold text-[color:var(--gold-strong)]">
                  26+ Years Exp
                </span>
              </div>

              <h4 className="font-sans text-lg font-bold text-foreground leading-snug">
                Commercial P&amp;L &amp; Enterprise Stewardship
              </h4>

              <p className="text-xs sm:text-[13px] text-foreground/80 leading-relaxed font-normal">
                A transformational leader with a proven record of steering large-scale digital
                transformations that bridge Operational Technology (OT) and Information Technology
                (IT), driving disciplined CAPEX/OPEX capital allocation, customer loyalty, and
                long-term enterprise resilience.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="rounded-xl border-l-2 border-[color:var(--gold-strong)] bg-card/60 p-3">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-foreground">
                    $102M P&amp;L Accountability
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Led full country operations, delivering 11% YoY revenue growth and margin
                    expansion to 33.4%.
                  </div>
                </div>

                <div className="rounded-xl border-l-2 border-[color:var(--gold-strong)] bg-card/60 p-3">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-foreground">
                    450+ Team Leadership
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Steered multi-plant operations and global cross-functional engineering units
                    across 6 international geographies.
                  </div>
                </div>

                <div className="rounded-xl border-l-2 border-[color:var(--gold-strong)] bg-card/60 p-3">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-foreground">
                    Boardroom &amp; C-Suite Advisory
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Aligning generative and agentic AI roadmaps with corporate governance, safety
                    standards, and ESG sustainability.
                  </div>
                </div>

                <div className="rounded-xl border-l-2 border-[color:var(--gold-strong)] bg-card/60 p-3">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-foreground">
                    Agile Execution (SAFe RTE)
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
                    Certified CSPO, PSM, and Release Train Engineer managing $250M program
                    lifecycles and connected IoT architectures.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[color:var(--gold)]/30 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span>Operational Scale</span>
              <span className="text-[color:var(--gold-strong)] font-semibold">
                ● Full Country Governance
              </span>
            </div>
          </div>

          {/* COLUMN 3: STRUCTURED AREAS OF EXPERTISE */}
          <div className="lg:col-span-3 rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-8 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/40 pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[color:var(--gold-strong)]">
                  Area of Expertise
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                  Competencies
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-foreground block tracking-wider">
                    Domain &amp; Industry Scope
                  </span>
                  <div className="mt-2 space-y-1.5 text-muted-foreground leading-snug">
                    <div>• Industry X.0 &amp; Smart Manufacturing</div>
                    <div>• Manufacturing Execution Systems (MES)</div>
                    <div>• Digital Twins &amp; Closed-Loop Ops</div>
                    <div>• OT/IT Convergence Architecture</div>
                    <div>• Industrial IoT &amp; Telemetry Analytics</div>
                    <div>• Supply Chain &amp; Operations Management</div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-foreground block tracking-wider">
                    Technology &amp; Innovation
                  </span>
                  <div className="mt-2 space-y-1.5 text-muted-foreground leading-snug">
                    <div>• Explainable AI (XAI) Verification</div>
                    <div>• Edge Computing &amp; Sensor telemetry</div>
                    <div>• Generative &amp; Predictive AI in Ops</div>
                    <div>• SaaS &amp; Cloud Telemetry Platforms</div>
                    <div>• Data Monetization Architectures</div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-3">
                  <span className="font-mono text-[10px] uppercase font-bold text-foreground block tracking-wider">
                    Governance &amp; Airworthiness
                  </span>
                  <div className="mt-2 space-y-1.5 text-muted-foreground leading-snug">
                    <div>• CERT-In Apex Cybersecurity Auditing</div>
                    <div>• Flight-Critical Avionics Stress Analysis</div>
                    <div>• SAFe Agile (RTE, CSPO, PSM)</div>
                    <div>• Six Sigma Green Belt (DMAIC)</div>
                    <div>• ESG &amp; Circular Economy Frameworks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span>National Certification</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                CERT-In Empanelled
              </span>
            </div>
          </div>
        </div>

        {/* COMPACT GLOBAL GEOGRAPHY FOOTER STRIP */}
        <div className="mt-6 rounded-xl border border-border/70 bg-card/40 p-3.5 sm:p-4 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground shadow-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[color:var(--gold-strong)] shrink-0" />
            <strong className="text-foreground">International GCC &amp; Delivery Footprint:</strong>
            <span>
              United States · Germany · France · Spain · United Arab Emirates · Singapore · India
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-[color:var(--gold-strong)] uppercase tracking-wider">
              Fortune 500 Executive Partner
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 02: FORMAL 11-CATEGORY EVIDENTIARY REPOSITORY */}
      <section
        id="accolades"
        className="relative z-10 border-t border-border/70 bg-card/20 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:px-14">
          <SectionHeader
            index="02"
            kicker="Verifiable Industry Footprint & Accreditations"
            title="Evidence of Record"
          />

          {/* 11-Category Interactive Navigation */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 border-b border-border/60 pb-4 text-xs font-medium">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-2 transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/20 text-[color:var(--gold-strong)] font-bold shadow-sm"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                  <span className="ml-1 rounded-full bg-background/60 px-1.5 py-0.2 font-mono text-[9px] text-muted-foreground">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tab 01: INDUSTRY IMPACT */}
          {activeCategory === "industry_impact" && (
            <div className="mt-8 space-y-8 animate-fadeIn">
              {/* Power List Cohort Card */}
              <PowerListCard
                onInspect={() =>
                  setSelectedCert({
                    title: "CXO Lanes IT Power List 2026 — Official Top 50 Winners Cohort",
                    url: "/events/cxo-powerlist-2026.jpg",
                  })
                }
              />

              {/* Enterprise Awards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
            </div>
          )}

          {/* Tab 02: DISTINGUISHED TALKS */}
          {activeCategory === "distinguished_talks" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {DISTINGUISHED_TALKS.map((talk) => (
                <EngagementCard key={talk.title} item={talk} onSelectCert={setSelectedCert} />
              ))}
            </div>
          )}

          {/* Tab 03: MEDIA LINKS */}
          {activeCategory === "media_links" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {MEDIA_ENGAGEMENTS.map((item) => (
                <EngagementCard key={item.title} item={item} onSelectCert={setSelectedCert} />
              ))}
            </div>
          )}

          {/* Tab 04: EXPERT JUDGING */}
          {activeCategory === "expert_judging" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {EXPERT_JUDGING_ITEMS.map((item) => (
                <EngagementCard key={item.title} item={item} onSelectCert={setSelectedCert} />
              ))}
            </div>
          )}

          {/* Tab 05: PATENTS & IP */}
          {activeCategory === "patents" && (
            <div className="mt-8 space-y-5 animate-fadeIn">
              {PATENTS_IP_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-7 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Proprietary Framework
                    </span>
                  </div>
                  <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground mt-3 leading-tight">
                    {item.title}
                  </h4>
                  <span className="font-sans text-xs text-muted-foreground block mt-1">
                    {item.meta}
                  </span>
                  <p className="font-editorial text-base sm:text-lg italic text-foreground/90 mt-3 leading-relaxed">
                    "{item.summary}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 06: CONFERENCE ARTICLES */}
          {activeCategory === "conference_articles" && (
            <div className="mt-8 space-y-5 animate-fadeIn">
              {CONFERENCE_ARTICLES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-7 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Peer Proceedings
                      </span>
                    </div>
                    <h4 className="font-sans text-xl sm:text-2xl font-black uppercase text-foreground mt-3 leading-tight">
                      {item.title}
                    </h4>
                    <span className="font-sans text-xs text-muted-foreground block mt-1">
                      {item.meta}
                    </span>
                    <p className="font-editorial text-base sm:text-lg italic text-foreground/90 mt-3 leading-relaxed">
                      "{item.summary}"
                    </p>
                  </div>
                  {item.certUrl && (
                    <div className="pt-4 mt-4 border-t border-border/30">
                      <button
                        type="button"
                        onClick={() => setSelectedCert({ title: item.title, url: item.certUrl! })}
                        className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--gold)]/10 hover:bg-[color:var(--gold)]/25 px-3.5 py-1.5 font-mono text-xs font-semibold text-[color:var(--gold-strong)] transition-all cursor-pointer border border-[color:var(--gold)]/30"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Inspect Verification Certificate</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 07: JOURNAL ARTICLES */}
          {activeCategory === "journal_articles" && (
            <div className="mt-8 space-y-5 animate-fadeIn">
              <div className="rounded-2xl border border-[color:var(--gold)]/60 bg-background/90 p-6 sm:p-8 backdrop-blur-sm shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                    PEER-REVIEWED SCIENTIFIC RESEARCH
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Doctorate (DBA) Research
                  </span>
                </div>
                <h4 className="font-sans text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground mt-3 leading-tight">
                  Explainable AI (XAI) Verification Layers in Physical Automation
                </h4>
                <span className="font-sans text-xs text-muted-foreground block mt-1">
                  Swiss School of Business and Management (SSBM Geneva) · Geneva, Switzerland · 2025
                </span>
                <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-4 leading-relaxed">
                  "Formalized algorithmic trust calibration models that eliminate black-box opacity
                  in continuous physical process plants, enabling real-time human-in-the-loop
                  oversight during automated execution cycles."
                </p>
                <div className="h-px w-16 bg-[color:var(--gold)]/60 mt-4" />
              </div>
            </div>
          )}

          {/* Tab 08: TEXT BOOKS */}
          {activeCategory === "textbooks" && (
            <div className="mt-8 space-y-5 animate-fadeIn">
              <div className="rounded-2xl border border-[color:var(--gold)]/60 bg-background/90 p-6 sm:p-8 backdrop-blur-sm shadow-md">
                <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                    DOCTORAL MONOGRAPH &amp; DISSERTATION
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    DBA Academic Repository · 2025
                  </span>
                </div>
                <h4 className="font-sans text-xl sm:text-2xl md:text-3xl font-black uppercase text-foreground mt-3 leading-tight">
                  Deterministic AI Architectures for High-Reliability Operations
                </h4>
                <span className="font-sans text-xs text-muted-foreground block mt-1">
                  SSBM Geneva Research Repository · Geneva, Switzerland
                </span>
                <p className="font-editorial text-lg sm:text-xl italic text-foreground/90 mt-4 leading-relaxed">
                  "Authored comprehensive dissertation establishing mathematical frameworks to
                  safely bridge OT systems with edge cognitive models, enforcing strict
                  zero-failover integrity across high-consequence enterprise operations."
                </p>
                <div className="h-px w-16 bg-[color:var(--gold)]/60 mt-4" />
              </div>
            </div>
          )}

          {/* Tab 09: CERTIFICATIONS */}
          {activeCategory === "certifications" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {CERTIFICATION_ITEMS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-border/80 bg-background/80 p-5 sm:p-6 backdrop-blur-sm shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                        {cert.tag}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Verified
                      </span>
                    </div>
                    <h4 className="font-sans text-xl font-bold uppercase text-foreground mt-3 leading-snug">
                      {cert.title}
                    </h4>
                    <span className="font-sans text-xs text-muted-foreground block mt-1">
                      {cert.meta}
                    </span>
                    <p className="font-editorial text-base italic text-foreground/85 mt-3 leading-relaxed">
                      "{cert.summary}"
                    </p>
                  </div>
                  {cert.certUrl && (
                    <div className="pt-4 mt-4 border-t border-border/30">
                      <button
                        type="button"
                        onClick={() => setSelectedCert({ title: cert.title, url: cert.certUrl! })}
                        className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--gold)]/10 hover:bg-[color:var(--gold)]/25 px-3.5 py-1.5 font-mono text-xs font-semibold text-[color:var(--gold-strong)] transition-all cursor-pointer border border-[color:var(--gold)]/30"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Tab 10: MEMBERSHIPS */}
          {activeCategory === "memberships" && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
              {MEMBERSHIP_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/80 bg-background/80 p-5 sm:p-6 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold">
                      {item.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Leadership
                    </span>
                  </div>
                  <h4 className="font-sans text-xl font-bold uppercase text-foreground mt-3 leading-snug">
                    {item.title}
                  </h4>
                  <span className="font-sans text-xs text-muted-foreground block mt-1">
                    {item.meta}
                  </span>
                  <p className="font-editorial text-base italic text-foreground/85 mt-3 leading-relaxed">
                    "{item.summary}"
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 11: OTHER ACTIVITIES */}
          {activeCategory === "other_activities" && (
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
        <SectionHeader
          index="03"
          kicker="Documented Leadership Trajectory"
          title="Critical Executive Roles"
        />

        <div className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Critical Industrial Automation · OT/IT Convergence" />
          {DELIVERY_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Commercial Aerospace · Flight-Critical Telemetry" />
          {AEROSPACE_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 space-y-4">
          <TrackLabel label="Thermodynamic Physics · Foundational Engineering" />
          {ENGINEERING_JOBS.map((j) => (
            <TimelineCard key={j.company} job={j} />
          ))}
        </div>
      </section>

      {/* SECTION 04: EDUCATIONAL & DOCTORAL RESEARCH LEDGER */}
      <section
        id="credentials"
        className="relative z-10 border-t border-border/70 bg-card/10 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24 md:px-14">
          <SectionHeader
            index="04"
            kicker="Doctoral Rigor &amp; Strategy Frameworks"
            title="Academic Research"
          />

          <div className="mt-12 sm:mt-16 space-y-4">
            {[
              {
                year: "2021 — 2025",
                institution: "Swiss School of Business and Management",
                degree: "Doctor's Degree, Artificial Intelligence (DBA)",
                logoUrl: "https://unavatar.io/ssbm.ch",
                meta: "Doctor of Business Administration · Geneva, Switzerland",
                abstract:
                  "Doctoral dissertation resolving Explainable AI (XAI) verification layers to solve operational transparency and analytical auditability across high-consequence enterprise decision models.",
                pillars: [
                  {
                    title: "Explainable AI Research (XAI)",
                    body: "Formalized algorithmic models that eliminate black-box opacity in physical process plants, enabling real-time human-in-the-loop oversight during automated execution cycles.",
                  },
                ],
                domains: [
                  "Artificial Intelligence",
                  "Doctorate",
                  "XAI Frameworks",
                  "Trust Calibration",
                ],
              },
              {
                year: "2016",
                institution: "Harvard Business School Online",
                degree: "Disruptive Strategy Innovation with Clayton Christensen",
                logoUrl: "https://unavatar.io/hbs.edu",
                meta: "Executive Credential · Boston, MA",
                abstract:
                  "Intensive curriculum centered on Christensen disruption models, economic barrier analysis, and navigating capital deployment amid rapid technological paradigm shifts.",
                domains: ["Disruption Theory", "HBS Online", "Strategic Capital Allocation"],
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
                  "Rigorous grounding in fluid mechanics, thermodynamics, continuum mechanics, and finite element calculations foundational to aerospace structure analysis.",
                pillars: [
                  {
                    title: "NCC Airwing Frameworks",
                    body: "Trained in high-altitude Paragliding and Scale Aircraft Static Model Aerodynamics, fostering foundational aeronautical domain competence.",
                  },
                ],
                domains: ["Mechanical Eng", "NCC Airwing", "Thermodynamics", "Continuum Mechanics"],
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
              Field Authority Record · Critical Systems &amp; Industrial AI Architecture
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-mono text-muted-foreground tracking-widest lowercase">
            <a
              href="https://www.linkedin.com/feed/update/urn:li:share:7468164467697238016/"
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

      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-card border border-border/80 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold-strong)] font-bold truncate">
                  {selectedCert.title || "Verified Record Attestation"}
                </span>
                {selectedCert.url.includes("cxo-powerlist") && (
                  <span className="hidden sm:inline-flex items-center rounded-md border border-amber-400/50 bg-amber-400/10 px-2 py-0.5 font-mono text-[9px] text-amber-300">
                    ● Honoree Highlighted (Row 6, Col 3)
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded bg-background/60 border border-border transition-colors cursor-pointer shrink-0"
              >
                Close [ESC]
              </button>
            </div>

            <div className="mt-4 max-h-[75vh] overflow-y-auto rounded-xl border border-border/40 bg-black/50 flex items-center justify-center p-2 relative">
              <div className="relative inline-block">
                <img
                  src={selectedCert.url}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />

                {selectedCert.url.includes("cxo-powerlist") && (
                  <div
                    className="absolute rounded border-2 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.9)] pointer-events-none animate-pulse"
                    style={{
                      left: "23.4%",
                      top: "86.8%",
                      width: "10.8%",
                      height: "12.2%",
                    }}
                  >
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-black font-sans text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-lg uppercase tracking-tight">
                      Dr. Sandhya Haridas
                    </span>
                  </div>
                )}
              </div>
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
