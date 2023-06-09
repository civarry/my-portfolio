import React from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export const Body = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  return (
    <>
      <HomeSection homeRef={homeRef} />
      <AboutSection aboutRef={aboutRef} />
      <ProjectsSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
    </>
  );
};
