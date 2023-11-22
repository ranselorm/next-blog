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
const CategoryList = () => {
  return (
    <div>
      <h1>Popular categories</h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {categoris.map((cat, index) => (
          <Link
            href="/blog?cat=style"
            style={{ backgroundColor: cat.bgColor }}
            className="flex items-center px-5 py-2 gap-4 rounded-xl"
          >
            <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
              <Image src={cat.image} alt="" fill className="object-cover" />
            </div>
            <span>{cat.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
