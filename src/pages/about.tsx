import React from "react";
import { motion } from "framer-motion";
import IntroduceSection from "../components/AboutSection/IntroduceSection";
import AboutMeSection from "../components/AboutSection/AboutMeSection";
import SkillCard from "../components/SkillCard";

const About: React.FC = () => {
  return (
    <>
      {/* 첫 번째 섹션 */}
      <AboutMeSection />
      <IntroduceSection />

      {/* 세 번째 섹션 */}
      <section
        id="skills"
        className="min-h-screen bg-gray-100 flex flex-col p-32 pt-30 text-black"
      >
        <h2 className="text-5xl font-bold text-black mb-6">Skills</h2>
        <div className="flex flex-wrap space-x-8">
          <SkillCard skill="JavaScript" description="프로그래밍 언어" />
          <SkillCard skill="React" description="프론트엔드 라이브러리" />
          <SkillCard skill="Node.js" description="백엔드 플랫폼" />
        </div>
      </section>
    </>
  );
};

export default About;
