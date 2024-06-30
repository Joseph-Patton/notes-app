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
      maxWidth={"xs"}
      sx={{ border: "3px solid", borderColor: "#888", borderRadius: 2 }}
    >
      <DialogContent>
        <Grid
          container
          spacing={2}
          direction="column"
          sx={{ padding: "0.3em" }}
        >
          <InputBase
            minRows={1}
            placeholder="Title…"
            value={inputTitleEdit}
            onChange={titleHandlerEdit}
            multiline={true}
            sx={{
              fontSize: "1.2em",
              fontWeight: 500,
              whiteSpace: "normal",
              overflow: "hidden",
              marginBottom: "0.3em",
            }}
          />
          <InputBase
            minRows={1}
            autoFocus
            placeholder="Content…"
            value={inputContentEdit}
            onChange={contentHandlerEdit}
            maxLength="100"
            multiline={true}
            sx={{
              fontSize: "1em",
              whiteSpace: "normal",
              overflow: "hidden",
              marginBottom: "0.8em",
            }}
          />
          <InputBase
            placeholder="Tag…"
            value={inputTagEdit}
            onChange={tagHandlerEdit}
            sx={{
              fontSize: "0.9em",
              borderRadius: 2,
              backgroundColor: "#eee",
              padding: "0.1em",
            }}
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
