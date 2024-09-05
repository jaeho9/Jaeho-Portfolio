// src/pages/About.tsx
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { useNavbarContext } from "../context/NavbarContext";
import { ReactTyped } from "react-typed";
import AnimatedCursor from "react-animated-cursor";
import W_SocialLinks from "../components/W_SocialLinks";
import "../styles/global.css";

const About: React.FC = () => {
  const { setColor, setLogoColor } = useNavbarContext();
  const [showIntroduce, setShowIntroduce] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setColor("text-white");
    setLogoColor("text-white");

    return () => {
      setColor("text-gray-600");
      setLogoColor("text-black");
    };
  }, [setColor, setLogoColor]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestValue) => {
      setShowArrow(latestValue < 0.95);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-black text-white p-32"
    >
      <div className="flex flex-row justify-around w-full space-x-8 items-start">
        {/* Profile Picture and Basic Information (Left Side) */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-1/4"
        >
          <img
            src="./images/TesT.png"
            alt="Profile"
            className="w-40.5 h-40.5 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-4xl font-bold">Jaeho Lee</h2>
          <p className="text-lg mt-2">생년월일: 1999/12/15</p>
        </motion.div>

        {/* Typing Animation (Right Side) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-3/4"
        >
          <h2 className="text-5xl font-bold text-white mb-8">
            <ReactTyped
              strings={["안녕하세요 저는 프론트 개발자 이재호 라고 합니다."]}
              typeSpeed={40}
              backSpeed={30}
              showCursor={false}
              loop={false}
              onComplete={() => setShowIntroduce(true)}
            />
          </h2>

          {/* Introduce Section with Animation */}
          {showIntroduce && (
            <motion.div
              className="flex flex-col pt-40 justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                className="text-7xl font-bold text-pink-500 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Introduce
              </motion.h2>

              <motion.div className="text-3xl font-bold space-y-10">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  ▶ 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  ▶ 기술과 디자인의 조화를 추구하며, 새로운 도전을 즐깁니다.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  ▶ 빠르게 변하는 환경 속에서도 끊임없이 배우고 성장하는
                  개발자입니다.
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* 아래 방향 아이콘과 텍스트 */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0.8, 1, 0.8],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img
              src="/images/icons/B_arrow.svg"
              alt="아래로 스크롤"
              className="w-16 h-16"
            />
          </motion.div>
          <p className="text-white mt-2 text-sm">스크롤을 내려주세요</p>
        </div>
      )}

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
      <W_SocialLinks />
    </section>
  );
};

export default About;
