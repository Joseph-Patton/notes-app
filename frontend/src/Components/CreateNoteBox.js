import {
  Button,
  Grid,
  InputBase,
  CardActions,
  ClickAwayListener,
} from "@mui/material";
import { React, useRef, useEffect, useState } from "react";

function CreateNoteBox({
  contentHandler,
  titleHandler,
  tagHandler,
  createNote,
  resetNote,
  inputContent,
  inputTitle,
  inputTag,
  open,
  handleNoteClose,
}) {
  const handleCreate = async () => {
    await createNote();
    resetNote();
  };
  const handleClickAway = () => {
    console.log(`You clicked Outside the box`);
    handleNoteClose();
  };

  return (
    <Grid container justifyContent={"center"} onClose={handleNoteClose}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Grid
          item
          //ref={boxRef}
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
              <Grid container justifyContent={"space-evenly"}>
                <Button onClick={resetNote} color="primary">
                  reset
                </Button>
                <Button color="secondary" onClick={handleCreate}>
                  Save
                </Button>
              </Grid>
            </CardActions>
          </Grid>
        </Grid>
      </ClickAwayListener>
    </Grid>
  );
}
export default CreateNoteBox;
