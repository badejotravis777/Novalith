import React from "react";
import "./Services.css";
import { FaBullhorn, FaHashtag, FaChartLine, FaPaintBrush, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Digital Advertising",
    desc: "Drive traffic and conversions with Google, Meta, YouTube & TikTok campaigns tailored to your audience."
  },
  {
    icon: <FaHashtag />,
    title: "Social Media Management",
    desc: "Grow your brand with consistent content, daily engagement, and insights that drive loyalty."
  },
  {
    icon: <FaChartLine />,
    title: "Marketing Strategy",
    desc: "Turn data into action with tailored marketing funnels, competitor analysis, and strategic targeting."
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Design",
    desc: "Transform visuals into brand power — from ad creatives to flyers, logos, decks & more."
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Build high-converting websites and landing pages that reflect your brand, perform fast, and drive results."
  }
];

const Services = () => {
  return (
    <section className="pro-services-section" id="services">
      <div className="pro-services-header">
        <h2>What We <span>Offer</span></h2>
        <p>We merge strategy, creativity, and performance to build campaigns that truly grow brands.</p>
      </div>

      <div className="pro-services-grid">
        {services.map((srv, index) => (
          <div className="pro-service-card" key={index}>
            <div className="pro-service-icon">{srv.icon}</div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
