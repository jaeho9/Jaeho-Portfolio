import React from "react";
import { ReactTyped } from "react-typed";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-white relative"
    >
      {/* Content container */}
      <div className="w-full flex justify-between items-center h-2/3 p-8 md:p-16 space-x-8">
        {/* Left section */}
        <div className="flex-1 flex flex-col justify-center items-start text-left h-full pl-28 md:ml-24 space-y-8 md:space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-black">Contact</h1>
          <p className="text-xl md:text-2xl pt-6 md:pt-8">
            <span className="font-bold text-4xl">Email:</span>
            <br />
            <span className="mt-2 block text-[28px]">l2281@naver.com</span>
          </p>
          <p className="text-xl md:text-2xl pt-5">
            <span className="font-bold text-4xl">GitHub:</span>
            <br />
            <a
              href="https://github.com/jaeho9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[28px] hover:text-gray-500"
            >
              https://github.com/jaeho9
            </a>
          </p>
          <p className="text-xl md:text-2xl pt-5">
            <span className="font-bold text-4xl">Velog:</span>
            <br />
            <a
              href="https://velog.io/@l2281/series"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[28px] hover:text-gray-500"
            >
              https://velog.io/@l2281/series
            </a>
          </p>
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-11 pr-11">
          <ReactTyped
            strings={["Thank You"]}
            typeSpeed={100}
            backSpeed={30}
            loop
            className="text-9xl font-bold"
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
