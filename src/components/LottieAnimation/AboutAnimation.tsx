import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie/Animation.json";

const AnimationComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-8 w-full">
      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <Lottie animationData={loadingLottie} loop={true} autoplay={true} />
      </div>
    </div>
  );
};

export default AnimationComponent;
