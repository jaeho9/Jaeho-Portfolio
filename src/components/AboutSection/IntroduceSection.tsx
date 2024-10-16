import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed"; // import 수정: ReactTyped를 소문자로
import AnimationComponent from "../LottieAnimation/AboutAnimation";

type FunctionKeys =
  | "Introduce"
  | "Interview"
  | "Education"
  | "Bootcamp"
  | "Study";

const functionContents: Record<FunctionKeys, string> = {
  Introduce: `
    function introduce( ) {
      var name = "Lee JaeHo"; // 이름; 
      var title = "Web Developer";
      var email = "l2281@naver.com";
    }`,
  Interview: `
    function interview( ) {
      var favoriteLanguage = "JavaScript";
      var dreamJob = "Frontend Engineer";
      var hobbies = ["Coding", "Reading", "Gaming"];
    }`,
  Education: `
    function education( ) {
      var university = "Dong-A University";
      var major = "Computer Science";
      var graduationYear = "2018 ~ 2024";
      var skills = ["알고리즘", "운영체제", "자료구조"];
    }`,
  Bootcamp: `
    function bootcamp( ) {
      var program = "Programmers DevCamp";
      var focus = "Front-Stack Development";
      var duration = "6 months";
    }`,
  Study: `
    function study( ) {
      var skills = ["React", "TypeScript", "TailwindCSS"];
      var currentGoal = "Mastering Animation Libraries";
    }`,
};

const IntroduceSection: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<FunctionKeys | null>(
    null
  );

  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-8"
    >
      <div className="absolute top-12 right-12">
        <AnimationComponent />
      </div>
      {/* 타이핑 애니메이션: 안내 메시지 */}
      {!selectedFunction && (
        <div className="mb-8 font-bold text-2xl">
          <ReactTyped
            strings={[
              "Choose a function to explore!",
              "Click on a button to see the code!",
            ]}
            typeSpeed={40}
            backSpeed={30}
            loop
          />
        </div>
      )}

      {/* 함수 선택 버튼 */}
      <div className="flex space-x-4 mb-8">
        {Object.keys(functionContents).map((funcName) => (
          <motion.button
            key={funcName}
            className={`p-3 px-6 text-2xl rounded-lg font-semibold border-2 border-black transition-all shadow-md ${
              selectedFunction === funcName
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedFunction(funcName as FunctionKeys)} // 클릭 시 상태 변경
            initial={{ rotate: -4 }} // 기본 기울기 설정
            whileHover={{
              rotate: selectedFunction === funcName ? -4 : 4, // 선택된 상태일 경우 기울기 유지
            }} // 마우스 오버 시 기울어짐
            animate={{ rotate: selectedFunction === funcName ? 0 : -4 }} // 선택된 함수에 따라 상태 유지
            transition={{ type: "spring", stiffness: 300 }}
            whileTap={{ scale: 0.95 }}
            style={{ transition: "border-color 0.4s" }}
          >
            {funcName}( )
          </motion.button>
        ))}
      </div>

      {/* 선택된 함수 내용 표시 */}
      {selectedFunction && (
        <div
          className="bg-black text-green-500 p-8 rounded-lg w-full max-w-3xl shadow-lg"
          style={{ whiteSpace: "pre-wrap" }}
        >
          <h3 className="text-white font-bold mb-2">실행 결과:</h3>
          <ReactTyped
            strings={[functionContents[selectedFunction]]}
            typeSpeed={20}
            backSpeed={20}
            showCursor={true}
            cursorChar={"|"}
            onComplete={() => console.log(`${selectedFunction}( ) 완료`)}
          />
        </div>
      )}

      {/* 스크롤 안내 화살표 */}
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default IntroduceSection;
