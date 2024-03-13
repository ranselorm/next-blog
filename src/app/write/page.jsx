"use client";
import { useState } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";

const Write = () => {
  const [toggle, setToggle] = useState(true);

  function toggleHandler() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div className="bg-yellow-300">
      <input type="text" placeholder="Title" />
      {/* editor */}

      <div className="flex items-center gap-x-10 my-7">
        <button
          className="border border-black p-1 rounded-full"
          onClick={toggleHandler}
        >
          {toggle ? (
            <LuMinus className="text-xl" />
          ) : (
            <GoPlus className="text-xl" />
          )}
        </button>
        {toggle && (
          <div className="flex gap-x-3">
            <button className="border border-black p-1 rounded-full">
              <FaImage className="text-xl" />
            </button>
            <button className="border border-black p-1 rounded-full">
              <FaImage className="text-xl" />
            </button>
            <button className="border border-black p-1 rounded-full">
              <FaImage className="text-xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Write;
