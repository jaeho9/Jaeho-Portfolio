// src/components/Sidebar.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import "../styles/sidebar.css"; // 스타일링을 위한 CSS 파일

const Sidebar = () => {
  return (
    <motion.nav
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <ul>
        <motion.li whileHover={{ scale: 1.1 }}>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Sidebar;
