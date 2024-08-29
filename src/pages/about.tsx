import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 카드 데이터 정의
const cards = [
  {
    id: "profile",
    title: "Profile",
    description: "나의 프로필 이미지와 기본 정보.",
  },
  {
    id: "education",
    title: "Education",
    description: "출신 학교, 전공 및 받은 교육.",
  },
  {
    id: "reviews",
    title: "Team Reviews",
    description: "팀원들이 말하는 나.",
  },
  {
    id: "philosophy",
    title: "My Philosophy",
    description: "개발 철학 및 자기 소개.",
  },
];

const About = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('/images/bg3.jpg')`, // 배경 이미지 경로
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Intro 애니메이션 */}
      {showIntro && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h1 className="text-[140px] font-extrabold text-gray-800">
            Who Am I?
          </h1>
        </motion.div>
      )}

      {/* 페이지 내용 */}
      {!showIntro && (
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`p-8 bg-white shadow-md rounded-lg flex items-center justify-center cursor-pointer ${
                card.id === "philosophy" ? "md:col-span-3" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedCard(card.id)}
              style={{
                height: card.id === "philosophy" ? "250px" : "150px",
              }}
            >
              <motion.h2 className="text-2xl font-bold text-center">
                {card.title}
              </motion.h2>
            </motion.div>
          ))}

          {/* 모달: 카드 선택 시 모달로 상세 정보 표시 */}
          {selectedCard && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="bg-white rounded-lg p-8 w-full max-w-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  {cards.find((card) => card.id === selectedCard)?.title}
                </h2>
                <p className="text-lg text-gray-700">
                  {cards.find((card) => card.id === selectedCard)?.description}
                </p>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </div>
      )}
    </section>
  );
};

export default About;
