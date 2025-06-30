import React from "react";
import "./Packages.css";

const packages = [
  {
    title: "Starter Lite",
    subtitle: "For small businesses just starting with digital visibility",
    price: "₦40,000 / month",
    features: [
      "3 custom flyers",
      "1 short promotional video",
      "Basic page setup",
      "1 ad setup & optimization",
      "Sales-driven captions",
      "1 post/week social management",
      "One-time performance review"
    ],
    highlight: true
  },
  {
    title: "Starter",
    subtitle: "For brands building a consistent presence & audience",
    price: "₦50,000 / month",
    features: [
      "5 custom flyers",
      "3 promotional videos",
      "Optimized social setup",
      "1 full ad campaign",
      "DM engagement captions",
      "2 posts/week content",
      "Weekly performance check-in"
    ],
    highlight: true
  },
  {
    title: "Growth",
    subtitle: "For businesses ready to scale visibility & generate leads",
    price: "₦80,000 / month",
    features: [
      "8 premium flyers",
      "5 promotional videos",
      "3 posts/week + stories",
      "2 ad campaigns with A/B test",
      "DM follow-up flows",
      "Weekly insights & adjustments"
    ],
    highlight: true
  },
  {
    title: "Premium Conversion",
    subtitle: "For brands converting traffic to loyal customers",
    price: "₦120,000 / month",
    features: [
      "10 flyers & 7 pro videos",
      "Daily content + reels",
      "Advanced ad funnels",
      "Full sales funnel setup",
      "Lead tracking + manager"
    ],
    highlight: true
  },
  {
    title: "Growth & Sales Accelerator",
    subtitle: "For serious brands scaling to dominate their niche",
    price: "₦150,000 / month",
    features: [
      "12 flyers & 10 pro videos",
      "Daily multi-format posting",
      "3–4 advanced ad campaigns",
      "CRM & automation setup",
      "Full conversion strategy"
    ],
    highlight: true
  },

  {
    title: "Performance Suite",
    subtitle: "For brands scaling with automation, ads & funnel clarity",
    price: "₦180,000 / month",
    features: [
      "15+ custom flyers",
      "12+ pro video creatives",
      "Daily content + reels + stories",
      "4 optimized ad campaigns",
      "Advanced funnel segmentation",
      "Weekly reporting & strategy call"
    ],
    highlight: true
  },
  {
    title: "Brand Domination",
    subtitle: "For brands expanding across multiple platforms & verticals",
    price: "₦200,000 / month",
    features: [
      "20+ design assets (flyers, carousels)",
      "15+ creative videos (reels, ads)",
      "Multi-platform content strategy",
      "Conversion-focused ad funnels",
      "Email + WhatsApp follow-ups",
      "Dedicated brand strategist"
    ],
    highlight: true
  },
  {
    title: "Enterprise Impact",
    subtitle: "For high-performing companies seeking top-tier visibility",
    price: "₦250,000 / month",
    features: [
      "Unlimited creatives (visual + video)",
      "Full-funnel marketing architecture",
      "AI-driven customer insights",
      "Team training & onboarding",
      "Dedicated account manager",
      "Monthly growth strategy blueprint"
    ],
    highlight: true
  }
  

];

const Packages = () => {
  return (
    <section className="packages-section" id="packages">
      <div className="packages-header">
        <h2>Our <span>Plans</span></h2>
        <p>Flexible monthly packages tailored to your brand’s growth stage.</p>
      </div>

      <div className="package-grid">
        {packages.map((pkg, index) => (
          <div className={`package-card ${pkg.highlight ? "highlight" : ""}`} key={index}>
            <h3>{pkg.title}</h3>
            <p className="subtitle">{pkg.subtitle}</p>
            <p className="price">{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, idx) => (
                <li key={idx}>✔ {feature}</li>
              ))}
            </ul>
            <a href="#contact" className="package-btn">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
