import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link as ScrollLink } from "react-scroll";
import { useNavbarContext } from "../context/NavbarContext";
import ScrollArrow from "../components/ScrollArrow";
import { ParallaxProvider, Parallax, useParallax } from "react-scroll-parallax";
const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white"
    >
      {/* <Parallax speed={-10}> */}
      <div className="text-center">
        <motion.h1
          className="text-[80px] font-bold text-black mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.h1>
        <motion.h1
          className="text-[80px] font-bold text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Jaeho Lee
        </motion.h1>
      </div>
      {/* </Parallax> */}

      <p className="text-[30px] text-center text-gray-600 mb-8">
        <ReactTyped
          strings={[
            "Frontend Developer",
            "UI/UX Focused Developer",
            "Crafting Responsive Web Designs",
            "Always Learning New Frontend Technologies",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </p>
      {/* <ScrollArrow targetRef={aboutSectionRef} /> */}
    </section>
  );
};

export default Home;
