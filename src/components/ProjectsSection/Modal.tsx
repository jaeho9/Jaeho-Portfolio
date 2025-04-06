import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* 소개 */}
        <section className="mb-4">
          <h3 className="font-semibold text-lg mb-2">📌 프로젝트 소개</h3>
          <p>{project.description}</p>
        </section>

        {/* 주요 기능 */}
        {project.features && (
          <section className="mb-4">
            <h3 className="font-semibold text-lg mb-2">✨ 주요 기능</h3>
            <ul className="list-disc list-inside space-y-1 white-space-pre-wrap">
              {project.features.map((feature: string, i: number) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 트러블슈팅 */}
        {project.troubleshooting && (
          <section className="mb-4">
            <h3 className="font-semibold text-lg mb-2">🛠️ 트러블슈팅</h3>
            <ul className="list-disc list-inside space-y-1">
              {project.troubleshooting.map(
                (issue: { title: string; link: string }, i: number) => (
                  <li key={i}>
                    <a
                      href={issue.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {issue.title}
                    </a>
                  </li>
                )
              )}
            </ul>
          </section>
        )}

        {/* 링크 */}
        <section className="mb-4">
          <h3 className="font-semibold text-lg mb-2">
            🔗 더 자세한 내용이 궁금하시다면, 아래 관련 링크를 참고해 주세요.
          </h3>
          <div className="space-x-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                GitHub
              </a>
            )}
            {project.blogLink && (
              <a
                href={project.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Blog
              </a>
            )}
            {project.ProjectLink && (
              <a
                href={project.ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Live Site
              </a>
            )}
          </div>
        </section>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
