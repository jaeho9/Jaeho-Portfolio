module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 모든 JS/TSX 파일들을 처리하도록 설정
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
