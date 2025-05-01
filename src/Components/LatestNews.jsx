import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center  gap-3 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex gap-5">
          <p className="font-bold text-red-300">
            {" "}
            Jaishankar discusses Pahalgam terror attack with Marco Rubio, calls
            for justice.
          </p>
          <p className="font-bold text-blue-300">
            Snake halts Japanese bullet trains after wrapping around power line
          </p>
          <p className="font-bold text-pink-600">
            National Security Adviser Mike Waltz to leave role, US media reports{" "}
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
