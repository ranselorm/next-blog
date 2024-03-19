import React from "react";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { FaReadme } from "react-icons/fa";

const arr = [1, 2, 4];

const Sidebar = () => {
  return (
    <section className="w-3/12 font-primary hidden lg:block">
      <div className="mb-6">
        <h3 className="font-semibold uppercase bg-black text-white max-w-max py-1 px-2 text-sm rounded">
          Popular posts
        </h3>
      </div>
      <div className="">
        {arr.map((i, index) => (
          <div className="flex gap-x-3 md:gap-x-0 h-max py-2 my-2 border-b cursor-pointer group">
            {/* <div className="relative w-[60px] h-[50px] rounded overflow-hidden">
              <Image
                src="/images/nana.jpeg"
                alt=""
                fill
                className="object-cover w-full h-full"
              />
            </div> */}
            <article className="flex">
              <div className="h-4 w-[3px] bg-blue-500 mx-2 group-hover:h-10 transition-all rounded hidden md:flex" />
              <div>
                <h2 className="text-[14px] w-[250px] leading-[18px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, odio.
                </h2>
                <div className="flex items-center gap-x-4 text-[10px]">
                  <div className="flex items-center gap-x-1 text-gray-400">
                    <MdOutlineDateRange />
                    <span className="">June 17, 2024</span>
                  </div>
                  <div className="flex items-center gap-x-1 text-gray-400">
                    <FaReadme />
                    <span className="">2 mins read</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
