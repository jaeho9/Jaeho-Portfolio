import React from "react";
import IntroduceSection from "../components/AboutSection/IntroduceSection";
import AboutMeSection from "../components/AboutSection/AboutMeSection";
import SkillsSection from "../components/AboutSection/SkillsSection";
import TimelineSection from "../components/AboutSection/TimelineSection";
import IntroductionSection from "../components/AboutSection/IntroductionSection";

const About: React.FC = () => {
  return (
    <>
      {/* 첫 번째 섹션 */}
      <AboutMeSection />
      <IntroduceSection />
      {/* <IntroductionSection /> */}
      <TimelineSection />
      <SkillsSection />
    </>
  );
};

export default About;
