import React, { useState } from "react";
import Editor from "./editor/Editor";
import EditorPad from "./editor/EditorPad";

type Props = {
  note: string;
};

const MyEditor = ({ note }: Props) => {
  const [shortnote, setShortNote] = useState<string>("");

  return (
    <div>
      <Editor note={note} />
    </div>
  );
};

export default MyEditor;
