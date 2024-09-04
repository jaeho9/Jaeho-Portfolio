// src/pages/About.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomModal from "../components/Modal";
import { useNavbarContext } from "../context/NavbarContext";
import AnimatedCursor from "react-animated-cursor"; // react-animated-cursor 임포트

const About: React.FC = () => {
  // 모달 상태 관리
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const { setColor, setLogoColor } = useNavbarContext();

  useEffect(() => {
    setColor("text-white"); // About 페이지에서 네비게이션 텍스트 색상 설정
    setLogoColor("text-white"); // About 페이지에서 로고 색상 설정

    return () => {
      setColor("text-gray-600"); // 페이지 이동 시 기본 색상으로 복원
      setLogoColor("text-black"); // 페이지 이동 시 기본 색상으로 복원
    };
  }, [setColor, setLogoColor]);
  // 모달 열기
  const openModal = (content: string) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-black text-white p-32 "
    >
      <div className="flex flex-row justify-start w-full space-x-12 items-start">
        {/* Profile Picture and Basic Information (Left Side) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-1/4"
        >
          <img
            src="./images/TesT.png" // Replace with your image URL
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-gray-300 mb-4"
          />
          <h2 className="text-4xl font-bold">Jaeho Lee</h2>
          <p className="text-lg mt-2">생년월일: 1999/12/15</p>
        </motion.div>

        {/* GitHub Contributions and Education Section (Right Side) */}
        <motion.div
          className="flex flex-row space-x-12 items-start w-3/4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* GitHub Contributions */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold mb-4">GitHub Contributions</h3>
            {/* GitHub Contributions Chart */}
            <img
              src="https://ghchart.rshah.org/FF60A6/jaeho9"
              alt="GitHub Contributions Chart"
              className="border border-gray-300 rounded-lg shadow-lg"
            />
            {/* GitHub Stats */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=jaeho9&hide_title=true&hide_border=true&show_icons=true&count_private=true&include_all_commits=true"
              alt="GitHub Stats"
              className="border border-gray-300 rounded-lg shadow-lg"
            />
            {/* GitHub Streak */}
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=jaeho9"
              alt="GitHub Streak"
              className="border border-gray-300 rounded-lg shadow-lg"
            />
          </div>

          {/* Education and Background */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-2xl font-bold mb-4">Education & Background</h3>
            {/* Education Card */}
            <div
              className="bg-white text-black p-6 rounded-lg shadow-lg w-72 cursor-pointer hover:bg-gray-200 transition"
              onClick={() =>
                openModal(
                  "출신학교: ABC 대학교\n전공: 컴퓨터 공학\n기타 교육: XYZ 부트캠프 수료"
                )
              }
            >
              <h4 className="text-xl font-bold">출신학교 및 교육</h4>
              <p className="mt-2">ABC 대학교 - 컴퓨터 공학</p>
              <p>XYZ 부트캠프</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interview Section (Below Contributions & Education) */}
      <motion.div
        className="mt-12 w-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h3 className="text-2xl font-bold mb-4">Interview</h3>
        <div className="w-full flex flex-col items-center space-y-4">
          {/* Example questions - displayed vertically */}
          <button
            className="bg-white text-black p-4 w-1/2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() =>
              openModal(
                "제가 개발을 시작한 이유는 [개발을 시작하게 된 이유]입니다."
              )
            }
          >
            개발을 시작한 이유는(질문 수정해야됨)?
          </button>
          <button
            className="bg-white text-black p-4 w-1/2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() =>
              openModal(
                "저는 개발할 때 [당신의 철학]을 가장 중요하게 생각합니다."
              )
            }
          >
            어떤 개발을 좋아하는지 (질문 수정해야됨)?
          </button>
          <button
            className="bg-white text-black p-4 w-1/2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition"
            onClick={() =>
              openModal("제가 받은 교육은 [당신의 교육과정]입니다.")
            }
          >
            asdfasdfasdfasdfasdf?
          </button>
        </div>
      </motion.div>

      {/* Modal Component */}
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        content={modalContent}
      />

      <AnimatedCursor
        color="255, 255, 255"
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

export default About;
