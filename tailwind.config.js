module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 모든 JS/TSX 파일들을 처리하도록 설정
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px rgba(0, 0, 0, 0.5)", // 예시: 더 진한 그림자
      },
    },
  },
  plugins: [],
};
