"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Heart, BookOpen, Users, Award, Lightbulb } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ProjectDetail } from "./programsData";

// ─────────────────────────────────────────────────────────────
// Shared hook — fires once on scroll into view
// ─────────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─────────────────────────────────────────────────────────────
// Reveal wrapper with directional animation
// ─────────────────────────────────────────────────────────────
function Reveal({
  children,
  className = "",
  delay = 0,
  dir = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dir?: "up" | "left" | "right" | "none";
}) {
  const { ref, visible } = useReveal();
  const from =
    dir === "up" ? "translateY(28px)" :
    dir === "left" ? "translateX(-24px)" :
    dir === "right" ? "translateX(24px)" : "none";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : from,
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity,transform",
      }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LazyImage — shimmer skeleton + smooth reveal
// ─────────────────────────────────────────────────────────────
function LazyImage({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, 50vw",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="absolute inset-0">
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MobileImage — one image cell for the mobile stack
// ─────────────────────────────────────────────────────────────
function MobileImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const { ref, visible } = useRevealSafe(index * 60);
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl shadow-md"
      style={{
        aspectRatio: "4/3",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.55s ease, transform 0.55s ease`,
      }}
    >
      <LazyImage
        src={src}
        alt={alt}
        sizes="100vw"
        className="group-hover:scale-[1.03] transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SmallGridImage — one image cell for the < 5 fallback grid
// ─────────────────────────────────────────────────────────────
function SmallGridImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const { ref, visible } = useRevealSafe(index * 80);
  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
      style={{
        aspectRatio: "4/3",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      <LazyImage
        src={src}
        alt={alt}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="group-hover:scale-[1.04] transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 5-image masonry grid — responsive editorial composition
// ─────────────────────────────────────────────────────────────
function ImageMasonry({
  images,
  isUrdu,
}: {
  images: ProjectDetail["contentImages"];
  isUrdu: boolean;
}) {
  // No outer observer — each cell manages its own visibility

  // For < 5 images, fall back to a simple responsive grid
  if (images.length < 5) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {images.map((img, i) => (
          <SmallGridImage
            key={i}
            src={img.src}
            alt={isUrdu ? img.altUrdu : img.alt}
            index={i}
          />
        ))}
      </div>
    );
  }

  // 5-image editorial masonry
  // Layout (desktop):
  //  ┌──────────┬──────────┬──────────┐
  //  │          │ img[1]   │ img[3]   │
  //  │ img[0]   ├──────────┼──────────┤
  //  │  (tall)  │ img[2]   │ img[4]   │
  //  └──────────┴──────────┴──────────┘
  const ROW_H = 280; // px per row — both rows are fixed height
  const GAP = 16;    // matches gap-4 = 16px
  const tallH = ROW_H * 2 + GAP; // 576px

  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: `${ROW_H}px ${ROW_H}px`,
      }}
    >
      {/* img[0] — tall left, spans both rows. Always visible — no animation */}
      <div
        style={{
          gridColumn: "1 / 2",
          gridRow: "1 / 3",
          position: "relative",
          height: `${tallH}px`,
          overflow: "hidden",
          borderRadius: "1rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
        className="group"
      >
        <Image
          src={images[0].src}
          alt={isUrdu ? images[0].altUrdu : images[0].alt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* img[1] — top right-middle */}
      <MasonryCell
        img={images[1]}
        isUrdu={isUrdu}
        style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}
        delay={80}
      />
      {/* img[2] — bottom right-middle */}
      <MasonryCell
        img={images[2]}
        isUrdu={isUrdu}
        style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
        delay={160}
      />
      {/* img[3] — top far-right */}
      <MasonryCell
        img={images[3]}
        isUrdu={isUrdu}
        style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
        delay={120}
      />
      {/* img[4] — bottom far-right */}
      <MasonryCell
        img={images[4]}
        isUrdu={isUrdu}
        style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
        delay={200}
      />
    </div>
  );
}

// Helper hook that accepts a delay (avoids conditional hook call in map)
function useRevealSafe(delay: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

function MasonryCell({
  img,
  isUrdu,
  style,
  delay,
}: {
  img: ProjectDetail["contentImages"][0];
  isUrdu: boolean;
  style: React.CSSProperties;
  delay: number;
}) {
  // Each cell has its own observer — never blocked by parent visibility
  const { ref, visible } = useReveal(0.05);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
      style={{
        height: "100%",
        width: "100%",
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) translateY(0)" : "scale(0.97) translateY(12px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity,transform",
      }}
    >
      <LazyImage
        src={img.src}
        alt={isUrdu ? img.altUrdu : img.alt}
        sizes="(max-width: 640px) 100vw, 33vw"
        className="group-hover:scale-[1.04] transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Key-fact icon pill
// ─────────────────────────────────────────────────────────────
const KEY_ICONS = [BookOpen, Users, Award, Lightbulb];

function KeyFacts({ facts, isUrdu }: { facts: string[]; isUrdu: boolean }) {
  return (
    <ul className="space-y-3">
      {facts.map((fact, i) => {
        const Icon = KEY_ICONS[i % KEY_ICONS.length];
        return (
          <li key={i} className="flex items-start gap-3">
            <span className="shrink-0 w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
              <Icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            </span>
            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{fact}</span>
          </li>
        );
      })}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────
// Orphan Care info cards
// ─────────────────────────────────────────────────────────────
function InfoCards({
  cards,
  isUrdu,
}: {
  cards: NonNullable<ProjectDetail["infoCards"]>;
  isUrdu: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card, idx) => (
        <Reveal key={idx} delay={idx * 90} dir="up">
          <div className="glass-card rounded-2xl p-5 sm:p-6 h-full flex flex-col gap-2 border border-primary/20">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">
              {isUrdu ? card.headingUrdu : card.heading}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight">
              {isUrdu ? card.valueUrdu : card.value}
            </span>
            {card.detail && (
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {isUrdu ? card.detailUrdu : card.detail}
              </p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export interface ProjectDetailPageProps {
  project: ProjectDetail;
  lang: string;
  isUrdu: boolean;
}

export default function ProjectDetailPage({ project, lang, isUrdu }: ProjectDetailPageProps) {
  const donateHref = `/${lang}/donate`;
  const projectsHref = `/${lang}/projects`;

  const title = isUrdu ? project.titleUrdu : project.title;
  const subtitle = isUrdu ? project.subtitleUrdu : project.subtitle;
  const description = isUrdu ? project.descriptionUrdu : project.description;
  const supportHeading = isUrdu ? project.supportHeadingUrdu : project.supportHeading;
  const supportText = isUrdu ? project.supportTextUrdu : project.supportText;
  const donationLabel = isUrdu ? project.donationLabelUrdu : project.donationLabel;

  // Derive bullet points from the description paragraphs for the sidebar
  const introText = description[0] ?? "";
  const bodyParas = description.slice(1);

  // Sidebar: derive per-project key facts from the description paragraphs
  // Split each paragraph into a short bullet at the sentence boundary
  const keyFacts: string[] = description.flatMap((para) => {
    const sentences = para.match(/[^.!?]+[.!?]+/g) ?? [para];
    return sentences.slice(0, 1).map((s) => s.trim()).filter(Boolean);
  }).slice(0, 4);

  // Sidebar stat — use the project's capacity field from BAQIATULLAH_PROJECTS
  // We pass it through a new optional prop, or derive from description context
  // For now derive a universal stat label from the project num + title
  const statValue = project.num;
  const statLabel = isUrdu ? "منصوبہ نمبر" : "Project";
  const statDesc = isUrdu ? subtitle : subtitle;

  return (
    <article className="bg-[#EDF6F6] min-h-screen">

      {/* ══════════════════════════════════════════════════════
          HERO — full-bleed image, bottom-anchored text overlay
          ══════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "min(92vh, 700px)", minHeight: "520px" }}
        aria-label={`${title} hero`}
      >
        {/* Background image */}
        <Image
          src={project.heroImage.src}
          alt={isUrdu ? project.heroImage.altUrdu : project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Multi-layer gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg," +
              "rgba(0,0,0,0.08) 0%," +
              "rgba(0,0,0,0.10) 40%," +
              "rgba(0,0,0,0.62) 68%," +
              "rgba(0,0,0,0.90) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Back nav — top left, inside safe-area */}
        <div
          className="absolute top-0 inset-x-0 pt-[5.5rem] sm:pt-24 z-20"
          style={{ animation: "fadeInScale 0.5s ease both" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={projectsHref}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/12 backdrop-blur-sm border border-white/25 text-white/85 hover:text-white hover:bg-white/20 text-xs font-semibold transition-all interactive-tap focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <ArrowLeft className={`w-3.5 h-3.5 shrink-0 ${isUrdu ? "rotate-180" : ""}`} />
              {isUrdu ? "تمام منصوبے" : "All Projects"}
            </Link>
          </div>
        </div>

        {/* Hero text — pinned to bottom */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pb-8 sm:pb-12 md:pb-16"
          style={{ animation: "fadeInScale 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Number + category row */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white text-xs sm:text-sm font-black ring-2 ring-white/30">
                {project.num}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/65">
                {isUrdu ? "تعلیمی منصوبہ — بقیۃ اللہ فاؤنڈیشن" : "Education Project — Baqiatullah Foundation"}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white tracking-tight leading-[1.04] mb-3 sm:mb-4"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.45)" }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Bottom teal accent line */}
        <div
          className="absolute inset-x-0 bottom-0 h-1"
          style={{ background: "linear-gradient(90deg,#008B8B,#00A3A3,transparent)" }}
          aria-hidden="true"
        />
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT THIS PROJECT — Two-column editorial layout
          LEFT: description   RIGHT: key facts sidebar
          ══════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <Reveal>
            <div className="flex items-center gap-3 mb-8 sm:mb-10">
              <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary">
                {isUrdu ? "اس منصوبے کے بارے میں" : "About This Project"}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 xl:gap-16">

            {/* ── LEFT: description ─────────────────────── */}
            <div className="space-y-8">

              {/* Intro paragraph — large size */}
              <Reveal delay={60}>
                <p
                  className={`text-lg sm:text-xl md:text-2xl text-gray-800 leading-[1.75] font-normal ${
                    isUrdu ? "text-right" : ""
                  }`}
                >
                  {introText}
                </p>
              </Reveal>

              {/* Horizontal rule */}
              <Reveal delay={100}>
                <div className="h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
              </Reveal>

              {/* Body paragraphs */}
              {bodyParas.map((para, i) => (
                <Reveal key={i} delay={140 + i * 80}>
                  <div
                    className={`flex ${isUrdu ? "flex-row-reverse" : ""} gap-4 sm:gap-6 items-start`}
                  >
                    {/* Left accent bar */}
                    <div
                      className="shrink-0 w-1 self-stretch rounded-full mt-1"
                      style={{ background: `rgba(0,139,139,${0.35 - i * 0.08})` }}
                      aria-hidden="true"
                    />
                    <p
                      className={`text-base sm:text-[17px] text-gray-700 leading-[1.8] font-normal ${
                        isUrdu ? "text-right" : ""
                      }`}
                    >
                      {para}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* ── RIGHT: sticky sidebar ─────────────────── */}
            <div className="space-y-6">

              {/* Key facts card */}
              <Reveal delay={80} dir="left">
                <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-primary/15 shadow-lg p-6 sm:p-7">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-primary mb-5">
                    {isUrdu ? "یہ منصوبہ کیا فراہم کرتا ہے" : "What This Project Provides"}
                  </h3>
                  <KeyFacts facts={keyFacts} isUrdu={isUrdu} />
                </div>
              </Reveal>

              {/* Quick-stat strip */}
              <Reveal delay={160} dir="left">
                <div className="rounded-2xl overflow-hidden bg-primary text-white shadow-lg">
                  <div className="px-6 py-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">
                      {statLabel}
                    </p>
                    <p className="text-4xl font-black tracking-tight">{statValue}</p>
                    <p className="text-sm text-white/70 mt-1 leading-relaxed">
                      {statDesc}
                    </p>
                  </div>
                  <div className="h-1 w-full bg-white/20" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5-IMAGE VISUAL STORY
          ══════════════════════════════════════════════════════ */}
      {project.contentImages.length > 0 && (
        <section className="py-12 sm:py-16 bg-white/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <Reveal>
              <div className="flex items-center gap-3 mb-8 sm:mb-10">
                <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary">
                  {isUrdu ? "منصوبے کی جھلکیاں" : `${title} in Action`}
                </span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 mb-8 sm:mb-10 tracking-tight leading-snug max-w-xl">
                {isUrdu
                  ? "ہر تصویر ایک کہانی بیان کرتی ہے"
                  : "Every image tells a story of hope and learning"}
              </h2>
            </Reveal>

            {/* Mobile: single-column stack */}
            <div className="block sm:hidden space-y-4">
              {project.contentImages.map((img, i) => (
                <MobileImage
                  key={i}
                  src={img.src}
                  alt={isUrdu ? img.altUrdu : img.alt}
                  index={i}
                />
              ))}
            </div>

            {/* Tablet+: masonry */}
            <div className="hidden sm:block">
              <ImageMasonry images={project.contentImages} isUrdu={isUrdu} />
            </div>

          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          ORPHAN CARE INFO CARDS (conditional)
          ══════════════════════════════════════════════════════ */}
      {project.infoCards && project.infoCards.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary mb-6">
                {isUrdu ? "ایک نظر میں" : "At a Glance"}
              </p>
            </Reveal>
            <InfoCards cards={project.infoCards} isUrdu={isUrdu} />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          WHY IT MATTERS — impact narrative
          ══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden relative border border-primary/20 shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg,rgba(0,139,139,0.06) 0%,rgba(255,255,255,0.97) 55%)",
              }}
            >
              {/* Top accent */}
              <div
                className="h-1 w-full"
                style={{ background: "linear-gradient(90deg,#008B8B,#00A3A3 60%,transparent)" }}
                aria-hidden="true"
              />
              <div className="p-7 sm:p-10 md:p-12">
                <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary mb-3">
                  {isUrdu ? "آپ کا کردار" : "Why It Matters"}
                </p>
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950 leading-snug mb-4 max-w-2xl ${
                    isUrdu ? "text-right" : ""
                  }`}
                >
                  {supportHeading}
                </h2>
                <p
                  className={`text-base sm:text-lg text-gray-700 leading-[1.8] font-normal max-w-2xl ${
                    isUrdu ? "text-right" : ""
                  }`}
                >
                  {supportText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DONATION CTA — full-width premium band
          ══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal dir="up" delay={40}>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white/95 backdrop-blur-md border border-primary/15 shadow-2xl">
              {/* Accent top bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: "linear-gradient(90deg,#008B8B,#00A3A3 40%,#AF0000)" }}
                aria-hidden="true"
              />

              <div className="px-6 py-10 sm:px-10 sm:py-14 md:px-14">
                <div className="max-w-2xl mx-auto text-center space-y-4">
                  <span className="inline-block text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-primary">
                    {isUrdu ? "فرق ڈالیں" : "Make a Difference"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-snug">
                    {isUrdu
                      ? "ایک بچے کے مستقبل میں سرمایہ کاری کریں"
                      : "Invest in a Child's Future"}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                    {isUrdu
                      ? "آپ کا تعاون ایک یتیم بچے کو معیاری تعلیم، رہنمائی اور ایک روشن مستقبل فراہم کرنے میں مدد کرتا ہے۔"
                      : "Your contribution helps provide a child with quality education, mentorship, and the chance to build an independent, dignified future."}
                  </p>
                  <div className="pt-2">
                    <Button
                      href={donateHref}
                      variant="donate"
                      size="lg"
                      className="shadow-xl shadow-accent-red/20 px-8 sm:px-10"
                    >
                      <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
                      <span>{donationLabel}</span>
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 pt-1">
                    {isUrdu
                      ? "100% زکوٰۃ کے اہل • پنجاب چیریٹی کمیشن رجسٹرڈ"
                      : "100% Zakat Eligible · Punjab Charity Commission Registered"}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </article>
  );
}
