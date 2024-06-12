import React from "react";
import "./css/EditPanel.css";
import NotePreview from "./NotePreview";
function NoteList({ notes, deleteNote }) {
  return (
    // <div className="note-list">
    //   {notes.map((note) => (
    //     <NotePreview title={note.title} text={note.text} />
    //   ))}
    // </div>
    <div className="note-list box">
      {notes.map((note) => (
        <NotePreview
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          tag={note.tag}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
export default NoteList;
