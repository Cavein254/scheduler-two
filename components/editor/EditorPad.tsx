import React from "react";

const EditorPad = ({ note, setNote }) => {
  return (
    <div className="h-[64vh] ">
      <textarea
        placeholder="Enter Your Text Here"
        className="w-full h-full focus:outline-none p-2 text-sm rounded-md md:text-md"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
};

export default EditorPad;
