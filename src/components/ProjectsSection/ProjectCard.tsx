import React, { useEffect, useState } from "react";
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
    githubLink:
      "https://github.com/jaeho9/StudyBuddy-mobile?tab=readme-ov-file",
    features: [
      "🧭 온보딩 & 인증 - 앱 소개 및 기능 요약 제공",
      "🧭 온보딩 & 인증 - 이메일 기반 회원가입 및 로그인",
      "🧭 온보딩 & 인증 - 이메일 / 닉네임 중복 확인 기능",

      "🏠 홈 (Home) - 전체/가입 커뮤니티 게시물 확인",
      "🏠 홈 (Home) - 커뮤니티 게시물 카테고리 분류",
      "🏠 홈 (Home) - 게시물 검색, 작성, 알림 기능 제공",

      "👥 커뮤니티 (Communities) - 전체 커뮤니티 탐색 및 검색",
      "👥 커뮤니티 (Communities) - 커뮤니티 가입, 게시물 확인, 새 커뮤니티 생성",
      "👥 커뮤니티 (Communities) - 커뮤니티별 규칙, 회원, 게시글 확인",

      "📁 아카이브 (Archive) - 북마크한 게시물 모아보기",
      "📁 아카이브 (Archive) - 댓글/게시물 수정 및 삭제 가능",

      "🙋‍♂️ 마이페이지 (MyPage) - 내가 쓴 글, 좋아요, 댓글 단 게시물 확인",
      "🙋‍♂️ 마이페이지 (MyPage) - 게시물 수정 및 삭제 기능",

      "👤 프로필 (Profile) - 닉네임, 자기소개, 생년월일, 링크 수정",
      "👤 프로필 (Profile) - 프로필 사진 수정 기능 (라이브러리 연동)",
    ],
  },
  {
    id: 3,
    title: "Jaeho Portfolio",
    description:
      "개인 포트폴리오 웹사이트입니다.React, TypeScript, Tailwind CSS를 활용하여 제작되었으며, SPA 방식으로 구성되었습니다.",
    image: "../images/JHPF.png",
    techStack: [<FaReact />, <SiTypescript />],
    githubLink: "https://github.com/jaeho9/Jaeho-Portfolio",
    ProjectLink: "https://jaeho-portfolio.vercel.app/",
    features: [
      "✅ React + TypeScript 기반 개발",
      "✅ Framer Motion과 Parallax 효과를 활용한 동적 UI",
      "✅ 반응형 레이아웃 지원 (PC, 태블릿, 모바일 최적화)",
      "✅ 단일 페이지 애플리케이션(SPA)으로 부드러운 전환 효과",
      "✅ Tailwind CSS를 활용한 스타일링",
    ],
  },
  {
    id: 1,
    title: "작업중..",
    description: "~ing",
    image: "project4.jpg",
    techStack: [<FaReact />, <FaJsSquare />],
  },
  {
    id: 2,
    title: "StudyBuddy (web)",
    description:
      "StudyBuddy 는 온라인에서 동일한 시험 또는 분야를 학습하는 사람들끼리 정보와 자료를 공유하는 공간입니다.",
    image: "../images/StudyBuddy.png",
    techStack: [<FaReact />, <RiSupabaseFill />, <SiReactquery />],
    githubLink: "https://github.com/jihyezi/StudyBuddy",
    blogLink:
      "https://velog.io/@l2281/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-StudyBuddy",
    ProjectLink: "https://study-buddy-black.vercel.app/",
    features: [
      "정보 공유 및 자료 업로드",
      "관심사 기반 커뮤니티 생성 및 참여",
      "게시물 북마크 기능",
      "검색 및 검색 기록 관리",
      "인기 게시글 및 스터디 추천",
      "온라인/오프라인 스터디 모집 및 관리",
      "알림 및 메시지 기능",
      "사용자 프로필 관리",
      "게시글 및 커뮤니티 생성",
      "회원가입, 로그인/로그아웃",
    ],
    troubleshooting: [
      {
        title: "Home 컴포넌트 리렌더링 이슈",
        link: "https://github.com/jihyezi/StudyBuddy/wiki/README-6.-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Home-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%9D%B4%EC%8A%88",
      },
      {
        title: "React Query 성능 문제 개선",
        link: "https://github.com/jihyezi/StudyBuddy/wiki/README-6.-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_React-Query%EB%A5%BC-%ED%86%B5%ED%95%9C-%EC%84%B1%EB%8A%A5-%EB%AC%B8%EC%A0%9C-%EA%B0%9C%EC%84%A0",
      },
      {
        title: "배포 후 네이버 API 통신 문제",
        link: "https://github.com/jihyezi/StudyBuddy/wiki/README-6.-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EB%84%A4%EC%9D%B4%EB%B2%84-API-%ED%86%B5%EC%8B%A0-%EB%AC%B8%EC%A0%9C",
      },
      {
        title: "좋아요 기능 오류",
        link: "https://github.com/jihyezi/StudyBuddy/wiki/README-6.-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%9D%B4%EC%8A%88",
      },
      {
        title: "Supabase 트리거 이슈",
        link: "https://github.com/jihyezi/StudyBuddy/wiki/README-6.-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85_Supabase-%ED%8A%B8%EB%A6%AC%EA%B1%B0-%EC%9D%B4%EC%8A%88",
      },
    ],
  },
];

const ProjectCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 기본적으로 3개 표시
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentIndex(newIndex);
    },
    nextArrow: <div className="slick-next " />,
    prevArrow: <div className="slick-prev" />,
    responsive: [
      {
        breakpoint: 768, // 모바일 화면 (768px 이하)
        settings: {
          slidesToShow: 1, // 모바일에서는 한 개만 표시
          centerMode: false, // 카드 크기 유지
          arrows: false, // 모바일에서 화살표 숨기기
        },
      },
    ],
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
      {!isMobile && (
        <div className="absolute top-12 right-12">
          <AnimationComponent />
        </div>
      )}
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
