import { React, useState } from "react";
import NoteContainer from "./NoteContainer.js";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function NoteList({ getVisibleNotes }) {
  const visibleNotes = getVisibleNotes();
  return (
    <Grid container spacing={2} justifyContent={"left"}>
      {visibleNotes.length === 0 ? (
        <Typography>No Notes</Typography>
      ) : (
        visibleNotes.map((note) => (
          <Grid item xs={12} sm={3} key={note.id}>
            <NoteContainer note={note} />
          </Grid>
        ))
      )}
    </Grid>
  );
}
export default NoteList;
