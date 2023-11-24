import React from "react";
import { dashData } from "./Data";

const MdSidebar = () => {
  const data = dashData.map((item) => {
    return (
      <div
        key={item.id}
        className="my-4 text-2xl flex flex-row md:text-sm items-center"
      >
        {item.icon}
        <span className="ml-2">{item.title}</span>
      </div>
    );
  });
  return <div className="">{data}</div>;
};

export default MdSidebar;
