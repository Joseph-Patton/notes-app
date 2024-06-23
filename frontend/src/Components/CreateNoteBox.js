import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  InputBase,
  CardActions,
} from "@mui/material";
import { React } from "react";

function CreateNoteBox({
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
    <Grid container spacing={2} direction="column">
      <Grid
        item
        xs={12}
        sx={{
          position: "relative",
          color: "#000",
          backgroundColor: "#fff",
          overflow: "visible",
          border: "1px solid",
          borderColor: "#5555",
          borderRadius: 2,
          "&:hover": { boxShadow: "0 2px 4px #000" },
        }}
      >
        <InputBase
          xs={12}
          minRows={1}
          placeholder="Title…"
          value={inputTitle}
          onChange={titleHandler}
          multiline={true}
          sx={{ fontSize: "1.2em" }}
        />
        <InputBase
          xs={12}
          minRows={4}
          placeholder="Content…"
          value={inputContent}
          onChange={contentHandler}
          maxLength="100"
          multiline={true}
          sx={{ fontSize: "1em" }}
        />
        <InputBase
          xs={12}
          placeholder="Tag…"
          value={inputTag}
          onChange={tagHandler}
        />

        <CardActions
          sx={{
            justifyContent: "right",
          }}
        >
          <Grid item xs={12}>
            <Button color="secondary" onClick={handleCreate}>
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </Grid>
        </CardActions>
      </Grid>
    </Grid>
  );
}
export default CreateNoteBox;
