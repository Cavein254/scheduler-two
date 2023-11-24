import React from "react";
import { BsSearch } from "react-icons/bs";

const MySearch = () => {
  return (
    <div className="">
      <input
        className="bg-white w-full mt-2  rounded-md px-8 py-2 placeholder-bold focus:outline-none shadow-md"
        placeholder="Search"
      />
      <BsSearch className="absolute -mt-7 text-lg ml-2" />
    </div>
  );
};

export default MySearch;
