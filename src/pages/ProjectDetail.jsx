import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { caseStudies } from "../components/CaseStudies";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScheduleSection from "../components/ScheduleSection";
import "./ProjectDetail.css";

const getSectionClass = (section) => {
    switch (section.toLowerCase()) {
      case "client":
        return "client-section";
      case "goals":
        return "goals-section";
      case "our strategy":
        return "strategy-section";
      case "implementation":
        return "implementation-section";
      case "results":
        return "results-section";
      case "industry":
        return "industry-section";
      default:
        return "project-section";
    }
  };
  

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = caseStudies.find((item) => item.slug === slug);

  if (!project) return <p className="not-found">Project not found.</p>;

  const moreProjects = caseStudies
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

    const splitSections = (desc) => {
        const lines = desc.split("\n").filter((l) => l.trim() !== "");
        const sections = {};
        let current = "Overview";
        sections[current] = [];
      
        lines.forEach((line) => {
          const trimmedLine = line.trim();
          const headerMatch = trimmedLine.match(/^(Goals|Our Strategy|Implementation|Results|Client|Industry)(:|-)/i);
          if (headerMatch) {
            current = headerMatch[1];
            sections[current] = [trimmedLine.replace(headerMatch[0], "").trim()];
          } else {
            sections[current].push(trimmedLine);
          }
        });
      
        return sections;
      };
      

  const descriptionSections = splitSections(project.description || "");

  return (
    <>
      <Navbar />
      <section className="project-detail">
        <div className="project-header">
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
        </div>

        <div className="project-body">
          <div className="project-video-container">
            <video
              src={project.video}
              autoPlay
              muted
              loop
              controls
              className="project-main-video"
              poster="/video-poster.jpg"
            />
          </div>

          <div className="project-breakdown">
            {Object.entries(descriptionSections).map(([section, content], idx) => (
             <div key={idx} className={getSectionClass(section)}>

                <h3>{section}</h3>
                {content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="more-projects">
          <h2>More Projects</h2>
          <div className="case-carousel">
            {moreProjects.map((item, idx) => (
              <div
                className="case-slide"
                key={idx}
                onClick={() => navigate(`/projects/${item.slug}`)}
              >
                <div className="case-video-wrapper">
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    className="case-video"
                  />
                  <div className="case-overlay">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ScheduleSection />
      <Footer />
    </>
  );
};

export default ProjectDetail;
