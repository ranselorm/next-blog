import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import { FaReadme } from "react-icons/fa";

const data = [
  {
    coverImg: "/images/nana.jpeg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "2 mins",
  },
  {
    coverImg: "/images/lewy.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "1 mins",
  },
  {
    coverImg: "/images/stone.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "3 mins",
  },
  {
    coverImg: "/images/zuck.jpeg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "1 mins",
  },
  {
    coverImg: "/images/lewy.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "1 mins",
  },
  {
    coverImg: "/images/nana.jpeg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, odio.",
    date: "June 17, 2024",
    readTime: "2 mins",
  },
];

const Politics = () => {
  return (
    <section className="font-primary">
      <div>
        <div className="border-b-2 border-black mb-6">
          <h3 className="uppercase bg-black w-max py-1 px-2 text-white font-semibold text-sm rounded-t">
            Trending
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="h-[240px] lg:h-[275px] w-full lg:w-4/12 relative rounded-lg md:rounded overflow-hidden">
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
          <div className="flex flex-wrap gap-2 w-full lg:w-10/12 my-5 lg:my-0">
            {data.map((item) => (
              <div className="flex gap-x-3 md:gap-x-0 h-max py-2 cursor-pointer group">
                <div className="relative w-[80px] h-[50px] rounded overflow-hidden">
                  <Image
                    src={item.coverImg}
                    alt=""
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <article className="flex">
                  <div className="h-4 w-[3px] bg-black mx-2 group-hover:h-10 transition-all rounded hidden md:flex" />
                  <div>
                    <h2 className="text-[16px] lg:text-[14px] w-full lg:w-[230px] leading-[18px]">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-x-4 text-[11px] mt-1">
                      <div className="flex items-center gap-x-1 text-gray-500">
                        <MdOutlineDateRange />
                        <span className="">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-x-1 text-gray-500">
                        <FaReadme />
                        <span className="">{item.readTime} read</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Politics;
