import React, { useState } from "react";
import { Link } from "react-scroll"; // react-scroll에서 Link 가져옴

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 p-4 z-50 bg-white bg-opacity-80 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        {" "}
        {/* relative 추가 */}
        {/* 로고 */}
        <div className="text-2xl font-bold text-black">Jaeho Portfolio</div>
        {/* 햄버거 버튼 (모바일에서만 표시) */}
        <button
          className="block lg:hidden text-black text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        {/* 네비게이션 메뉴 */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 absolute lg:static right-0 w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none z-10 top-full`}
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="block lg:inline-block text-lg font-semibold text-black transition hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block lg:inline-block text-lg font-semibold text-black transition hover:text-blue-500"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block lg:inline-block text-lg font-semibold text-black transition hover:text-blue-500"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block lg:inline-block text-lg font-semibold text-black transition hover:text-blue-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
