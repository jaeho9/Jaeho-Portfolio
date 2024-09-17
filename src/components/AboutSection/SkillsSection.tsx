// src/components/AboutSection/SkillsSection.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import AnimationComponent from "../LottieAnimation/SkillsAnimation";

// 아이콘 컴포넌트 (SVG 파일이나 다른 방식으로 대체 가능)
const Icon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-8 h-8 mx-2" />
);

interface BucketProps {
  id: string;
  label: string;
}

const Bucket: React.FC<BucketProps> = ({ id, label }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className="bucket relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`flex items-center justify-center text-center transition-all duration-300 ease-in-out ${
          isHovered ? "bg-white rounded-lg shadow-3xl" : "bg-black rounded-full"
        }`}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: isHovered ? "12px" : "50%", // 원형에서 네모로 변하는 애니메이션
        }}
        initial={{ borderRadius: "50%", scale: 1 }}
        animate={{ borderRadius: isHovered ? "12px" : "50%", scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="content flex flex-col items-center justify-center">
          <motion.p
            className={`text-2xl font-bold transition-colors duration-300 ${
              isHovered ? "text-black" : "text-white"
            }`}
          >
            {label}
          </motion.p>
          {isHovered && id === "main-skills" && (
            <motion.div
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Icon src="/path/to/html-icon.svg" alt="HTML" />
              <Icon src="/path/to/js-icon.svg" alt="JavaScript" />
              <Icon src="/path/to/css-icon.svg" alt="CSS" />
              <Icon src="/path/to/ts-icon.svg" alt="TypeScript" />
              <Icon src="/path/to/react-icon.svg" alt="React" />
              <Icon src="/path/to/react-native-icon.svg" alt="React Native" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const SkillsSection: React.FC = () => (
  <section
    id="skills"
    className="relative min-h-screen flex flex-col items-center justify-center bg-white p-6 md:p-10"
  >
    {/* 애니메이션 컴포넌트 */}
    <div className="absolute top-12 right-12">
      <AnimationComponent />
    </div>
    <h2 className="text-3xl md:text-6xl font-bold text-black mb-20">Skills</h2>
    <div className="bucket-container flex flex-wrap gap-6 md:gap-12">
      <Bucket id="main-skills" label="MainSkills" />
      <Bucket id="sub-skills" label="SubSkills" />
      <Bucket id="studying" label="Studying" />
      <Bucket id="cooperation" label="Cooperation" />
    </div>
    <ScrollArrow scrollToId="projectspage" />
  </section>
);

export default SkillsSection;
