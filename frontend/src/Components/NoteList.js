import { React } from "react";
import NotePreview from "./NotePreview";
function NoteList() {
  return (
    <div className="note-list">
      <NotePreview content="First Note" />
      <NotePreview content="Second Note" />
      <NotePreview content="Third Note" />
    </div>
  );
}
export default NotePreview;
