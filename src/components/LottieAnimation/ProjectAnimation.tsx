import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie/Project_Lottie.json";

const AnimationComponent: React.FC = () => {
  const options = {
    animationData: loadingLottie,
    loop: true, // 애니메이션 반복 여부
    autoplay: true, // 애니메이션 자동 시작 여부
  };

  return (
    <div className="mt-8 w-56 h-56">
      <Lottie animationData={loadingLottie} loop={true} autoplay={true} />
    </div>
  );
};

export default AnimationComponent;
