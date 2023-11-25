"use client";
import React, { useState } from "react";
import { BsNewspaper } from "react-icons/bs";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "border-2 border-transparent border-b-green-400 text-green-400 font-bold"
                : ""
            } py-2 px-4`}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex items-center">
              <span>{tab.icon}</span>
              <span className="ml-2">{tab.label}</span>
            </div>
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
