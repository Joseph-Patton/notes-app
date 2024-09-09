import { React, useState } from "react";
import Note from "./Note.js";
import Grid from "@mui/material/Grid";

function NoteContainer({ note }) {
  const [noteHover, setNoteHover] = useState(false);
  return (
    <Grid
      onMouseEnter={() => setNoteHover(true)}
      onMouseLeave={() => setNoteHover(false)}
    >
      <Note note={note} noteHover={noteHover} />
    </Grid>
  );
}
export default NoteContainer;
