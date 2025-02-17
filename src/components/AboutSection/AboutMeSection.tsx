import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";
import ScrollArrow from "../ScrollArrow";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 sm:px-12 md:px-20 lg:px-32 py-24 sm:py-32 md:py-40 relative"
    >
      <Parallax translateY={[-20, 20]}>
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">
            <ReactTyped
              strings={["About Me"]}
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

      <ScrollArrow scrollToId="introduce" />
    </section>
  );
};

export default AboutMeSection;
