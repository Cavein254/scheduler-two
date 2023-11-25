import React from "react";
import Editor from "./editor/Editor";

const MyEditor = ({ note }) => {
  return (
    <div>
      <Editor note={note} />
    </div>
  );
};

export default MyEditor;
