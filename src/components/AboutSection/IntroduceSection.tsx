import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationComponent from "../LottieAnimation/AboutAnimation";
import { Link as ScrollLink } from "react-scroll";
import ScrollArrow from "../ScrollArrow";
const IntroduceSection: React.FC = () => {
  const [selected, setSelected] = useState<string>("introduce");

  const copyEmailToClipboard = () => {
    const email = "l2281@naver.com";
    navigator.clipboard.writeText(email);
  };

  const sections = [
    {
      id: "WELCOME",
      title: "WELCOME",
      content: "",
    },
    {
      id: "introduce",
      title: "Introduce",
      content: "안녕하세요, 저는 Jaeho Lee입니다. 1999년 12월 15일생입니다.",
    },
    {
      id: "education",
      title: "Education",
      content: "동아대학교 컴퓨터공학과 전공 (2018.03 ~ 2024.02)",
    },
    {
      id: "bootcamp",
      title: "Bootcamp",
      content:
        "프로그래머스 클라우딩 어플리케이션 엔지니어링 데브코스 (2023.12.17 ~ 2024.05.17)",
    },
  ];

  const handleSectionClick = (id: string) => {
    setSelected(id);
  };

  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-8"
    >
      {/* 상단 Introduce 섹션 */}
      <div className="absolute top-[100px] left-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Jaeho Lee / 1999.12.15</h2>
          <div className="flex items-center">
            <h2 className="text-3xl font-bold mb-2">email: l2281@naver.com</h2>
            <button
              className="ml-2 text-3xl"
              onClick={copyEmailToClipboard}
              title="Copy"
            >
              📋
            </button>
          </div>
        </div>
      </div>

      {/* 애니메이션 컴포넌트 */}
      <div className="absolute top-12 right-12">
        <AnimationComponent />
      </div>

      {/* 버튼 섹션 */}
      <div className="mt-[190px] flex justify-center space-x-4">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`border-2 px-6 py-3 text-lg font-bold ${
              selected === section.id
                ? "border-black text-black"
                : "border-gray-400 text-gray-500"
            }`}
            onClick={() => handleSectionClick(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* 큰 네모 안에 선택된 내용 표시 */}
      <div className="relative w-[1600px] h-[450px] border-4 border-black bg-white mt-8 p-10 flex items-center justify-center rounded-3xl">
        <AnimatePresence mode="wait">
          {sections
            .filter((section) => section.id === selected)
            .map((section) => (
              <motion.div
                key={section.id}
                layoutId="content-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <motion.h2 className="text-4xl font-bold mb-6">
                  {section.title}
                </motion.h2>
                <motion.p className="text-2xl">{section.content}</motion.p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default IntroduceSection;
