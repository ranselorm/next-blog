import Card from "@/components/Card";
import Menu from "@/components/Menu";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h2>Style Page</h2>
      <div className="flex gap-[50px] mt-[50px]">
        <Card />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
