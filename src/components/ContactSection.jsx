import React from "react";

const ContactSection = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      className="section contact-section h-screen bg-[#0d012c] z-[-10] p-20 min-w-[300px]"
    >
      <h1 className="conceal text-4xl font-bold text-center text-white">
        Contact
      </h1>
    </section>
  );
};

export default ContactSection;
