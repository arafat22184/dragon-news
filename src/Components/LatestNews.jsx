import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center  gap-3 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-bold">
          1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        </p>
        <p className="font-bold">
          2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        </p>
        <p className="font-bold">
          3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
