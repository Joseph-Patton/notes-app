import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
  TextareaAutosize,
} from "@mui/material";

import { React } from "react";
function EditPanel({
  open,
  handleClose,
  contentHandler,
  titleHandler,
  tagHandler,
  createNote,
  inputContent,
  inputTitle,
  inputTag,
}) {
  return (
    <Dialog
      open={open}
      max-width
      sm={2}
      disableEqualOverflow
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 4,
          boxShadow: "0 3px 6px #00000029",
        },
        "& .MuiDialog-paperWidthSm": {
          //maxWidth: theme.wrapper.maxWidth,
          //width: theme.wrapper.width,
          margin: "15px",
        },
      }}
    >
      <DialogContent>
        <Grid container spacing={2}>
          <InputBase
            minRows={1}
            placeholder="Title…"
            value={inputTitle}
            onChange={titleHandler}
            sx={{
              width: "100%",
              minHeight: 44,
              padding: ".2em 1em",
              fontSize: "1.25em",
              alignItems: "center",
              "& .MuiInputBase-input::placeholder": {
                opacity: 0.9,
              },
              "&:focus, .MuiSelect-select:focus": {
                outline: "none",
                background: "#F4F4F4",
              },
              "&:before, &:after": {
                display: "none",
              },
            }}
          />
          <TextareaAutosize
            minRows={4}
            placeholder="Content…"
            value={inputContent}
            onChange={contentHandler}
            maxLength="100"
          />
          <InputBase
            placeholder="Tag…"
            value={inputTag}
            onChange={tagHandler}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button color="secondary" onClick={createNote}>
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {/* <Button type="submit" color="primary" autoFocus>
                {noteToEdit ? "Update" : "Add"}
              </Button> */}
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default EditPanel;
