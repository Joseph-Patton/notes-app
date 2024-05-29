import { React } from "react";
function NotePreview({ content }) {
  return (
    <div className="note-preview">
      <div className="note-preview__title">Title</div>
      <div className="note-preview__body">{content}</div>
    </div>
  );
}
export default NotePreview;
