import React from "react";
import { Link } from "react-scroll"; // react-scroll에서 Link 가져옴
import { useNavbarContext } from "../context/NavbarContext";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4  z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* 왼쪽 로고 */}
        <div className={`text-2xl font-bold black`}>Jaeho Portfolio</div>

        {/* 네비게이션 링크들 */}
        <div className="space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`text-lg font-semibold transition black`}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`text-lg font-semibold transition black`}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={`text-lg font-semibold transition black`}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`text-lg font-semibold transition black`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
