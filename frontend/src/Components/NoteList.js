import { React, useState } from "react";
import NoteContainer from "./NoteCardContainer.js";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
function NoteList({ getVisibleNotes }) {
  const visibleNotes = getVisibleNotes();
  return (
    <>
      {visibleNotes.length === 0 ? (
        // Empty note list display
        <Grid
          container
          direction="column"
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid item align={"center"}>
            <LightbulbOutlinedIcon
              sx={{
                marginTop: "200px",
                marginBottom: "20px",
                fontSize: 100,
                color: "#888",
              }}
            />
          </Grid>
          <Grid item>
            <Typography textAlign={"center"} sx={{ color: "#888" }}>
              Notes you add appear here
            </Typography>
          </Grid>
        </Grid>
      ) : (
        // Display if notes are present
        <Grid container spacing={2} justifyContent={"left"}>
          {visibleNotes.map((note) => (
            <Grid item xs={12} sm={3} key={note.id}>
              <NoteContainer note={note} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
export default NoteList;
