import { React, useState, useEffect } from "react";
import "./css/Note.css";
import NoteList from "./NoteList";
import EditPanel from "./EditPanel";
import { v4 as uuid } from "uuid";
import NotePreview from "./NotePreview";

function MainUI() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    //clear the textarea
    setInputText("");
  };
  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <div className="mainUI">
      <NoteList notes={notes} deleteNote={deleteNote} />
      <EditPanel
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}
export default MainUI;
