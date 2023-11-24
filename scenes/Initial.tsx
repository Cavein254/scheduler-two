import MainSidebar from "@/components/sidebar/MainSidebar";
import Mainsidelist from "@/components/sidelist/Mainsidelist";
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
      <div className="flex flex-col w-[90%] bg-blue-200 h-[100vh]">
        <div className="bg-white h-[20vh]">
          <h1>This will be the heading of the App</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex bg-gray-300 h-[80vh]">
            <Mainsidelist />
          </div>
          <article className="flex grow">here</article>
        </div>
      </div>
    </div>
  );
};

export default Initial;
