import React from "react";
import AnimatedCursor from "react-animated-cursor";
import W_SocialLinks from "../components/W_SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-gray-500"
    >
      <h1 className="text-4xl">Contact Me</h1>
      <form className="mt-8 max-w-lg w-full">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </form>

      <AnimatedCursor
        color="255, 255, 255"
        innerScale={1.2}
        innerSize={20}
        outerAlpha={0.6}
        outerScale={1.5}
        outerSize={30}
        showSystemCursor={false}
        trailingSpeed={10}
        clickables={["a", "button", ".interactive"]}
      />
      <W_SocialLinks />
    </section>
  );
};

export default Contact;
