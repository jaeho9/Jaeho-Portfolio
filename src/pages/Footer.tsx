import React from "react";
import { FaGithub, FaEnvelope, FaBlog } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-4 md:flex-row md:justify-between">
        {/* 왼쪽 섹션 */}
        <div className="flex flex-col text-center md:text-left space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 text-sm md:text-base">
          <p>&copy; 2024 Jaeho's Portfolio. All rights reserved.</p>
          <p>
            Animation source:{" "}
            <a
              href="https://lottiefiles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              LottieFiles
            </a>
          </p>
          <p>
            Icons by:{" "}
            <a
              href="https://icons8.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              icons8
            </a>
          </p>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:l2281@naver.com"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/jaeho9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://velog.io/@l2281/series"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaBlog size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
