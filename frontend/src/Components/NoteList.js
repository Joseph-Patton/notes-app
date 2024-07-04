import { React, useState } from "react";
import NoteContainer from "./NoteContainer.js";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function NoteList({ notes, deleteNote, handleClickOpen, archiveNote }) {
  return (
    <Grid container spacing={2} justifyContent={"left"}>
      {notes.length === 0 ? (
        <Typography>No Notes</Typography>
      ) : (
        notes.map((note) => (
          <Grid item xs={12} sm={3} key={note.id}>
            <NoteContainer
              note={note}
              deleteNote={deleteNote}
              handleClickOpen={handleClickOpen}
              archiveNote={archiveNote}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}
export default NoteList;
