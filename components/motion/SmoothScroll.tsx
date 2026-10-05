"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger when images, fonts, and DOM settle
    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshScroll, { passive: true });
    window.addEventListener("resize", refreshScroll, { passive: true });
    document.fonts?.ready?.then(refreshScroll);

    // Continuous ResizeObserver on body so dynamic card heights never desync triggers
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
    };
  }, []);

  return <>{children}</>;
}
