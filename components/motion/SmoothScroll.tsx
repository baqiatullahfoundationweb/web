"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Honor user accessibility preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    // Sync ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis RAF smoothly via GSAP ticker
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshScroll, { passive: true });
    window.addEventListener("resize", refreshScroll, { passive: true });
    document.fonts?.ready?.then(refreshScroll);

    const observer = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    if (document.body) {
      observer.observe(document.body);
    }

    return () => {
      window.removeEventListener("load", refreshScroll);
      window.removeEventListener("resize", refreshScroll);
      observer.disconnect();
      gsap.ticker.remove(tickerUpdate);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
