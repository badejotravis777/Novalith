// FloatingWaitlistButton.jsx
// import React, { useState } from "react";
import "./FloatingWaitlist.css";

const FloatingWaitlistButton = ({ onOpen }) => {
  return (
    <button className="waitlist-button" onClick={onOpen}>
      Join Waitlist
    </button>
  );
};

export default FloatingWaitlistButton;
