import React from "react";
import Me from "../assets/Me.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import sendLightIcon from "../assets/send-light.svg";
import "../assets/fonts.css";

const HomeSection = ({ homeRef }) => {
  return (
    <section
      ref={homeRef}
      className="section contact-section h-screen w-screen bg-gradient-to-br from-[#0d012c] to-[#04133A]  z-[-10] px-10 py-20 min-w-[300px] flex flex-col-reverse justify-center items-center gap-2 md:flex-col-reverse md:justify-between md:items-start md:gap-2 lg:flex-row lg:justify-between lg:items-center lg:gap-2 xl:flex-row xl:justify-between xl:items-center xl:gap-2"
    >
      <div className="w-full h-full flex-grow flex flex-col justify-top items-center gap-3 lg:items-start lg:justify-start lg:mt-96 lg:gap-7">
        <h3 className="font-Code text-[#eff30e] text-xs text-center md:text-lg lg:text-left lg:text-xl">
          Frontend Web Developer
        </h3>
        <h3 className="font-Anton text-lg text-[#dce1eb] text-center md:text-3xl lg:text-left lg:text-6xl lg:tracking-wide">
          Hey! I Am
        </h3>
        <h3 className="font-Anton text-lg bg-gradient-to-r from-[#ed7b84] to-[#9055ff] text-transparent bg-clip-text text-center md:text-4xl lg:text-left lg:text-6xl lg:tracking-wide lg:leading-normal">
          Christian Joy C. Carito
        </h3>
        <p className="font-Rubik text-sm text-[#cccccc] text-center md:text-lg lg:text-left lg:text-xl">
          A Computer Science student based in Quezon City, Philippines, with an
          absolute passion for building captivating websites and applications.
        </p>
        <button className="text-white flex items-center font-Code bg-gradient-to-r from-[#ed7b84] to-[#9055ff] px-8 p-4 max-w-[160px] rounded-full lg:items-left">
          Hire Me
          <img src={sendLightIcon} className="ml-2 w-4 h-4" />
        </button>
      </div>
      <div className="w-auto h-auto flex-grow justify-center items-center md:w-full md:h-[0] md:pb-[40.00%] md:relative md:flex-grow lg:w-full lg:h-full lg:flex-grow lg:justify-center lg:items-center">
        <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-1 lg:aspect-h-1">
          <div className="w-full h-full md:w-auto md:h-auto md:absolute md:inset-0">
            <img
              loading="lazy"
              role="presentation"
              src={Me}
              className="object-cover mx-auto grayscale md:w-full md:h-full rounded-xl md:rounded-xl lg:rounded-none"
              alt="Me"
              decoding="async"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
