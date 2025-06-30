import React, { useState } from "react";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import "./Hero.css";
import "./ScheduleSection.css"; // Reuse form styles

Modal.setAppElement("#root");

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companySize: "",
    email: "",
    services: "",
    budget: "",
    hearAbout: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_upld1bo",
        "template_gfn2cfa",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          company_size: formData.companySize,
          email: formData.email,
          services: formData.services,
          budget: formData.budget,
          hear_about: formData.hearAbout,
        },
        "voizISdE6OGZrPT4T"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Growth Engine <span>For Brands</span>
        </h1>
        <p className="hero-subtitle">
          Bold campaigns. Targeted Ads. Real Results.
        </p>
        <button className="cta-button" onClick={() => setModalIsOpen(true)}>
          Book a Free Strategy Call
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        {!submitted ? (
          <form className="modal-form" onSubmit={handleSubmit}>
            <h2>SCHEDULE A CALL</h2>
            <div className="row">
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
            </div>
            <select name="companySize" onChange={handleChange} required>
              <option value="">Select the size of your company</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>201+</option>
            </select>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <textarea
              name="services"
              placeholder="What services would you like to enquire about?"
              rows={3}
              onChange={handleChange}
              required
            ></textarea>
            <select name="budget" onChange={handleChange} required>
              <option value="">What is your budget?</option>
              <option>₦40,000 - ₦50,000</option>
              <option>₦50,000 - ₦80,000</option>
              <option>₦80,000 - ₦100,000</option>
              <option>₦100,000+</option>
            </select>
            <select name="hearAbout" onChange={handleChange} required>
              <option value="">How did you hear about us</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
            <button type="submit" className="submit-btn">SCHEDULE</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You!</h2>
            <p>We've received your request. We'll be in touch shortly.</p>
            <button onClick={() => setModalIsOpen(false)} className="submit-btn">Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Hero;
