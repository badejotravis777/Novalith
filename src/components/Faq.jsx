import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What makes Novalith different from other marketing firms?",
    answer: "We blend data-driven marketing, authentic storytelling, and conversion-focused strategies tailored specifically for African brands and startups."
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer: "Not at all. We offer flexible monthly plans. You can scale up or pause anytime depending on your brand's goals."
  },
  {
    question: "Which industries do you specialize in?",
    answer: "We’ve worked with food delivery, fashion, fintech, real estate, wellness, e-commerce, and several other sectors."
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely. While we offer standard packages, we frequently create custom marketing workflows based on client objectives and budget."
  },
  {
    question: "How soon will I start seeing results?",
    answer: "Our onboarding begins in 24–48 hours. While creative work launches immediately, campaign traction typically builds within 2–4 weeks."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2>Frequently Asked <span>Questions</span></h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="faq-question">
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
