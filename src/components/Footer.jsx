import React from 'react';
import './Footer.css';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaFacebookF,
  FaEnvelope,
  FaCode
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-heading">[NEED HELP OR WANT TO TALK TO US?]</h2>
        <p className="footer-contact">
        LAGOS, Nigeria | <a href="mailto:office@novalith.agency">OFFICE@NOVALITH.AGENCY</a>
        </p>

        <div className="footer-row">
          <div className="footer-icons">
          <a href="novalithmarketing@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope  />
            </a>
            <a href="https://www.instagram.com/novalith.agency" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1CHwyD1G5h/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/novalith-marketing/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.tiktok.com/@novalithmarketing?_t=ZM-8xe3KrmzS2Y&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>

          <div className="footer-dev">
            <span>Developed by</span>
            <a
              href="https://badejo-portfolio.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="View Developer Portfolio"
            >
              <FaCode className="dev-icon" />
            </a>
          </div>
        </div>

        <p className="footer-copy">The entirety of this site is protected by copyright ©2025 Novalith.</p>
      </div>
    </footer>
  );
};

export default Footer;
