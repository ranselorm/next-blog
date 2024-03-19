"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineDateRange, MdOutlineRemoveRedEye } from "react-icons/md";
import { DialogUsageExample } from "../../components/Tabs";

const SingleBlogPost = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  useEffect(() => {
    const currentTime = new Date().getHours();

    let greeting;
    if (currentTime < 12) greeting = "Good Morning";
    else if (currentTime < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    setTimeOfDay(greeting);
  }, []);

  return (
    <section className="flex items-center justify-between font-primary">
      <main className="w-full flex justify-between ">
        <article className="bg-white lg:w-8/12 md:p-6 px-3 pt-6 rounded">
          <span className="bg-blue-500 px-2 py-1 uppercase text-[14px] font-semibold rounded text-white">
            Sports
          </span>
          <h3 className="text-2xl font-semibold capitalize my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            unde magnam facere recusandae a quos aliquid?
          </h3>
          <div className="flex gap-x-2 text-[12px] md:text-sm items-center">
            <p className="text-gray-500">
              By <span className="text-black">Jenny Frank</span>
            </p>
            <div className="bg-gray-400 w-[1px] h-4" />
            <p className="flex items-center gap-x-1 text-gray-500">
              <MdOutlineDateRange /> <span>12 August 2024</span>
            </p>
            <div className="bg-gray-400 w-[1px] h-4" />
            <p className="flex items-center gap-x-1 text-gray-500">
              <MdOutlineRemoveRedEye /> <span>2 mins read</span>
            </p>
          </div>
          <div className="relative h-[200px] lg:h-[450px] w-full my-6 rounded overflow-hidden">
            <Image
              src="/images/lewy.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              qui beatae ipsum ipsam sint? Molestiae illum similique veniam iste
              eaque, sapiente nostrum? Qui, consequuntur repellat? Voluptatum
              fugiat doloribus sit numquam.
            </p>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              qui beatae ipsum ipsam sint? Molestiae illum similique veniam iste
              eaque, sapiente nostrum? Qui, consequuntur repellat? Voluptatum
              fugiat doloribus sit numquam.
            </p>
          </section>
        </article>
        <div className="w-3/12 border-2 hidden lg:block">
          <DialogUsageExample />
        </div>
      </main>
    </section>
  );
};

export default SingleBlogPost;
