import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Parallax } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";

const AboutMeSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-white text-black p-32 pt-80 relative"
    >
      <Parallax translateY={[-20, 20]}>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-9xl font-bold text-center">
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

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <p className="text-sm mt-2">Click!</p>
        <ScrollLink
          to="introduce" // 스크롤할 섹션의 ID
          smooth={true}
          duration={300}
          className="relative"
        >
          <motion.img
            src="/images/icons/B_arrow.svg"
            alt="Scroll Down"
            className="w-12 h-12"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </ScrollLink>
      </div>
    </section>
  );
};

export default AboutMeSection;
