import { motion } from "framer-motion";

const WaveLine = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-full h-48 top-1/2 transform -translate-y-1/2 "
      viewBox="0 0 100 20"
    >
      <motion.path
        fill="transparent"
        stroke="black"
        strokeWidth="1"
        animate={{
          d: [
            "M 0 5 Q 25 0, 50 5 T 100 5", // 첫 번째 곡선
            "M 0 5 Q 25 10, 50 5 T 100 5", // 두 번째 곡선
            "M 0 5 Q 25 0, 50 5 T 100 5", // 다시 첫 번째 곡선
          ],
        }}
        transition={{
          duration: 2, // 애니메이션 시간
          repeat: Infinity, // 무한 반복
          repeatType: "loop", // 반복 루프
          ease: "easeInOut", // 부드러운 애니메이션
        }}
      />
    </motion.svg>
  );
};

export default WaveLine;
