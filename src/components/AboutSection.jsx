import React from "react";
import Programming from "../assets/programming.svg";
import ttten from "../assets/ttten.svg";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiGit,
  SiPython,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

const AboutSection = ({ aboutRef }) => {
  const iconSize = 24; // Define the size constant
  return (
    <section
      ref={aboutRef}
      className="section about-section h-screen w-screen bg-gradient-to-br from-[#0d012c] to-[#04133A]  z-[-10] px-10 py-20 min-w-[300px] flex flex-col justify-center items-center gap-2 md:flex-col md:justify-between md:items-start md:gap-2 lg:flex-row-reverse lg:justify-between lg:items-start lg:gap-2 xl:flex-row-reverse xl:justify-between xl:items-start xl:gap-2"
    >
      <div className="w-full h-full flex-grow flex flex-col justify-top gap-3 lg:w-1/2 lg:items-start lg:justify-center lg:gap-6">
        <h2 className="conceal font-Poppins text-xs text-[#08c6ab] tracking-widest">
          ABOUT ME
        </h2>
        <h3 className="conceal font-Poppins text-3xl font-bold text-white">
          WHY HIRE ME FOR YOUR NEXT PROJECT?
        </h3>
        <p className="conceal text-[#cccccc] font-Poppins text-xs">
          As a computer science graduate, I have been exposed to a wide range of
          programming tasks and problem-solving challenges. Among my favorites
          within my field of study is{" "}
          <strong>web design and development</strong>, which greatly enhances
          both creative thinking and problem-solving skills.
        </p>
        <p className="conceal text-[#cccccc] font-Poppins text-xs">
          Through this passion for creating websites, I have gained a solid
          understanding of HTML, CSS, JavaScript, React, Bootstrap, and Django.
          My knowledge of these web technologies has been acquired through the
          guidance of my university and my own self-driven learning.
        </p>
        <h2 className="conceal font-Poppins text-xs text-[#08c6ab] tracking-widest hidden md:block">
          HOW IT ALL BEGAN?
        </h2>
        <p className="conceal text-[#cccccc] font-Poppins text-xs hidden md:block">
          During high school, my fascination with mobile games sparked my
          interest in computer science and programming. I wanted to understand
          how these games were built and it drove me to explore further. I
          discovered MIT App Inventor, which allowed me to create mobile apps
          without extensive coding knowledge. This experience ignited my passion
          for bringing ideas to life.
        </p>
        <p className="conceal text-[#cccccc] font-Poppins text-xs hidden md:block">
          In college, I ventured into web development by building a website
          using HTML, CSS, and JavaScript. Crafting an online presence
          accessible to anyone intrigued me and opened up a new avenue for my
          passion. Throughout my journey, from mobile applications to web
          development, my passion for programming has only grown stronger. Each
          project and challenge I encounter captivates me with the endless
          possibilities and the chance to make a meaningful impact through
          technology.
        </p>
        <p className="conceal text-[#cccccc] font-Poppins text-xs hidden md:block">
          Now, I'm excited to embark on the next chapter of my journey,
          expanding my skills, embracing new technologies, and creating
          remarkable experiences that push the boundaries of computer science.
        </p>
        <div className="flex flex-col">
          <h2 className="conceal font-Poppins text-xs text-[#08c6ab] tracking-widest">
            TECH STACK I USE
          </h2>
          <div className="conceal flex flex-wrap gap-2 justify-center pt-4">
            <SiHtml5
              className="conceal-X"
              size={iconSize}
              style={{ color: "#E34F26" }}
            />{" "}
            {/* HTML icon with specific color */}
            <SiCss3
              className="conceal-X"
              size={iconSize}
              style={{ color: "#264DE4" }}
            />{" "}
            {/* CSS icon with specific color */}
            <SiJavascript
              className="conceal-X"
              size={iconSize}
              style={{ color: "#F7DF1E" }}
            />{" "}
            {/* JavaScript icon with specific color */}
            <SiTailwindcss
              className="conceal-X"
              size={iconSize}
              style={{ color: "#38B2AC" }}
            />{" "}
            {/* Tailwind CSS icon with specific color */}
            <SiReact
              className="conceal-X"
              size={iconSize}
              style={{ color: "#61DAFB" }}
            />{" "}
            {/* React icon with specific color */}
            <SiGit
              className="conceal-X"
              size={iconSize}
              style={{ color: "#F05032" }}
            />{" "}
            {/* Git icon with specific color */}
            <SiPython
              className="conceal-X"
              size={iconSize}
              style={{ color: "#3776AB" }}
            />{" "}
            {/* Python icon with specific color */}
            <SiBootstrap
              className="conceal-X"
              size={iconSize}
              style={{ color: "#7952B3" }}
            />{" "}
            {/* Bootstrap icon with specific color */}
            <SiFigma
              className="conceal-X"
              size={iconSize}
              style={{ color: "#F24E1E" }}
            />{" "}
            {/* Figma icon with specific color */}
          </div>
        </div>
      </div>
      <div
        className="conceal w-full h-full flex-grow flex flex-col justify-center items-center gap-3 lg:w-1/2 lg:items-center lg:justify-center lg:gap-6"
        style={{
          backgroundImage: `url(${ttten})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "soft-light",
        }}
      >
        <img
          src={Programming}
          className="conceal object-contain rounded-xl w-full mx-auto md:max-h-72 md:w-3/4 lg:max-h-96 lg:w-5/6 xl:max-h-96 xl:w-3/4 2xl:max-h-96 2xl:w-2/3"
          alt="Me"
        />
      </div>
    </section>
  );
};

export default AboutSection;
