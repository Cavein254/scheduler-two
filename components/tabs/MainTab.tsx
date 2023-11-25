import React, { useState } from "react";
import { BsNewspaper, BsGraphUp } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import Tab from "./Tabs";
import MyEditor from "../MyEditor";
import EditorPad from "../editor/EditorPad";
import ChartPie from "../charts/ChartPie";

const MainTab = () => {
  const [note, setNote] = useState("");
  const tabs = [
    {
      label: "Content",
      content: <MyEditor note={note} />,
      icon: <AiOutlineThunderbolt />,
    },
    {
      label: "Notes",
      content: <EditorPad note={note} setNote={setNote} />,
      icon: <BsNewspaper />,
    },
    { label: "Insight", content: <ChartPie />, icon: <BsGraphUp /> },
  ];
  return (
    <div className="container mx-auto mt-4">
      <Tab tabs={tabs} />
    </div>
  );
};

export default MainTab;
