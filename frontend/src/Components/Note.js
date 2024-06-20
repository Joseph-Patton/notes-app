import { React } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Note({ id, content, title, tag, deleteNote }) {
  return (
    <div className="note-preview box">
      <div className="title overflow">{title}</div>
      <div className="text">{content}</div>
      <div className="footer" style={{ justifyContent: "flex-end" }}>
        <div className="tag">{tag}</div>
        <DeleteForeverOutlinedIcon
          className="delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}
export default Note;
