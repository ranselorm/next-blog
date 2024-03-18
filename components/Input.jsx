"use client";

const Input = () => {
  return (
    <>
      <form className="flex items-center justify-between">
        <input
          type="text"
          className="bg-gray-300 w-10/12 text-black p-4 border-none outline-none rounded-lg"
          placeholder="Write a comment..."
        />
        <button className="bg-gray-300 py-2 px-4 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default Input;
