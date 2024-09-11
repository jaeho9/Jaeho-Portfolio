// src/components/TechStack.tsx
import React from "react";
import { motion } from "framer-motion";

const techStack = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

const TechStack = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          className="text-xl font-semibold p-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
