import { React, useState } from "react";
import Note from "./Note.js";
import Grid from "@mui/material/Grid";

function NoteContainer({ note, deleteNote, handleClickOpen }) {
  const [noteHover, setNoteHover] = useState(false);
  return (
    <Grid
      onMouseEnter={() => setNoteHover(true)}
      onMouseLeave={() => setNoteHover(false)}
    >
      <Note
        note={note}
        noteHover={noteHover}
        deleteNote={deleteNote}
        handleClickOpen={handleClickOpen}
      />
    </Grid>
  );
}
export default NoteContainer;
