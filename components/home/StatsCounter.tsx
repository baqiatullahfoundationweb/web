"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, GraduationCap, Utensils, HeartHandshake } from "lucide-react";

const STATS = [
  { value: "250+", label: "Children Supported", icon: Users, desc: "Receiving full-time residence & care" },
  { value: "85+", label: "Active Volunteers", icon: HeartHandshake, desc: "Devoted team & field workers" },
  { value: "100k+", label: "Nutritious Meals", icon: Utensils, desc: "Healthy prepared meals served annually" },
  { value: "50+", label: "Scholarships", icon: GraduationCap, desc: "College & high-school funding" },
];

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const cards = containerRef.current.querySelectorAll(".stat-card");

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="stat-card glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-11 h-11 rounded-xl bg-[#008B8B]/10 flex items-center justify-center text-[#008B8B]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Verified
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-1 font-mono">
                  {item.value}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
