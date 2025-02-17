import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed";
import AnimationComponent from "../LottieAnimation/AboutAnimation";

type FunctionKeys = "Introduce" | "Developer" | "Future";

const functionContents: Record<
  FunctionKeys,
  { title: string; content: string }
> = {
  Introduce: {
    title: "나의 프로필",
    content: `function introduce() { 
      var greeting = "안녕하세요! 저는 프론트엔드 개발자 이재호 입니다.";
      var skills = "저는 주로 React 와 React Native 를 사용하여 개발합니다.";
      var studyMethod = "저는 공부를 할때는 개인 블로그와 Notion에 기록하며 공부를 합니다.";
      var hobby = "저의 취미는 E-Sports 경기 와 영화 시청을 즐기는 편입니다.";
    }`,
  },
  Developer: {
    title: "저는 ____ 하는 개발자 입니다.",
    content: `function Developer() {
      var 성장 = "저는 항상 새로운 기술을 배우며 성장하는 개발자가 되기 위해 노력하고 있습니다.";
      var 소통 = "협업을 할때 팀원들과 적극적으로 소통하며 함께 성장하는 개발자 입니다.";
      var 도전 = "개발을 하면서 새로운 도전을 두려워하지 않고, 항상 도전하며 성장하는 개발자입니다.";
    }`,
  },
  Future: {
    title: "저는 언젠가 ____ 개발자가 되고 싶습니다.",
    content: `function Future() {
      var 인정받는 = "저는 팀원들에게 기술적으로 인정받는 개발자가 되고 싶습니다.";
      var 도움을 주는 = "저는 다른 개발자들이 문제를 해결할 수 있도록 돕는 개발자가 되고 싶습니다.";
      var 다양한 분야에서의 = "프론트뿐만 아니라 다른 개발 지식도 습득하여 폭넓은 역량을 가진 개발자가 되고 싶습니다.";
    }`,
  },
};

const IntroduceSection: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<FunctionKeys | null>(
    null
  );

  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20"
    >
      {/* Lottie 애니메이션 (반응형 위치 조정) */}
      <div className="absolute sm:top-12 sm:right-12 top-4 right-4 sm:block hidden">
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
            className={`p-2 sm:p-3 md:p-4 px-4 sm:px-5 md:px-6 text-sm sm:text-md md:text-lg lg:text-xl rounded-lg font-semibold border-2 border-black transition-all shadow-md ${
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
          className="bg-white text-black border-2 border-black p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl shadow-lg"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            minHeight: "200px",
            height: "auto",
            padding: "20px",
            lineHeight: "1.8",
          }}
        >
          <h3 className="text-black font-bold mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {functionContents[selectedFunction].title}
          </h3>
          <ReactTyped
            strings={[functionContents[selectedFunction].content]}
            typeSpeed={20}
            backSpeed={20}
            showCursor={true}
            cursorChar={"|"}
            onComplete={() => console.log(`${selectedFunction}( ) 완료`)}
            className="text-xs sm:text-sm md:text-base font-mono"
            style={{ lineHeight: "1.5" }}
          />
        </div>
      )}

      <ScrollArrow scrollToId="timeline" />
    </section>
  );
};

export default IntroduceSection;
