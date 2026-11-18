import React from 'react';

/**
 * Ornate Red Bull Symphonic Brasil emblem modeled after the concert crest:
 * Twin charging bulls over a golden sun, crimson wordmark inside gold scrollwork,
 * double-framed SYMPHONIC serif cartouche with subtle musical staff flourishes,
 * and spaced B R A S I L caption below.
 */
export function RedBullSymphonicCrest({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 380 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[280px] sm:w-[330px] md:w-[355px] h-auto"
        role="img"
        aria-label="Red Bull Symphonic Brasil"
      >
        <defs>
          <linearGradient id="goldCrestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5DE9B" />
            <stop offset="48%" stopColor="#DFB763" />
            <stop offset="100%" stopColor="#B88C3B" />
          </linearGradient>
          <linearGradient id="sunGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFE484" />
            <stop offset="100%" stopColor="#E6AE35" />
          </linearGradient>
          <linearGradient id="bullRedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1B4D" />
            <stop offset="100%" stopColor="#D10032" />
          </linearGradient>
        </defs>

        {/* Top ornate crest arch framing the sun & bulls */}
        <path
          d="M114 48 C118 24, 145 14, 174 16 C181 8, 199 8, 206 16 C235 14, 262 24, 266 48"
          stroke="url(#goldCrestGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M122 48 C126 30, 149 21, 175 23 C182 16, 198 16, 205 23 C231 21, 254 30, 258 48"
          stroke="url(#goldCrestGrad)"
          strokeWidth="1.1"
          strokeOpacity="0.8"
        />

        {/* Golden Sun */}
        <circle cx="190" cy="36" r="15" fill="url(#sunGrad)" />

        {/* Left Charging Bull Silhouette */}
        <path
          d="M186 38 C182 35, 178 32, 173 30 C168 28, 161 28, 155 31 C150 33, 145 31, 141 28 C142 33, 145 36, 149 37 C145 39, 140 42, 136 46 C141 46, 146 44, 151 42 C155 43, 160 44, 164 46 C168 44, 173 43, 178 44 C181 42, 184 40, 186 38 Z"
          fill="url(#bullRedGrad)"
        />
        {/* Left bull horns & tail */}
        <path
          d="M181 33 C184 30, 187 30, 188 33 M142 31 C137 29, 134 33, 136 37"
          stroke="#E4003A"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Right Charging Bull Silhouette */}
        <path
          d="M194 38 C198 35, 202 32, 207 30 C212 28, 219 28, 225 31 C230 33, 235 31, 239 28 C238 33, 235 36, 231 37 C235 39, 240 42, 244 46 C239 46, 234 44, 229 42 C225 43, 220 44, 216 46 C212 44, 207 43, 202 44 C199 42, 196 40, 194 38 Z"
          fill="url(#bullRedGrad)"
        />
        {/* Right bull horns & tail */}
        <path
          d="M199 33 C196 30, 193 30, 192 33 M238 31 C243 29, 246 33, 244 37"
          stroke="#E4003A"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Left baroque scroll beside Red Bull */}
        <path
          d="M114 48 C100 48, 92 56, 95 66 C98 73, 108 72, 110 66 C112 61, 106 58, 103 61 M95 66 C82 66, 74 71, 66 76"
          stroke="url(#goldCrestGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M112 64 C98 63, 86 67, 74 76"
          stroke="url(#goldCrestGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />

        {/* Right baroque scroll beside Red Bull */}
        <path
          d="M266 48 C280 48, 288 56, 285 66 C282 73, 272 72, 270 66 C268 61, 274 58, 277 61 M285 66 C298 66, 306 71, 314 76"
          stroke="url(#goldCrestGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M268 64 C282 63, 294 67, 306 76"
          stroke="url(#goldCrestGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />

        {/* Crimson Red Bull Wordmark */}
        <text
          x="190"
          y="74"
          textAnchor="middle"
          fill="#E4003A"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="800"
          fontSize="31"
          letterSpacing="-0.5"
        >
          Red Bull
        </text>

        {/* Main Ornate Rectangular Gold Cartouche */}
        <path
          d="M34 83 H110 M270 83 H346"
          stroke="url(#goldCrestGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        {/* Outer frame */}
        <path
          d="M34 83 C26 83, 24 89, 28 94 V120 C24 125, 26 131, 34 131 H346 C354 131, 356 125, 352 120 V94 C356 89, 354 83, 346 83"
          stroke="url(#goldCrestGrad)"
          strokeWidth="2.4"
          strokeLinejoin="round"
          fill="#030D21"
          fillOpacity="0.6"
        />
        {/* Inner hairline frame */}
        <rect
          x="35"
          y="89"
          width="310"
          height="36"
          rx="2"
          stroke="url(#goldCrestGrad)"
          strokeWidth="1"
          strokeOpacity="0.75"
        />

        {/* Left miniature musical staff & clef flourish inside frame */}
        <g stroke="url(#goldCrestGrad)" strokeWidth="0.9" strokeOpacity="0.7">
          <line x1="39" y1="100" x2="64" y2="100" />
          <line x1="39" y1="105" x2="64" y2="105" />
          <line x1="39" y1="110" x2="64" y2="110" />
          <line x1="39" y1="115" x2="64" y2="115" />
          <path d="M49 120 C53 116, 54 106, 50 99 C48 96, 52 93, 54 96 C56 100, 46 108, 48 113 C49 116, 54 116, 54 112" strokeWidth="1.2" />
        </g>

        {/* Right miniature musical staff & note flourish inside frame */}
        <g stroke="url(#goldCrestGrad)" strokeWidth="0.9" strokeOpacity="0.7">
          <line x1="316" y1="100" x2="341" y2="100" />
          <line x1="316" y1="105" x2="341" y2="105" />
          <line x1="316" y1="110" x2="341" y2="110" />
          <line x1="316" y1="115" x2="341" y2="115" />
          <path d="M324 114 V101 L334 99 V111" strokeWidth="1.2" />
          <circle cx="322" cy="114" r="2" fill="url(#goldCrestGrad)" />
          <circle cx="332" cy="111" r="2" fill="url(#goldCrestGrad)" />
        </g>

        {/* SYMPHONIC Engraved Gold Serif Typography */}
        <text
          x="190"
          y="117"
          textAnchor="middle"
          fill="url(#goldCrestGrad)"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="600"
          fontSize="30.5"
          letterSpacing="3.5"
        >
          SYMPHONIC
        </text>
      </svg>

      {/* ———  B R A S I L  ——— */}
      <div className="mt-1.5 flex items-center gap-3.5 w-[240px] sm:w-[270px]">
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AC5A]/75 to-[#D4AC5A]" />
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.42em] text-[#E9C878] pl-[0.42em]">
          BRASIL
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AC5A]/75 to-[#D4AC5A]" />
      </div>
    </div>
  );
}

/**
 * Full-width flowing multi-strand golden musical staff / sound-wave ribbon
 * separating the Hero from the Event Details bar.
 */
export function HeroGoldWave({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[58px] sm:h-[78px] md:h-[94px] block"
      >
        <defs>
          <linearGradient id="heroWaveGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B88C3B" stopOpacity="0.65" />
            <stop offset="22%" stopColor="#E9C878" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F5DE9B" stopOpacity="1" />
            <stop offset="78%" stopColor="#DFB763" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B88C3B" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <path
          d="M-20 42 C180 112, 340 86, 560 44 C780 4, 980 112, 1220 90 C1340 78, 1405 56, 1460 42"
          stroke="url(#heroWaveGold)"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M-20 52 C190 102, 360 72, 575 38 C795 4, 995 102, 1230 82 C1345 72, 1410 52, 1460 36"
          stroke="url(#heroWaveGold)"
          strokeWidth="1.2"
          strokeOpacity="0.85"
          fill="none"
        />
        <path
          d="M-20 64 C205 94, 380 62, 595 34 C815 6, 1015 92, 1245 74 C1355 66, 1415 48, 1460 30"
          stroke="url(#heroWaveGold)"
          strokeWidth="1"
          strokeOpacity="0.68"
          fill="none"
        />
        <path
          d="M-20 78 C220 84, 410 52, 625 28 C840 6, 1035 80, 1265 66 C1365 60, 1420 44, 1460 25"
          stroke="url(#heroWaveGold)"
          strokeWidth="0.9"
          strokeOpacity="0.52"
          fill="none"
        />
        <path
          d="M-20 30 C165 118, 330 98, 545 54 C760 12, 965 122, 1205 98 C1330 86, 1400 66, 1460 52"
          stroke="url(#heroWaveGold)"
          strokeWidth="0.85"
          strokeOpacity="0.45"
          fill="none"
        />
      </svg>
    </div>
  );
}

/**
 * Sweeping corner golden ribbons framing the Orchestra Finale bottom bar.
 */
export function FooterGoldWaves() {
  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="w-full h-[96px] sm:h-[130px] block"
      >
        <defs>
          <linearGradient id="footerWaveLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0D182" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#D4AC5A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#D4AC5A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="footerWaveRight" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F0D182" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#D4AC5A" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#D4AC5A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left sweeping curves */}
        <path d="M-20 82 C160 54, 290 132, 520 156" stroke="url(#footerWaveLeft)" strokeWidth="1.6" fill="none" />
        <path d="M-20 95 C155 68, 285 138, 495 162" stroke="url(#footerWaveLeft)" strokeWidth="1.2" strokeOpacity="0.8" fill="none" />
        <path d="M-20 109 C150 84, 275 144, 468 166" stroke="url(#footerWaveLeft)" strokeWidth="1" strokeOpacity="0.6" fill="none" />
        <path d="M-20 123 C145 100, 265 150, 440 170" stroke="url(#footerWaveLeft)" strokeWidth="0.85" strokeOpacity="0.45" fill="none" />

        {/* Right sweeping curves */}
        <path d="M1460 56 C1270 64, 1135 128, 915 156" stroke="url(#footerWaveRight)" strokeWidth="1.6" fill="none" />
        <path d="M1460 72 C1275 80, 1140 136, 940 162" stroke="url(#footerWaveRight)" strokeWidth="1.2" strokeOpacity="0.8" fill="none" />
        <path d="M1460 88 C1280 96, 1150 144, 965 166" stroke="url(#footerWaveRight)" strokeWidth="1" strokeOpacity="0.6" fill="none" />
        <path d="M1460 104 C1285 112, 1160 152, 990 170" stroke="url(#footerWaveRight)" strokeWidth="0.85" strokeOpacity="0.45" fill="none" />
      </svg>
    </div>
  );
}

/** Golden Treble Clef flanking the left of "experiência" */
export function TrebleClefSvg({ className = 'w-6 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M15.8 39.5 C12.5 41.2, 8.8 39.2, 8.8 36.2 C8.8 33.8, 11 32.5, 12.8 33.8 C14 34.7, 13.6 36.8, 12 37.2 M15.8 39.5 C18.2 38.2, 19.2 34.5, 18.2 29.8 L13.2 8.2 C12.5 5.2, 14.2 2.2, 16.5 2.5 C19 2.8, 19.8 6.5, 17.6 10.2 C15.2 14.3, 8.2 18.6, 8.2 25.2 C8.2 30.2, 12.6 33.4, 17.5 32.6 C21.8 31.9, 24 28.2, 23 24.4 C22.1 21, 18.6 19.5, 15.6 20.8 C13 21.9, 12.2 25.2, 14.4 27.2"
        stroke="#E9C878"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Golden Beamed Eighth Note flanking the right of "experiência" */
export function BeamedNoteSvg({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M10.5 20.5 V7.2 L23 4.5 V17.5"
        stroke="#E9C878"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.5 11.2 L23 8.5" stroke="#E9C878" strokeWidth="1.8" />
      <ellipse cx="7.8" cy="21" rx="3.4" ry="2.5" transform="rotate(-18 7.8 21)" fill="#E9C878" />
      <ellipse cx="20.3" cy="18" rx="3.4" ry="2.5" transform="rotate(-18 20.3 18)" fill="#E9C878" />
    </svg>
  );
}

/** Tilted Vintage Stage Microphone (Experience Card 1) */
export function MicrophoneGoldIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <g stroke="#E9C878" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        {/* Mic head */}
        <circle cx="38" cy="18" r="8.5" />
        <path d="M32 12 L44 24" />
        {/* Handle */}
        <path d="M31.5 24.5 L15 39.5 C13.6 40.8, 13.6 42.9, 14.9 44.1 C16.2 45.4, 18.2 45.4, 19.5 44 L34.5 27.5" />
        {/* Cord tail */}
        <path d="M14.5 44.5 L10 49" />
        {/* Subtle grip detail */}
        <path d="M23.5 32.5 L26.5 35.5" strokeWidth="1.6" />
      </g>
    </svg>
  );
}

/** Tilted Classical Violin / Cello (Experience Card 2) */
export function ViolinGoldIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <g stroke="#E9C878" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        {/* Neck & Scroll */}
        <path d="M36 20 L46.5 9.5 C47.8 8.2, 49.5 8.5, 49.8 10 C50.1 11.4, 48.6 12.6, 47.4 11.6" />
        <path d="M33.5 17.5 L44 7" />
        {/* Tuning pegs */}
        <path d="M43 6 L45.5 8.5 M46.5 12.5 L49 15" strokeWidth="1.5" />
        {/* Violin body */}
        <path d="M35.5 21 C38.5 24, 38.2 28.5, 34.5 31 C33.2 31.9, 32.8 33.4, 34 34.8 C36.2 37.5, 34.2 43.2, 29 46.2 C23.5 49.2, 16.5 48.2, 12.5 44.2 C8.5 40.2, 7.6 33.2, 10.6 27.8 C13.5 22.5, 19.2 20.5, 22 22.8 C23.3 23.9, 24.8 23.5, 25.8 22.2 C28.2 18.6, 32.6 18.1, 35.5 21 Z" />
        {/* Bridge & Tailpiece */}
        <path d="M16 40.5 L21.5 35" strokeWidth="2.2" />
        <path d="M22.5 30.5 L26.5 34.5" strokeWidth="1.5" />
        {/* f-holes */}
        <path d="M18.5 28.5 C19.5 27.5, 21 28, 20.5 29.8" strokeWidth="1.4" />
        <path d="M27.5 37.5 C28.5 36.5, 29 38, 27.5 39.2" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

/** Sound Equalizer Bars (Experience Card 3) */
export function EqualizerGoldIcon({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
      <rect x="8" y="29" width="5.5" height="17" rx="2.75" fill="#E9C878" />
      <rect x="17" y="19" width="5.5" height="27" rx="2.75" fill="#E9C878" />
      <rect x="26" y="10" width="5.5" height="36" rx="2.75" fill="#E9C878" />
      <rect x="35" y="21" width="5.5" height="25" rx="2.75" fill="#E9C878" />
      <rect x="44" y="31" width="5.5" height="15" rx="2.75" fill="#E9C878" />
    </svg>
  );
}

/** Event Bar Icons matching the golden thin-stroke icons from the image */
export function InfoCalendarIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="#E9C878" strokeWidth="1.7" />
      <path d="M8 3V6.5M16 3V6.5M3 10H21" stroke="#E9C878" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 14H10.5M13.5 14H16M8 17.5H10.5" stroke="#E9C878" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function InfoLocationIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21C12 21 18.5 14.8 18.5 9.8C18.5 6.2 15.6 3.5 12 3.5C8.4 3.5 5.5 6.2 5.5 9.8C5.5 14.8 12 21 12 21Z"
        stroke="#E9C878"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.8" r="2.4" stroke="#E9C878" strokeWidth="1.7" />
    </svg>
  );
}

export function InfoPeopleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9.5" cy="8.5" r="3" stroke="#E9C878" strokeWidth="1.7" />
      <path d="M4 19C4 15.8 6.4 14 9.5 14C12.6 14 15 15.8 15 19" stroke="#E9C878" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16.5" cy="9.5" r="2.2" stroke="#E9C878" strokeWidth="1.6" />
      <path d="M16.5 14.2C18.7 14.4 20.5 15.8 20.5 18.5" stroke="#E9C878" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function InfoTicketIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 13.8L13.8 4.5C14.4 3.9 15.4 3.9 16 4.5L17.4 5.9C16.7 6.8 16.8 8.1 17.6 8.9C18.4 9.7 19.7 9.8 20.6 9.1L22 10.5C22.6 11.1 22.6 12.1 22 12.7L12.7 22C12.1 22.6 11.1 22.6 10.5 22L9.1 20.6C9.8 19.7 9.7 18.4 8.9 17.6C8.1 16.8 6.8 16.7 5.9 17.4L4.5 16C3.9 15.4 3.9 14.4 4.5 13.8Z"
        stroke="#E9C878"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M11.5 9.5L14.5 12.5" stroke="#E9C878" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2.5" />
    </svg>
  );
}
