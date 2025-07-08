import React from "react";
import "./AboutPage.css";
import Navbar from "../components/Navbar"; // Adjust path based on your project
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="about-hero">
        <div className="hero-inner">
          <h1>Novalith Marketing</h1>
          <p>Creative Agency for Bold, Growth-Focused Brands</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="intro-content">
          <h2>About Us</h2>
          <p>
            Novalith Marketing is a creative and data-driven agency helping brands grow
            through strategy, ads, social media, and PR. We help businesses stand out,
            connect with their audience, and turn attention into results. Whether you're
            launching a startup or scaling an existing brand, we deliver bold, effective
            campaigns tailored to your goals. At Novalith, we don’t just market — we build
            brands that thrive.
          </p>
        </div>
      </section>

      <section className="about-why">
        <div className="why-inner">
          <h2>Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h4> Proven Results</h4>
              <p>We drive measurable growth through conversion-optimized strategies.</p>
            </div>
            <div className="why-card">
              <h4> Data-Driven</h4>
              <p>Every move we make is powered by analytics and insights.</p>
            </div>
            <div className="why-card">
              <h4> Tailored Solutions</h4>
              <p>We customize every strategy to your unique brand & audience.</p>
            </div>
            <div className="why-card">
              <h4> Transparent Process</h4>
              <p>We keep you informed at every stage of your brand journey.</p>
            </div>
            <div className="why-card">
              <h4> Experienced Team</h4>
              <p>Our team has deep expertise across digital, creative & paid media.</p>
            </div>
            <div className="why-card">
              <h4> Modern Tools</h4>
              <p>We use the best platforms and tech to stay ahead of the curve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-process">
        <div className="process-inner">
          <h2>How We Work</h2>
          <ol>
            <li><strong> Discovery Call:</strong> Understanding your vision & goals.</li>
            <li><strong> Strategy Development:</strong> Crafting a roadmap for growth.</li>
            <li><strong> Campaign Launch:</strong> Activating your message with precision.</li>
            <li><strong> Weekly Optimization:</strong> Refining for better performance.</li>
            <li><strong> Reporting & Scaling:</strong> Showing results & planning next steps.</li>
          </ol>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
