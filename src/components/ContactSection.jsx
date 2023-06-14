import React, { useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = ({ contactRef }) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwxO38SsUXFccLP1kojnnjLp3Uloir4h2CdJpfjzfVpjgz0os9_W-LQ_X9KiPbQ39d0/exec";

  useEffect(() => {
    const form = document.forms["contact-me"];
    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          form.reset();
          alert("Success!");
        })
        .catch((error) => alert("Error!", error.message));
    };

    form.addEventListener("submit", handleSubmit);

    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <section
      ref={contactRef}
      className="section contact-section w-auto h-auto bg-[#0d012c] z-[-10] p-20 min-w-[333px] justify-around"
    >
      <div className="flex flex-col gap-10 mx-auto md:flex-row">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <h2 className="conceal font-Poppins text-xs text-[#08c6ab] text-center md:text-left md:text-md">
              I Want To Hear From You
            </h2>
            <h1 className="conceal font-Poppins font-black text-lg text-[#dce1eb] text-center md:text-left lg:text-6xl lg:tracking-wide">
              Contact Me
            </h1>
          </div>
          <div className="conceal flex flex-col mt-5 gap-2">
            <h6 className="font-Poppins text-md text-[#909faf] flex items-center cursor-pointer">
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/cccarito/"
                target="_blank"
              >
                <div className="rounded-full bg-[#a7c6cf] p-1 mr-2">
                  <FaLinkedin className="text-[#7199a7]" />
                </div>
                Cj Carito
              </a>
            </h6>
            <h6 className="font-Poppins text-md text-[#909faf] flex items-center cursor-pointer">
              <a className="flex items-center">
                <div className="rounded-full bg-[#a7c6cf] p-1 mr-2">
                  <FaEnvelope className="text-[#7199a7]" />
                </div>
                carito.christian@gmail.com
              </a>
            </h6>
            <h6 className="font-Poppins text-md text-[#909faf] flex items-center cursor-pointer">
              <a
                className="flex items-center"
                href="https://goo.gl/maps/aw7A3cz9Ty9y19jj6"
                target="_blank"
              >
                <div className="rounded-full bg-[#c6a7d8] p-1 mr-2">
                  <FaMapMarkerAlt className="text-[#9f71a7]" />
                </div>
                Quezon City, Philippines
              </a>
            </h6>
          </div>
        </div>
        <form
          name="contact-me"
          className="conceal flex flex-col gap-2 w-full items-end"
        >
          <input
            className="w-full px-4 py-2 text-white border-gray-300 bg-[#14143a] bg-opacity-80 shadow-md rounded-md border-solid border border-[#9595965b] focus:outline-none focus:ring-1 focus:ring-indigo-200"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            autoComplete="name"
          />
          <input
            className="w-full px-4 py-2 text-white border-gray-300 bg-[#14143a] bg-opacity-80 shadow-md rounded-md border-solid border border-[#9595965b] focus:outline-none focus:ring-1 focus:ring-indigo-200"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            autoComplete="email"
          />
          <input
            className="w-full px-4 py-2 text-white border-gray-300 bg-[#14143a] bg-opacity-80 shadow-md rounded-md border-solid border border-[#9595965b] focus:outline-none focus:ring-1 focus:ring-indigo-200"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            autoComplete="off"
          />
          <textarea
            className="w-full px-4 py-2 text-white border-gray-300 bg-[#14143a] bg-opacity-80 shadow-md rounded-md border-solid border border-[#9595965b] focus:outline-none focus:ring-1 focus:ring-indigo-200"
            id="message"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button
            type="submit"
            className="conceal cursor-pointer text-white justify-center font-Code bg-gradient-to-r from-[#ed7b84] to-[#9055ff] px-4 py-2 md:px-8 md:py-4 max-w-[250px] rounded-md lg:items-left hover:from-[#9055ff] hover:to-[#ed7b84] transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
