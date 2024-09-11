import { React, useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function TagBox({ note, updateNote }) {
  function removeTag(index) {
    updateNote(tags.filter((el, i) => i !== index));
  }
  function handleKeyDown(e) {
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    setTags([...tags, value]);
    // Clear the input
    e.target.value = "";
  }
  return (
    <div className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="tags-input"
        placeholder="Type somthing"
      />
    </div>
  );
}
export default TagBox;
