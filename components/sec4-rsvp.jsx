"use client";

import React, { useEffect } from "react"; // Import useEffect
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles

const RSVP = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Add data-aos attribute to the element you want to animate */}
      <h1 data-aos="fade-up">RSVP</h1>
    </div>
  );
};

export default RSVP;
