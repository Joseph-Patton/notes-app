import { React } from "react";
function EditPanel({
  contentHandler,
  titleHandler,
  tagHandler,
  createNote,
  inputContent,
  inputTitle,
  inputTag,
}) {
  return (
    <div
      className="edit-panel border-box"
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <textarea
        className="title box"
        cols="10"
        rows="1"
        value={inputTitle}
        placeholder="Title...."
        onChange={titleHandler}
        maxLength="50"
      ></textarea>
      <textarea
        className="text box"
        cols="10"
        rows="5"
        value={inputContent}
        placeholder="Content...."
        onChange={contentHandler}
        maxLength="100"
      ></textarea>
      <div className="footer">
        <textarea
          className="tag box"
          cols="10"
          rows="1"
          value={inputTag}
          placeholder="Tag...."
          onChange={tagHandler}
          maxLength="15"
        ></textarea>
        <button className="save" onClick={createNote}>
          Save
        </button>
      </div>
    </div>
  );
}
export default EditPanel;
