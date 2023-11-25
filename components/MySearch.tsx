import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  placeholder: string;
};
const MySearch = ({ placeholder }: Props) => {
  return (
    <div className="">
      <input
        className="bg-white  mt-2 text-sm w-full rounded-md px-6 py-2 placeholder-bold placeholder-text-sx focus:outline-none shadow-md"
        placeholder={placeholder}
        type="text"
      />
      <BsSearch className="absolute -mt-7 text-lg ml-2" />
    </div>
  );
};

export default MySearch;
