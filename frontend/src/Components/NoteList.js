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
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            tag={note.tag}
            deleteNote={deleteNote}
          />
        ))
      )}
    </Grid>
  );
}
export default NoteList;
