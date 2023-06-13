import React, { useEffect } from "react";

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
      className="section contact-section h-screen bg-[#0d012c] z-[-10] p-20 min-w-[300px]"
    >
      <h1 className="conceal text-4xl font-bold text-center text-white">
        Contact
      </h1>

      <form name="contact-me">
        <input
          className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          id="message"
          name="message"
          placeholder="Your message"
          required
        ></textarea>
        <button type="submit" className="bg-white rounded-md pr-5 pl-5">
          Send
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
