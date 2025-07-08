import React, { useState } from "react";
import Countdown from "react-countdown";
import emailjs from "@emailjs/browser";
import "./WaitlistSection.css";

const WaitlistSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    industry: "",
    niche: "",
    expectation: "",
  });

  const [customIndustry, setCustomIndustry] = useState("");
  const [customNiche, setCustomNiche] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) err.name = "Full name is required.";
    if (!emailRegex.test(form.email)) err.email = "Enter a valid email.";
    if (!form.industry || (form.industry === "Other" && !customIndustry.trim()))
      err.industry = "Please select or specify industry.";
    if (!form.niche || (form.niche === "Other" && !customNiche.trim()))
      err.niche = "Please select or specify niche.";
    if (!form.expectation.trim() || form.expectation.length < 10)
      err.expectation = "Share a brief expectation (min 10 characters).";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalIndustry = form.industry === "Other" ? customIndustry.trim() : form.industry;
    const finalNiche = form.niche === "Other" ? customNiche.trim() : form.niche;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    const finalForm = {
      ...form,
      industry: finalIndustry,
      niche: finalNiche,
    };

    try {
      await emailjs.send(
        "service_upld1bo",
        "template_x0s0v3r",
        finalForm,
        "voizISdE6OGZrPT4T"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="waitlist-section">
      <div className="waitlist-inner">
        <div className="waitlist-content">
          {/* <img src="/stratoslogo.png" alt="Stratos Logo" className="stratos-logo" /> */}
          <h2 className="section-title">STRATOS HQ</h2>
          <p className="section-tagline">Africa’s Toolkit for Brand Growth</p>

          <p className="section-description">
            A mobile-first digital platform built to help creators, entrepreneurs, and small businesses grow smarter, faster, and more professionally online — without hiring expensive teams or guessing what works.
          </p>

          <ul className="features-list">
          <ul className="features-list">
  <li><span className="feature-icon"></span> Access Canva templates, content plans & Reels scripts</li>
  <li><span className="feature-icon"></span> Built by real marketing executives, made for Africa</li>
  <li><span className="feature-icon"></span> Join 100+ creators getting early access</li>
  <li><span className="feature-icon"></span> Free Premium Tools for First 100 Signups</li>
</ul>

          </ul>

          <p className="credit-text">
            Backed by <strong>Novalith Marketing</strong> — the team behind 50+ brand campaigns in Africa.
          </p>

          <Countdown
            date={new Date("2025-10-08T00:00:00")}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="countdown-box">
                <div><strong>{days}</strong><span>Days</span></div>
                <div><strong>{hours}</strong><span>Hours</span></div>
                <div><strong>{minutes}</strong><span>Minutes</span></div>
                <div><strong>{seconds}</strong><span>Seconds</span></div>
              </div>
            )}
          />
        </div>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <select name="industry" value={form.industry} onChange={handleChange}>
              <option value="">Select Industry</option>
              <option>Fashion & Beauty</option>
              <option>Education</option>
              <option>Entertainment</option>
              <option>Finance / Crypto</option>
              <option>Marketing / Advertising</option>
              <option>Coaching & Consulting</option>
              <option>Travel / Hospitality</option>
              <option>Other</option>
            </select>
            {form.industry === "Other" && (
              <input
                type="text"
                placeholder="Specify your industry"
                value={customIndustry}
                onChange={(e) => setCustomIndustry(e.target.value)}
              />
            )}
            {errors.industry && <p className="error-text">{errors.industry}</p>}

            <select name="niche" value={form.niche} onChange={handleChange}>
              <option value="">Select Niche</option>
              <option>Reels Creator</option>
              <option>Brand Designer</option>
              <option>Crypto Coach</option>
              <option>Food Vendor</option>
              <option>Wedding Vendor</option>
              <option>Other</option>
            </select>
            {form.niche === "Other" && (
              <input
                type="text"
                placeholder="Specify your niche"
                value={customNiche}
                onChange={(e) => setCustomNiche(e.target.value)}
              />
            )}
            {errors.niche && <p className="error-text">{errors.niche}</p>}

            <textarea
              name="expectation"
              placeholder="What do you hope to gain from Stratos?"
              onChange={handleChange}
              rows={3}
              className={errors.expectation ? "input-error" : ""}
            ></textarea>
            {errors.expectation && <p className="error-text">{errors.expectation}</p>}

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? "Submitting..." : "Join Waitlist"}
            </button>
          </form>
        ) : (
          <div className="thank-you">
            <h3>🎉 You're In!</h3>
            <p>Thanks for joining the waitlist. We’ll keep you updated before launch day.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
