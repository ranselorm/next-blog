import Link from "next/link";
import CategoryList from "./CategoryList";

const Menu = () => {
  return (
    <div className="hidden lg:flex w-3/12 flex-col gap-y-4">
      <article className="">
        <h3>What's hot</h3>
        <h2>Most Popular</h2>
      </article>
      <div className="flex flex-col gap-y-6">
        <Link href="#" className="flex flex-col gap-2">
          <span className="lg:text-[10px] text-[8px] bg-gray-200 w-max px-2 py-1 rounded-xl">
            CULTURE
          </span>
          <p className="text-[12px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-3 items-center text-[12px]">
            <span className="">John Doe</span>
            <span className="">11-02-2032</span>
          </div>
        </Link>
        <Link href="#" className="flex flex-col gap-2">
          <span className="lg:text-[10px] text-[8px] bg-gray-200 w-max px-2 py-1 rounded-xl">
            CULTURE
          </span>
          <p className="text-[12px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-3 items-center text-[12px]">
            <span className="">John Doe</span>
            <span className="">11-02-2032</span>
          </div>
        </Link>
        <Link href="#" className="flex flex-col gap-2">
          <span className="lg:text-[10px] text-[8px] bg-gray-200 w-max px-2 py-1 rounded-xl">
            CULTURE
          </span>
          <p className="text-[12px] font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-3 items-center text-[12px]">
            <span className="">John Doe</span>
            <span className="">11-02-2032</span>
          </div>
        </Link>
        <div>
          <h2 className="mb-10">Popular Categories</h2>
          <div className="grid grid-cols-2 gap-6">
            <CategoryList title="Fashion" image="/p1.jpeg" bgColor="red" />
            <CategoryList title="Fashion" image="/p1.jpeg" bgColor="blue" />
            <CategoryList title="Fashion" image="/p1.jpeg" bgColor="yellow" />
            <CategoryList title="Fashion" image="/p1.jpeg" bgColor="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
