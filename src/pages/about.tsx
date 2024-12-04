import React from "react";
import { motion } from "framer-motion";
import IntroduceSection from "../components/AboutSection/IntroduceSection";
import AboutMeSection from "../components/AboutSection/AboutMeSection";
import SkillsSection from "../components/AboutSection/SkillsSection";

const About: React.FC = () => {
  return (
    <>
      {/* 첫 번째 섹션 */}
      <AboutMeSection />
      {/* <IntroduceSection /> */}
      <SkillsSection />
    </>
  );
};

export default About;
