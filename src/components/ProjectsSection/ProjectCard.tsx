import React, { useState } from "react";
import Slider from "react-slick";
import ScrollArrow from "../ScrollArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { RiSupabaseFill, RiFirebaseFill } from "react-icons/ri";
import { SiReactquery, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import "../../styles/ProjectCard.css";
import Modal from "./Modal";
import AnimationComponent from "../LottieAnimation/ProjectAnimation";

const projects = [
  {
    id: 2,
    title: "StudyBuddy (mobile)",
    description:
      "StudyBuddy 는 온라인에서 동일한 시험 또는 분야를 학습하는 사람들끼리 정보와 자료를 공유하는 공간입니다.",
    image: "../images/StudyBuddy.png",
    techStack: [<TbBrandReactNative />, <RiFirebaseFill />],
    githubLink: "https://github.com/jaeho9/StudyBuddy-mobile",
  },
  {
    id: 3,
    title: "Jaeho Portfolio",
    description: "Jaeho Portfolio 는 개인포토폴리오 사이트 입니다.",
    image: "../images/JHPF.png",
    techStack: [<FaReact />, <SiTypescript />],
    githubLink: "https://github.com/jaeho9/my-portfolio",
  },
  {
    id: 1,
    title: "작업중..",
    description: "~ing",
    image: "project4.jpg",
    techStack: [<FaReact />, <FaJsSquare />],
    // githubLink: "https://github.com/username/project4",
  },
  {
    id: 1,
    title: "StudyBuddy (Web)",
    description:
      "StudyBuddy는 온라인에서 동일한 시험 또는 분야를 학습하는 사람들끼리 정보와 자료를 공유하는 공간입니다.",
    image: "../images/StudyBuddy.png",
    techStack: [
      <FaReact />,
      <FaJsSquare />,
      <RiSupabaseFill />,
      <SiReactquery />,
    ],
    githubLink: "https://github.com/jihyezi/StudyBuddy",
    blogLink:
      "https://velog.io/@l2281/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-StudyBuddy",
    ProjectLink: "https://study-buddy-black.vercel.app/",
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
    dots: true, // dots 제거
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    nextArrow: <div className="slick-next " />,
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
                  {/* <p className="text-gray-600">{project.description}</p> */}
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
