import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LeadModal } from "./components/LeadModal";

// Pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { CourseDetail } from "./pages/CourseDetail";
import { Placements } from "./pages/Placements";
import { VerifyCertificate } from "./pages/VerifyCertificate";
import { Contact } from "./pages/Contact";

// Data
import { allCourses } from "./data/courses";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Sync state with URL hashes for seamless routing/refreshing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#/") {
        setCurrentPage("home");
        setSelectedCourseId(null);
      } else if (hash === "#/about") {
        setCurrentPage("about");
        setSelectedCourseId(null);
      } else if (hash === "#/programs") {
        setCurrentPage("programs");
        setSelectedCourseId(null);
      } else if (hash === "#/placements") {
        setCurrentPage("placements");
        setSelectedCourseId(null);
      } else if (hash === "#/verify") {
        setCurrentPage("verify");
        setSelectedCourseId(null);
      } else if (hash === "#/contact") {
        setCurrentPage("contact");
        setSelectedCourseId(null);
      } else if (hash.startsWith("#/courses/")) {
        const courseId = hash.replace("#/courses/", "");
        const exists = allCourses.some((c) => c.id === courseId);
        if (exists) {
          setCurrentPage("course-detail");
          setSelectedCourseId(courseId);
        } else {
          // Fallback
          window.location.hash = "#/";
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Trigger on initial load
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Popup modal after 5 seconds on initial render to grab leads (matches reference site popup modal)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("vaidik_lead_seen");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsLeadModalOpen(true);
        sessionStorage.setItem("vaidik_lead_seen", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const navigateTo = (pageId: string) => {
    if (pageId === "home") {
      window.location.hash = "#/";
    } else if (pageId === "course-detail" && selectedCourseId) {
      window.location.hash = `#/courses/${selectedCourseId}`;
    } else {
      window.location.hash = `#/${pageId}`;
    }
  };

  const handleNavigateToCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    window.location.hash = `#/courses/${courseId}`;
  };

  const renderActivePage = () => {
    if (currentPage === "course-detail" && selectedCourseId) {
      const course = allCourses.find((c) => c.id === selectedCourseId);
      if (course) {
        return (
          <CourseDetail
            course={course}
            onBack={() => navigateTo("programs")}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      }
    }

    switch (currentPage) {
      case "home":
        return (
          <Home
            onNavigate={navigateTo}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      case "about":
        return <About onNavigate={navigateTo} />;
      case "programs":
        return (
          <Programs
            onNavigateToCourse={handleNavigateToCourse}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
      case "placements":
        return <Placements />;
      case "verify":
        return <VerifyCertificate />;
      case "contact":
        return <Contact />;
      default:
        return (
          <Home
            onNavigate={navigateTo}
            onOpenLeadModal={() => setIsLeadModalOpen(true)}
          />
        );
    }
  };

  // Dynamic layout display depending on active page index
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Header Navbar */}
      <Navbar
        currentPage={
          currentPage === "course-detail" && selectedCourseId
            ? `course-${selectedCourseId}`
            : currentPage
        }
        onNavigate={navigateTo}
        onOpenLeadModal={() => setIsLeadModalOpen(true)}
      />

      {/* Main Page Area */}
      <main style={{ flexGrow: 1 }}>{renderActivePage()}</main>

      {/* Global Lead capture callback popup */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      {/* Footer component */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
