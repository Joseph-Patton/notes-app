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
        placeholder="Type...."
        maxLength="100"
      ></textarea>
      <div className="edit-panel__footer">
        <span className="label"> left</span>
        <button className="edit-panel__save">Save</button>
      </div>
    </div>
  );
}
export default EditPanel;
