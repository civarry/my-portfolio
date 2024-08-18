import React from "react";

const FooterSection = ({ footerRef }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      ref={footerRef}
      className="section footer-section w-auto h-16 bg-[#14042B] z-[-10] min-w-[333px] flex justify-center items-center flex-wrap"
    >
      <p className="conceal font-Poppins text-white text-xs text-center">
        © {currentYear} All rights reserved | by Christian Joy Carito
      </p>
    </section>
  );
};

export default FooterSection;
