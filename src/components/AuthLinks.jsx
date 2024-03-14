"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";
// import { AiFillApple } from "react-icons/ai";

const AuthLinks = () => {
  //temporary
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <button className="cursor-pointer" onClick={signOut}>
            Logout
          </button>
        </>
      )}
      {/* <AiFillApple /> */}
    </>
  );
};

export default AuthLinks;
