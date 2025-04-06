import React, { useEffect, useState } from "react";
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
    title: "저의 프로필",
    content: `function introduce() {
      const greeting = "안녕하세요! 끊임없이 배우고 성장하는 프론트엔드 개발자, 이재호입니다.";
      const coreSkills = ["React", "React Native","TypeScript","JavaScript", "Tailwind CSS"];
      const developmentStyle = "사용자 경험을 최우선으로 생각하며, 효율적인 코드와 안정적인 아키텍처를 지향합니다.";
      const learningApproach = "새로운 지식은 깊이 있게 탐구하고, 개인 블로그와 Notion에 체계적으로 기록하며 학습합니다.";
      const interests = "E-Sports 경기 시청과 영화 감상을 통해 스트레스를 해소하고 재충전합니다.";
      return { greeting, coreSkills, developmentStyle, learningApproach, interests };
    }`,
  },
  Developer: {
    title: "저는 ____ 하는 개발자입니다.",
    content: `function Developer() {
      let growthMindset = "새로운 기술 트렌드를 꾸준히 학습하고 적용하며, 능동적으로 역량을 개선해 나가기 위해 노력합니다.";
      let communicationSkills = "동료 개발자 및 다양한 직군과의 적극적인 소통을 통해 협업의 효율성을 높이고 시너지를 창출하는 것을 중요하게 생각합니다.";
      let challengeDriven = "익숙하지 않은 문제에 대한 도전을 즐기며, 실패를 통해 배우고 성장의 발판으로 삼고자 합니다.";
      return { growthMindset, communicationSkills, challengeDriven };
    }`,
  },
  Future: {
    title: "저는 언젠가 ____ 개발자가 되고 싶습니다.",
    content: `function Future() {
      const recognizedDeveloper = "팀 내에서 기술적인 전문성을 인정받고, 동료들에게 신뢰를 주는 개발자가 되기를 희망합니다.";
      const problemSolver = "지속적인 학습과 경험을 통해 문제를 해결하고, 팀의 기술적인 난제를 풀어가는 핵심 인재가 되고 싶습니다.";
      const versatileEngineer = "프론트엔드 영역뿐만 아니라, 백엔드, DevOps 등 다양한 기술 스펙트럼을 넓혀 더욱 폭넓은 시야와 역량을 갖춘 개발자로 성장하고자 합니다.";
      return { recognizedDeveloper, problemSolver, versatileEngineer };
    }`,
  },
};

const IntroduceSection: React.FC = () => {
  const [selectedFunction, setSelectedFunction] = useState<FunctionKeys | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20"
    >
      {!isMobile && (
        <div className="absolute sm:top-12 sm:right-12 top-4 right-4">
          <AnimationComponent />
        </div>
      )}

      {/* 타이핑 애니메이션: 안내 메시지 */}
      {!selectedFunction && (
        <div className="mb-8 font-bold text-lg sm:text-xl md:text-2xl text-center">
          <ReactTyped
            strings={["탐색하고 싶은 function을 선택해 주세요!"]}
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
          className="bg-white text-black border-2 border-black p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl shadow-lg code-block" // code-block 클래스 추가
          style={{
            whiteSpace: "pre",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            minHeight: "200px",
            height: "auto",
            padding: "20px",
            lineHeight: "1.8",
            overflowX: "auto",
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
