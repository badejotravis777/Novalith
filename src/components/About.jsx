import React, { useEffect, useState } from "react";
import "./About.css";

const images = [
  require("../assets/about1.png"),
  require("../assets/about2.png"),
  require("../assets/about3.png"),
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h2>WHY <span>NOVALITH</span></h2>
          <p>
            Novalith is a solution-driven, full-service agency combining digital strategy and marketing innovation
            to fuel business growth. We deliver strategies that turn challenges into opportunities for success.
          </p>
          <a href="#contact" className="about-button">DISCOVER MORE</a>
        </div>
        <div className="about-image">
          <img src={images[currentImage]} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
