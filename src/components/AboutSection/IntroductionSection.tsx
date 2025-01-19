import React from "react";
import { ReactTyped } from "react-typed";

const IntroductionSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-wrap bg-white text-black p-8">
      {/* 좌측 상단 (Introduction) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8 mb-8 md:mb-0">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
          Introduction
        </h1>
        <div className="text-lg sm:text-xl space-y-4">
          <p>안녕하세요! 저는 프론트엔드 개발자 이재호 입니다.</p>
          <p>저는 주로 React 와 React Native 를 사용하여 개발합니다.</p>
          <p>
            저는 공부를 할때는 개인 블로그와 Notion에 기록하며 공부를 합니다.
          </p>
          <p>저의 취미는 E-Sports 경기 와 영화 시청을 즐기는 편입니다.</p>
        </div>
      </div>

      {/* 우측 상단 (저는 _____ 하는 개발자 입니다.) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">저는</h2>
        <h3 className="text-4xl sm:text-5xl font-bold">
          <ReactTyped
            strings={["성장하는", "인정받는", "소통하는"]}
            typeSpeed={100}
            backSpeed={50}
            loop
            className="inline-block text-black"
          />{" "}
          개발자 입니다.
        </h3>
      </div>

      {/* 좌측 하단 (저는 언젠가 ____ 개발자가 되고 싶습니다.) */}
      <div className="absolute bottom-12 left-6 w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
        <h2 className="text-3xl sm:text-4xl font-semibold">저는 언젠가</h2>
        <h3 className="text-4xl sm:text-5xl font-bold">
          <ReactTyped
            strings={[
              "팀원들에게 인정받는",
              "도움을 주는",
              "다양한 분야에서의",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
            className="inline-block text-black"
          />{" "}
          개발자가 되고 싶습니다.
        </h3>
      </div>
    </section>
  );
};

export default IntroductionSection;
