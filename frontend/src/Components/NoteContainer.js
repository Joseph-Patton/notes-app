import { React, useState } from "react";
import Note from "./Note.js";
import Grid from "@mui/material/Grid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function NoteContainer({ note, deleteNote, handleClickOpen }) {
  const [noteHover, setNoteHover] = useState(false);
  return (
    <Draggable draggableId={note.id}>
      {(provided, snapshot) => (
        <Grid
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
}
export default NoteContainer;
