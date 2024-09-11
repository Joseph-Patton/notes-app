import { React, useContext, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

function TagBox({ tag, setUpdateNoteValue, updateNoteValue }) {
  const removeTag = (index) => {
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        tag: tag.filter((_, i) => i !== index),
      };
    });
  };
  const appendTagValue = (stag) => {
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        tag: [...updateNoteValue.tag, stag],
      };
    });
  };
  const handleKeyDown = (e) => {
    // If user did not press enter key, return
    if (e.key !== "Enter") return;
    // Get the value of the input
    const value = e.target.value;
    // If the value is empty, return
    if (!value.trim()) return;
    // Add the value to the tags array
    appendTagValue(value);
    // Clear the input
    e.target.value = "";
  };

  return (
    <Grid container>
      {tag.map((stag, index) => (
        <Grid
          item
          sx={{
            borderRadius: 2,
            backgroundColor: "#eee",
            padding: "0.2em",
          }}
        >
          <Button
            onClick={() => removeTag(index)}
            variant="body1"
            component="div"
            sx={{
              fontSize: "0.9em",
            }}
          >
            {stag}
          </Button>
        </Grid>
      ))}
      <InputBase
        minRows={1}
        autoFocus
        placeholder="Add tag…"
        name="tag"
        onKeyDown={handleKeyDown}
        maxLength="100"
        multiline={true}
        sx={{
          fontSize: "1em",
          whiteSpace: "normal",
          overflow: "hidden",
          marginBottom: "0.8em",
        }}
      />
    </Grid>
  );
}
export default TagBox;
