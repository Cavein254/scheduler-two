import React from "react";
import { dashData } from "./Data";
const SmSidebar = () => {
  const data = dashData.map((item) => {
    return (
      <div key={item.id} className="my-4 text-2xl">
        {item.icon}
      </div>
    );
  });
  return <div>{data}</div>;
};

export default SmSidebar;
