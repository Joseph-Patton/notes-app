import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
} from "@mui/material";
import { React, useState } from "react";

function EditPanel({ open, handleClose, updateNote, note }) {
  const handleClickUpdate = async () => {
    await updateNote(updateNoteValue);
    handleClose();
  };
  const [updateNoteValue, setUpdateNoteValue] = useState({
    id: note.id,
    title: note.title,
    content: note.content,
    tag: note.tag,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const { _, title, content, tag } = updateNoteValue;

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
            name="title"
            value={title}
            onChange={handleChange}
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
            name="content"
            value={content}
            onChange={handleChange}
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
            name="tag"
            value={tag}
            onChange={handleChange}
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
          <Button color="secondary" onClick={handleClickUpdate}>
            Update
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default EditPanel;
