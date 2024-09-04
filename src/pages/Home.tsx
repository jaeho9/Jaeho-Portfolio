import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link as ScrollLink } from "react-scroll";
import AnimatedCursor from "react-animated-cursor"; // react-animated-cursor 임포트
import { useNavbarContext } from "../context/NavbarContext";

const Home = () => {
  const { setColor, setLogoColor } = useNavbarContext();

  useEffect(() => {
    setColor("text-black"); // Home 페이지에서 네비게이션 텍스트 색상 설정
    setLogoColor("text-black"); // Home 페이지에서 로고 색상 설정

    return () => {
      setColor("text-gray-600"); // 페이지 이동 시 기본 색상으로 복원
      setLogoColor("text-black"); // 페이지 이동 시 기본 색상으로 복원
    };
  }, [setColor, setLogoColor]);
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-white"
      // style={{ backgroundImage: `url('/images/bg3.jpg')` }}
    >
      <div className="text-center">
        <motion.h1
          className="text-[80px] font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.h1>
        <motion.h1
          className="text-[80px] font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Jaeho Lee
        </motion.h1>
      </div>
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
      <AnimatedCursor
        color="0, 0, 0"
        innerScale={1.2}
        innerSize={20}
        outerAlpha={0.6}
        outerScale={1.5}
        outerSize={30}
        showSystemCursor={false}
        trailingSpeed={10}
        clickables={["a", "button", ".interactive"]}
      />
    </section>
  );
};

export default Home;
