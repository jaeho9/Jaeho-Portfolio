// src/components/ScrollArrow.tsx
import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

interface ScrollArrowProps {
  scrollToId: string;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ scrollToId }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
      <p className="text-sm mt-2">Click!</p>
      <ScrollLink
        to={scrollToId}
        smooth={true}
        duration={300}
        className="relative"
      >
        <motion.img
          src="/images/icons/B_arrow.svg"
          alt="Scroll Down"
          className="w-12 h-12"
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </ScrollLink>
    </div>
  );
};

export default ScrollArrow;
