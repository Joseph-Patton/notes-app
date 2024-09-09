import CreateNoteBoxExpanded from "./CreateNoteBoxExpanded";
import CreateNoteBoxSmall from "./CreateNoteBoxSmall";
import { React, useState } from "react";

function CreateNoteBox() {
  const [expanded, setExpanded] = useState(false);
  const handleShrink = () => {
    setExpanded(false);
    console.log(`Handle note close called`);
  };
  const handleExpand = () => {
    setExpanded(true);
    console.log(`Handle note open called`);
  };

  if (expanded) {
    return <CreateNoteBoxExpanded handleShrink={handleShrink} />;
  }
  return <CreateNoteBoxSmall handleExpand={handleExpand} />;
}
export default CreateNoteBox;
