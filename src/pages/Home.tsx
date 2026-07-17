import React from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Percent,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { Countdown } from "../components/Countdown";

interface HomeProps {
  onNavigate: (page: string) => void;
  onOpenLeadModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenLeadModal }) => {
  const stats = [
    { value: "1000+", label: "Students Trained", icon: <Users size={20} /> },
    { value: "500+", label: "Hiring Partners", icon: <Trophy size={20} /> },
    { value: "12 LPA", label: "Highest Package", icon: <Sparkles size={20} /> },
    { value: "95%", label: "Placement Rate", icon: <Percent size={20} /> },
  ];

  const learningPaths = [
    {
      title: "Self Paced",
      price: "₹ 2,100",
      description:
        "Learn at your own pace with lifetime access to rich recorded video materials, quizzes, and documentation guides.",
      badge: "Flexible",
      features: [
        "Lifetime Access",
        "Community Forum support",
        "Self Study Assignments",
        "Vaidik Certification",
      ],
    },
    {
      title: "Mentor Led",
      price: "₹ 3,900",
      description:
        "Engage in live interactive webinar classrooms with industry expert guides, weekly doubt resolutions, and resume reviews.",
      badge: "Most Popular",
      features: [
        "Live Interactive Sessions",
        "Weekly Doubt Clearing",
        "Expert Industry Guidance",
        "Interactive Project Assistance",
      ],
    },
    {
      title: "Offline Training",
      price: "₹ 11,900",
      description:
        "In-person classroom experience at our high-end Bangalore design labs. Includes hardware kit access and physical workshops.",
      badge: "Best Value",
      features: [
        "Hands-on Design Labs",
        "Local Campus Physical Workshops",
        "Direct Recruiter Referrals",
        "Printed Copy Certification",
      ],
    },
    {
      title: "Offline 1-to-1",
      price: "₹ 27,900",
      description:
        "Elite personal experience with a private senior corporate engineer. Tailored speeds, code review, and placement fast-track guarantee.",
      badge: "Exclusive",
      features: [
        "Personal Dedicated Mentor",
        "Custom Speed Syllabus",
        "Immediate Code Reviews",
        "Fast-Track Placement Assurance",
      ],
    },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          paddingTop: "8rem",
          paddingBottom: "5rem",
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(197, 160, 89, 0.04) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(197, 160, 89, 0.03) 0%, transparent 50%)",
        }}
      >
        <div className="container">
          <div
            className="reveal"
            style={{
              maxWidth: "750px",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
            }}
          >
            {/* Placement Support Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "50px",
                backgroundColor: "var(--gold-overlay)",
                border: "1px solid var(--gold-border)",
                width: "fit-content",
                color: "var(--gold-primary)",
                fontSize: "0.82rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
              }}
            >
              <Award size={14} />
              <span>100% PLACEMENT SUPPORT & MENTORSHIP</span>
            </div>

            {/* Hero Heading */}
            <h1
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.15",
                letterSpacing: "0.02em",
                margin: 0,
              }}
            >
              Master The Tech & Engineering Skills That Matter.
            </h1>

            {/* Hero Description */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Vaidhik EduTech Pvt Ltd is a pioneer in the Ed-Tech industry,
              providing valuable and quality education. We deliver high-end
              professional certifications across CSE, ECE & EEE, Mechanical,
              Civil, Management, and Bio Science domains.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => onNavigate("programs")}
              >
                <span>Explore Programs</span>
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary" onClick={onOpenLeadModal}>
                <span>Get Career Counseling</span>
              </button>
            </div>

            {/* Promo timer */}
            <Countdown />
          </div>
        </div>
      </section>

      {/* 2. STATS GRID SECTION */}
      <section
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--gold-border)",
          borderBottom: "1px solid var(--gold-border)",
          padding: "3.5rem 0",
        }}
      >
        <div className="container">
          <div
            className="reveal-zoom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1rem",
                  borderRight:
                    idx < 3 ? "1px solid rgba(197, 160, 89, 0.1)" : "none",
                }}
                className="stat-item"
              >
                <div
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "4px",
                    backgroundColor: "var(--gold-overlay)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div
                    className="font-serif text-gold-gradient"
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      lineHeight: "1.1",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY UPSKILLING MATTERS */}
      <section className="section-padding">
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h2
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Why Upskilling Matters Today
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              The modern industry moves fast. Professional certification
              programs ensure you stay ahead, resilient, and ready for
              high-paying roles.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Resilience to AI Automation",
                description:
                  "Gain expert practical experience in systems design, simulation, and instrumentation that AI engines cannot substitute.",
              },
              {
                title: "High Salary & Promotion Growth",
                description:
                  "Certified professionals in cloud computing, data science, BIM, and mechanical engineering command 60%+ higher entry salary grids.",
              },
              {
                title: "Production-First Portfolio",
                description:
                  "Build real-world capstone projects using tools like Azure CLI, Revit Structure, CATIA Generative Shape Design, and Aspen flows.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div className="glass-card-header-accent" />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--gold-primary)",
                  }}
                >
                  <CheckCircle size={18} />
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEARNING MODES / CATEGORIES */}
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--gold-border)",
          borderBottom: "1px solid var(--gold-border)",
        }}
      >
        <div className="container">
          <div
            className="reveal"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h2
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Choose Your Learning Mode
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              We design our upskilling curriculums in 4 customizable formats.
              Find the pricing and learning pace that fits your academic or
              corporate schedule.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {learningPaths.map((path, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  border:
                    path.badge === "Most Popular"
                      ? "1px solid var(--gold-primary)"
                      : "1px solid var(--gold-border)",
                  backgroundColor:
                    path.badge === "Most Popular"
                      ? "var(--gold-overlay)"
                      : "rgba(12, 12, 14, 0.6)",
                  boxShadow:
                    path.badge === "Most Popular"
                      ? "0 10px 30px rgba(212, 175, 55, 0.15)"
                      : "none",
                }}
              >
                <div className="glass-card-header-accent" />
                {/* Path Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "3px",
                      backgroundColor: "var(--gold-overlay)",
                      border: "1px solid var(--gold-border)",
                      color: "var(--gold-primary)",
                    }}
                  >
                    {path.badge}
                  </span>
                  <BookOpen size={16} style={{ color: "var(--text-muted)" }} />
                </div>

                {/* Path Title */}
                <div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.4rem", fontWeight: "700", margin: 0 }}
                  >
                    {path.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.25rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <span
                      className="font-serif text-gold-gradient"
                      style={{ fontSize: "1.8rem", fontWeight: "700" }}
                    >
                      {path.price}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      / course starting
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: "1.5",
                    flexGrow: 1,
                  }}
                >
                  {path.description}
                </p>

                {/* Key Features List */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: 0,
                  }}
                >
                  {path.features.map((feat, fidx) => (
                    <li
                      key={fidx}
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        fontSize: "0.8rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "var(--gold-primary)",
                        }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Enroll Trigger */}
                <button
                  className="btn btn-secondary"
                  onClick={() => onNavigate("programs")}
                  style={{ width: "100%", padding: "0.6rem" }}
                >
                  <span>Explore Courses</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section
        className="section-padding"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="container reveal-zoom"
          style={{
            background: "var(--gold-gradient)",
            color: "#000",
            borderRadius: "8px",
            padding: "4rem 3rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <h2
            className="font-serif"
            style={{
              fontSize: "2.2rem",
              fontWeight: "800",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Ready to Accelerate Your Career?
          </h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 2rem auto",
              fontSize: "1rem",
              fontWeight: "500",
              opacity: 0.85,
              lineHeight: "1.6",
            }}
          >
            Join over 1,000+ successfully trained engineering and management
            graduates. Take a free career assessment and pick the right
            upskilling program.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => onNavigate("programs")}
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                border: "none",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>Explore Programs</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onOpenLeadModal}
              style={{
                backgroundColor: "transparent",
                color: "#000000",
                border: "2px solid #000000",
                padding: "0.75rem 2rem",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              <span>Get Free Counseling</span>
            </button>
          </div>
        </div>
      </section>

      {/* Styles for Home statistics border layout */}
      <style>{`
        @media (max-width: 768px) {
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(197, 160, 89, 0.1);
            padding-bottom: 1.5rem !important;
          }
          .stat-item:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
