// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { NavbarProvider } from "./context/NavbarContext";
import ScrollProgressBar from "./components/ScrollProgressBar";

const App = () => {
  return (
    <Router>
      <NavbarProvider>
        {/* <Sidebar /> */}
        <Navbar />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <SocialLinks /> 소셜 링크 컴포넌트는 항상 보이도록 */}
      </NavbarProvider>
    </Router>
  );
};

export default App;
