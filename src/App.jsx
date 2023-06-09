import React, { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Body
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </>
  );
}

export default App;
