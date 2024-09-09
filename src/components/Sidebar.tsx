import React, { useState } from "react";
import { animate } from "framer-motion";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      if (isOpen) {
        // 사이드바를 닫기 (왼쪽으로 이동)
        animate(sidebar, { left: "-250px" }, { duration: 0.5 });
      } else {
        // 사이드바를 열기 (화면 안으로 이동)
        animate(sidebar, { left: "0px" }, { duration: 0.5 });
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div id="sidebar" className="sidebar">
        <ul>
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
          <li>
            <a href="#section4">Section 4</a>
          </li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    </>
  );
};

export default Sidebar;
