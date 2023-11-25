import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

import { LuClipboardEdit } from "react-icons/lu";
import MainTab from "./tabs/MainTab";
// import MainTab from "./MainTab";
const MainContent = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div>
            <h1 className="text-lg font-bold">
              Add Agent Seats to your Subscription
            </h1>
          </div>
          <div className="flex flex-col md:flex-row mt-2 md:items-center">
            <span className="rounded-full bg-blue-500 text-white px-2 py-[2px] text-sm">
              Published
            </span>
            <BsDot className="ml-[1px] hidden md:block" />
            <span className="text-bold text-sm ml-[1px]">
              Last edited 1 day ago by
            </span>
            <Image
              src="https://images.unsplash.com/photo-1700317440743-ffe7b2134276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
              alt="user image"
              width={25}
              height={15}
              className="rounded-[100%] ml-[2px]"
            />
            <span className="text-bold text-sm ml-[2px]">Santi Cazorla</span>
          </div>
        </div>
        <div className="p-2 shadow-md border-[1px] border-gray-200 rounded-md">
          <LuClipboardEdit className="text-2xl" />
        </div>
      </div>
      <MainTab />
    </div>
  );
};

export default MainContent;
