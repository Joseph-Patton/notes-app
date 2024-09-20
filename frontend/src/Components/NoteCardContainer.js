import { React, useState } from "react";
import NoteCard from "./NoteCard.js";
import Grid from "@mui/material/Grid";

function NoteContainer({ note }) {
  const [noteHover, setNoteHover] = useState(false);
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      key={note.id}
      onMouseEnter={() => setNoteHover(true)}
      onMouseLeave={() => setNoteHover(false)}
    >
      <NoteCard note={note} noteHover={noteHover} />
    </Grid>
  );
}
export default NoteContainer;
