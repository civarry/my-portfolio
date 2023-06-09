import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillGithub } from "react-icons/ai";

export const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`p-5 shadow md:flex md:items-center md:justify-between fixed top-0 w-full text-white ${
          scroll
            ? "bg-[#04133a] transition-colors duration-500 ease-in"
            : "bg-[#0d012c]" //default bg color
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="text-2xl px-3 font-bold font-[Century Gothic] cursor-pointer">
            CJC
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            {menuOpen ? (
              <AiOutlineClose onClick={handleMenuClick} />
            ) : (
              <AiOutlineMenu onClick={handleMenuClick} />
            )}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center ${
            menuOpen
              ? "z-[-1] md:z-auto md:static bg-[#0d012c] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-100 top-0"
              : "hidden md:flex md:static md:opacity-100 md:top-auto opacity-100"
          } ${scroll ? "bg-transparent" : ""}`}
        >
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/"
              onClick={() => scrollToSection(homeRef)}
              className="text-sm hover:text-cyan-500 duration-500"
            >
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#about"
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm hover:text-cyan-500 duration-500"
            >
              About
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#projects"
              onClick={() => scrollToSection(projectsRef)}
              className="text-sm hover:text-cyan-500 duration-500"
            >
              Projects
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="https://github.com/civarry"
              target="_blank"
              onClick={() => scrollToSection(contactRef)}
              className="text-2xl hover:text-cyan-500 duration-500"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0 bg-[#08c6ab] p-2 pl-5 pr-5 rounded-md w-24">
            <a
              href="#contact"
              onClick={() => scrollToSection(contactRef)}
              className="text-sm hover:text-cyan-500 duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
