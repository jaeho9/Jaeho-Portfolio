import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed"; // 수정: ReactTyped 대소문자 조정
import AnimationComponent from "../LottieAnimation/AboutAnimation";

type FunctionKeys =
  | "Introduce"
  | "Interview"
  | "Education"
  | "Bootcamp"
  | "Study";

const functionContents: Record<FunctionKeys, string> = {
  Introduce: `
      function introduce( ) { // 나의 프로필 
        var name = "Lee JaeHo"; // 이름; 
        var title = "Frontend Developer"; // 분야 타이틀 
        var email = "l2281@naver.com"; // 이메일
      }`,
  Interview: `
      function interview() { // Q & A 
        var Q.1: "개발할 때 기술적인 면에서 가장 중요하게 생각하는 것은?";
        var A.1: "사용자가 UI를 보고 바로 기능을 이해할 수 있도록 만드는 과정을 중요하게 생각하고 개발을 합니다.";
        var Q.2: "자기계발을 위해 어떤 것들을 하고 있는가?";
        var A.2: "저는 자기계발을 위해 부트캠프와 리액트 오픈소스 펼쳐보기 챌린지 등과 같은 다양한 활동에 참여하고 활동을 통해 얻은 지식을 
            개인 블로그에 기록하고 복습하며 실제 프로젝트를 진행하면서 해당 기술들을 적용하면서 자기계발을 하고있습니다.";
      }`,
  Education: `
      function education( ) {
        var university = "Dong-A University"; 
        var major = "Computer Science"; // 컴퓨터공학과 전공
        var graduationYear = "2018 ~ 2024"; 
        var awards = "교내 SW 경시대회 DEVDAY 우수상"; // 수상 경험
      }`,
  Bootcamp: `
      function bootcamp( ) { // 부트캠프
        var program = "Programmers DevCamp"; // 프로그래머스 부트캠프
        var focus = "웹앱 엔지니어링"; // 분야
        var duration = "5 months"; // 기간
      }`,
  Study: `
      function study( ) {
        var skills = ["React", "TypeScript", "TailwindCSS", "ReactNative"]; // 기술스택
        var blogLink = "https://mytechblog.com"; // 블로그 링크
        var github = "https://github.com/LeeJaeHo"; // GitHub 링크
      }`,
};

const IntroduceSection: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<FunctionKeys | null>(
    null
  );

  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-4 sm:p-6 md:p-8"
    >
      <div className="absolute top-12 right-12">
        <AnimationComponent />
      </div>
      {/* 타이핑 애니메이션: 안내 메시지 */}
      {!selectedFunction && (
        <div className="mb-8 font-bold text-lg sm:text-xl md:text-2xl text-center">
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
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(functionContents).map((funcName) => (
          <motion.button
            key={funcName}
            className={`p-2 md:p-3 lg:p-4 px-4 md:px-6 lg:px-8 text-sm md:text-lg lg:text-2xl rounded-lg font-semibold border-2 border-black transition-all shadow-md ${
              selectedFunction === funcName
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setSelectedFunction(funcName as FunctionKeys)}
            initial={{ rotate: -4 }}
            whileHover={{
              rotate: selectedFunction === funcName ? -4 : 4,
            }}
            animate={{ rotate: selectedFunction === funcName ? 0 : -4 }}
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
          className="bg-black text-green-500 p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-3xl shadow-lg"
          style={{ whiteSpace: "pre-wrap" }}
        >
          <h3 className="text-white font-bold mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            실행 결과:
          </h3>
          <ReactTyped
            strings={[functionContents[selectedFunction]]}
            typeSpeed={20}
            backSpeed={20}
            showCursor={true}
            cursorChar={"|"}
            onComplete={() => console.log(`${selectedFunction}( ) 완료`)}
            className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose"
            style={{ lineHeight: "1.5" }} // 추가적으로 줄 간격 설정
          />
        </div>
      )}

      {/* 스크롤 안내 화살표 */}
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default IntroduceSection;
