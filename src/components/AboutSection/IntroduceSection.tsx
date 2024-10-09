import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationComponent from "../LottieAnimation/AboutAnimation";
import ScrollArrow from "../ScrollArrow";
import { ReactTyped } from "react-typed"; // ReactTyped를 임포트합니다.

const IntroduceSection: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContent, setShowContent] = useState(false); // 내용 표시 여부 상태

  const sections = [
    {
      id: "default",
      title: "질문을 선택해 주세요",
      content: "",
    },
    {
      id: "Q. 질문1",
      title: "Q. 왜 프론트엔드 개발자가 되려고 하는가?",
      content:
        "A. 프론트엔드 개발자가 되기로 한 가장 큰 계기는 대학교 2학년 때였습니다. 당시 아무런 지식이 없었지만, 팀 프로젝트에서 처음으로 프론트엔드 부분을 맡게 되었습니다. 부족한 점도 많았지만, 팀원들과 함께 노력해 프로젝트를 성공적으로 마쳤고, 상도 받으면서 프론트엔드 개발에 큰 매력을 느꼈습니다. 특히, 내가 작성한 코드가 즉각적으로 화면에 반영되고, 이를 통해 사용자에게 실질적인 도움을 줄 수 있다는 점이 가장 큰 매력으로 다가왔습니다.",
    },
    {
      id: "Q. 질문2",
      title: "Q. 개발을 하면서 중요하게 생각하는것이 있다면?",
      content:
        "A. 개발할 때 기술적인 면에서 가장 중요하게 생각하는 것은 직관적인 개발입니다. 사용자가 UI를 보고 바로 기능을 이해할 수 있도록 만드는 과정을 중요하게 여기며, 이런 부분을 고민하는 것이 즐겁습니다. 또한 팀 프로젝트에서는 팀원들과의 소통이 매우 중요하다고 생각합니다. 여러 프로젝트를 진행하면서 소통이 잘 되었을 때와 그렇지 않았을 때의 결과물이 크게 달라진 경험이 있기 때문에, 팀원들의 의견을 잘 듣고 제 생각도 부드럽게 전달하려고 노력합니다.",
    },
    {
      id: "Q. 질문3",
      title: "Q. 자기계발을 위해 어떤 것들을 하고 있는가?",
      content:
        "A. 저는 자기계발을 위해 부트캠프와 리액트 오픈소스 챌린지와 같은 다양한 활동에 참여하고 있습니다. 이 활동을 통해 얻은 지식은 개인 블로그에 기록하고 복습하며, 실제 프로젝트에서 해당 기술들을 적용해 왔습니다. 또한, 궁금한 새로운 기술들에 대해서도 스스로 공부하고 프로젝트에 적용하려고 노력하고 있습니다.",
    },
    {
      id: "education",
      title: "Education",
      content: "동아대학교 컴퓨터공학과 전공 (2018.03 ~ 2024.02)",
    },
    {
      id: "bootcamp",
      title: "Bootcamp",
      content:
        "프로그래머스 클라우딩 어플리케이션 엔지니어링 데브코스 (2023.12.17 ~ 2024.05.17)",
    },
  ];

  const handleSectionClick = (id: string) => {
    setSelected(id);
    setIsMenuOpen(false);
    setShowContent(false); // 클릭 시 콘텐츠 숨기기
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const copyEmailToClipboard = () => {
    const email = "l2281@naver.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <section
      id="introduce"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-8"
    >
      {/* 상단 Introduce 섹션 */}
      <div className="absolute top-[100px] left-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Jaeho Lee / 1999.12.15</h2>
          <div className="flex items-center">
            <h2 className="text-3xl font-bold mb-2">email: l2281@naver.com</h2>
            <button
              className="ml-2 text-3xl"
              onClick={copyEmailToClipboard}
              title="Copy"
            >
              📋
            </button>
          </div>
        </div>
      </div>
      {/* 메뉴 버튼 */}
      <div className="relative w-3/4">
        <button
          onClick={toggleMenu}
          className="border-2 border-black px-10 py-3 text-lg font-bold w-full text-center"
        >
          {selected
            ? sections.find((s) => s.id === selected)?.title
            : "질문을 선택해 주세요"}
          {isMenuOpen ? " ▲" : " ▼"}
        </button>

        {/* 드롭다운 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 mt-2 z-10 bg-white border border-black rounded shadow-lg w-full"
            >
              <motion.ul className="flex flex-col">
                {sections.map((section, index) => (
                  <motion.li
                    key={section.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: index * 0.1,
                      },
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={`block border-2 border-black px-10 py-3 text-lg font-bold ${
                      selected === section.id ? "bg-white" : "bg-white"
                    } w-full`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {section.title}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 선택된 내용 표시 */}
      <div className="relative w-3/4 border-4 border-black bg-white mt-8 p-10 flex flex-col items-center justify-center rounded-3xl">
        <AnimatePresence>
          {selected === null || selected === "default" ? (
            <AnimationComponent />
          ) : (
            <>
              <ReactTyped
                strings={[sections.find((s) => s.id === selected)?.title || ""]}
                typeSpeed={50}
                backSpeed={50}
                loop={false}
                onComplete={() => setShowContent(true)} // 타이핑이 끝나면 showContent를 true로 설정
                className="text-4xl font-bold mb-6"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }} // 초기 상태
                animate={{
                  opacity: showContent ? 1 : 0, // 상태에 따라 변경
                  y: showContent ? 0 : 20, // 상태에 따라 변경
                }}
                transition={{ type: "spring", stiffness: 300 }} // 스프링 효과
                className="text-2xl"
              >
                {sections.find((s) => s.id === selected)?.content}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* 스크롤 화살표 */}
      <ScrollArrow scrollToId="skills" />
    </section>
  );
};

export default IntroduceSection;
