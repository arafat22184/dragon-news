import React from "react";
import swimingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
import bgPng from "../../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="p-3 mb-5 bg-base-300 rounded">
        <h2 className="font-bold mb-5">Qzone</h2>
        <div className="space-y-5 grid justify-center">
          <img src={swimingImage} alt="swiming Image" />
          <img src={classImage} alt="class image" />
          <img src={playImage} alt="play Image" />
        </div>
      </div>
      <img className="w-full" src={bgPng} alt="bgPng" />
    </div>
  );
};

export default Qzone;
