import MainSidebar from "@/components/sidebar/MainSidebar";
import Topside from "@/components/topside/Topside";
import React from "react";

const Initial = () => {
  return (
    <div className="w-[100%] h-[100%] flex">
      <aside className="flex w-[10%] md:w-[20%] md:max-w-[200px] bg-black h-[100vh] flex-col items-center pt-4">
        <div className="flex">
          <Topside />
        </div>
        <MainSidebar />
      </aside>
      <aside className="flex flex-col w-[90%] bg-blue-200 h-[100vh]">
        <div className="bg-white">
          <h1>This will be the heading of the App</h1>
        </div>
        <div className="flex w-[30%] bg-gray-300 h-[100vh]"></div>
      </aside>
    </div>
  );
};

export default Initial;
