import { useState, useEffect, useRef } from "react";
import { FaHome, FaProjectDiagram, FaClipboardList, FaCode } from "react-icons/fa";
import Link from "next/link";

const TopNavbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = {
    main: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    for (const section in sectionsRef) {
      if (sectionsRef[section].current) {
        const rect = sectionsRef[section].current.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-navbar">
      <nav>
        <ul>
        <li
            className={activeSection === "main" ? "active" : ""}
            onMouseEnter={() => setActiveSection("main")}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => window.location.href = "#main"}
          >
            <FaHome size={25}/>
            {activeSection === "main" && <span className="tooltip">Main</span>}
          </li>
          <li
            className={activeSection === "projects" ? "active" : ""}
            onMouseEnter={() => setActiveSection("projects")}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => window.location.href = "#projects"}
          >
            <FaProjectDiagram size={25}/>
            {activeSection === "projects" && <span className="tooltip">Projects</span>}
          </li>
          <li
            className={activeSection === "skills" ? "active" : ""}
            onMouseEnter={() => setActiveSection("skills")}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => window.location.href = "#skills"}
          >
            <FaCode size={25}/>
            {activeSection === "skills" && <span className="tooltip">Skills</span>}
          </li>
          <li
            className={activeSection === "experience" ? "active" : ""}
            onMouseEnter={() => setActiveSection("experience")}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => window.location.href = "#experience"}
          >
            <FaClipboardList size={25}/>
            {activeSection === "experience" && <span className="tooltip">Experience</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopNavbar;
