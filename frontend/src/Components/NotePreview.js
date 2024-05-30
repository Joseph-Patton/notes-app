import { React } from "react";
import "./css/NoteList.css";
function NotePreview({ id, text, title, tag, deleteNote }) {
  return (
    <div className="note-preview box">
      <div className="title box">{title}</div>
      <div className="text box">{text}</div>
      <div className="tag box">{tag}</div>
    </div>
  );
}
export default NotePreview;
