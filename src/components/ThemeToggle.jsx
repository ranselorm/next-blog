"use client";
import { useContext } from "react";
import Image from "next/image";
// import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className="w-[40px] h-[20px] rounded-[50px] cursor-pointer bg-black flex items-center justify-between relative">
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div className="w-[20px] h-[20px] bg-white rounded-full absolute left-[1px]" />
      <Image src="/sun.png" alt="moon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
