import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import AnimationComponent from "../LottieAnimation/AboutAnimation";
import { ReactTyped } from "react-typed"; // ReactTyped 임포트
import TypingGuide from "./TypingGuide";

const timelineData = [
  {
    year: "2018. 03",
    description:
      "동아대학교 컴퓨터공학과 입학 후, 이론적 기초와 함께 프로그래밍, 알고리즘, 데이터베이스 등 다양한 전공 지식을 습득.",
    icon: "🎓",
  },
  {
    year: "2022. 09",
    description: "첫 프로젝트 프론트엔드 파트로 개발 시작",
    icon: "💻",
  },
  {
    year: "2022. 12",
    description:
      "첫 프로젝트로 교내 SW 경시대회인 DAU AI DEVDAY 우수상 (개발자의 꿈을 갖는 계기가 됨)",
    icon: "🏆",
  },
  {
    year: "2024. 12",
    description:
      "프로그래머스에서 하는 클라우딩 어플리케이션 엔지니어링 부트캠프 시작 (React, React Native 등 프론트 전문지식 습득, 다양한 팀 프로젝트와 개인 프로젝트 경험)",
    icon: "🎓",
  },
  {
    year: "2024. 05",
    description:
      "부트캠프 이수 후에도 팀원들과 새로운 프로젝트를 진행하며 개인 프로젝트와 다양한 챌린지 등을 통해 개인 기술 성장",
    icon: "🚀",
  },
  {
    year: "~ ing",
    description:
      "지속적으로 개발 기술을 성장시키고 있으며, 프론트엔드 분야에서 다양한 프로젝트와 도전을 이어가고 있음.",
    icon: "🌱",
  },
];

const TimelineSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <section
      id="timeline"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-6 sm:p-8"
    >
      {/* 상단 애니메이션 컴포넌트 */}
      <div className="absolute top-6 right-6">
        <AnimationComponent />
      </div>

      {/* 제목 */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        My Timeline
      </h2>

      {/* 타임라인 */}
      <div className="relative w-full max-w-4xl">
        {/* 중앙 라인 */}
        <motion.div
          className="absolute w-full h-1 top-1/2 transform -translate-y-1/2"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-white via-gray-600 to-black"
            style={{ backgroundSize: "200% 100%" }}
            animate={{ backgroundPosition: "100% 0%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 연도별 항목 */}
        <div className="relative flex justify-between items-center">
          {timelineData.map((item) => (
            <div key={item.year} className="flex flex-col items-center">
              {/* 아이콘 */}
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-xl cursor-pointer ${
                  selectedYear === item.year
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black"
                }`}
                onClick={() =>
                  setSelectedYear((prev) =>
                    prev === item.year ? null : item.year
                  )
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.div>

              {/* 연도 */}
              <p className="mt-2 text-lg font-semibold">{item.year}</p>

              {/* 설명 (선택된 연도에만 표시) */}
              {selectedYear === item.year && (
                <motion.div
                  className="absolute top-full mt-4 p-4 bg-black text-white rounded-lg shadow-lg text-center w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* ReactTyped를 사용한 타이핑 효과 */}
                  <ReactTyped
                    strings={[item.description]} // 각 항목의 설명
                    typeSpeed={50} // 타이핑 속도
                    backSpeed={30} // 지우는 속도
                    backDelay={1000} // 지운 후 다시 타이핑 전 대기 시간
                    startDelay={500} // 시작 대기 시간
                    loop={false} // 반복 여부
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <TypingGuide />
      {/* 스크롤 안내 화살표 */}
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default TimelineSection;
