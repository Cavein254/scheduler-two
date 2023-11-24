import React from "react";
import SmSidelist from "./SmSidelist";
import MdSidelist from "./MdSidelist";

const Mainsidelist = () => {
  return (
    <div>
      <div className="">
        <SmSidelist />
      </div>
      <div className="hidden">
        <MdSidelist />
      </div>
    </div>
  );
};

export default Mainsidelist;
