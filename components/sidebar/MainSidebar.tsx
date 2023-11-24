import React from "react";
import SmSidebar from "./SmSidebar";
import MdSidebar from "./MdSidebar";

const MainSidebar = () => {
  return (
    <div className="flex mt-4">
      <div className="md:hidden md:invisible">
        <SmSidebar />
      </div>
      <div className="hidden invisible md:visible md:block">
        <MdSidebar />
      </div>
    </div>
  );
};

export default MainSidebar;
