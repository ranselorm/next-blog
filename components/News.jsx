import React from "react";
import Politics from "./posts/Politics";
import Trending from "./posts/Trending";
import Sports from "./posts/Sports";

const News = () => {
  return (
    <>
      <div className="w-full lg:w-10/12">
        <Politics />
        {/* <Sports /> */}
        {/* <Trending /> */}
      </div>
    </>
  );
};

export default News;
