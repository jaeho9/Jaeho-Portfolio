// src/components/ScrollProgressBar.tsx
import React from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        height: "10px",
        backgroundColor: "#FF60A6", // 스크롤바 색상
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    />
  );
};

export default ScrollProgressBar;
