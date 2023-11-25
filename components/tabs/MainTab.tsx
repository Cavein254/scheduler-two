import React from "react";
import { BsNewspaper, BsGraphUp } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Tab from "./Tabs";
import MyEditor from "../MyEditor";

const tabs = [
  {
    label: "Content",
    content: "Content",
    icon: <BsNewspaper />,
  },
  { label: "Insight", content: "Insight", icon: <BsGraphUp /> },
  {
    label: "Notes",
    content: <MyEditor />,
    icon: <AiOutlineThunderbolt />,
  },
];

const MainTab = () => {
  return (
    <div className="container mx-auto mt-4">
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
