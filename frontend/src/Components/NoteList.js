import React from "react";
import Note from "./Note.js";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
//import NoNotesIllustration from "Components/NoNotesIllustration";

function NoteList({ notes, deleteNote }) {
  return (
    <Grid container spacing={2}>
      {notes.length === 0 ? (
        <Typography>No Notes</Typography>
      ) : (
        notes.map((note) => (
          <Grid item xs={12} sm={6} key={note.id}>
            <Note
              id={note.id}
              title={note.title}
              content={note.content}
              tag={note.tag}
              deleteNote={deleteNote}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}
export default NoteList;
