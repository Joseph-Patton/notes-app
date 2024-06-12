import { React } from "react";
function EditPanel({
  textHandler,
  titleHandler,
  tagHandler,
  //saveHandler,
  createNote,
  inputText,
  inputTitle,
  InputTag,
}) {
  return (
    <div
      className="edit-panel box"
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <textarea
        className="title box"
        cols="10"
        rows="1"
        value={inputTitle}
        placeholder="Title...."
        onChange={titleHandler}
        maxLength="100"
      ></textarea>
      <textarea
        className="text box"
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Content...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="footer box">
        <span className="label">Tag</span>
        <button className="save" onClick={createNote}>
          Save
        </button>
      </div>
    </div>
  );
}
export default EditPanel;
