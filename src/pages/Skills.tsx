import React from "react";

const Skills = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-400">
      <h1 className="text-4xl">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">JavaScript</h2>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">React</h2>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">Node.js</h2>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-2xl">CSS/SCSS</h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
