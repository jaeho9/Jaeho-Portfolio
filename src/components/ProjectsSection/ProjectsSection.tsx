import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";
import ScrollArrow from "../ScrollArrow";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="projectspage"
      className="min-h-screen flex flex-col bg-white text-black p-32 pt-80 relative"
    >
      <Parallax translateY={[-20, 20]}>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="lg:text-9xl md:text-7xl sm:text-6xl xs:text-4xl font-bold text-center">
            <ReactTyped
              strings={["My Projects"]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1000}
              startDelay={1000}
              loop
              showCursor={false}
            />
          </h1>
        </div>
      </Parallax>

      <ScrollArrow scrollToId="projectcard" />
    </section>
  );
};

export default AboutMeSection;
