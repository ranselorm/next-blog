import React from "react";
import Image from "next/image";

const Featured = () => {
  return (
    <section className="mt-[30px]">
      <main className="flex gap-3 h-[320px]">
        <div className="w-1/2 relative rounded overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src="/images/nana.jpeg"
              alt=""
              fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute bottom-2 px-4 text-white">
            <span className="bg-blue-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
              Politics
            </span>
            <article className="">
              <h3 className="text-xl leading-[25px] my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                error necessitatibus consequatur.
              </h3>
              <span className="text-sm">15 March, 2024</span>
            </article>
          </div>
        </div>
        {/* </div> */}
        <div className="w-1/2 flex flex-col gap-y-3">
          <div className="h-1/2 relative rounded overflow-hidden">
            <div className="w-full h-full relative">
              <Image
                src="/images/zuck.jpeg"
                alt=""
                fill
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute bottom-2 px-4 text-white">
              <span className="bg-teal-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                Technology
              </span>
              <article className="">
                <h3 className="text-lg leading-[20px] my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
                <span className="text-sm">15 March, 2024</span>
              </article>
            </div>
          </div>
          <div className="h-1/2 flex gap-x-3">
            <div className="h-full w-1/2 relative rounded overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/images/lewy.jpg"
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute bottom-2 px-4 text-white">
                <span className="bg-black text-white px-2 py-1 uppercase text-[10px] font-semibold rounded">
                  Sports
                </span>
                <article className="">
                  <h3 className="text-lg leading-[20px] my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <span className="text-sm">15 March, 2024</span>
                </article>
              </div>
            </div>
            <div className="relative h-full w-1/2 rounded overflow-hidden">
              <div className="w-full h-full relative">
                <Image
                  src="/images/stone.jpg"
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute bottom-2 px-4 text-white">
                <span className="bg-red-500 px-2 py-1 uppercase text-[10px] font-semibold rounded">
                  Entertainment
                </span>
                <article className="">
                  <h3 className="text-lg leading-[20px] my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </h3>
                  <span className="text-sm">15 March, 2024</span>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Featured;
