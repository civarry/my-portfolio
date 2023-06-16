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
      <h2 className="conceal font-Poppins text-base text-[#08c6ab] text-center md:text-md">
        I Want To Hear From You
      </h2>
      <h1 className="conceal font-Poppins font-black text-lg md:text-xl text-[#dce1eb] text-center lg:text-4xl lg:tracking-wide">
        Contact Me
      </h1>
      <div className="flex flex-col mt-3 gap-10 mx-auto md:flex-row md:w-4/5">
        <div className="flex flex-col w-full">
          <div className="conceal flex flex-col mt-5 gap-2">
            <h6 className="font-Poppins text-base text-[#909faf] flex items-center cursor-pointer">
              <a
                className="flex items-center"
                href="https://www.linkedin.com/in/cccarito/"
                target="_blank"
              >
                <div className="rounded-full bg-[#a7b5cf] p-1 md:p-5 mr-2">
                  <FaLinkedin className="text-[#717ba7]" />
                </div>
                Cj Carito
              </a>
            </h6>
            <h6 className="font-Poppins text-base text-[#909faf] flex items-center cursor-pointer">
              <a className="flex items-center">
                <div className="rounded-full bg-[#a7c6cf] p-1 md:p-5 mr-2">
                  <FaEnvelope className="text-[#7199a7]" />
                </div>
                Carito.christian@gmail.com
              </a>
            </h6>
            <h6 className="font-Poppins text-base text-[#909faf] flex items-center cursor-pointer">
              <a
                className="flex items-center"
                href="https://goo.gl/maps/aw7A3cz9Ty9y19jj6"
                target="_blank"
              >
                <div className="rounded-full bg-[#c6a7d8] p-1 md:p-5 mr-2">
                  <FaMapMarkerAlt className="text-[#9f71a7]" />
                </div>
                Quezon City, Philippines
              </a>
            </h6>
          </div>
        </div>
        <form
          name="contact-me"
          className="conceal flex flex-col gap-2 w-full items-start"
        >
          <div className="flex flex-col gap-2 w-full md:flex-row">
            <input
              className="w-full px-4 py-4 text-white bg-[#14143a] bg-opacity-80 shadow-md rounded-md focus:ring-0 "
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              autoComplete="name"
            />
            <input
              className="w-full px-4 py-4 text-white bg-[#14143a] bg-opacity-80 shadow-md rounded-md focus:ring-0"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="email"
            />
          </div>

          <input
            className="w-full px-4 py-4 text-white bg-[#14143a] bg-opacity-80 shadow-md rounded-md focus:ring-0"
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
            autoComplete="off"
          />
          <textarea
            className="w-full px-4 py-4 text-white bg-[#14143a] bg-opacity-80 shadow-md rounded-md focus:ring-0"
            id="message"
            name="message"
            placeholder="Message"
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
