import Image from "next/image";
import React from "react";
import { FaArrowsToDot } from "react-icons/fa6";

const Topside = () => {
  return (
    <div className="hidden md:block flex items-center">
      <div className="flex">
        <div className="flex flex-col justify-center">
          <Image
            src="https://placehold.co/50"
            alt="user image"
            height={50}
            width={50}
            className="rounded-full w-[75px]"
          />
        </div>
        <div className="flex flex-col ml-2 justify-center">
          <h1 className="font-bold text-bold text-sm">User Name</h1>
          <p className="text-gray-400 text-xs">Class 5</p>
        </div>
      </div>
    </div>
  );
};

export default Topside;
