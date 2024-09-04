// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useNavbarContext } from "../context/NavbarContext";

const Navbar = () => {
  const { color, logoColor } = useNavbarContext();

  return (
    <nav className="fixed top-0 left-0 right-0 p-4  z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div className={`text-2xl font-bold ${logoColor}`}>Jaeho Portfolio</div>

        {/* 네비게이션 링크들 */}
        <div className="space-x-4">
          <Link to="/" className={`text-lg font-semibold transition ${color}`}>
            Home
          </Link>
          <Link
            to="/about"
            className={`text-lg font-semibold transition ${color}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`text-lg font-semibold transition ${color}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-semibold transition ${color}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
