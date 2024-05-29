import React from "react";
import "./css/Note.css";
import NotePreview from "./NotePreview";
function NoteList() {
  return (
    // <div className="note-list">
    //   {notes.map((note) => (
    //     <NotePreview title={note.title} text={note.text} />
    //   ))}
    // </div>
    <div className="note-list">
      <NotePreview />
      <NotePreview />
      <NotePreview />
    </div>
  );
}
export default NoteList;
