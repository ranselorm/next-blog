// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FiUser } from "react-icons/fi";
// import { LiaSignOutAltSolid } from "react-icons/lia";
// import { CiSearch } from "react-icons/ci";
// import { useSession, signOut } from "next-auth/react";

// const links = [
//   { name: "News", url: "#" },
//   { name: "Sports", url: "#" },
//   { name: "Reel", url: "#" },
//   { name: "Travel", url: "#" },
//   { name: "Future", url: "#" },
//   { name: "More", url: "#" },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { data: sessionData, status } = useSession();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-900 text-white font-primary">
//       <div className="px-4 md:px-8 flex items-center justify-between h-full">
//         <div className="flex items-center">
//           <div className="font-bold text-xl cursor-pointer py-4">TRUTH</div>
//           <div className="md:hidden ml-auto">
//             <button
//               onClick={toggleMenu}
//               className="text-white focus:outline-none"
//             >
//               {!isMenuOpen ? "☰" : "✖️"}
//             </button>
//           </div>
//         </div>
//         <div
//           className={`md:flex ${
//             isMenuOpen ? "block" : "hidden"
//           } items-center gap-x-5`}
//         >
//           {links.map((link, index) => (
//             <Link href={link.url} key={index}>
//               <p className="cursor-pointer">{link.name}</p>
//             </Link>
//           ))}
//           {!sessionData ? (
//             <div className="flex items-center gap-x-2">
//               <FiUser className="text-[20px]" />
//               <p className="">Sign in</p>
//             </div>
//           ) : (
//             <div
//               onClick={() => signOut()}
//               className="flex items-center gap-x-2 cursor-pointer"
//             >
//               <LiaSignOutAltSolid className="text-[20px]" />
//               <p className="">Sign out</p>
//             </div>
//           )}
//         </div>
//         <div
//           className={`md:flex ${
//             isMenuOpen ? "block" : "hidden"
//           } items-center gap-x-5`}
//         >
//           <div className="bg-white relative flex items-center rounded overflow-hidden">
//             <input
//               type="text"
//               className="outline-none border-none text-black py-1 text-sm px-3"
//               placeholder="Search"
//             />
//             <div className="bg-gray-900 absolute right-[2px] w-[25px] h-[22px] flex items-center justify-center rounded cursor-pointer">
//               <CiSearch className="font-semibold" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const NavItem = ({ href, name }) => (
    <Link
      href={href}
      className="py-4 px-2 border-b-4 border-transparent hover:border-[#FAC97A] transition duration-300"
    >
      {name}
    </Link>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the scroll threshold (e.g., height of the hero section)
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-colors duration-300 py-2 ${
        isScrolled ? "bg-white text-black shadow-lg" : "bg-black text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center py-4 px-2">
            <span className="font-semibold text-lg">Brand</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path> // X icon
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path> // Hamburger icon
                )}
              </svg>
            </button>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center gap-6 space-x-1">
            {menuItems.map((item) => (
              <NavItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>
          <div className="hidden md:flex">
            <FaInstagram
              className={`${
                isScrolled ? "text-black" : "text-[#FAC97A]"
              } text-[22px]`}
            />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
