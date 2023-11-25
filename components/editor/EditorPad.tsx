import React from "react";

type Props = {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
};
const EditorPad = ({ note, setNote }: Props) => {
  return (
    <div className="h-[64vh] ">
      <textarea
        placeholder="Enter Your Text Here"
        className="w-full h-full focus:outline-none p-2 text-sm rounded-md md:text-md"
        value={note}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNote(e.target.value)
        }
      />
    </div>
  );
};

export default EditorPad;
