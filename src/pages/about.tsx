import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useNavbarContext } from "../context/NavbarContext";
import { ReactTyped } from "react-typed";
import AnimatedCursor from "react-animated-cursor";
import W_SocialLinks from "../components/W_SocialLinks";
import SkillCard from "../components/SkillCard";
import ScrollArrow from "../components/ScrollArrow";
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
        className="min-h-screen flex flex-col bg-white text-black p-32 pt-40"
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
              className="w-40.5 h-40.5 rounded-full border-4 border-black mb-4"
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
            <h2 className="text-5xl font-bold text-black mb-8">
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
      </section>

      {/* 두 번째 섹션 */}
      <section
        ref={secondSectionRef}
        className="min-h-screen bg-white flex flex-col p-32 pt-30 text-black relative"
      >
        {/* 왼쪽: University Education */}
        <motion.div
          className="w-full mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">Education</h2>
          <p className="text-2xl">
            동아대학교 컴퓨터공학과 전공 (2018.03 ~ 2024.02)
          </p>
          <ul className="text-xl mt-4 list-disc pl-5 space-y-4">
            <li>자료 구조와 알고리즘: 효율적인 문제 해결 방법을 학습.</li>
            <li>
              객체 지향 프로그래밍: 코드 재사용성과 유지보수성을 높이는 설계
              방식 습득.
            </li>
            <li>
              데이터베이스 시스템: 데이터 모델링과 SQL 쿼리 작성 능력 향상.
            </li>
            <li>
              소프트웨어 공학: 팀 프로젝트 기반 소프트웨어 개발 프로세스 학습.
            </li>
          </ul>
          <p className="text-2xl mt-6 font-bold">Awords</p>
          <p className="text-xl">Dong-a 소프트웨어 경시대회 우수상</p>
        </motion.div>

        {/* 오른쪽: Bootcamp Experience */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-black mb-6">Bootcamp</h2>
          <p className="text-2xl">
            프로그래머스 클라우딩 어플리케이션 엔지니어링 데브코스 (2023.12.17 ~
            2024.05.17)
          </p>
          <ul className="text-xl mt-4 list-disc pl-5 space-y-4">
            <li>
              프론트엔드 및 백엔드 개발 경험: React, Node.js, Express 등을
              활용한 풀스택 개발.
            </li>
            <li>
              API 설계 및 구현: RESTful API 설계를 통한 백엔드 아키텍처 이해.
            </li>
            <li>
              데브옵스 도구 활용: CI/CD 파이프라인 구축 및 Docker를 이용한
              컨테이너화 실습.
            </li>
            <li>
              실제 클라이언트와 협업한 프로젝트 경험: Agile 방식으로 팀
              프로젝트를 진행.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* 세 번째 섹션 (Skills - 카드 플립 애니메이션 적용) */}
      <section
        ref={thirdSectionRef}
        className="min-h-screen bg-white p-32 pt-40 text-black relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-black mb-12">Skills</h2>
          <div className="skills-container flex flex-wrap justify-center">
            {/* SkillCard 컴포넌트를 배열로 사용하여 스킬 표현 */}
            <SkillCard
              skill="HTML & CSS"
              description="Markup languages for building web layouts"
            />
            <SkillCard
              skill="JavaScript"
              description="The language that powers the web"
            />
            <SkillCard
              skill="TypeScript"
              description="Typed superset of JavaScript"
            />
            <SkillCard
              skill="React"
              description="Library for building user interfaces"
            />
            <SkillCard
              skill="Next.js"
              description="The React framework for production"
            />
            <SkillCard
              skill="Node.js"
              description="JavaScript runtime for building server-side applications"
            />
          </div>
        </motion.div>
      </section>

      {/* <ScrollArrow targetRef={secondSectionRef} /> */}
    </>
  );
};

export default About;
