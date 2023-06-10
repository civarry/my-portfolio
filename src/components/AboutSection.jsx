import React from "react";

const AboutSection = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      className="section about-section h-screen bg-[#0d012c] z-[-10] p-20 min-w-[300px]"
    >
      <h1 className="conceal text-4xl font-bold text-center text-white">
        About
      </h1>
    </section>
  );
};

export default AboutSection;
