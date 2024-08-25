import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
        Hi, I'm Jaeho Lee
      </h1>
      <p className="text-xl text-center text-gray-600 mb-8">
        <ReactTyped
          strings={[
            "Frontend Developer",
            "React Enthusiast",
            "TypeScript Expert",
            "Building Interactive UIs",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </p>

      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex space-x-4 mt-10">
        <a
          href="https://github.com/jaeho9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/jaeho9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
