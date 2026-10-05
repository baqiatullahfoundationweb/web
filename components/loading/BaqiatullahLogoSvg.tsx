"use client";

interface BaqiatullahLogoSvgProps {
  className?: string;
  isDrawing?: boolean;
}

export default function BaqiatullahLogoSvg({
  className = "w-72 h-72",
  isDrawing = true,
}: BaqiatullahLogoSvgProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <defs>
        {/* Glow Filters for Teal and Gold Strokes */}
        <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00A896" />
          <stop offset="50%" stopColor="#008B8B" />
          <stop offset="100%" stopColor="#028090" />
        </linearGradient>

        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="100%" stopColor="#FFBF00" />
        </linearGradient>
      </defs>

      {/* 1. Golden Halo Base Ring */}
      <circle
        cx="250"
        cy="250"
        r="230"
        fill="#FFBF00"
        fillOpacity="0.12"
        stroke="#FFBF00"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        className="animate-[spin_60s_linear_infinite] origin-center opacity-40"
      />

      {/* 2. PIECE 1: The Nurturing Hand & Outer Crescent (Phase 1: 0s - 1.2s) */}
      <path
        pathLength="1"
        d="M 155 190 C 120 260 130 350 210 395 C 270 425 350 405 375 350 C 350 365 310 375 280 370 C 320 350 360 315 370 295 C 335 325 295 340 250 345 C 220 348 180 340 160 310"
        stroke="url(#tealGrad)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#tealGlow)"
        className={isDrawing ? "animate-draw-hand" : ""}
      />

      {/* 3. PIECE 2: The Triple Arched Dome Sanctuary Ribs (Phase 2: 0.5s - 1.6s) */}
      {/* Outer Rib */}
      <path
        pathLength="1"
        d="M 165 310 L 165 200 C 165 140 210 95 270 95 C 275 95 285 100 290 105"
        stroke="url(#tealGrad)"
        strokeWidth="11"
        strokeLinecap="round"
        className={isDrawing ? "animate-draw-dome-1" : ""}
      />
      {/* Middle Rib */}
      <path
        pathLength="1"
        d="M 185 310 L 185 205 C 185 155 220 115 270 115 C 278 115 285 118 290 122"
        stroke="url(#tealGrad)"
        strokeWidth="9"
        strokeLinecap="round"
        className={isDrawing ? "animate-draw-dome-2" : ""}
      />
      {/* Inner Rib */}
      <path
        pathLength="1"
        d="M 205 310 L 205 210 C 205 170 230 135 270 135 C 275 135 280 138 285 140"
        stroke="url(#tealGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        className={isDrawing ? "animate-draw-dome-3" : ""}
      />

      {/* 4. PIECE 3: The Golden Pinnacle Spire at the Apex (Phase 3: 0.9s - 1.8s) */}
      <path
        pathLength="1"
        d="M 240 70 C 240 60 250 40 250 35 C 250 40 260 60 260 70 C 255 75 245 75 240 70 Z M 250 35 L 250 20 M 245 25 L 255 25"
        stroke="url(#goldGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isDrawing ? "animate-draw-spire" : ""}
      />

      {/* 5. PIECE 4: The Soaring Dove of Peace & Hope (Phase 4: 1.1s - 2.1s) */}
      <path
        pathLength="1"
        d="M 270 240 C 265 210 280 170 320 150 C 310 175 320 200 345 215 C 330 215 315 210 305 225 C 330 230 355 215 375 190 C 365 220 340 245 310 250 C 330 255 350 250 365 240 C 345 260 320 270 290 265 L 270 240 Z"
        stroke="url(#tealGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isDrawing ? "animate-draw-dove" : ""}
      />

      {/* 6. PIECE 5: The Olive Branch in Dove's Beak (Phase 5: 1.5s - 2.2s) */}
      <path
        pathLength="1"
        d="M 365 185 C 375 180 385 182 390 180 M 378 181 C 382 176 388 177 392 175 M 383 182 C 385 188 390 188 394 186"
        stroke="#FFBF00"
        strokeWidth="3.5"
        strokeLinecap="round"
        className={isDrawing ? "animate-draw-olive" : ""}
      />

      {/* 7. PIECE 6: The Modern Kufic Calligraphy "بقیتہ" (Phase 6: 1.6s - 2.4s) */}
      <g className={isDrawing ? "animate-draw-kufic" : ""}>
        {/* Base connecting line */}
        <path
          pathLength="1"
          d="M 220 310 L 345 310"
          stroke="url(#tealGrad)"
          strokeWidth="14"
          strokeLinecap="square"
        />
        {/* Vertical strokes of Baqiatullah */}
        <path pathLength="1" d="M 230 310 L 230 265" stroke="url(#tealGrad)" strokeWidth="12" strokeLinecap="square" />
        <path pathLength="1" d="M 252 310 L 252 265" stroke="url(#tealGrad)" strokeWidth="12" strokeLinecap="square" />
        <path pathLength="1" d="M 288 310 L 288 265" stroke="url(#tealGrad)" strokeWidth="12" strokeLinecap="square" />
        <path pathLength="1" d="M 335 310 L 335 265" stroke="url(#tealGrad)" strokeWidth="12" strokeLinecap="square" />

        {/* Diacritic dots */}
        <rect x="238" y="235" width="8" height="8" rx="2" fill="#008B8B" transform="rotate(45 242 239)" />
        <rect x="254" y="235" width="8" height="8" rx="2" fill="#008B8B" transform="rotate(45 258 239)" />
        <rect x="256" y="325" width="8" height="8" rx="2" fill="#008B8B" transform="rotate(45 260 329)" />
        <rect x="330" y="325" width="8" height="8" rx="2" fill="#008B8B" transform="rotate(45 334 329)" />
      </g>

      {/* 8. PIECE 7: BAQIATULLAH Base Wordmark (Phase 7: 2.0s - 2.6s) */}
      <text
        x="250"
        y="425"
        textAnchor="middle"
        fill="#008B8B"
        fontSize="24"
        fontWeight="900"
        letterSpacing="8"
        fontFamily="monospace"
        className={isDrawing ? "animate-fade-in-delayed" : ""}
      >
        BAQIATULLAH
      </text>
    </svg>
  );
}
