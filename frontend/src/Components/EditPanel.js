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
    <Dialog open={open} max-width sm={2} disableEqualOverflow>
      <DialogContent>
        <Grid container spacing={2}>
          <TextareaAutosize
            minRows={1}
            placeholder="Title…"
            value={inputTitle}
            onChange={titleHandler}
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
