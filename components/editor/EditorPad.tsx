import React from "react";

const EditorPad = ({ note }) => {
  return (
    <div className="h-[64vh] ">
      <textarea
        placeholder="Enter Your Text Here"
        className="w-full h-full focus:outline-none p-2 text-sm"
      />
    </div>
  );
};

export default EditorPad;
