import React, { useState, useEffect } from "react";

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    // Basic static decrementing timer for UI visual feel
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset to keep the timer going
          return { days: 2, hours: 14, minutes: 45, seconds: 30 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div
      className="countdown-container"
      style={{
        background: "rgba(197, 160, 89, 0.05)",
        border: "1px dashed var(--gold-primary)",
        borderRadius: "6px",
        padding: "1.25rem 2rem",
        display: "inline-flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        marginTop: "1rem",
        width: "100%",
        maxWidth: "450px",
      }}
    >
      <div
        style={{
          color: "var(--text-primary)",
          fontSize: "0.9rem",
          fontWeight: "600",
          letterSpacing: "0.05em",
        }}
      >
        🔥 SPECIAL OFFER ENDS IN:
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        {Object.entries(timeLeft).map(([key, val], idx) => (
          <React.Fragment key={key}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  minWidth: "40px",
                  textAlign: "center",
                }}
              >
                {formatNumber(val)}
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "-2px",
                }}
              >
                {key}
              </div>
            </div>
            {idx < 3 && (
              <div
                style={{
                  color: "var(--gold-primary)",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  marginTop: "-12px",
                }}
              >
                :
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
