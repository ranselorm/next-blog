import Image from "next/image";
import Link from "next/link";

const CardList = () => {
  return (
    <div className="flex gap-6 items-center w-full">
      <div className="relative w-[150px] h-[130px] rounded-lg overflow-hidden">
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className="flex-1 flex flex-col gap-y-2">
        <span className="lg:text-[14px] text-[10px] bg-gray-200 w-max px-4 py-1 rounded-xl">
          CULTURE
        </span>

        <Link href="#">
          <h2 className="font-semibold text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor
          </h2>
        </Link>
        <div className="flex justify-between">
          <span className="text-[14px]">11-02-2032</span>
          <span className="text-xs">Comments</span>
        </div>
      </div>
    </div>
  );
};

export default CardList;
