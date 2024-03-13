"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const { data, status } = useSession();
  console.log({ data, status });
  return (
    <div className="flex justify-center items-center mt-[60px]">
      <div className="bg-gray-100 p-10 flex flex-col gap-y-5">
        <div
          className="bg-red-400 text-white p-3 rounded text-center w-full cursor-pointer"
          onClick={() => signIn("google")}
        >
          Login with Google
        </div>
        <div className="bg-black text-white p-3 rounded text-center w-full">
          Login with GitHub
        </div>
        <div className="bg-blue-500 text-white p-3 rounded text-center w-full">
          Login with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
