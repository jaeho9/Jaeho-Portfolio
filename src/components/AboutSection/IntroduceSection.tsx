import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed"; // 수정: ReactTyped 대소문자 조정
import AnimationComponent from "../LottieAnimation/AboutAnimation";

type FunctionKeys = "Introduce" | "Developer" | "Future";

const functionContents: Record<
  FunctionKeys,
  { title: string; content: string }
> = {
  Introduce: {
    title: "나의 프로필", // 첫 번째 박스 제목
    content: `function introduce( ) { 
      var greeting = "안녕하세요! 저는 프론트엔드 개발자 이재호 입니다.";
      var skills = "저는 주로 React 와 React Native 를 사용하여 개발합니다.";
      var studyMethod = "저는 공부를 할때는 개인 블로그와 Notion에 기록하며 공부를 합니다.";
      var hobby = "저의 취미는 E-Sports 경기 와 영화 시청을 즐기는 편입니다.";
    }`,
  },
  Developer: {
    title: "저는 ____ 하는 개발자 입니다.", // 두 번째 박스 제목
    content: `function Developer( ) {
      var 성장 = "저는 항상 새로운 기술을 배우며 성장하는 개발자가 되기 위해 노력하고 있습니다.";
      var 소통 = "협업을 할때 팀원들과 적극적으로 소통하며 함께 성장하는 개발자 입니다.";
      var 도전 = "개발을 하면서 새로운 도전을 두려워하지 않고, 항상 도전하며 성장하는 개발자입니다.";
    }`,
  },
  Future: {
    title: "저는 언젠가 ____ 개발자가 되고 싶습니다.", // 세 번째 박스 제목
    content: `function Future( ) {
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
          className="bg-white text-black border-2 border-black p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-sm sm:max-w-lg md:max-w-5xl shadow-lg"
          style={{
            whiteSpace: "pre-wrap", // 줄바꿈 처리
            wordBreak: "break-word", // 길어지는 단어 처리
            overflowWrap: "break-word", // 단어가 너무 길면 줄바꿈
            minHeight: "200px", // 최소 높이 지정
            height: "auto", // 내용에 맞게 높이가 자동으로 조절되도록
            padding: "20px", // 여유있는 패딩
            lineHeight: "1.8", // 줄 간격 늘리기
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
            className="text-2xs font-mono"
            style={{ lineHeight: "1.5" }} // 추가적으로 줄 간격 설정
          />
        </div>
      )}

      <ScrollArrow scrollToId="timeline" />
    </section>
  );
};

export default IntroduceSection;
