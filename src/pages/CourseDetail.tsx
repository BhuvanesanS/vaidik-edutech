import React, { useState, useEffect } from "react";
import {
  Calendar,
  BookOpen,
  Star,
  ArrowLeft,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Flame,
} from "lucide-react";
import type { Course } from "../data/courses";

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onOpenLeadModal: () => void;
}

type LearningMode = "self-paced" | "mentor-led" | "offline" | "one-on-one";

export const CourseDetail: React.FC<CourseDetailProps> = ({
  course,
  onBack,
  onOpenLeadModal,
}) => {
  const [selectedMode, setSelectedMode] = useState<LearningMode>("mentor-led");
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [countdown, setCountdown] = useState({ hours: 14, mins: 45, secs: 30 });

  // Countdown timer simulation for special pricing offer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return { hours: 23, mins: 59, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimerVal = (val: number) => String(val).padStart(2, "0");

  // Scroll to syllabus section
  const handleScrollToSyllabus = () => {
    const syllabusEl = document.getElementById("syllabus-section");
    if (syllabusEl) {
      syllabusEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activePricing = course.pricing[selectedMode];

  return (
    <div
      className="course-detail-page"
      style={{ paddingTop: "8.5rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        {/* Back Link */}
        <button
          onClick={onBack}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            fontSize: "0.9rem",
            marginBottom: "2rem",
            padding: 0,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--gold-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
        >
          <ArrowLeft size={16} />
          <span>Back to Upskilling Programs</span>
        </button>

        {/* Course Detail Split Grid (Left: Syllabus & info, Right: Sticky selector) */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
          className="course-layout-grid"
        >
          {/* LEFT: Information Panel */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
          >
            {/* Header Content */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "var(--gold-primary)",
                  letterSpacing: "0.08em",
                }}
              >
                {course.domain}
              </span>
              <h1
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: "800",
                  lineHeight: "1.2",
                  margin: 0,
                }}
              >
                {course.title}
              </h1>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {course.description}
              </p>

              {/* Rating + stats badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  alignItems: "center",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    fontSize: "0.9rem",
                    color: "var(--gold-primary)",
                  }}
                >
                  <Star size={16} fill="var(--gold-primary)" />
                  <span
                    style={{ fontWeight: "600", color: "var(--text-primary)" }}
                  >
                    {course.rating.toFixed(1)}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>
                    ({course.reviews} reviews)
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Calendar
                    size={16}
                    style={{ color: "var(--gold-primary)" }}
                  />
                  <span>Duration: {course.duration}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <BookOpen
                    size={16}
                    style={{ color: "var(--gold-primary)" }}
                  />
                  <span>Modules: {course.modulesCount} Chapters</span>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h2
                className="font-serif"
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  borderBottom: "1px solid rgba(197, 160, 89, 0.1)",
                  paddingBottom: "0.75rem",
                  margin: 0,
                }}
              >
                Why This Program?
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  padding: 0,
                }}
              >
                {course.whyChoose.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "var(--gold-overlay)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold-primary)",
                        flexShrink: 0,
                        marginTop: "0.15rem",
                      }}
                    >
                      <Check size={12} style={{ margin: "0 auto" }} />
                    </div>
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.92rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What you will learn Skills badges */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <h2
                className="font-serif"
                style={{ fontSize: "1.3rem", fontWeight: "700", margin: 0 }}
              >
                Skills Covered
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {course.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      padding: "0.4rem 1rem",
                      backgroundColor: "var(--bg-tertiary)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "50px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Syllabus accordion modules */}
            <div
              id="syllabus-section"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2
                  className="font-serif"
                  style={{ fontSize: "1.3rem", fontWeight: "700", margin: 0 }}
                >
                  Course Syllabus
                </h2>
              </div>

              <div>
                {course.syllabus.map((mod, idx) => {
                  const isOpen = openModuleIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`accordion ${isOpen ? "open" : ""}`}
                    >
                      <button
                        onClick={() => setOpenModuleIndex(isOpen ? null : idx)}
                        className="accordion-trigger font-serif"
                        style={{ fontSize: "0.98rem" }}
                      >
                        <span>{mod.title}</span>
                        {isOpen ? (
                          <Minus
                            size={16}
                            style={{ color: "var(--gold-primary)" }}
                          />
                        ) : (
                          <Plus size={16} />
                        )}
                      </button>
                      <div className="accordion-content">
                        <div
                          className="accordion-content-inner"
                          style={{ padding: "1.25rem 1.75rem" }}
                        >
                          <ul
                            style={{
                              listStyle: "none",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.75rem",
                              padding: 0,
                            }}
                          >
                            {mod.topics.map((topic, tidx) => (
                              <li
                                key={tidx}
                                style={{
                                  display: "flex",
                                  gap: "0.5rem",
                                  alignItems: "center",
                                  fontSize: "0.88rem",
                                  color: "var(--text-secondary)",
                                }}
                              >
                                <span
                                  style={{
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    backgroundColor: "var(--gold-primary)",
                                    flexShrink: 0,
                                  }}
                                />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Real World Projects */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h2
                className="font-serif"
                style={{ fontSize: "1.3rem", fontWeight: "700", margin: 0 }}
              >
                Real-World Portfolio Projects
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {course.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.04)",
                      backgroundColor: "var(--bg-tertiary)",
                      borderRadius: "6px",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <h3
                      className="font-serif text-gold-gradient"
                      style={{ fontSize: "1.05rem", fontWeight: "600" }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h2
                className="font-serif"
                style={{ fontSize: "1.3rem", fontWeight: "700", margin: 0 }}
              >
                Student Testimonials
              </h2>
              <div
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  fontStyle: "italic",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1.5rem",
                    fontSize: "3rem",
                    opacity: 0.1,
                    fontFamily: "serif",
                    color: "var(--gold-primary)",
                  }}
                >
                  “
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  "The curriculum is extremely structured. Selecting the
                  Mentor-Led option let me interact directly with a senior
                  solutions engineer. The capstone projects gave me concrete
                  talking points during my interviews, leading to my current
                  role."
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginTop: "0.5rem",
                    fontStyle: "normal",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "var(--gold-overlay)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-primary)",
                      fontWeight: "bold",
                      fontSize: "0.8rem",
                    }}
                  >
                    <span style={{ margin: "0 auto" }}>PK</span>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      Pradeep Kumar
                    </h4>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      MNC Cloud Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Learning Mode Selector Card (Sidebar style) */}
          <div className="course-sidebar-widget">
            <div
              className="glass-card"
              style={{
                border: "1px solid var(--gold-primary)",
                boxShadow: "0 10px 40px rgba(197, 160, 89, 0.1)",
                padding: "2rem 1.5rem",
                position: "sticky",
                top: "6.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Select Learning Mode
                </span>

                {/* Mode Selector Buttons grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.4rem",
                    marginTop: "0.8rem",
                    backgroundColor: "var(--bg-primary)",
                    padding: "0.3rem",
                    borderRadius: "4px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {[
                    { id: "self-paced", label: "Self Paced" },
                    { id: "mentor-led", label: "Mentor Led" },
                    { id: "offline", label: "Offline" },
                    { id: "one-on-one", label: "1 to 1" },
                  ].map((mode) => {
                    const isSel = selectedMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setSelectedMode(mode.id as LearningMode)}
                        style={{
                          padding: "0.45rem",
                          fontSize: "0.78rem",
                          fontWeight: "600",
                          borderRadius: "3px",
                          border: "none",
                          cursor: "pointer",
                          backgroundColor: isSel
                            ? "var(--gold-primary)"
                            : "transparent",
                          color: isSel ? "#000000" : "var(--text-secondary)",
                          transition: "var(--transition-fast)",
                        }}
                      >
                        {mode.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  paddingTop: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    className="font-serif text-gold-gradient"
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "800",
                      lineHeight: 1,
                    }}
                  >
                    ₹{activePricing.price.toLocaleString("en-IN")}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        textDecoration: "line-through",
                      }}
                    >
                      ₹{activePricing.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--success)",
                        fontWeight: "700",
                      }}
                    >
                      {activePricing.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Limited timed offer tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 0.75rem",
                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "4px",
                  color: "var(--error)",
                  fontSize: "0.75rem",
                  fontWeight: "600",
                }}
              >
                <Flame size={14} />
                <span>
                  Offer ends: {formatTimerVal(countdown.hours)}h{" "}
                  {formatTimerVal(countdown.mins)}m{" "}
                  {formatTimerVal(countdown.secs)}s
                </span>
              </div>

              {/* Dynamic Feature list details */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-primary)",
                    fontWeight: "600",
                  }}
                >
                  Mode Features:
                </span>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                    padding: 0,
                  }}
                >
                  {activePricing.features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <Check
                        size={12}
                        style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <ShieldCheck
                      size={12}
                      style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                    />
                    <span> trace certificate code</span>
                  </li>
                </ul>
              </div>

              {/* Sticky CTAs */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginTop: "0.5rem",
                }}
              >
                <button
                  onClick={onOpenLeadModal}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "0.8rem" }}
                >
                  <ShoppingBag size={16} />
                  <span>Enroll in Program</span>
                </button>
                <button
                  onClick={handleScrollToSyllabus}
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "0.8rem" }}
                >
                  <BookOpen size={16} />
                  <span>View Syllabus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .course-layout-grid {
            grid-template-columns: 1fr 360px !important;
          }
        }
      `}</style>
    </div>
  );
};
