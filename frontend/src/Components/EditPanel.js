import { React } from "react";
function EditPanel({ textHandler, saveHandler, inputText }) {
  return (
    <div
      className="edit-panel"
      style={{ background: "rgba(255, 255, 255, 0)" }}
    >
      <textarea
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
