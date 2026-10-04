"use client";

import { useState, useEffect } from "react";
import { Activity, Radio, Shield } from "lucide-react";

export default function HeroTelemetry({ isUrdu = false }: { isUrdu?: boolean }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Karachi",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " PKT"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-30 max-w-7xl mx-auto w-full pt-2 sm:pt-4 px-4 sm:px-6">
      <div className="flex items-center justify-between py-2.5 px-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-primary/20 shadow-sm text-[11px] font-mono font-bold tracking-wider text-gray-700 uppercase">
        {/* Left: Live Satellite Coordinate Beacon */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
          </span>
          <span className="text-gray-950 font-black flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>31.4570° N, 74.2479° E</span>
          </span>
          <span className="hidden md:inline text-gray-400">|</span>
          <span className="hidden md:inline text-primary font-black">
            {isUrdu ? "مرکز لاہور، پاکستان" : "HAVEN HQ • LAHORE"}
          </span>
        </div>

        {/* Center: Live Mission Telemetry */}
        <div className="hidden lg:flex items-center gap-2 text-gray-800">
          <Shield className="w-3.5 h-3.5 text-primary" />
          <span>{isUrdu ? "250+ یتیم بچے زیرِ کفالت" : "250+ ORPHANS NURTURED"}</span>
          <span className="text-gray-400">•</span>
          <span className="text-emerald-700 font-black">{isUrdu ? "شفافیت 100%" : "100% AUDITED"}</span>
        </div>

        {/* Right: Live Ticking Mission Clock */}
        <div className="flex items-center gap-2 text-gray-950 font-black font-mono">
          <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
            {time || "02:30:00 PKT"}
          </span>
        </div>
      </div>
    </div>
  );
}
