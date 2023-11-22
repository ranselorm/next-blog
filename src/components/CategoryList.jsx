import Image from "next/image";
import Link from "next/link";
const categoris = [
  {
    title: "Style",
    image: "/style.png",
    bgColor: "red",
  },
  {
    title: "Fashion",
    image: "/fashion.png",
    bgColor: "yellow",
  },
  {
    title: "Food",
    image: "/food.png",
    bgColor: "brown",
  },
  {
    title: "Travel",
    image: "/travel.png",
    bgColor: "green",
  },
  {
    title: "Culture",
    image: "/culture.png",
    bgColor: "teal",
  },
  {
    title: "Coding",
    image: "/coding.png",
    bgColor: "orange",
  },
];
const CategoryList = ({ title, image, bgColor }) => {
  return (
    <div>
      {/* <h1>Popular Categories</h1> */}
      <div className="">
        <Link
          href="/blog?cat=style"
          style={{ backgroundColor: bgColor }}
          className="flex items-center px-2 py-1 gap-2 rounded-xl"
        >
          <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
            <Image src={image} alt="" fill className="object-cover" />
          </div>
          <span>{title}</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
