import React from "react";

const ProjectsSection = ({ projectsRef }) => {
  return (
    <section
      ref={projectsRef}
      className="section projects-section h-screen bg-[#0d012c] z-[-10] p-20"
    >
      <h1 className="text-4xl font-bold text-center text-white">Projects</h1>
    </section>
  );
};

export default ProjectsSection;
