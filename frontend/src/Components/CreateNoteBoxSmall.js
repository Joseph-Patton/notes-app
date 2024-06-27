import { Button, Grid, InputBase, CardActions } from "@mui/material";
import { React } from "react";

function CreateNoteBoxSmall({ create_note_open }) {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        sm={3}
        sx={{
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
          placeholder="Take a note…"
          maxLength="100"
          multiline={true}
          sx={{
            fontSize: "1em",
            margin: "20px",
          }}
        />

        <CardActions>
          <Grid container justifyContent={"space-evenly"}>
            <Button color="primary">reset</Button>
          </Grid>
        </CardActions>
      </Grid>
    </Grid>
  );
}
export default CreateNoteBoxSmall;
