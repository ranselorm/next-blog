import Image from "next/image";
import Link from "next/link";

const CardList = () => {
  return (
    <div className="flex gap-6 items-center w-full">
      <div className="relative w-[150px] h-[150px] rounded-2xl overflow-hidden">
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className="flex-1 flex flex-col gap-y-2">
        <span className="text-[14px] bg-gray-200 w-max px-4 py-1 rounded-xl">
          CULTURE
        </span>

        <Link href="#">
          <h2 className="font-semibold text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor
          </h2>
        </Link>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, vel
          debitis, iste laborum consequatur, molestias officia ullam dolores
          culpa dicta pariatur assumenda ut. Consectetur amet libero corrupti
          asperiores quos quidem!
        </p> */}
        <span className="text-[14px]">11-02-2032</span>
      </div>
    </div>
  );
};

export default CardList;
