import React, { useState, useEffect } from "react";
import { X, Send, Award, Phone, School, User } from "lucide-react";
import confetti from "canvas-confetti";
import { CONFIG } from "../config";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    college: "",
    programInterest: "azure-cloud-architect",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.college) {
      alert("Please fill out all fields.");
      return;
    }
    setIsSubmitting(true);

    if (CONFIG.GOOGLE_SHEET_URL) {
      try {
        await fetch(CONFIG.GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            college: formData.college,
            programInterest: formData.programInterest,
            email: "-",
            message: "Lead from modal form",
          }),
        });
      } catch (err) {
        console.error("Error submitting lead to Google Sheet:", err);
      }
    }

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger success confetti explosion!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#c5a059", "#ffd700", "#ffffff", "#222222"],
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      college: "",
      programInterest: "azure-cloud-architect",
    });
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(8px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card animate-fade-in"
        style={{
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--gold-primary)",
          boxShadow: "0 20px 50px rgba(197, 160, 89, 0.15)",
          padding: "2.5rem 2rem",
          position: "relative",
          cursor: "default",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "transparent",
            border: "none",
            color: "var(--text-secondary)",
            cursor: "pointer",
            padding: "0.25rem",
            transition: "var(--transition-fast)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--gold-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-secondary)")
          }
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                }}
              >
                Kickstart Your Future
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Fill in your details to receive expert career counseling and
                access to exclusive program packages.
              </p>
            </div>

            {/* Form Fields */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                marginBottom: "2rem",
              }}
            >
              {/* Full Name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  Full Name
                </label>
                <div style={{ position: "relative" }}>
                  <User
                    size={18}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--gold-primary)",
                    }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.8rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      transition: "var(--transition-fast)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold-primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--gold-border)")
                    }
                  />
                </div>
              </div>

              {/* Contact Number */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  Contact Number
                </label>
                <div style={{ position: "relative" }}>
                  <Phone
                    size={18}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--gold-primary)",
                    }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.8rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      transition: "var(--transition-fast)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold-primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--gold-border)")
                    }
                  />
                </div>
              </div>

              {/* College Name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  College / Institution Name
                </label>
                <div style={{ position: "relative" }}>
                  <School
                    size={18}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--gold-primary)",
                    }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Enter your college/university"
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.8rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      transition: "var(--transition-fast)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold-primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--gold-border)")
                    }
                  />
                </div>
              </div>

              {/* Program of Interest */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  Select Domain Interests
                </label>
                <div style={{ position: "relative" }}>
                  <Award
                    size={18}
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--gold-primary)",
                    }}
                  />
                  <select
                    value={formData.programInterest}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        programInterest: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem 0.75rem 2.8rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      appearance: "none",
                      transition: "var(--transition-fast)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold-primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--gold-border)")
                    }
                  >
                    <option value="azure-cloud-architect">
                      Azure Cloud and Architect
                    </option>
                    <option value="ccna">CCNA Network Associate</option>
                    <option value="docker-kubernetes">
                      Docker & Kubernetes
                    </option>
                    <option value="embedded-systems">Embedded Systems</option>
                    <option value="robotics">Robotics</option>
                    <option value="autocad-mech">AutoCAD (Mechanical)</option>
                    <option value="catia">CATIA Surface Design</option>
                    <option value="drone-technology">Drone Technology</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="bioinformatics">Bioinformatics</option>
                    <option value="aspen-plus">Aspen Plus (Chemical)</option>
                  </select>
                  <div
                    style={{
                      position: "absolute",
                      right: "1.25rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRight: "2px solid var(--gold-primary)",
                      borderBottom: "2px solid var(--gold-primary)",
                      transformOrigin: "75% 75%",
                      rotate: "45deg",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: "100%", padding: "0.9rem", fontSize: "1rem" }}
            >
              {isSubmitting ? (
                <span>Submitting Details...</span>
              ) : (
                <>
                  <span>Submit Details</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                border: "2px solid var(--success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
                color: "var(--success)",
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3
              className="font-serif text-gold-gradient"
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Submission Successful!
            </h3>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                marginBottom: "2rem",
              }}
            >
              Thank you, <strong>{formData.name}</strong>. An educational
              advisor will contact you at <strong>{formData.phone}</strong>{" "}
              within the next 24 hours.
            </p>
            <button
              onClick={resetForm}
              className="btn btn-secondary"
              style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem" }}
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
