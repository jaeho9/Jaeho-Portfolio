import React, { useState } from "react";
import "../styles/SkillList.css"; // 스타일 파일을 연결합니다.

const skillsData = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "Node.js", level: 70 },
];

const SkillList: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="skill-list">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className={`skill-item ${activeSkill === skill.name ? "active" : ""}`}
          onMouseEnter={() => setActiveSkill(skill.name)}
          onMouseLeave={() => setActiveSkill(null)}
          style={{
            transform: `scale(${activeSkill === skill.name ? 1.2 : 1})`,
            backgroundColor: `rgba(255, 99, 132, ${
              activeSkill === skill.name ? skill.level / 100 : 0.3
            })`,
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillList;
