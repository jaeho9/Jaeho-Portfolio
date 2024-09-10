import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { NavbarProvider } from "./context/NavbarContext";
import ScrollProgressBar from "./components/ScrollProgressBar";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor"; // react-animated-cursor 임포트
import Sidebar from "./components/Sidebar";
import "./styles/sidebar.css"; // 기존 CSS 파일을 다시 불러옵니다.

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarProvider>
      <Navbar />
      <ScrollProgressBar />
      <button onClick={toggleSidebar} className="sidebar-toggle text-gray-500">
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
      <div>
        {/* 각 섹션에 id를 주어 네비게이션과 연결 */}
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <SocialLinks />

      <AnimatedCursor
        color="0, 0, 0"
        innerScale={1.2}
        innerSize={20}
        outerAlpha={0.6}
        outerScale={1.5}
        outerSize={30}
        showSystemCursor={false}
        trailingSpeed={10}
        clickables={["a", "button", ".interactive"]}
      />
      <Sidebar isOpen={isOpen} />
    </NavbarProvider>
  );
};

export default App;
