import {
  Button,
  Grid,
  InputBase,
  CardActions,
  ClickAwayListener,
} from "@mui/material";
import { NoteContext } from "../App.js";
import { React, useRef, useEffect, useState, useContext } from "react";

function CreateNoteBox({ createNote, resetNote, open, handleNoteClose }) {
  const handleCreate = async () => {
    await createNote();
    resetNote();
  };
  const handleClose = () => {
    console.log(`You clicked Outside the box`);
    handleNoteClose();
    handleCreate();
  };
  const {
    inputTitle,
    inputContent,
    inputTag,
    titleHandler,
    contentHandler,
    tagHandler,
  } = useContext(NoteContext);

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
              value={inputTitle}
              onChange={titleHandler}
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
              value={inputContent}
              onChange={contentHandler}
              maxLength="100"
              multiline={true}
              sx={{
                fontSize: "1em",
                margin: "6px",
              }}
            />
            <Grid container sx={{ margin: "10px" }}>
              <Grid
                item
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#eee",
                  padding: "0.2em",
                }}
              >
                <InputBase
                  placeholder="Tag…"
                  value={inputTag}
                  onChange={tagHandler}
                  sx={{
                    fontSize: "0.9em",
                  }}
                />
              </Grid>
            </Grid>
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
export default CreateNoteBox;
