import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed";

// 객체의 키들에 대한 타입 정의
type FunctionKeys =
  | "Introduce"
  | "Interview"
  | "Education"
  | "Bootcamp"
  | "Study";

// 각 함수의 코드 내용을 객체로 저장
const functionContents: Record<FunctionKeys, string> = {
  Introduce: `
    function introduce() {
      var name = "Lee JaeHo";
      var title = "Web Developer";
      var email = "l2281@naver.com";
    }`,
  Interview: `
    function interview() {
      var favoriteLanguage = "JavaScript";
      var dreamJob = "Frontend Engineer";
      var hobbies = ["Coding", "Reading", "Gaming"];
    }`,
  Education: `
    function education() {
      var university = "XYZ University";
      var major = "Computer Science";
      var graduationYear = 2022;
    }`,
  Bootcamp: `
    function bootcamp() {
      var program = "Programmers DevCamp";
      var focus = "Full-Stack Development";
      var duration = "6 months";
    }`,
  Study: `
    function study() {
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
      {/* 함수 선택 버튼 */}
      <div className="flex space-x-4 mb-8">
        {Object.keys(functionContents).map((funcName) => (
          <motion.button
            key={funcName}
            className={`p-3 px-6 rounded-lg font-semibold ${
              selectedFunction === funcName
                ? "bg-black text-white"
                : "bg-white text-black"
            } hover:border border-black transition-all shadow-md`}
            onClick={() => setSelectedFunction(funcName as FunctionKeys)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              transition: "border-color 0.3s",
            }}
          >
            {funcName}()
          </motion.button>
        ))}
      </div>

      {/* 선택된 함수 내용과 실행 결과 표시 */}
      {selectedFunction && (
        <div
          className="bg-gray-900 text-green-400 p-6 rounded-lg w-full max-w-xl shadow-lg"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {/* 실행 결과 텍스트 */}
          <h3 className="text-white font-bold mb-2">실행 결과:</h3>

          {/* ReactTyped 애니메이션 */}
          <ReactTyped
            strings={[functionContents[selectedFunction]]}
            typeSpeed={30}
            backSpeed={20}
            showCursor={true}
            cursorChar={"|"}
            onComplete={() => console.log(`${selectedFunction}() 완료`)}
          />
        </div>
      )}

      {/* 스크롤 화살표 */}
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default IntroduceSection;
