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
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth={"sm"}
      sx={{ border: "3px solid", borderColor: "#888", borderRadius: 2 }}
    >
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
        <Grid container spacing={3} justifyContent={"space-evenly"}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="secondary" onClick={handleUpdate}>
            Update
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default EditPanel;
