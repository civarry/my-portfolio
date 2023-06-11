import React, { useEffect } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export const Body = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = [];

    if (homeRef.current)
      hiddenElements.push(...homeRef.current.querySelectorAll(".conceal"));
    if (aboutRef.current)
      hiddenElements.push(
        ...aboutRef.current.querySelectorAll(".conceal, .conceal-X")
      );
    if (projectsRef.current)
      hiddenElements.push(...projectsRef.current.querySelectorAll(".conceal"));
    if (contactRef.current)
      hiddenElements.push(...contactRef.current.querySelectorAll(".conceal"));

    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [homeRef, aboutRef, projectsRef, contactRef]);

  return (
    <>
      <HomeSection homeRef={homeRef} />
      <AboutSection aboutRef={aboutRef} />
      <ProjectsSection projectsRef={projectsRef} />
      <ContactSection contactRef={contactRef} />
    </>
  );
};
