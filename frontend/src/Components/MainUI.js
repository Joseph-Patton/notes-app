import { React, useState, useEffect } from "react";
import "./css/EditPanel.css";
import NoteList from "./NoteList";
import EditPanel from "./EditPanel";
import { v4 as uuid } from "uuid";
import NotePreview from "./NotePreview";

function MainUI() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputTag, setInputTag] = useState("");
  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const tagHandler = (e) => {
    setInputTag(e.target.value);
  };
  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: inputTitle,
        text: inputText,
        tag: inputTag,
      },
    ]);
    //clear the textarea
    setInputTitle("");
    setInputText("");
    setInputTag("");
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
        titleHandler={titleHandler}
        textHandler={textHandler}
        tagHandler={tagHandler}
        saveHandler={saveHandler}
        inputTitle={inputTitle}
        inputText={inputText}
        inputTag={inputTag}
      />
    </div>
  );
}
export default MainUI;
