"use client";
import MainSidebar from "@/components/sidebar/MainSidebar";
import Mainsidelist from "@/components/sidelist/Mainsidelist";
import Topside from "@/components/topside/Topside";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import MainContent from "@/components/MainContent";

const Initial = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full">
      <aside className="flex w-[10%] md:w-[20%] md:max-w-[200px] flex-col items-center pt-4">
        <div className="flex">
          <Topside />
        </div>
        <MainSidebar />
      </aside>
      <div className="flex flex-col w-full">
        <div className="bg-red-400 h-[20vh]">
          <h1>This will be the heading of the App</h1>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex bg-gray-300 h-[80vh]">
            {isOpen ? (
              <Mainsidelist setIsOpen={setIsOpen} />
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <IoIosArrowForward className="text-2xl" />
              </button>
            )}
          </div>
          <article className="w-full">
            <MainContent />
            <h1>testing</h1>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Initial;
