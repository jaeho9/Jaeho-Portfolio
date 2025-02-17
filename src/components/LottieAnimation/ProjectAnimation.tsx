import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie/Project_Lottie.json";

const AnimationComponent: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <Lottie
        animationData={loadingLottie}
        loop={true}
        autoplay={true}
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
      />
    </div>
  );
};

export default AnimationComponent;
