import React from "react";
import { ReactTyped } from "react-typed"; // ReactTyped를 대문자로 임포트

const TypingGuide: React.FC = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-lg text-gray-600">
        <ReactTyped
          strings={["Click on the icon to learn more!"]} // 타이핑될 문자열
          typeSpeed={50} // 타이핑 속도
          backSpeed={30} // 지우는 속도
          backDelay={1000} // 다시 타이핑하기 전 기다리는 시간
          startDelay={500} // 시작 지연 시간
          loop={true} // 반복 여부
        />
      </p>
    </div>
  );
};

export default TypingGuide;
