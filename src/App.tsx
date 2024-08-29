// App.tsx

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    // 첫 로드 이후에는 애니메이션 활성화
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, []);

  return (
    <div>
      <nav className="flex justify-around p-4 bg-gray-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <AnimatePresence>
        <motion.div
          key={location.key}
          initial={isFirstLoad ? {} : { x: "100%" }} // 첫 로드 시 애니메이션 비활성화
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }} // 부드러운 슬라이드 전환
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {/* 오른쪽 하단에 고정된 소셜 링크 버튼 */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
        <a
          href="https://github.com/jaeho9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <img
            src="/images/icons/github.svg" // GitHub 아이콘 경로
            alt="GitHub"
            className="w-12 h-12"
          />
        </a>
        <a
          href="https://velog.io/@l2281/posts" // 블로그 URL로 교체
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition"
        >
          <img
            src="/images/icons/velog.svg" // 블로그 아이콘 경로
            alt="Blog"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
