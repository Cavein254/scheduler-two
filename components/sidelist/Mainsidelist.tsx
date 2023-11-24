import React from "react";
import SmSidelist from "./SmSidelist";
import MdSidelist from "./MdSidelist";
import { IoIosArrowBack } from "react-icons/io";

const Mainsidelist = ({ setIsOpen }) => {
  return (
    <div>
      <div className="flex justify-end mt-4">
        <button onClick={() => setIsOpen(false)}>
          <IoIosArrowBack className="text-2xl" />
        </button>
      </div>
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
