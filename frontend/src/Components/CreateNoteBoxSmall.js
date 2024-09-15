import { Grid, InputBase, CardActions } from "@mui/material";
import { React } from "react";

function CreateNoteBoxSmall({ handleExpand }) {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        onClick={handleExpand}
        alignContent={"center"}
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
        <Grid container alignContent={"center"}>
          <InputBase
            minRows={1}
            placeholder="Take a note…"
            maxLength="100"
            multiline={true}
            sx={{
              fontSize: "1em",
              marginLeft: "10px",
            }}
          />

          <CardActions>
            <Grid container justifyContent={"space-evenly"}></Grid>
          </CardActions>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CreateNoteBoxSmall;
