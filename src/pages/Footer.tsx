import React from "react";
import { FaGithub, FaEnvelope, FaBlog } from "react-icons/fa"; // 아이콘 사용

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        {/* 왼쪽 섹션 */}
        <div className="flex space-x-6 text-sm md:text-base">
          <p>&copy; 2024 Jaeho's Portfolio. All rights reserved.</p>
          <p className="text-sm md:text-base">
            Animation source:{" "}
            <a
              href="https://lottiefiles.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              LottieFiles.
            </a>
          </p>
          <p className="text-sm md:text-base">
            Icons by :{" "}
            <a
              href="https://icons8.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-400"
            >
              icons8.
            </a>
          </p>
        </div>
        <div className="flex space-x-4">
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

// icons8.com
