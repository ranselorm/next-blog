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
          <Link href="/logout">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
      {/* <AiFillApple /> */}
    </>
  );
};

export default AuthLinks;
