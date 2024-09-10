// src/components/ScrollArrow.tsx
import React from "react";
import { motion } from "framer-motion";

interface ScrollArrowProps {
  targetRef: React.RefObject<HTMLElement>;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ targetRef }) => {
  const handleScrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
      <p className="text-sm text-gray-400">Click!</p>
      <motion.img
        src="./images/icons/B_arrow.svg" // 화살표 아이콘 경로 설정
        alt="Scroll Down Arrow"
        className="w-12 h-12 cursor-pointer"
        animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={handleScrollToSection}
      />
    </div>
  );
};

export default ScrollArrow;
