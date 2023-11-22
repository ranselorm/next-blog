import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-[30px]">
      {/* <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eaque
        non saepe corporis molestias
      </h1> */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        <div className="relative h-[300px] lg:w-[400px] w-full">
          <Image src="/p1.jpeg" fill className="object-cover rounded-xl" />
        </div>
        <div className="flex flex-col gap-y-[12px] items-start lg:w-[500px]">
          <h2 className="text-[28px] font-bold leading-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            molestias.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eius eveniet iste expedita nam blanditiis suscipit, iusto voluptates
            maxime quaerat maiores magnam veniam omnis, a, consequuntur
            doloribus reprehenderit inventore. Distinctio.
          </p>
          <button className="py-3 px-4 bg-gray-200 rounded-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
