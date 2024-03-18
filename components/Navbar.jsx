import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Socials from "./Socials";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const links = [
  { name: "News", url: "#" },
  { name: "Sports", url: "#" },
  { name: "Reel", url: "#" },
  { name: "Travel", url: "#" },
  { name: "Future", url: "#" },
  { name: "More", url: "#" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white font-primary">
      <main className="px-4 md:px-8 flex items-center justify-between h-full">
        <div className="flex gap-x-6">
          <div className="font-bold text-xl py-3">TRUTH</div>
          <div className="flex items-center gap-x-2 px-4 border-l border-gray-100 border-opacity-30">
            <FaUserCircle className="text-[20px]" />
            <p className="">Sign in</p>
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          {links.map((link, index) => (
            <div className="" key={index}>
              <p className="cursor-pointer">{link.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-white relative flex items-center rounded overflow-hidden">
          <input
            type="text"
            className="outline-none border-none text-black  py-1 text-sm px-3"
            placeholder="Search"
          />
          <div className="bg-gray-900 absolute right-[2px] w-[25px] h-[22px] flex items-center justify-center rounded">
            <CiSearch className="font-semibold" />
          </div>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
