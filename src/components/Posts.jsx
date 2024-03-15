import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { FaReadme } from "react-icons/fa";

const Posts = () => {
  return (
    <section className="w-full md:w-10/12 font-primary">
      <div>
        <h3>Latest Posts</h3>
        <div className="flex gap-2">
          <div className="h-[290px] w-[340px] relative rounded overflow-hidden">
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
          <div className="flex gap-4">
            <div className="flex items-start gap-x-3">
              <div className="relative w-[60px] h-[50px] rounded overflow-hidden">
                <Image
                  src="/images/nana.jpeg"
                  alt=""
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <article className="">
                <h2 className="text-[14px] w-[250px] -mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur, odio.
                </h2>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2 text-gray-400">
                    <MdOutlineDateRange />
                    <span className="text-sm">June 17, 2024</span>
                  </div>
                  <div className="flex items-center gap-x-2 text-gray-400">
                    <FaReadme />
                    <span className="text-sm">2 mins read</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
