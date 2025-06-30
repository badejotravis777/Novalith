import React from "react";
import "./CaseStudies.css";

const caseStudies = [
    {
        title: "Risky T – A Safer Way to Transact",
        subtitle: "Empowering secure digital transactions with trust and transparency.",
        video: require("../assets/Riskyt.mp4")
      },
      
      {
        title: "247food – See For Yourself",
        subtitle: "Delivering delicious convenience, 24/7.",
        video: require("../assets/247.mp4")
      },
      
  {
    title: "Risky T – A Safer Way to Transact",
    subtitle: "Empowering secure digital transactions with trust and transparency.",
    video: require("../assets/riskyt2.mp4")
  },
  {
    title: "Authentic Solar",
    subtitle: "RENEWABLE ENERGY",
    video: require("../assets/authenticsolar.mp4")
  },
  {
    title: "Authentic Solar",
    subtitle: "RENEWABLE ENERGY",
    video: require("../assets/authenticsolar1.mp4")
  },
];

const CaseStudies = () => {
  return (
    <section className="case-section" id="cases">
      <div className="case-header">
        <h2>PROJECTS <span>CAMPAIGNS & CASE STUDIES</span></h2>
      </div>

      <div className="case-carousel">
        {caseStudies.map((item, index) => (
          <div className="case-slide" key={index}>
            <div className="case-video-wrapper">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="case-video"
              />
              <div className="case-overlay">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
