module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 소스 코드 내의 모든 JS/TSX 파일
    "./public/index.html", // Tailwind가 HTML 파일도 처리하도록 설정
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "480px", // 기본 Tailwind에는 없는 `xs`만 추가
      },
    },
  },
  plugins: [],
};
