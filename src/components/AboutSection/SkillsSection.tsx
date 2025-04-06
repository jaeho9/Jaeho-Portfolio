import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollArrow from "../ScrollArrow";
import AnimationComponent from "../LottieAnimation/SkillsAnimation";

// 아이콘 컴포넌트 타입 정의
interface IconProps {
  src: string;
  alt: string;
  label: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, label }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);
  const handleTouchStart = () => setTooltipVisible(true);
  const handleTouchEnd = () => setTooltipVisible(false);

  return (
    <div
      className="flex flex-col items-center justify-center relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart} // 터치 시작 시 hover 활성화
      onTouchEnd={handleTouchEnd} // 터치 종료 시 hover 비활성화
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-10 h-10 sm:w-12 sm:h-12 mx-5"
        initial={{ opacity: 0, y: 10 }}
        animate={
          isTooltipVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }
        }
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-xs sm:text-sm font-semibold mt-2 text-center text-black"
        initial={{ opacity: 0, y: 10 }}
        animate={
          isTooltipVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }
        }
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.p>
      {isTooltipVisible && (
        <div className="absolute bottom-16 bg-black text-white text-xs sm:text-sm rounded px-2 py-1">
          {label}
        </div>
      )}
    </div>
  );
};

interface SkillsListProps {
  skills: { src: string; alt: string; label: string }[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => (
  <motion.div
    className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {skills.map((skill) => (
      <Icon
        key={skill.label}
        src={skill.src}
        alt={skill.alt}
        label={skill.label}
      />
    ))}
  </motion.div>
);

interface BucketProps {
  id: string;
  label: string;
  skills: { src: string; alt: string; label: string }[];
}

const Bucket: React.FC<BucketProps> = ({ id, label, skills }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleTouchStart = () => setHovered(true);
  const handleTouchEnd = () => setHovered(false);

  return (
    <div
      className="bucket relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart} // 터치 시작 시 hover 활성화
      onTouchEnd={handleTouchEnd} // 터치 종료 시 hover 비활성화
    >
      <motion.div
        className={`flex items-center justify-center text-center transition-all duration-300 ease-in-out ${
          isHovered ? "bg-white rounded-lg shadow-xl" : "bg-black rounded-full"
        }`}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: isHovered ? "12px" : "50%",
        }}
        initial={{ borderRadius: "50%", scale: 1 }}
        animate={{ borderRadius: isHovered ? "12px" : "50%", scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="content flex flex-col items-center justify-center p-4">
          <motion.p
            className={`text-lg sm:text-2xl font-bold transition-colors duration-300 ${
              isHovered ? "text-black" : "text-white"
            }`}
          >
            {label}
          </motion.p>
          {isHovered && <SkillsList skills={skills} />}
        </div>
      </motion.div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const mainSkills = [
    { src: "/images/icons/Skills/html_color.svg", alt: "HTML", label: "HTML" },
    { src: "/images/icons/Skills/css.svg", alt: "CSS", label: "CSS" },
    {
      src: "/images/icons/Skills/js_color.svg",
      alt: "JavaScript",
      label: "JavaScript",
    },
    {
      src: "/images/icons/Skills/ts.svg",
      alt: "TypeScript",
      label: "TypeScript",
    },
    { src: "/images/icons/Skills/react2.svg", alt: "React", label: "React" },
    {
      src: "/images/icons/Skills/rn.svg",
      alt: "React Native",
      label: "React Native",
    },
  ];

  const subSkills = [
    {
      src: "/images/icons/Skills/zustand.svg",
      alt: "Zustand",
      label: "Zustand",
    },
    {
      src: "/images/icons/Skills/firebase.svg",
      alt: "Firebase",
      label: "Firebase",
    },
    {
      src: "/images/icons/Skills/supabase.svg",
      alt: "Supabase",
      label: "Supabase",
    },
    {
      src: "/images/icons/Skills/bootstrap.svg",
      alt: "Bootstrap",
      label: "Bootstrap",
    },
    { src: "/images/icons/Skills/c++.svg", alt: "C++", label: "C++" },
    { src: "/images/icons/Skills/python.svg", alt: "Python", label: "Python" },
  ];

  const studyingSkills = [
    {
      src: "/images/icons/Skills/nextjs.svg",
      alt: "Next.js",
      label: "Next.js",
    },
  ];

  const cooperationSkills = [
    { src: "/images/icons/Skills/github.svg", alt: "Github", label: "Github" },
    { src: "/images/icons/Skills/figma.svg", alt: "Figma", label: "Figma" },
    {
      src: "/images/icons/Skills/discord.svg",
      alt: "Discord",
      label: "Discord",
    },
    { src: "/images/icons/Skills/notion.svg", alt: "Notion", label: "Notion" },
  ];
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
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white p-6 md:p-10"
    >
      {/* 애니메이션 컴포넌트 */}
      {!isMobile && (
        <div className="absolute top-12 right-12 hidden lg:block">
          <AnimationComponent />
        </div>
      )}
      <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-black mb-12 sm:mb-20">
        Skills
      </h2>
      <div className="bucket-container flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
        <Bucket id="main-skills" label="Main Skills" skills={mainSkills} />
        <Bucket id="sub-skills" label="Sub Skills" skills={subSkills} />
        <Bucket id="studying" label="Studying" skills={studyingSkills} />
        <Bucket
          id="cooperation"
          label="Cooperation"
          skills={cooperationSkills}
        />
      </div>
      <ScrollArrow scrollToId="projectspage" />
    </section>
  );
};

export default SkillsSection;
