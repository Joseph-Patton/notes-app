import { React, createContext } from "react";
import Grid from "@mui/material/Grid";
import TagContainer from "./TagContainer";

export const TagContext = createContext();
function TagsBox({ setUpdateNoteValue, updateNoteValue }) {
  const removeTag = (index) => {
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        tags: updateNoteValue.tags.filter((_, i) => i !== index),
      };
    });
  };

  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={0.5}
      sx={{
        marginBottom: "0.8em",
      }}
    >
      {updateNoteValue.tags.map((tag, index) => (
        <TagContext.Provider
          value={{
            tag,
            index,
            removeTag,
          }}
        >
          <TagContainer />
        </TagContext.Provider>
      ))}
    </Grid>
  );
}
export default TagsBox;
