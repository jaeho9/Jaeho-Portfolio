import React from "react";
import "../styles/SkillCube.css"; // CSS 파일 연결

const SkillCube: React.FC = () => {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face cube-face-front">HTML & CSS</div>
        <div className="cube-face cube-face-back">JavaScript</div>
        <div className="cube-face cube-face-left">TypeScript</div>
        <div className="cube-face cube-face-right">React</div>
        <div className="cube-face cube-face-top">Next.js</div>
        <div className="cube-face cube-face-bottom">Node.js</div>
      </div>
    </div>
  );
};

export default SkillCube;
