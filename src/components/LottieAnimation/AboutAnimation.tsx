import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie/Animation.json";

const AnimationComponent: React.FC = () => {
  const options = {
    animationData: loadingLottie,
    loop: true, // 애니메이션 반복 여부
    autoplay: true, // 애니메이션 자동 시작 여부
  };

  return (
    <div className="mt-8 md:w-44 md:h-44 sm:w-40 sm:h-40 xs:w-36 xs:h-36">
      <Lottie animationData={loadingLottie} loop={true} autoplay={true} />
    </div>
  );
};

export default AnimationComponent;
