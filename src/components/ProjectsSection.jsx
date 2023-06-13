import React, { useEffect, useState } from "react";
import pocketapi from "../assets/pocketapi.png";

const ProjectsSection = ({ projectsRef }) => {
  const projects = [
    {
      image: pocketapi,
      title: "Project Title 1",
      description: "Project Description 1",
    },
    {
      image: pocketapi,
      title: "Project Title 2",
      description: "Project Description 2",
    },
    {
      image: pocketapi,
      title: "Project Title 3",
      description: "Project Description ",
    },
    // Add more projects as needed
  ];

  return (
    <section
      ref={projectsRef}
      className="section p-5 projects-section h-auto w-screen bg-[#04133A]  z-[-10] px-10 py-20 min-w-[300px] flex flex-col justify-start items-center gap-2 md:h-screen"
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
            className="conceal-X max-w-sm w-full bg-white shadow-md rounded-md overflow-hidden flex flex-col"
            style={{ maxHeight: "calc(100vh - 320px)" }}
          >
            <img
              src={project.image}
              className="w-full rounded-t-md"
              alt="Project"
            />
            <div className="p-4 flex-grow md:h-96">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
