import React, { useState } from "react";
import {
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Printer,
  RefreshCw,
} from "lucide-react";
import { Logo } from "../components/Logo";
import confetti from "canvas-confetti";

interface VerifiedCertData {
  code: string;
  name: string;
  course: string;
  issueDate: string;
  type: string;
}

export const VerifyCertificate: React.FC = () => {
  const [certCode, setCertCode] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<
    "success" | "error" | null
  >(null);
  const [certData, setCertData] = useState<VerifiedCertData | null>(null);

  // Pre-configured mock database for testing
  const mockCertificates: Record<string, VerifiedCertData> = {
    "VDE-2026-101": {
      code: "VDE-2026-101",
      name: "Rahul Sharma",
      course: "Azure Cloud and Architect Professional Certification",
      issueDate: "April 12, 2026",
      type: "Mentor-Led Learning",
    },
    "VDE-2026-102": {
      code: "VDE-2026-102",
      name: "Priya Singh",
      course: "Embedded Systems & IoT Engineering Certification",
      issueDate: "May 24, 2026",
      type: "Classroom Offline Learning",
    },
    "VDE-2026-103": {
      code: "VDE-2026-103",
      name: "Amit Patel",
      course: "Construction Planning and Structural Analysis (REVIT)",
      issueDate: "June 05, 2026",
      type: "Classroom Offline Learning",
    },
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certCode.trim()) return;

    setIsValidating(true);
    setValidationResult(null);

    setTimeout(() => {
      setIsValidating(false);
      const codeUpper = certCode.trim().toUpperCase();
      const match = mockCertificates[codeUpper];

      if (match) {
        setValidationResult("success");
        setCertData(match);
        // Celebration confetti!
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#c5a059", "#ffd700", "#ffffff"],
        });
      } else {
        setValidationResult("error");
        setCertData(null);
      }
    }, 1800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="verify-page"
      style={{ paddingTop: "8.5rem", paddingBottom: "6rem" }}
    >
      <div className="container" style={{ maxWidth: "850px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Verify Certification Authority
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Enter your unique credentials registration ID to verify graduation
            state, program records, and issuance validity.
          </p>
        </div>

        {/* Input Panel if not yet successfully verified */}
        {validationResult !== "success" && (
          <div
            className="glass-card"
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              padding: "2.5rem 2rem",
              border: "1px solid var(--gold-border)",
            }}
          >
            <form
              onSubmit={handleVerify}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  Certificate Verification ID Code
                </label>
                <input
                  type="text"
                  required
                  disabled={isValidating}
                  placeholder="E.g. VDE-2026-101"
                  value={certCode}
                  onChange={(e) => setCertCode(e.target.value)}
                  style={{
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--gold-border)",
                    borderRadius: "4px",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    outline: "none",
                    textAlign: "center",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
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

              {/* Verify Button */}
              <button
                type="submit"
                disabled={isValidating || !certCode.trim()}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "0.95rem",
                }}
              >
                {isValidating ? (
                  <>
                    <RefreshCw size={16} className="spin-animation" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Verify Credentials</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {/* Demo Hint */}
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                💡 Try sample certification IDs:{" "}
                <strong style={{ color: "var(--gold-primary)" }}>
                  VDE-2026-101
                </strong>
                ,{" "}
                <strong style={{ color: "var(--gold-primary)" }}>
                  VDE-2026-102
                </strong>
                , or{" "}
                <strong style={{ color: "var(--gold-primary)" }}>
                  VDE-2026-103
                </strong>
                .
              </div>
            </form>

            {/* Error Message */}
            {validationResult === "error" && (
              <div
                className="animate-fade-in"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem",
                  backgroundColor: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "4px",
                  color: "var(--error)",
                  marginTop: "1.5rem",
                  fontSize: "0.85rem",
                  lineHeight: "1.5",
                }}
              >
                <AlertTriangle
                  size={18}
                  style={{ flexShrink: 0, marginTop: "0.1rem" }}
                />
                <div>
                  <strong>Verification Failed:</strong> The verification code
                  you entered does not match our registration logs. Please
                  verify the characters or contact credentials support.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Certificate Display Panel on Success */}
        {validationResult === "success" && certData && (
          <div
            className="animate-fade-in"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {/* SUCCESS BANNER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid var(--success)",
                borderRadius: "6px",
                color: "var(--success)",
                fontSize: "0.9rem",
              }}
            >
              <ShieldCheck size={20} />
              <span>
                <strong>Verification Confirmed:</strong> Certification
                registration found. Issued by{" "}
                <strong>Vaidhik EduTech Pvt Ltd</strong>.
              </span>
            </div>

            {/* DIGITAL PRINTABLE CERTIFICATE */}
            <div
              className="printable-certificate-container"
              style={{
                backgroundColor: "#0a0a0c",
                border: "8px double var(--gold-primary)",
                padding: "4rem 3rem",
                borderRadius: "8px",
                position: "relative",
                boxShadow: "0 15px 40px rgba(197, 160, 89, 0.08)",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              {/* Background watermark logo styling */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.03,
                  pointerEvents: "none",
                }}
              >
                <Logo size={400} showText={false} />
              </div>

              {/* Border thin internal */}
              <div
                style={{
                  position: "absolute",
                  inset: "10px",
                  border: "1px solid rgba(197, 160, 89, 0.25)",
                  pointerEvents: "none",
                  borderRadius: "4px",
                }}
              />

              {/* Certificate Header logo */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "2.5rem",
                }}
              >
                <Logo size={100} showText={false} />
              </div>

              <h2
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                Certificate of Completion
              </h2>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "2.5rem",
                }}
              >
                THIS IS PROUDLY PRESENTED TO
              </p>

              <h3
                className="font-serif text-gold-gradient"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                }}
              >
                {certData.name}
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  maxWidth: "580px",
                  margin: "0 auto 2.5rem auto",
                  lineHeight: "1.6",
                }}
              >
                for successfully completing the advanced industry upskilling
                curriculum in <strong>{certData.course}</strong> under the{" "}
                <strong>{certData.type}</strong> division program.
              </p>

              {/* Bottom Signatures Block */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginTop: "4rem",
                  borderTop: "1px solid rgba(197, 160, 89, 0.1)",
                  paddingTop: "2rem",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                {/* Issue Details */}
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Date of Issuance
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                      fontWeight: "600",
                      marginTop: "0.25rem",
                    }}
                  >
                    {certData.issueDate}
                  </div>
                </div>

                {/* Code Registration */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    Verification Code
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--gold-primary)",
                      fontWeight: "600",
                      marginTop: "0.25rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {certData.code}
                  </div>
                </div>

                {/* Director Authority */}
                <div style={{ textAlign: "right" }}>
                  <div
                    className="font-serif text-gold-gradient"
                    style={{
                      fontStyle: "italic",
                      fontSize: "1.15rem",
                      fontWeight: "bold",
                    }}
                  >
                    Vaidhik EduTech Pvt Ltd
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      marginTop: "0.25rem",
                    }}
                  >
                    Authorized Signatory
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Print and Verify Another */}
            <div
              style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
            >
              <button
                onClick={handlePrint}
                className="btn btn-primary"
                style={{ padding: "0.7rem 1.8rem" }}
              >
                <Printer size={16} />
                <span>Print Certificate</span>
              </button>
              <button
                onClick={() => {
                  setValidationResult(null);
                  setCertCode("");
                  setCertData(null);
                }}
                className="btn btn-secondary"
                style={{ padding: "0.7rem 1.8rem" }}
              >
                <span>Verify Another Code</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Embedded rotating keyframe spinner styling */}
      <style>{`
        .spin-animation {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-certificate-container, .printable-certificate-container * {
            visibility: visible;
          }
          .printable-certificate-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            border: 4px double #000 !important;
            box-shadow: none !important;
            background-color: #fff !important;
            color: #000 !important;
          }
        }
      `}</style>
    </div>
  );
};
