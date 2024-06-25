import { React, useState } from "react";
import NoteContainer from "./NoteContainer.js";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const onDragEnd = () => {};

function NoteList({ notes, deleteNote, handleClickOpen }) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
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
                    />
                  </Grid>
                ))
              )}
            </Grid>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default NoteList;
