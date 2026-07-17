import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import { CONFIG } from "../config";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSending(true);

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
            phone: "-",
            college: "-",
            programInterest: formData.subject,
            email: formData.email,
            message: formData.message,
          }),
        });
      } catch (err) {
        console.error("Error submitting contact lead to Google Sheet:", err);
      }
    }

    setIsSending(false);
    setIsSuccess(true);

    // Fun confetti splash on message success
    confetti({
      particleCount: 80,
      spread: 50,
      origin: { y: 0.75 },
      colors: ["#c5a059", "#ffffff"],
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
    setIsSuccess(false);
  };

  return (
    <div
      className="contact-page"
      style={{ paddingTop: "8.5rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        {/* Header */}
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
            Contact Our Advisors
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Have questions about program modules, scheduling grids, or
            recruitment partnerships? Send a message and our advisors will
            respond shortly.
          </p>
        </div>

        {/* Contact Split Grid (Left Info, Right Form) */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}
          className="contact-split-grid"
        >
          {/* LEFT: Contact details info cards */}
          <div
            className="reveal-left"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Address */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "var(--gold-overlay)",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <MapPin size={18} style={{ margin: "0 auto" }} />
              </div>
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    marginBottom: "0.4rem",
                  }}
                >
                  Corporate Office
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  2nd Floor, RJ Arcade, Nehru Rd, HRBR Layout, Kammanahalli,
                  Bengaluru, Karnataka 560084
                </p>
              </div>
            </div>

            {/* Phone support */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "var(--gold-overlay)",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <Phone size={18} style={{ margin: "0 auto" }} />
              </div>
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    marginBottom: "0.4rem",
                  }}
                >
                  Telephone lines
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    margin: 0,
                  }}
                >
                  +91 97318 21322
                </p>
              </div>
            </div>

            {/* Email Support */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "var(--gold-overlay)",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <Mail size={18} style={{ margin: "0 auto" }} />
              </div>
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    marginBottom: "0.4rem",
                  }}
                >
                  Corporate Email
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    margin: 0,
                    marginBottom: "0.2rem",
                  }}
                >
                  hr@vaidhikedutech.com
                </p>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    margin: 0,
                  }}
                >
                  info@vaidhikedutech.com
                </p>
              </div>
            </div>

            {/* Timing support details */}
            <div
              className="glass-card"
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                  backgroundColor: "var(--gold-overlay)",
                  border: "1px solid var(--gold-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <Clock size={18} style={{ margin: "0 auto" }} />
              </div>
              <div>
                <h4
                  className="font-serif"
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                    marginBottom: "0.4rem",
                  }}
                >
                  Office Hours
                </h4>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.88rem",
                    margin: 0,
                  }}
                >
                  Monday - Saturday: 9:30 AM - 6:30 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact input Form */}
          <div
            className="glass-card reveal-right"
            style={{
              border: "1px solid var(--gold-border)",
              padding: "2.5rem 2rem",
            }}
          >
            {!isSuccess ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                  className="form-row-double"
                >
                  {/* Full Name */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                      flex: 1,
                      minWidth: "200px",
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
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--gold-border)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontSize: "0.92rem",
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

                  {/* Email */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                      flex: 1,
                      minWidth: "200px",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        fontWeight: "500",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--gold-border)",
                        borderRadius: "4px",
                        color: "var(--text-primary)",
                        outline: "none",
                        fontSize: "0.92rem",
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

                {/* Subject Selection */}
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
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    style={{
                      padding: "0.75rem 1rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.92rem",
                      transition: "var(--transition-fast)",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "var(--gold-primary)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "var(--gold-border)")
                    }
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Course Syllabus">
                      Course Syllabus Inquiry
                    </option>
                    <option value="Placement Support">
                      Placement / Corporate Partnership
                    </option>
                    <option value="Certificate Verification">
                      Certificate Verification Issue
                    </option>
                  </select>
                </div>

                {/* Message */}
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
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Enter details of your message..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      padding: "0.75rem 1rem",
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--gold-border)",
                      borderRadius: "4px",
                      color: "var(--text-primary)",
                      outline: "none",
                      fontSize: "0.92rem",
                      resize: "vertical",
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

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    marginTop: "0.5rem",
                  }}
                >
                  {isSending ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
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
                    width="28"
                    height="28"
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
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Sent Successfully!
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    marginBottom: "2rem",
                    lineHeight: "1.6",
                  }}
                >
                  Thank you for reaching out, <strong>{formData.name}</strong>.
                  An educational advisor will review your message and get back
                  to you within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  style={{ padding: "0.55rem 1.5rem", fontSize: "0.88rem" }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-split-grid {
            grid-template-columns: 340px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
