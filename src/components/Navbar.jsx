import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
     <div className="nav-logo">
  <img src={require("../assets/logo.png")} alt="Novalith Logo" className="logo-icon" />
  <span>Novalith Marketing</span>
</div>


      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#cases" onClick={toggleMenu}>Case Studies</a></li>
        <li><a href="#packages" onClick={toggleMenu}>Packages</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li>
    <a
      href="https://drive.google.com/file/d/1inNtyF7JA698NhB6NULkYEzdtiNda-AI/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
      onClick={toggleMenu}
    >
      Portfolio
    </a>
  </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
