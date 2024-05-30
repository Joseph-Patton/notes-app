import { React } from "react";
import "./css/Note.css";
function NotePreview({ id, text, title, tag, deleteNote }) {
  return (
    <div className="note-preview">
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div className="tag">{tag}</div>
    </div>
  );
}
export default NotePreview;
