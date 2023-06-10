import React from "react";
import preloaderGif from "../assets/preloader.gif";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#1C1B1B]">
      <img className="w-48 h-48" src={preloaderGif} alt="Loading" />
    </div>
  );
};

export default Preloader;
