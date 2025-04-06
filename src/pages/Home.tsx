import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import TechStack from "../components/TechStack";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import HomeAnimation from "../components/LottieAnimation/HomeAnimation";
import ScrollArrow from "../components/ScrollArrow";

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white px-4 sm:px-8 md:px-12 lg:px-24"
    >
      {/* Lottie Animation */}
      {!isMobile && (
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-16 sm:w-24 md:w-32">
          <HomeAnimation />
        </div>
      )}

      {/* Main Text Animation */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        {/* Large Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.h1>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Jaeho Lee
        </motion.h1>

        {/* Subtext with ReactTyped */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8">
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
      </motion.div>

      {/* Scroll Arrow */}
      <div className="mt-6 sm:mt-8">
        <ScrollArrow scrollToId="about" />
      </div>

      {/* Parallax Tech Stack */}
      <Parallax translateY={[-10, 10]} className="mt-8 sm:mt-12 md:mt-16">
        <TechStack />
      </Parallax>
    </section>
  );
};

export default Home;
