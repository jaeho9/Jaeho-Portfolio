import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion"; // 애니메이션 추가

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-50 bg-white bg-opacity-80 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* 로고 */}
        <div className="text-2xl font-bold text-black">Jaeho Portfolio</div>

        {/* 햄버거 버튼 (모바일 전용) */}
        <button
          className="block lg:hidden text-black text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* 네비게이션 메뉴 */}
        <div className="hidden lg:flex space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-lg font-semibold text-black transition hover:text-blue-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* 모바일 메뉴 (애니메이션 추가) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4"
            >
              {["home", "about", "projects", "contact"].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold text-black transition hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
