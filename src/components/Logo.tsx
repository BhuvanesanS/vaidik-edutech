import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  orientation?: "horizontal" | "vertical";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = 50,
  showText = true,
  orientation = "horizontal",
}) => {
  // Golden gradients for the SVG
  const gradientIdShield = "goldGradientShield";
  const gradientIdLaurel = "goldGradientLaurel";

  const renderIcon = () => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon"
    >
      <defs>
        {/* Rich Metallic Gold Gradients */}
        <linearGradient
          id={gradientIdShield}
          x1="100"
          y1="100"
          x2="400"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#bf953f" />
          <stop offset="25%" stopColor="#fcf6ba" />
          <stop offset="50%" stopColor="#b38728" />
          <stop offset="75%" stopColor="#fbf5b7" />
          <stop offset="100%" stopColor="#aa771c" />
        </linearGradient>

        <linearGradient
          id={gradientIdLaurel}
          x1="50"
          y1="50"
          x2="450"
          y2="450"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#aa771c" />
          <stop offset="50%" stopColor="#fcf6ba" />
          <stop offset="100%" stopColor="#b38728" />
        </linearGradient>
      </defs>

      {/* Laurel Wreath Left Side */}
      <g fill={`url(#${gradientIdLaurel})`}>
        {/* Stem Left */}
        <path
          d="M220,410 C140,380 90,300 90,210 C90,160 110,110 140,80 C143,77 148,81 145,85 C118,120 102,165 102,210 C102,285 145,355 215,385 C219,387 222,393 218,395 C219,397 221,408 220,410 Z"
          opacity="0.8"
        />
        {/* Leaves Left */}
        <path d="M125,100 C110,95 95,95 85,100 C80,105 85,120 100,125 C115,130 130,125 135,115 C138,105 135,102 125,100 Z" />
        <path d="M110,140 C95,138 80,142 72,150 C68,156 75,170 90,172 C105,174 120,166 123,156 C125,148 120,142 110,140 Z" />
        <path d="M102,190 C87,192 73,200 67,210 C64,217 73,230 87,228 C101,226 114,215 115,204 C116,196 110,192 102,190 Z" />
        <path d="M104,242 C90,248 78,260 75,272 C73,279 84,290 97,284 C110,278 120,264 119,252 C118,245 112,240 104,242 Z" />
        <path d="M117,295 C105,304 96,320 96,333 C96,340 109,348 120,339 C131,330 137,314 133,302 C130,295 124,292 117,295 Z" />
        <path d="M141,343 C131,354 126,372 130,385 C133,391 146,394 153,382 C160,370 162,352 155,341 C151,336 146,337 141,343 Z" />
        <path d="M178,382 C171,394 171,414 178,425 C182,430 194,427 197,414 C200,401 196,383 187,376 C183,373 181,376 178,382 Z" />
      </g>

      {/* Laurel Wreath Right Side */}
      <g fill={`url(#${gradientIdLaurel})`}>
        {/* Stem Right */}
        <path
          d="M280,410 C360,380 410,300 410,210 C410,160 390,110 360,80 C357,77 352,81 355,85 C382,120 398,165 398,210 C398,285 355,355 285,385 C281,387 278,393 282,395 C281,397 279,408 280,410 Z"
          opacity="0.8"
        />
        {/* Leaves Right */}
        <path d="M375,100 C390,95 405,95 415,100 C420,105 415,120 400,125 C385,130 370,125 365,115 C362,105 365,102 375,100 Z" />
        <path d="M390,140 C405,138 420,142 428,150 C432,156 425,170 410,172 C395,174 380,166 377,156 C375,148 380,142 390,140 Z" />
        <path d="M398,190 C413,192 427,200 433,210 C436,217 427,230 413,228 C399,226 386,215 385,204 C384,196 390,192 398,190 Z" />
        <path d="M396,242 C410,248 422,260 425,272 C427,279 416,290 403,284 C390,278 380,264 381,252 C382,245 388,240 396,242 Z" />
        <path d="M383,295 C395,304 404,320 404,333 C404,340 391,348 380,339 C369,330 363,314 367,302 C370,295 376,292 383,295 Z" />
        <path d="M359,343 C369,354 374,372 370,385 C367,391 354,394 347,382 C340,370 338,352 345,341 C349,336 354,337 359,343 Z" />
        <path d="M322,382 C329,394 329,414 322,425 C318,430 306,427 303,414 C300,401 304,383 313,376 C317,373 319,376 322,382 Z" />
      </g>

      {/* Center Ribbon / Tie at bottom of wreath */}
      <path
        d="M220,400 C240,410 260,410 280,400 C270,395 230,395 220,400 Z"
        fill={`url(#${gradientIdLaurel})`}
      />

      {/* Central Shield */}
      <path
        d="M250,90 C290,90 330,110 330,180 C330,280 250,330 250,340 C250,330 170,280 170,180 C170,110 210,90 250,90 Z"
        fill={`url(#${gradientIdShield})`}
        stroke={`url(#${gradientIdLaurel})`}
        strokeWidth="6"
        filter="drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.4))"
      />

      {/* Inner Shield Border */}
      <path
        d="M250,105 C280,105 312,120 312,175 C312,255 250,305 250,312 C250,305 188,255 188,175 C188,120 220,105 250,105 Z"
        stroke="#0d0d0f"
        strokeWidth="3"
        opacity="0.25"
      />

      {/* Two Graduates outlines inside the shield */}
      {/* Graduate 1 (Back, Left) */}
      <g
        stroke="#0d0d0f"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      >
        {/* Head & shoulders */}
        <path d="M205,245 C205,225 215,220 225,220 C235,220 245,225 245,245" />
        <circle cx="225" cy="205" r="14" fill="#0d0d0f" />
        {/* Mortar board (Graduation Cap) */}
        <path d="M210,192 L225,185 L240,192 L225,199 Z" fill="#0d0d0f" />
        <path d="M218,193 L218,198 M225,199 L225,203" />
      </g>

      {/* Graduate 2 (Front, Right) */}
      <g
        stroke="#0d0d0f"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Head & shoulders */}
        <path
          d="M230,260 C230,235 245,230 260,230 C275,230 290,235 290,260"
          fill="#0d0d0f"
          fillOpacity="0.1"
        />
        <circle cx="260" cy="212" r="16" fill="#0d0d0f" />
        {/* Mortar board */}
        <path d="M242,198 L260,190 L278,198 L260,206 Z" fill="#0d0d0f" />
        <path d="M252,200 L252,206 M260,206 L260,211" />
        {/* Tassel */}
        <path d="M278,198 L283,212 L285,212" />
      </g>
    </svg>
  );

  if (orientation === "vertical") {
    return (
      <div
        className={`flex flex-col items-center text-center ${className}`}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {renderIcon()}
        {showText && (
          <div style={{ marginTop: "0.75rem" }}>
            <h1
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Vaidhik
            </h1>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.3em",
                marginTop: "0.25rem",
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
              }}
            >
              Open your wings with Vaidhik
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
    >
      {renderIcon()}
      {showText && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              margin: 0,
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            Vaidhik
          </h1>
          <p
            style={{
              fontSize: "0.55rem",
              color: "var(--text-secondary)",
              letterSpacing: "0.18em",
              margin: 0,
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              opacity: 0.9,
            }}
          >
            Open your wings with Vaidhik
          </p>
        </div>
      )}
    </div>
  );
};
