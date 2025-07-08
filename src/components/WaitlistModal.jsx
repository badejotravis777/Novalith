import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Countdown from "react-countdown";
import "./FloatingWaitlist.css";

const WaitlistModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "",
    niche: "",
    expectation: "",
  });

  const [customIndustry, setCustomIndustry] = useState("");
  const [customNiche, setCustomNiche] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const finalForm = {
      ...form,
      industry: form.industry === "Other" ? customIndustry : form.industry,
      niche: form.niche === "Other" ? customNiche : form.niche,
    };

    emailjs
      .send(
        "service_upld1bo",
        "template_x0s0v3r",
        finalForm,
        "voizISdE6OGZrPT4T"
      )
      .then(
        () => {
          setSubmitted(true);
          setSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
          setSubmitting(false);
        }
      );
  };

  return (
    <div className="waitlist-modal-overlay">
      <div className="waitlist-modal stratos-modal">
        <button className="close-modal" onClick={onClose}>✖</button>

        {!submitted ? (
          <>
            <h3 className="modal-title">STRATOS HQ</h3>
            <p className="modal-tagline">Africa’s Toolkit for Brand Growth</p>
            <p className="modal-description">
              We’re launching a mobile-first toolkit to help African creators & entrepreneurs grow smarter — without stress. Think Canva kits, Reels templates, strategy plans — all in one place.
            </p>

            <Countdown
              date={new Date("2025-10-08T00:00:00")}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="countdown-timer">
                  <div><strong>{days}</strong><span>Days</span></div>
                  <div><strong>{hours}</strong><span>Hours</span></div>
                  <div><strong>{minutes}</strong><span>Minutes</span></div>
                  <div><strong>{seconds}</strong><span>Seconds</span></div>
                </div>
              )}
            />

            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />

              <select name="industry" value={form.industry} onChange={handleChange} required>
                <option value="">Select Industry</option>
                <option>Fashion & Beauty</option>
                <option>Food & Beverage</option>
                <option>Real Estate</option>
                <option>Education</option>
                <option>Health & Wellness</option>
                <option>Entertainment</option>
                <option>Tech / SaaS</option>
                <option>E-Commerce</option>
                <option>Finance / Crypto</option>
                <option>Marketing / Advertising</option>
                <option>NGOs / Non-profits</option>
                <option>Coaching & Consulting</option>
                <option>Media & Publishing</option>
                <option>Art / Photography</option>
                <option>Religious / Faith-based</option>
                <option>Events / Weddings</option>
                <option>Home Services</option>
                <option>Legal / Law</option>
                <option>Transportation / Logistics</option>
                <option>Travel / Hospitality</option>
                <option>Other</option>
              </select>

              {form.industry === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify your industry"
                  value={customIndustry}
                  onChange={(e) => setCustomIndustry(e.target.value)}
                  required
                />
              )}

              <select name="niche" value={form.niche} onChange={handleChange} required>
                <option value="">Select Niche</option>
                <option>Fashion</option>
                <option>Makeup / Skincare</option>
                <option>Luxury Lifestyle</option>
                <option>Streetwear</option>
                <option>Food Vendor / Restaurant</option>
                <option>Delivery Service</option>
                <option>Property Listing</option>
                <option>Fitness / Gym</option>
                <option>Mental Health</option>
                <option>Music / Entertainment</option>
                <option>Gadget Sales</option>
                <option>Online Course Creator</option>
                <option>Influencer / Personal Brand</option>
                <option>Crypto Coach</option>
                <option>Brand Designer</option>
                <option>Photographer</option>
                <option>Interior Design</option>
                <option>Faith Content</option>
                <option>Travel Blogger</option>
                <option>Wedding Vendor</option>
                <option>Freelancer</option>
                <option>Other</option>
              </select>

              {form.niche === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify your niche"
                  value={customNiche}
                  onChange={(e) => setCustomNiche(e.target.value)}
                  required
                />
              )}

              <textarea
                name="expectation"
                placeholder="What do you hope to gain from Stratos?"
                rows={3}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="modal-submit-btn" disabled={submitting}>
                {submitting ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <h3 className="modal-title">🎉 You're In!</h3>
            <p className="modal-description">Thanks for joining the waitlist. We’ll keep you updated as we approach launch day.</p>
            <button onClick={onClose} className="modal-submit-btn">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
