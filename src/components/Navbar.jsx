import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between items-center py-[30px]">
        <div className="flex gap-x-4 flex-1">
          <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
          <Image src="/tiktok.png" alt="Tiktok" width={24} height={24} />
          <Image src="/youtube.png" alt="Youtube" width={24} height={24} />
        </div>
        <Link href="/" className="flex-1 text-center text-[30px] font-bold">
          Next-Blog
        </Link>
        <div className="flex gap-x-4 flex-1">
          {/* <ThemeToggle />
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link> */}
          <AuthLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
