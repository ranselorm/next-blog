import React from "react";

const Pagination = () => {
  return (
    <div className="flex gap-[7rem] mt-[50px]">
      <button className="py-1 px-3 bg-red-500 text-white">Previous</button>
      <button className="py-1 px-3 bg-red-500 text-white">Next</button>
      {/* <button>Next</button> */}
    </div>
  );
};

export default Pagination;
