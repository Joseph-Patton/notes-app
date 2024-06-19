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
    <div>
      <Dialog open={open}>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <InputBase
                placeholder="Add Title…"
                value={inputTitle}
                onChange={titleHandler}
              />
              <TextareaAutosize
                rows={8}
                placeholder="Add Content…"
                value={inputContent}
                onChange={contentHandler}
                maxLength="100"
              />
            </Grid>
            <div className="footer">
              <textarea
                className="tag box"
                cols="10"
                rows="1"
                value={inputTag}
                placeholder="Tag...."
                onChange={tagHandler}
                maxLength="15"
              ></textarea>
              <button className="save" onClick={createNote}>
                Save
              </button>
            </div>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container spacing={3} className={classes.formActionButtons}>
            <Grid item xs={12}>
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
    </div>
  );
}
export default EditPanel;
