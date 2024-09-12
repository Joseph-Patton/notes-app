import { React, useContext, useState, createContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import TagContainer from "./TagContainer";

export const TagContext = createContext();
function TagsBox({ setUpdateNoteValue, updateNoteValue }) {
  const removeTag = (index) => {
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        tag: updateNoteValue.tag.filter((_, i) => i !== index),
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
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    appendTagValue(value);
    e.target.value = "";
  };

  return (
    <Grid container>
      {updateNoteValue.tag.map((stag, index) => (
        <TagContext.Provider
          value={{
            stag,
            index,
            removeTag,
          }}
        >
          <Grid item xs={12} key={index}></Grid>
          <TagContainer />
          <Grid />
        </TagContext.Provider>
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
export default TagsBox;
