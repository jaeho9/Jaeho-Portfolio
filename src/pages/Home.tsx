import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import TechStack from "../components/TechStack";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import HomeAnimation from "../components/LottieAnimation/HomeAnimation";
import ScrollArrow from "../components/ScrollArrow";
const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white"
    >
      <div className="absolute top-12 right-12">
        <HomeAnimation />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
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
        <ScrollArrow scrollToId="about" />
      </motion.div>

      {/* Parallax 효과를 적용한 기술 스택 */}
      <Parallax translateY={[-20, 20]}>
        <TechStack />
      </Parallax>
    </section>
  );
};

export default Home;
