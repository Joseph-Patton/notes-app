import { React, useState } from "react";
import Note from "./Note.js";
import Grid from "@mui/material/Grid";

function NoteContainer({ note, deleteNote }) {
  const [noteHover, setNoteHover] = useState(true);
  return (
    <Grid
      onMouseEnter={() => setNoteHover(true)}
      onMouseLeave={() => setNoteHover(false)}
    >
      <Note note={note} noteHover={noteHover} deleteNote={deleteNote} />
    </Grid>
  );
}
export default NoteContainer;
