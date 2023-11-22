import React from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";

const Card = () => {
  return (
    <div className="lg:w-9/12 w-full">
      <h2>Recent Posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </div>
      <Pagination />
    </div>
  );
};

export default Card;
