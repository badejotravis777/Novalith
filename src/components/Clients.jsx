import React from "react";
import "./Clients.css";

import logo1 from "../assets/247Foods.png";
import logo2 from "../assets/12takeoutlogo.png";
import logo4 from "../assets/RiskyT.png";
import logo6 from "../assets/UrbanVault.png";
import logo7 from "../assets/Woodhub89.jpg";
import logo8 from "../assets/sustainablelogo.png";
import logo9 from "../assets/Nature.png";
import logo10 from "../assets/Magpie.png";
import logo11 from "../assets/glfc.jpg";
import logo12 from "../assets/Ebudon.PNG";

const clientLogos = [logo1, logo2, logo4, logo6, logo7, logo8, logo9, logo10, logo11, logo12];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <h2>Trusted by Leading Brands</h2>
          <p>
            We’ve partnered with ambitious companies across industries to grow
            brand visibility and performance online.
          </p>
        </div>

        <div className="clients-grid">
          {clientLogos.map((logo, index) => (
            <div className="client-box" key={index}>
              <img src={logo} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
