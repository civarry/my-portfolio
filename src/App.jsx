import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import Preloader from "./components/Preloader";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data) that takes some time
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
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
            footerRef={footerRef}
          />
        </>
      )}
    </>
  );
}

export default App;
