import React, { useEffect, useRef, useState } from "react";
import Me from "../assets/Me.png";
import Resume from "../assets/Carito_Resume.pdf";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import sendLightIcon from "../assets/send-light.svg";

const HomeSection = ({ homeRef }) => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const values = [
    "Frontend Web Developer",
    "Web Developer",
    "Software Developer",
  ];

  useEffect(() => {
    let text = "";
    let isDeleting = false;
    let currentIndex = 0;
    let count = 0;

    const type = () => {
      const currentTextIndex = currentIndex % values.length;
      const fullText = values[currentTextIndex];

      if (isDeleting) {
        text = fullText.substring(0, text.length - 1);
      } else {
        text = fullText.substring(0, text.length + 1);
      }

      setCurrentText(text);

      if (!isDeleting && text === fullText) {
        isDeleting = true;
        count = 0;
      } else if (isDeleting && text === "") {
        isDeleting = false;
        currentIndex++;
        count = 0;
      }

      const typingSpeed = isDeleting ? 50 : 150;
      const delay = isDeleting ? 100 : 1000;

      if (count === 0 && !isDeleting) {
        setTimeout(type, delay);
      } else if (count < 5 && isDeleting) {
        setTimeout(type, delay / 3);
      } else {
        setTimeout(type, typingSpeed);
      }

      count++;
    };

    const interval = setTimeout(type, 1500);

    return () => clearTimeout(interval);
  }, []);

  return (
    <section
      ref={homeRef}
      className="section home-section h-screen w-auto bg-gradient-to-br from-[#0d012c] to-[#04133A]  z-[-10] px-10 py-20 min-w-[333px] flex flex-col-reverse justify-center items-center gap-2 md:flex-col-reverse md:justify-between md:items-start md:gap-2 lg:flex-row lg:justify-between lg:items-center lg:gap-2 xl:flex-row xl:justify-between xl:items-center xl:gap-2"
    >
      <div className="w-full h-full flex-grow flex flex-col justify-top items-center gap-3 lg:items-start lg:justify-center lg:gap-6">
        <h3 className="conceal font-Code text-[#eff30e] text-xs h-4 text-center md:text-lg lg:text-left lg:h-6 lg:text-xl overflow-hidden">
          {currentText}
        </h3>
        <h3 className="conceal font-Poppins font-black text-lg text-[#dce1eb] text-center md:text-3xl lg:text-left lg:text-6xl lg:tracking-wide">
          Hey! I Am
        </h3>
        <h3 className="conceal font-Poppins font-black text-lg bg-gradient-to-r from-[#ed7b84] to-[#9055ff] text-transparent bg-clip-text text-center md:text-4xl lg:text-left lg:text-6xl lg:tracking-wide lg:leading-normal">
          Christian Joy C. Carito
        </h3>
        <p className="conceal font-Rubik text-sm text-[#cccccc] text-center md:text-lg lg:text-left lg:text-xl">
          A Computer Science graduate based in Quezon City, Philippines, with an
          absolute passion for building captivating websites and applications.
        </p>
        <button className="conceal cursor-pointer text-white flex items-center font-Code bg-gradient-to-r from-[#ed7b84] to-[#9055ff] px-4 py-2 md:px-8 md:py-4 max-w-[250px] rounded-md lg:items-left hover:from-[#9055ff] hover:to-[#ed7b84] transition-all duration-300">
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
          <img
            src={sendLightIcon}
            className="ml-2 w-4 h-4 animate-bounce"
            alt="DL"
          />
        </button>

        <div className="md:flex md:gap-2 hidden mt-2">
          <a
            className="conceal-X"
            href="https://github.com/civarry"
            target="_blank"
          >
            <AiFillGithub className=" md:text-[#dce1eb] md:text-3xl" />
          </a>
          <a
            className="conceal-X"
            href="https://www.facebook.com/civarry/"
            target="_blank"
          >
            <FaFacebook className="md:text-[#dce1eb] md:text-3xl md:ml-2" />
          </a>
          <a
            className="conceal-X"
            href="https://www.linkedin.com/in/cccarito/"
            target="_blank"
          >
            <FaLinkedin className=" md:text-[#dce1eb] md:text-3xl md:ml-2" />
          </a>
        </div>
      </div>
      <div className="conceal w-auto h-auto flex-grow justify-center items-center md:w-full md:h-[0] md:pb-[40.00%] md:relative md:flex-grow lg:w-full lg:h-full lg:flex-grow lg:justify-center lg:items-center">
        <div className="aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-1 lg:aspect-h-1">
          <div className="w-full h-full md:w-auto md:h-auto md:absolute md:inset-0">
            <img
              src={Me}
              className="object-cover rounded-xl h-full w-full mx-auto grayscale md:w-full md:h-full md:rounded-xl lg:rounded-xl lg:w-full lg:h-full lg:mt-5"
              alt="Me"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
