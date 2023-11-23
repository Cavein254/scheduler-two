import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
const dashData = [
  {
    id: 1,
    title: "Dashboard",
    icon: <FaChalkboardTeacher />,
    url: "/",
  },
  {
    id: 2,
    title: "Knowledge Base",
    icon: <FaRegCircleQuestion />,
    url: "/",
  },
  {
    id: 3,
    title: "Dashboard",
    icon: <FaChalkboardTeacher />,
    url: "/",
  },
  {
    id: 4,
    title: "Dashboard",
    icon: <FaChalkboardTeacher />,
    url: "/",
  },
];

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
