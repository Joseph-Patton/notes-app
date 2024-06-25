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
  contentHandlerEdit,
  titleHandlerEdit,
  tagHandlerEdit,
  inputContentEdit,
  inputTitleEdit,
  inputTagEdit,
  updateNote,
}) {
  const handleUpdate = async () => {
    await updateNote();
    handleClose();
  };

  return (
    <Dialog open={open} max-width sm={2} disableEqualOverflow>
      <DialogContent>
        <Grid container spacing={2} direction="column">
          <InputBase
            minRows={1}
            placeholder="Title…"
            value={inputTitleEdit}
            onChange={titleHandlerEdit}
            multiline={true}
            sx={{ fontSize: "1.2em" }}
          />
          <InputBase
            minRows={4}
            placeholder="Content…"
            value={inputContentEdit}
            onChange={contentHandlerEdit}
            maxLength="100"
            multiline={true}
            sx={{ fontSize: "1em" }}
          />
          <InputBase
            placeholder="Tag…"
            value={inputTagEdit}
            onChange={tagHandlerEdit}
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button color="secondary" onClick={handleUpdate}>
              Update
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
