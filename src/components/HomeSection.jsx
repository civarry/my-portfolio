import React from "react";

const HomeSection = ({ homeRef }) => {
  return (
    <section
      ref={homeRef}
      className="section home-section h-screen bg-[#0d012c] z-[-10] p-20"
    >
      <h1 className="text-4xl font-bold text-center text-white">Home</h1>
    </section>
  );
};

export default HomeSection;
