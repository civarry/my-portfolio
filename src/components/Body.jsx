import React, { useEffect } from "react";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";

const commonPaddingClass = "px-20 py-40"; //adjust the page padding

export const Body = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  footerRef,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
        // else {
        //   entry.target.classList.remove("show");
        // }
      });
    });

    const hiddenElements = [];

    if (homeRef.current)
      hiddenElements.push(
        ...homeRef.current.querySelectorAll(".conceal, .conceal-X")
      );
    if (aboutRef.current)
      hiddenElements.push(
        ...aboutRef.current.querySelectorAll(".conceal, .conceal-X")
      );
    if (projectsRef.current)
      hiddenElements.push(
        ...projectsRef.current.querySelectorAll(".conceal, .conceal-X")
      );
    if (contactRef.current)
      hiddenElements.push(...contactRef.current.querySelectorAll(".conceal"));
    if (footerRef.current)
      hiddenElements.push(...footerRef.current.querySelectorAll(".conceal"));

    hiddenElements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup the observer when the component is unmounted
    return () => {
      hiddenElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [homeRef, aboutRef, projectsRef, contactRef, footerRef]);

  return (
    <>
      <HomeSection homeRef={homeRef} paddingClass={commonPaddingClass} />
      <AboutSection aboutRef={aboutRef} paddingClass={commonPaddingClass} />
      <ProjectsSection
        projectsRef={projectsRef}
        paddingClass={commonPaddingClass}
      />
      <ContactSection contactRef={contactRef} />
      <FooterSection footerRef={footerRef} />
    </>
  );
};
