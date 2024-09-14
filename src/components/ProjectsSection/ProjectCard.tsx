import React from "react";
import ScrollArrow from "../ScrollArrow";

const ProjectCard: React.FC = () => {
  return (
    <section
      id="projectcard"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-8"
    >
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <ScrollArrow scrollToId="contact" />
    </section>
  );
};

export default ProjectCard;
