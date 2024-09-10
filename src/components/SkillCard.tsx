import React, { useState } from "react";
import "../styles/SkillCard.css";

interface SkillCardProps {
  skill: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`skill-card ${flipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card-inner">
        {/* 앞면 */}
        <div className="skill-card-front">
          <h2>{skill}</h2>
        </div>
        {/* 뒷면 */}
        <div className="skill-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
