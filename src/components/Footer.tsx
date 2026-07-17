import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo(0, 0);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--gold-border)",
        paddingTop: "5rem",
        paddingBottom: "2rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand Info Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Logo size={48} showText={true} />
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: "1.6",
              }}
            >
              Vaidhik EduTech Pvt Ltd is a premium career-acceleration platform
              bridging the gap between academic education and standard
              engineering/corporate sectors.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "4px",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.background = "var(--gold-gradient)";
                  e.currentTarget.style.borderColor = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--gold-border)";
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "4px",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.background = "var(--gold-gradient)";
                  e.currentTarget.style.borderColor = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--gold-border)";
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "4px",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.background = "var(--gold-gradient)";
                  e.currentTarget.style.borderColor = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--gold-border)";
                }}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              className="font-serif"
              style={{
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                padding: 0,
              }}
            >
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "programs", label: "Upskilling Programs" },
                { id: "placements", label: "Placements & Partners" },
                { id: "verify", label: "Verify Certification" },
                { id: "contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold-primary)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <ArrowRight
                      size={12}
                      style={{ color: "var(--gold-primary)" }}
                    />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Programs Column */}
          <div>
            <h4
              className="font-serif"
              style={{
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Popular Domains
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                padding: 0,
              }}
            >
              {[
                { label: "Cloud and Architect", page: "programs" },
                { label: "Docker & Kubernetes", page: "programs" },
                { label: "Embedded Systems & IoT", page: "programs" },
                { label: "CATIA & Mechanical Design", page: "programs" },
                { label: "Bioinformatics Analysis", page: "programs" },
                { label: "Management & SAP FICO", page: "programs" },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNavClick(item.page)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold-primary)";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <ArrowRight
                      size={12}
                      style={{ color: "var(--gold-primary)" }}
                    />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4
              className="font-serif"
              style={{
                color: "var(--text-primary)",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "1.5rem",
                letterSpacing: "0.05em",
              }}
            >
              Get In Touch
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: 0,
              }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <MapPin
                  size={18}
                  style={{
                    color: "var(--gold-primary)",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                  }}
                />
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                  }}
                >
                  2nd Floor, RJ Arcade, Nehru Rd, HRBR Layout, Kammanahalli,
                  Bengaluru, Karnataka 560084
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Phone
                  size={18}
                  style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                />
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  +91 97318 21322
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Mail
                  size={18}
                  style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                />
                <span
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  hr@vaidhikedutech.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copy Block */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
            &copy; {currentYear} Vaidhik EduTech Pvt Ltd. All Rights Reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (text, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick("home")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {text}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
