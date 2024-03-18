import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Socials from "./Socials";
const links = [
  { name: "Home", url: "/" },
  { name: "News", url: "/" },
  { name: "Politics", url: "/trending" },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white font-primary py-4">
      <div className="">
        <div className="flex justify-between px-4 md:px-8">
          <Socials />
          <div>
            <h3 className="font-bold text-2xl">Truth</h3>
          </div>
          <div>
            <p>Login</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-100 bg-opacity-25 my-2" />
        <div className="flex justify-between px-4 md:px-8">
          <div className="flex gap-4">
            {links.map((link) => (
              <p>{link.name}</p>
            ))}
          </div>

          <div>
            <p>Login</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
