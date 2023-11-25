import React from "react";
import Editor from "./editor/Editor";

type Props = {
  note: string;
};

const MyEditor = ({ note }: Props) => {
  return (
    <div>
      <Editor note={note} />
    </div>
  );
};

export default MyEditor;
