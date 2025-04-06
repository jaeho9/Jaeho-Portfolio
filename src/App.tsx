import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { NavbarProvider } from "./context/NavbarContext";
import ScrollProgressBar from "./components/ScrollProgressBar";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles/styles.css";
import Footer from "./pages/Footer";
import ResponsiveMessage from "./pages/ResponsiveMessage";

const App = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하면 모바일로 간주
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 창 크기 바뀔 때 감지

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavbarProvider>
      <ParallaxProvider>
        {/* {isSidebarOpen && <Sidebar />}
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button> */}
        {/* <ResponsiveMessage /> */}
        <Navbar />
        <ScrollProgressBar />
        <div>
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
          <Footer />
        </div>
        <SocialLinks />
        {!isMobile && (
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
        )}
      </ParallaxProvider>
    </NavbarProvider>
  );
};

export default App;
