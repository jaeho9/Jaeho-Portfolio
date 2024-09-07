import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useNavbarContext } from "../context/NavbarContext";
import { ReactTyped } from "react-typed";
import AnimatedCursor from "react-animated-cursor";
import W_SocialLinks from "../components/W_SocialLinks";
import "../styles/global.css";

const About: React.FC = () => {
  const { setColor, setLogoColor } = useNavbarContext();
  const [showIntroduce, setShowIntroduce] = useState(false);

  const firstSectionRef = useRef<HTMLElement | null>(null);
  const secondSectionRef = useRef<HTMLElement | null>(null);
  const thirdSectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setColor("text-white");
    setLogoColor("text-white");

    return () => {
      setColor("text-gray-600");
      setLogoColor("text-black");
    };
  }, [setColor, setLogoColor]);

  // 스크롤 진행 상황에 따라 화살표 표시 여부 결정
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestValue) => {
      // 첫 번째와 두 번째 섹션에서 화살표를 보여줍니다.
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 첫 번째 섹션 */}
      <section
        ref={firstSectionRef} // 첫 번째 섹션 참조 추가
        id="about"
        className="min-h-screen flex flex-col bg-black text-white p-32 pt-40"
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

        {/* 첫 번째 섹션의 아래쪽 화살표와 스크롤 안내 */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-400">Click!</p>
          <motion.img
            src="./images/icons/B_arrow.svg"
            alt="Scroll Down Arrow"
            className="w-12 h-12 cursor-pointer"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => handleScrollToSection(secondSectionRef)} // 수정
          />
        </div>
      </section>

      {/* 두 번째 섹션 */}
      <section
        ref={secondSectionRef}
        className="min-h-screen bg-black flex flex-row p-32 pt-40 text-white relative"
      >
        {/* 왼쪽: Education */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Education</h2>
          <p>동아대학교 컴퓨터공학과 전공</p>
          <p>2018.03 ~ 2024.02</p>
          <p className="text-3xl font-bold mt-5">Aword</p>
          <p>Dong-a 소프트웨어 경시대회 우수상</p>
        </motion.div>

        {/* 오른쪽: Bootcamp */}
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Bootcamp</h2>
          <p>프로그래머스 클라우딩 어플리케이션 엔지니어링 데브코스</p>
          <p>2023.12.17 ~ 2024.05.17</p>
        </motion.div>

        {/* 두 번째 섹션의 아래쪽 화살표와 스크롤 안내 */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-400">Click!</p>
          <motion.img
            src="./images/icons/B_arrow.svg"
            alt="Scroll Down Arrow"
            className="w-12 h-12 cursor-pointer"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => handleScrollToSection(thirdSectionRef)} // 수정
          />
        </div>
      </section>

      {/* 세 번째 섹션 (Skills) */}
      <section
        ref={thirdSectionRef}
        className="min-h-screen bg-black p-32 pt-40 text-white relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-white mb-12">Skills</h2>
          <ul className="text-3xl font-bold space-y-6">
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
          </ul>
        </motion.div>

        {/* 세 번째 섹션의 위로 가는 화살표 */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-400">Click!</p>
          <motion.img
            src="./images/icons/T_arrow.svg" // 위로 가는 화살표 아이콘
            alt="Scroll Up Arrow"
            className="w-12 h-12 cursor-pointer rotate-180" // 화살표를 위로 향하게 회전
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => handleScrollToSection(firstSectionRef)} // 첫 번째 섹션으로 이동
          />
        </div>
      </section>

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
    </>
  );
};

export default About;
