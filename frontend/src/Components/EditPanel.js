import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
  TextareaAutosize,
} from "@mui/material";
import { useStyles } from "../styles/EditPanelStyle";
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
  const classes = useStyles();

  return (
    <Dialog open={open} max-width sm={2} disableEqualOverflow>
      <DialogContent>
        <Grid container spacing={2}>
          <TextareaAutosize
            className={`${classes.input} ${classes.textarea}`}
            minRows={1}
            placeholder="Title…"
            value={inputTitle}
            onChange={titleHandler}
          />
          <TextareaAutosize
            className={`${classes.input} ${classes.textarea}`}
            minRows={4}
            placeholder="Content…"
            value={inputContent}
            onChange={contentHandler}
            maxLength="100"
          />
          <InputBase
            className={`${classes.input}`}
            placeholder="Tag…"
            value={inputTag}
            onChange={tagHandler}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3} className={classes.formActionButtons}>
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
