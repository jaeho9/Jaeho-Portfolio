import React from "react";

const Projects = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-4xl">My Projects</h1>
      <p className="text-xl mt-4">Here are some of my recent works:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">Project 1</h2>
          <p className="mt-2">A web application for tracking tasks.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">Project 2</h2>
          <p className="mt-2">A responsive e-commerce website.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">Project 3</h2>
          <p className="mt-2">A blog platform built with React and Node.js.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
