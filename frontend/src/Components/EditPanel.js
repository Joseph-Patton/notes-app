import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
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
  const handleCreate = async () => {
    await createNote();
    handleClose();
  };

  return (
    <Dialog open={open} max-width sm={2} disableEqualOverflow>
      <DialogContent>
        <Grid container spacing={2} direction="column">
          <InputBase
            minRows={1}
            placeholder="Title…"
            value={inputTitle}
            onChange={titleHandler}
            multiline={true}
            sx={{ fontSize: "1.2em" }}
          />
          <InputBase
            minRows={4}
            placeholder="Content…"
            value={inputContent}
            onChange={contentHandler}
            maxLength="100"
            multiline={true}
            sx={{ fontSize: "1em" }}
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
            <Button color="secondary" onClick={handleCreate}>
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default EditPanel;
