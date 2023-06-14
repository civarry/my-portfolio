import React, { useEffect, useState } from "react";
import pocketapi from "../assets/pocketapi.png";
import foodcrib from "../assets/foodcrib.png";
import unsaid from "../assets/unsaid.png";
import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const ProjectsSection = ({ projectsRef }) => {
  const projects = [
    {
      image: pocketapi,
      title: "Pocket API",
      description:
        "This project is a straightforward application resembling a phone, which utilizes various APIs to present data for its apps.",
      tech: "HTML  |  CSS  |  JAVASCRIPT",
      code: "https://github.com/civarry/pocket-api",
      live: "https://pocket-api.vercel.app/",
    },
    {
      image: unsaid,
      title: "Unsaid Project",
      description:
        "A simple React app that unleashes unspoken feelings to loved ones through anonymous confessions. It provides a platform for sharing emotions often left unexpressed. With anonymity, individuals can open up and reveal their innermost thoughts to those they care about.",
      tech: "REACT  |  CSS",
      code: "https://github.com/civarry/unsaid-project-demo",
      live: "https://unsaid-project-demo.vercel.app/",
    },
    {
      image: foodcrib,
      title: "Food Crib",
      description:
        "A milk tea snack ordering system using HTML, CSS, and PHP that enables businesses to conveniently place food orders online. It features a user-friendly interface for customers to browse snacks.",
      tech: "HTML  |  CSS  |  JAVASCRIPT  |  PHP",
      code: "https://github.com/civarry/food-crib",
      live: "",
    },
    // Add more projects as needed
  ];

  return (
    <section
      ref={projectsRef}
      className="section p-5 projects-section h-auto w-auto bg-[#04133A]  z-[-10] px-10 py-20 min-w-[333px] flex flex-col justify-start items-center gap-2"
    >
      <div className="flex flex-col w-auto h-fit items-center">
        <h2 className="conceal font-Poppins text-xs text-[#08c6ab] tracking-widest">
          CHECK OUT MY PROJECTS
        </h2>
        <h3 className="conceal font-Poppins font-bold text-lg text-[#dce1eb] text-center md:text-xl lg:text-left lg:text-3xl lg:tracking-wide">
          RECENT WORKS
        </h3>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row mt-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="conceal-X max-w-sm w-full h-auto bg-[#14143a] bg-opacity-80 shadow-md border-solid border-[0.1px] border-[#9595965b] overflow-hidden rounded-md flex flex-col hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={project.image}
              className="w-full rounded-t-md"
              alt="Project"
            />
            <div className="p-4 flex-grow md:h-96">
              <h3 className="font-Poppins font-black text-xs mt-2 mb-2 bg-gradient-to-r from-[#ed7b84] to-[#9055ff] text-transparent bg-clip-text text-center tracking-widest md:text-left">
                {project.tech}
              </h3>
              <h2 className="text-xl font-Poppins font-bold mb-2 text-[#59c378]">
                {project.title}
              </h2>
              <p className="text-[#cccccc] font-Poppins text-s text-justify">
                {project.description}
              </p>
            </div>
            <div className="flex justify-around mb-5 mr-4 ml-4">
              {project.live !== "" && (
                <h6 className="font-Poppins text-xs text-[#909faf] flex items-center cursor-pointer">
                  <a className="flex" href={project.live} target="_blank">
                    <FaLaptopCode className="mr-2" />
                    LIVE DEMO
                  </a>
                </h6>
              )}
              <h6 className="font-Poppins text-xs text-[#909faf] flex items-center cursor-pointer">
                <a className="flex" href={project.code} target="_blank">
                  <AiFillGithub className="mr-2" />
                  SOURCE CODE
                </a>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
