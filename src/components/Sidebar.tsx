// Sidebar.tsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/sidebar.css";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ul>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
        <li>Search</li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;
