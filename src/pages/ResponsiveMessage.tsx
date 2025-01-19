import React, { useState, useEffect } from "react";

const ResponsiveMessage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 화면 크기 변경 시 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px 미만일 때 모바일로 간주
    };

    // 초기 화면 크기 설정
    handleResize();

    // 화면 크기 변화 감지
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 모바일 화면일 때만 메시지 표시
  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-white text-4xl font-bold text-center p-6">
        죄송합니다, 현재 반응형 수정 중입니다.
      </div>
    </div>
  );
};

export default ResponsiveMessage;
