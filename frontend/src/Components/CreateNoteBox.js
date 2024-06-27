import { Button, Grid, InputBase, CardActions } from "@mui/material";
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
          margin: "20px",
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
          margin: "20px",
        }}
      />
      <Grid container sx={{ margin: "10px" }}>
        <Grid
          item
          sx={{
            borderRadius: 2,
            backgroundColor: "#eee",
            padding: "0.2em",
          }}
        >
          <InputBase
            placeholder="Tag…"
            value={inputTag}
            onChange={tagHandler}
            minWidth
            sx={{
              fontSize: "0.9em",
            }}
          />
        </Grid>
      </Grid>
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
