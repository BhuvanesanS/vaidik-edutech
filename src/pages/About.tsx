import React, { useState } from "react";
import {
  Monitor,
  Briefcase,
  Plus,
  Minus,
  HelpCircle,
  GraduationCap,
} from "lucide-react";

interface AboutProps {
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pillars = [
    {
      title: "Elite Mentorship",
      description:
        "Learn directly from senior software architects, computational biologists, and mechanical engineering design heads currently working at Fortune 500 MNC companies.",
      icon: <UsersIcon />,
    },
    {
      title: "Project-First Approach",
      description:
        "Skip abstract theories. Build production-grade, resume-worthy capstone projects using industrial tools like Azure CLI, Revit Structure, and ASPEN PLUS.",
      icon: <Monitor size={24} />,
    },
    {
      title: "Placement Acceleration",
      description:
        "A dedicated placement cell provides continuous resume refinement workshops, mock interview grooming, and immediate connections to our 500+ hiring partners.",
      icon: <Briefcase size={24} />,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Course",
      desc: "Select from our wide selection of certified engineering, commerce, and biological programs.",
    },
    {
      number: "02",
      title: "Learn with Mentors",
      desc: "Attend interactive live online classes or classroom physical labs guided by working professionals.",
    },
    {
      number: "03",
      title: "Build Real Projects",
      desc: "Design industrial systems, construct cloud structures, or write bioinformatics sequence algorithms.",
    },
    {
      number: "04",
      title: "Get Certified",
      desc: "Earn your Vaidhik EduTech Professional Certification to validate your technical capability.",
    },
    {
      number: "05",
      title: "Apply for Jobs",
      desc: "Work with our recruitment partners to land high-paying roles in top corporate sectors.",
    },
  ];

  const faqs = [
    {
      q: "What is the duration of the upskilling programs?",
      a: "Most certification paths run between 8 to 12 weeks. Detailed timelines depend on the specific program and chosen learning mode (Self Paced, Mentor Led, Offline, or 1-on-1).",
    },
    {
      q: "Do I need prior coding or engineering experience?",
      a: "No. Our courses start with foundational modules to establish core fundamentals before progressing to advanced industry blueprints. Beginners are fully welcomed.",
    },
    {
      q: "Are these certifications globally recognized?",
      a: "Yes. Vaidhik EduTech certifications are verified, globally traceable, and recognized by corporate companies. They serve as verified proof of hands-on project competency.",
    },
    {
      q: "Can I change my learning pacing or mode after enrolling?",
      a: "Yes. You can request to transition between Self-Paced, Mentor-Led, or Classroom Offline modes. Transition fee grids apply depending on the target schedule.",
    },
    {
      q: "Are the capstone projects based on real-world datasets?",
      a: "Absolutely. All projects utilize standard industrial tools and model configurations conforming to real engineering layouts, ensuring they add high value to your resume portfolio.",
    },
    {
      q: "How does the placement support system operate?",
      a: "Once you complete 80% of the course modules and clear the portfolio project submission, our placement cell schedules mock HR rounds, optimizes your resume profile, and sends your CV directly to hiring partners for priority interviews.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section
        style={{
          paddingTop: "9rem",
          paddingBottom: "5rem",
          textAlign: "center",
          position: "relative",
          background:
            "linear-gradient(180deg, rgba(197,160,89,0.03) 0%, transparent 100%)",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              backgroundColor: "var(--gold-overlay)",
              border: "1px solid var(--gold-border)",
              color: "var(--gold-primary)",
              fontSize: "0.8rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            <GraduationCap size={14} />
            <span>WE BUILD PROFESSIONALS</span>
          </div>
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "700",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Bridging The Gap Between Academia & Industry Excellence
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: "1.7",
              marginBottom: "2rem",
            }}
          >
            Vaidhik EduTech Pvt Ltd is a pioneer in the Ed-Tech industry, the
            fastest-growing professional training platform in the country. As
            part of our initiative for educating the upcoming generations to be
            producers of technology, we provide meaningful projects, collaborate
            with experienced professionals, provide mentorship and guidance.
          </p>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem 2rem",
              backgroundColor: "var(--gold-overlay)",
              border: "1px solid var(--gold-border)",
              borderRadius: "6px",
              display: "inline-block",
              maxWidth: "600px",
            }}
          >
            <p
              style={{
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                fontWeight: "600",
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              🎯 <span className="text-gold">Our Aim:</span> Our main Aim is to
              provide the Valuable and Quality education for the students.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS */}
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--gold-border)",
          borderBottom: "1px solid var(--gold-border)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Our Core Pillars
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              These three foundational values drive our academic design and
              define how we help our candidates stand out.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "4px",
                    backgroundColor: "var(--gold-overlay)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  {pillar.icon}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.25rem", fontWeight: "600" }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (5 STEPS) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              How It Works
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "0.95rem",
              }}
            >
              Our systematic training and placement pipeline ensures a seamless
              career transition.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2.5rem",
              position: "relative",
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                }}
              >
                {/* Step Number Badge */}
                <div
                  className="font-serif text-gold-gradient"
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    lineHeight: "1",
                    opacity: 0.6,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs SECTION */}
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderTop: "1px solid var(--gold-border)",
          borderBottom: "1px solid var(--gold-border)",
        }}
      >
        <div className="container" style={{ maxWidth: "850px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Find quick answers to common queries about our courses,
              certification, and placement support.
            </p>
          </div>

          <div>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={`accordion ${isOpen ? "open" : ""}`}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="accordion-trigger font-serif"
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <HelpCircle
                        size={18}
                        style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                      />
                      <span>{faq.q}</span>
                    </span>
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
                    <div className="accordion-content-inner">
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Footer CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.92rem",
                marginBottom: "1rem",
              }}
            >
              Still have questions about our certifications or curriculum
              structures?
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="btn btn-secondary"
              style={{ fontSize: "0.88rem", padding: "0.6rem 1.5rem" }}
            >
              <span>Contact Our Advisors</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple inline Users icon component to avoid importing heavy lists
const UsersIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
