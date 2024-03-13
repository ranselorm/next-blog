"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FaImage } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  function toggleHandler() {
    setToggle((prevState) => !prevState);
  }

  return (
    <div className="flex items-center justify-center">
      <div>
        <input type="text" placeholder="Title" />
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
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Write post here..."
          className="w-full bg-red-300"
        />
      </div>
      <button className="absolute top-[40px] right-20">Publish</button>
    </div>
  );
};

export default Write;
