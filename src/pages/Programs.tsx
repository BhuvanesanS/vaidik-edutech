import React, { useState } from "react";
import { BookOpen, Star, Calendar, ArrowRight, Award } from "lucide-react";
import { allCourses, domains } from "../data/courses";

interface ProgramsProps {
  onNavigateToCourse: (courseId: string) => void;
  onOpenLeadModal: () => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  onNavigateToCourse,
  onOpenLeadModal,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  // Filter courses based on selected domain
  const filteredCourses =
    selectedDomain === "all"
      ? allCourses
      : allCourses.filter((course) => {
          // Map domain name matches
          const targetDomain = domains.find((d) => d.id === selectedDomain);
          return targetDomain ? course.domain === targetDomain.name : true;
        });

  return (
    <div
      className="programs-page"
      style={{ paddingTop: "8.5rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        {/* Page Header */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Upskilling Programs
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "0.95rem",
            }}
          >
            Browse professional certifications across various engineering and
            commerce domains designed by corporate specialists.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div
          className="categories-tabs reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            marginBottom: "3.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
            paddingBottom: "1.5rem",
          }}
        >
          <button
            onClick={() => setSelectedDomain("all")}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              border:
                selectedDomain === "all"
                  ? "1px solid var(--gold-primary)"
                  : "1px solid transparent",
              background:
                selectedDomain === "all"
                  ? "var(--gold-overlay)"
                  : "transparent",
              color:
                selectedDomain === "all"
                  ? "var(--gold-primary)"
                  : "var(--text-secondary)",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "0.88rem",
              transition: "var(--transition-fast)",
            }}
          >
            All Domains
          </button>
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "4px",
                border:
                  selectedDomain === domain.id
                    ? "1px solid var(--gold-primary)"
                    : "1px solid transparent",
                background:
                  selectedDomain === domain.id
                    ? "var(--gold-overlay)"
                    : "transparent",
                color:
                  selectedDomain === domain.id
                    ? "var(--gold-primary)"
                    : "var(--text-secondary)",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "0.88rem",
                transition: "var(--transition-fast)",
              }}
            >
              {domain.name}
            </button>
          ))}
        </div>

        {/* Filtered Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div
            className="reveal-zoom"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  height: "100%",
                }}
              >
                <div className="glass-card-header-accent" />
                {/* Card Header: Category + Rating */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      color: "var(--gold-primary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {course.domain}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      fontSize: "0.8rem",
                      color: "var(--gold-primary)",
                    }}
                  >
                    <Star size={14} fill="var(--gold-primary)" />
                    <span
                      style={{
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      {course.rating.toFixed(1)}
                    </span>
                    <span style={{ color: "var(--text-muted)" }}>
                      ({course.reviews})
                    </span>
                  </div>
                </div>

                {/* Card Title & Desc */}
                <div
                  style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "700",
                      lineHeight: "1.4",
                      color: "var(--text-primary)",
                      margin: 0,
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {course.description}
                  </p>
                </div>

                {/* Card Info items */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                    paddingTop: "1rem",
                    color: "var(--text-secondary)",
                    fontSize: "0.82rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Calendar
                      size={14}
                      style={{ color: "var(--gold-primary)" }}
                    />
                    <span>{course.duration}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <BookOpen
                      size={14}
                      style={{ color: "var(--gold-primary)" }}
                    />
                    <span>{course.modulesCount} Modules</span>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.7rem",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      padding: "0.1rem 0.4rem",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "3px",
                      color: "var(--gold-primary)",
                    }}
                  >
                    {course.difficulty}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginTop: "0.5rem",
                  }}
                >
                  <button
                    onClick={onOpenLeadModal}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: "0.55rem", fontSize: "0.82rem" }}
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={() => onNavigateToCourse(course.id)}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: "0.55rem", fontSize: "0.82rem" }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "5rem 0",
              color: "var(--text-secondary)",
            }}
          >
            <Award
              size={48}
              style={{
                color: "var(--gold-primary)",
                marginBottom: "1.5rem",
                opacity: 0.5,
              }}
            />
            <h3>No courses found in this category.</h3>
            <p style={{ marginTop: "0.5rem" }}>
              We are launching new upskilling programs soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
