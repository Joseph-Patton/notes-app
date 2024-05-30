import { React } from "react";
function EditPanel({
  textHandler,
  titleHandler,
  tagHandler,
  saveHandler,
  inputText,
  inputTitle,
  InputTag,
}) {
  return (
    <div
      className="edit-panel"
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <textarea
        className="title"
        cols="10"
        rows="1"
        value={inputTitle}
        placeholder="Title...."
        onChange={titleHandler}
        maxLength="100"
      ></textarea>
      <textarea
        className="text"
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Content...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="footer">
        <span className="label">Tag</span>
        <button className="save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
export default EditPanel;
