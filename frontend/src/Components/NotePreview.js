import { React } from "react";
import "./css/Note.css";
function NotePreview({ id, text, deleteNote }) {
  return (
    <div className="note-preview">
      <div className="note-preview__title">title</div>
      <div className="note-preview__body">{text}</div>
    </div>
  );
}
export default NotePreview;
