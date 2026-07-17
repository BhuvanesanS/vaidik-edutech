import React from "react";
import { Award, Briefcase, FileText, Star, Users } from "lucide-react";

export const Placements: React.FC = () => {
  const supportFeatures = [
    {
      title: "Resume Building Workshop",
      description:
        "Format, optimize, and align your resume keywords to immediately trigger Applicant Tracking System (ATS) filtering software.",
      icon: <FileText size={22} />,
    },
    {
      title: "1-on-1 Mock Interviews",
      description:
        "Practice tech coding screens and behavioral STAR response methods with corporate engineering panels.",
      icon: <Users size={22} />,
    },
    {
      title: "Soft Skills Training",
      description:
        "Polishing business emails, accent adjustments, presentation speech, and direct negotiation layouts.",
      icon: <Award size={22} />,
    },
    {
      title: "Exclusive Job Referrals",
      description:
        "Skip standard job board queues. Send your details directly to HR departments of our hiring partners.",
      icon: <Briefcase size={22} />,
    },
  ];

  const placementMetrics = [
    { value: "500+", label: "Hiring Partners" },
    { value: "12 LPA", label: "Highest Package" },
    { value: "5.2 LPA", label: "Average Package" },
    { value: "95%", label: "Placement Success Rate" },
  ];

  const partners = [
    "GOOGLE",
    "AMAZON",
    "MICROSOFT",
    "TCS",
    "ACCENTURE",
    "WIPRO",
    "INFOSYS",
    "COGNIZANT",
    "TECH MAHINDRA",
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      role: "Associate Cloud Engineer",
      company: "TCS",
      initials: "RS",
      text: "Vaidik Edutech transformed my career. The hands-on labs with Azure Cloud and Terraform gave me exactly what I needed to clear the technical coding interviews.",
    },
    {
      name: "Priya Singh",
      role: "Embedded Software Developer",
      company: "Wipro",
      initials: "PS",
      text: "Designing a weather station prototype using microcontrollers in the ECE physical design labs helped me stand out from other standard applicants.",
    },
    {
      name: "Amit Patel",
      role: "Graduate Structural Engineer",
      company: "L&T Construction",
      initials: "AP",
      text: "Learning Revit and structural coordination workflows directly from senior coordinators was highly valuable. The mock interviews polished my presentation.",
    },
  ];

  return (
    <div
      className="placements-page"
      style={{ paddingTop: "8.5rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        {/* Page Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            We Don't Just Teach, We Launch Careers.
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "0.95rem",
            }}
          >
            Our intensive upskilling programs are built to help you land
            high-paying engineering and corporate roles.
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          className="reveal-zoom"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            marginBottom: "5rem",
          }}
        >
          {placementMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                textAlign: "center",
                padding: "2rem 1.5rem",
                border: "1px solid var(--gold-border)",
              }}
            >
              <h2
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "800",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {metric.value}
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                  fontWeight: "500",
                  margin: 0,
                }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Placement Support features */}
        <div className="reveal" style={{ marginBottom: "5rem" }}>
          <h2
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Complete Career Accelerator System
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {supportFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "4px",
                    backgroundColor: "var(--gold-overlay)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary)",
                  }}
                >
                  {feat.icon}
                </div>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                  }}
                >
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners Logo Grid */}
        <div
          className="reveal-zoom"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--gold-border)",
            borderRadius: "8px",
            padding: "3rem 2rem",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <h3
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "1.4rem",
              fontWeight: "700",
              marginBottom: "2rem",
              letterSpacing: "0.05em",
            }}
          >
            WHERE OUR GRADUATES ARE PLACED
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="font-serif"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "800",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                  transition: "var(--transition-fast)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--gold-primary)";
                  e.currentTarget.style.textShadow =
                    "0 0 10px rgba(197, 160, 89, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.textShadow = "none";
                }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Testimonials */}
        <div className="reveal">
          <h2
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Success Stories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  border: "1px solid rgba(197, 160, 89, 0.15)",
                }}
              >
                {/* Author Metadata */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--gold-overlay)",
                      border: "1px solid var(--gold-border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-primary)",
                      fontWeight: "700",
                      fontSize: "0.85rem",
                    }}
                  >
                    {story.initials}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                        margin: 0,
                      }}
                    >
                      {story.name}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--gold-primary)",
                        fontWeight: "500",
                      }}
                    >
                      {story.role} at {story.company}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: "flex", gap: "0.1rem" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="var(--gold-primary)"
                      color="var(--gold-primary)"
                    />
                  ))}
                </div>

                {/* Story text */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  "{story.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
