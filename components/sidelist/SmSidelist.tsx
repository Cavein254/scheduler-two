"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import MainAccordion from "./MainAccordion";
const SmSidelist = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center pt-4">
      <div>
        <IoIosArrowForward />
        <MainAccordion />
      </div>
    </div>
  );
};

export default SmSidelist;
