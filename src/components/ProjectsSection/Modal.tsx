import React from "react";
import { FaTimes, FaGithub, FaBlog, FaLink } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion import

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    blogLink?: string; // blogLink가 선택 사항임을 나타냄
    ProjectLink?: string; // ProjectLink가 선택 사항임을 나타냄
  };
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="text-center">
          {/* 깜빡이는 텍스트 */}
          <motion.p
            className="text-gray-600 mb-4"
            animate={{
              opacity: [1, 0.5], // 깜빡이는 효과
            }}
            transition={{
              duration: 1, // 한 주기가 1초
              repeat: Infinity, // 무한 반복
              repeatType: "reverse", // 깜빡이는 효과가 앞뒤로 반복되도록 설정
            }}
          >
            자세한 내용을 보려면 아이콘을 클릭하세요
          </motion.p>

          <div className="flex justify-center space-x-4">
            {/* GitHub 아이콘은 항상 보이도록 */}
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-600 hover:text-gray-800"
              whileHover={{ scale: 1.2 }} // 아이콘 마우스 오버 시 크기 확대
              transition={{ duration: 0.3 }}
              title="GitHub 바로가기" // 기본 툴팁
            >
              <FaGithub />
            </motion.a>

            {/* Blog 아이콘은 blogLink가 있을 때만 표시 */}
            {project.blogLink && (
              <motion.a
                href={project.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-gray-800"
                whileHover={{ scale: 1.2 }} // 아이콘 마우스 오버 시 크기 확대
                transition={{ duration: 0.3 }}
                title="Blog 바로가기" // 기본 툴팁
              >
                <FaBlog />
              </motion.a>
            )}

            {/* Project 아이콘은 ProjectLink가 있을 때만 표시 */}
            {project.ProjectLink && (
              <motion.a
                href={project.ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-600 hover:text-gray-800"
                whileHover={{ scale: 1.2 }} // 아이콘 마우스 오버 시 크기 확대
                transition={{ duration: 0.3 }}
                title="Project 바로가기" // 기본 툴팁
              >
                <FaLink />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
