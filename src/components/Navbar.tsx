import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenLeadModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "programs", label: "Upskilling Programs" },
    { id: "placements", label: "Placements" },
    { id: "verify", label: "Verify Certificate" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 900,
          transition: "var(--transition-smooth)",
          backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.85)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--gold-border)"
            : "1px solid transparent",
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo Brand */}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleNavClick("home")}
          >
            <Logo size={42} showText={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav style={{ display: "none" }} className="desktop-nav-links">
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                gap: "2rem",
                alignItems: "center",
                margin: 0,
              }}
            >
              {navItems.map((item) => {
                const isActive =
                  currentPage === item.id ||
                  (item.id === "programs" && currentPage.startsWith("course-"));
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: isActive
                          ? "var(--gold-primary)"
                          : "var(--text-secondary)",
                        fontSize: "0.92rem",
                        fontWeight: isActive ? "600" : "400",
                        cursor: "pointer",
                        padding: "0.5rem 0",
                        position: "relative",
                        transition: "var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          e.currentTarget.style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {item.label}
                      {/* Active Indicator Underline */}
                      {isActive && (
                        <span
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "2px",
                            background: "var(--gold-gradient)",
                            borderRadius: "2px",
                          }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: "none" }} className="desktop-nav-cta">
            <button
              className="btn btn-primary"
              onClick={onOpenLeadModal}
              style={{ padding: "0.55rem 1.3rem", fontSize: "0.85rem" }}
            >
              <span>Get Started</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              display: "block",
              padding: "0.25rem",
            }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "var(--bg-primary)",
            zIndex: 850,
            paddingTop: "6rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              listStyle: "none",
              padding: 0,
            }}
          >
            {navItems.map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === "programs" && currentPage.startsWith("course-"));
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: isActive
                        ? "var(--gold-primary)"
                        : "var(--text-secondary)",
                      fontSize: "1.4rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
            <li style={{ marginTop: "1.5rem" }}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                style={{ width: "100%", padding: "0.9rem", fontSize: "1rem" }}
              >
                <span>Get Started</span>
                <ArrowUpRight size={16} />
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* CSS layout adjustment for desktop/mobile nav elements */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-links { display: block !important; }
          .desktop-nav-cta { display: block !important; }
          .mobile-menu-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
};
