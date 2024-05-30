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
        className="edit-panel__tile"
        cols="10"
        rows="5"
        value={inputTitle}
        placeholder="Type...."
        onChange={titleHandler}
        maxLength="100"
      ></textarea>
      <textarea
        className="edit-panel__text"
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="edit-panel__footer">
        <span className="label">Tag</span>
        <button className="edit-panel__save" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}
export default EditPanel;
