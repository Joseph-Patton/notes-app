import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
} from "@mui/material";
import { React, useState } from "react";
import TagBox from "./TagsBox";

function EditPanel({ editPanelOpen, handleCloseEditPanel, updateNote, note }) {
  const handleClose = async () => {
    await updateNote(updateNoteValue);
    handleCloseEditPanel();
  };

  const [updateNoteValue, setUpdateNoteValue] = useState({
    id: note.id,
    title: note.title,
    content: note.content,
    tag: note.tag,
    created_at: note.created_at,
    is_archived: false,
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

  const appendTagValue = (stag) => {
    setUpdateNoteValue((prev) => {
      return {
        ...prev,
        tag: [...updateNoteValue.tag, stag],
      };
    });
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    appendTagValue(value);
    e.target.value = "";
  };

  //const [newTagValue, setNewTagValue] = useState("");

  return (
    <Dialog
      onClose={handleClose}
      open={editPanelOpen}
      fullWidth
      maxWidth={"xs"}
      sx={{ border: "3px solid", borderColor: "#888", borderRadius: 2 }}
    >
      <DialogContent>
        <InputBase
          minRows={1}
          placeholder="Title…"
          name="title"
          value={title}
          fullWidth
          maxLength="20"
          onChange={handleChange}
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
          fullWidth
          onChange={handleChange}
          maxLength="50"
          multiline={true}
          sx={{
            fontSize: "1em",
            whiteSpace: "normal",
            overflow: "hidden",
            marginBottom: "0.8em",
          }}
        />

        <TagBox
          tag={tag}
          setUpdateNoteValue={setUpdateNoteValue}
          updateNoteValue={updateNoteValue}
        />

        <InputBase
          minRows={1}
          autoFocus
          placeholder="Add tag…"
          name="tag"
          onKeyDown={handleKeyDown}
          maxLength="30"
          sx={{
            fontSize: "1em",
            whiteSpace: "normal",
            overflow: "hidden",
            marginBottom: "0.8em",
            borderRadius: 2,
            backgroundColor: "#eee",
            padding: "0.2em",
            minWidth: "3em",
          }}
        />
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3} justifyContent={"flex-end"}>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}
export default EditPanel;
