import React from "react";
import Note from "./Note.js";

function NoteList({ notes, deleteNote }) {
  return (
    // <div className="note-list">
    //   {notes.map((note) => (
    //     <NotePreview title={note.title} text={note.text} />
    //   ))}
    // </div>
    <div className="note-list">
      {notes.map((note) => (
        <Note
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
