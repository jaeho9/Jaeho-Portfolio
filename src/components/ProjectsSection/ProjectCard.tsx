import React, { useState } from "react";
import Slider from "react-slick";
import ScrollArrow from "../ScrollArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import "../../styles/ProjectCard.css";
import Modal from "./Modal";
import AnimationComponent from "../LottieAnimation/ProjectAnimation";

const projects = [
  {
    id: 1,
    title: "StudyBuddy",
    description: "Description for Project 1",
    image: "../images/StudyBuddy.png",
    techStack: [
      <FaReact />,
      <FaJsSquare />,
      <RiSupabaseFill />,
      <SiReactquery />,
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    image: "project2.jpg",
    techStack: [<FaReact />, <FaJsSquare />],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
    image: "project3.jpg",
    techStack: [<FaReact />, <FaJsSquare />],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description for Project 4",
    image: "project4.jpg",
    techStack: [<FaReact />, <FaJsSquare />],
  },
];

const ProjectCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const settings = {
    dots: false, // dots 제거
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    nextArrow: <div className="slick-next" />,
    prevArrow: <div className="slick-prev" />,
  };

  return (
    <section
      id="projectcard"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-8"
    >
      <h2 className="text-3xl md:text-6xl font-bold text-black mb-20">
        My Projects
      </h2>
      {/* 애니메이션 컴포넌트 */}
      <div className="absolute top-12 right-12">
        <AnimationComponent />
      </div>
      <div className="relative w-full max-w-4xl">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div
                className="bg-white border-[3px] border-black shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer"
                onClick={() => handleCardClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover border-b-[3px] border-black"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {project.techStack.map((icon, index) => (
                      <span key={index} className="text-2xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ScrollArrow scrollToId="contact" />
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default ProjectCard;
