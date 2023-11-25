"use client";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import React, { useState } from "react";
import { FaBookReader } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import MySearch from "../MySearch";
// import MySearch from "./MySearch";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex justify-between items-center hover:bg-gray-100 px-2 rounded-md">
        <div
          className="flex items-center text-lg font-bold items-center"
          onClick={toggleAccordion}
        >
          <span>{isOpen ? <GoChevronDown /> : <GoChevronRight />}</span>
          <FaBookReader className="ml-2" />
          <h2 className="text-xs my-2">{title}</h2>
        </div>
        <div className="flex items-center">
          <FaEllipsis /> <FaPlus className="ml-2" />
        </div>
      </div>
      {isOpen && (
        <div className="">
          {content.map((item, idx) => {
            return (
              <div key={idx} className="ml-2 text-xs">
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="mt-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const MainAccordion = () => {
  const accordionItems = [
    { title: "Section 1", content: ["Content for Section 1"] },
    {
      title: "Section 2",
      content: [
        "Content for Section 1",
        "Content for Section 1",
        "Content for Section 1",
      ],
    },
  ];

  return (
    <div className="border-transparent border-r-gray-300 pt-4">
      <MySearch placeholder="Search by Title" />
      <Accordion items={accordionItems} />
    </div>
  );
};

export default MainAccordion;
