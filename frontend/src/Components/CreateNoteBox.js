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
  contentHandler,
  titleHandler,
  tagHandler,
  createNote,
  resetNote,
  inputContent,
  inputTitle,
  inputTag,
}) {
  const handleCreate = async () => {
    await createNote();
    resetNote();
  };

  return (
    <Grid
      container
      direction="column"
      sx={{
        width: "100%",
        color: "#000",
        backgroundColor: "#fff",
        overflow: "visible",
        border: "1px solid",
        borderColor: "#5555",
        borderRadius: 2,
        "&:hover": { boxShadow: "0 1px 2px #000" },
      }}
    >
      <InputBase
        minRows={1}
        placeholder="Title…"
        value={inputTitle}
        onChange={titleHandler}
        multiline={true}
        sx={{
          fontSize: "1.2em",
          margin: "10px",
        }}
      />
      <InputBase
        minRows={1}
        placeholder="Content…"
        value={inputContent}
        onChange={contentHandler}
        maxLength="100"
        multiline={true}
        sx={{
          fontSize: "1em",

          margin: "10px",
        }}
      />
      <InputBase
        placeholder="Tag…"
        value={inputTag}
        onChange={tagHandler}
        sx={{
          fontSize: "0.8em",
          margin: "10px",
        }}
      />

      <CardActions>
        <Grid container justifyContent={"space-evenly"}>
          <Button onClick={resetNote} color="primary">
            reset
          </Button>
          <Button color="secondary" onClick={handleCreate}>
            Save
          </Button>
        </Grid>
      </CardActions>
    </Grid>
  );
}
export default CreateNoteBox;
