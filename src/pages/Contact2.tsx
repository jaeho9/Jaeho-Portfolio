import React from "react";
import { ReactTyped } from "react-typed";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-white relative"
    >
      {/* Content container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center h-full p-6 md:p-12 space-y-8 md:space-y-0">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center items-start text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Contact
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl pt-4 sm:pt-6 md:pt-8">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Email:
            </span>
            <br />
            <span className="mt-2 block text-lg sm:text-xl md:text-2xl">
              l2281@naver.com
            </span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl pt-4 sm:pt-5">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl">
              GitHub:
            </span>
            <br />
            <a
              href="https://github.com/jaeho9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg sm:text-xl md:text-2xl hover:text-gray-500"
            >
              https://github.com/jaeho9
            </a>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl pt-4 sm:pt-5">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Velog:
            </span>
            <br />
            <a
              href="https://velog.io/@l2281/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-lg sm:text-xl md:text-2xl hover:text-gray-500"
            >
              https://velog.io/@l2281/posts
            </a>
          </p>
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <ReactTyped
            strings={["Thank You"]}
            typeSpeed={100}
            backSpeed={30}
            loop
            className="text-5xl sm:text-6xl md:text-8xl font-bold"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
