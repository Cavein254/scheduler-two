import Image from "next/image";
import React from "react";
import { FaArrowsToDot } from "react-icons/fa6";

const Topside = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image
          src="https://placehold.co/400"
          alt="user image"
          height={200}
          width={200}
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-bold">User Name</h1>
          <p className="text-gray-400 text-sm">Class 5</p>
        </div>
      </div>
      <div>
        <FaArrowsToDot />
      </div>
    </div>
  );
};

export default Topside;
