import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  id: string;
  subtitle: string;
  title: string;
  onClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, subtitle, title, onClick }) => {
  return (
    <motion.div
      layoutId={id}
      onClick={() => onClick(id)}
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h5 className="text-gray-500">{subtitle}</motion.h5>
      <motion.h2 className="text-xl font-bold">{title}</motion.h2>
    </motion.div>
  );
};

export default Card;
