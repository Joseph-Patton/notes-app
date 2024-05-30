import { React } from "react";
import "./css/NoteList.css";
function NotePreview({ id, text, title, tag, deleteNote }) {
  return (
    <div className="note-preview box">
      <div className="title overflow">{title}</div>
      <div className="text">{text}</div>
      <div className="tag">{tag}</div>
    </div>
  );
}
export default NotePreview;
