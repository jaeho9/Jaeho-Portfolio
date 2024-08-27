import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('/images/bg3.jpg')`, // 배경 이미지 경로
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hi, I'm Jaeho Lee 애니메이션 적용 */}
      <div className="text-center">
        <motion.h1
          className="text-[70px] font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Frontend Developer
        </motion.h1>
        <motion.h1
          className="text-[70px] font-bold text-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          Jaeho Lee
        </motion.h1>
      </div>

      {/* Typed 애니메이션 텍스트 */}
      <p className="text-[30px] text-center text-gray-600 mb-8">
        <ReactTyped
          strings={[
            "Frontend Developer",
            "UI/UX Focused Developer", // UI/UX에 중점을 둔 개발자입니다
            "Crafting Responsive Web Designs", // 반응형 웹 디자인을 제작합니다
            "Always Learning New Frontend Technologies", // 항상 새로운 프론트엔드 기술을 배우고 있습니다
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </p>

      {/* 버튼 섹션 */}
      {/* <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
        >
          Contact Me
        </a>
      </div> */}

      {/* 소셜 링크 */}
      {/* <div className="flex space-x-4 mt-10">
        <a
          href="https://github.com/jaeho9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://linkedin.com/in/jaeho9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div> */}
    </section>
  );
};

export default Home;
