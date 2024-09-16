import {
  Button,
  Grid,
  InputBase,
  CardActions,
  ClickAwayListener,
} from "@mui/material";
import { CreateNoteContext } from "../App.js";
import { React, useContext, useState } from "react";

function CreateNoteBoxExpanded({ handleShrink }) {
  const { createNote, currentTab } = useContext(CreateNoteContext);

  const handleCreate = async (note) => {
    await createNote(note);
    resetNote();
  };

  const resetNote = () => {
    setNewNoteValue({ title: "", content: "", tags: [] });
  };

  const handleClose = () => {
    console.log(`You clicked Outside the box`);
    handleShrink();
    handleCreate(newNoteValue);
  };
  // This is to allow notes in the default "Notes" tab to be created with empty tags list
  const getTagsValueCurrentTab = (currentTab) => {
    if (currentTab === "") {
      return [];
    } else {
      return [currentTab];
    }
  };
  const [newNoteValue, setNewNoteValue] = useState({
    title: "",
    content: "",
    tags: getTagsValueCurrentTab(currentTab),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNoteValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { title, content, tags } = newNoteValue;

  return (
    <Grid container justifyContent={"center"}>
      <ClickAwayListener onClickAway={handleClose}>
        <Grid
          item
          paddingLeft={"1em"}
          xs={5}
          sx={{
            color: "#000",
            backgroundColor: "#fff",
            overflow: "visible",
            border: "1px solid",
            borderColor: "#5555",
            borderRadius: 2,
            "&:hover": { boxShadow: "0 1px 2px #000" },
          }}
        >
          <Grid container direction={"column"}>
            <InputBase
              minRows={1}
              placeholder="Title…"
              onChange={handleChange}
              name="title"
              value={title}
              multiline={true}
              sx={{
                fontSize: "1.2em",
                margin: "6px",
              }}
            />
            <InputBase
              minRows={1}
              autoFocus
              placeholder="Take a note…"
              name="content"
              value={content}
              onChange={handleChange}
              maxLength="100"
              multiline={true}
              sx={{
                fontSize: "1em",
                margin: "6px",
              }}
            />
            <CardActions>
              <Grid container justifyContent={"flex-end"}>
                <Grid item paddingRight={"2em"}>
                  <Button color="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Grid>
        </Grid>
      </ClickAwayListener>
    </Grid>
  );
}
export default CreateNoteBoxExpanded;
