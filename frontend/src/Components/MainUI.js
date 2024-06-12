import { React, useState } from "react";
import "./css/EditPanel.css";
import axios from "axios";
import NoteList from "./NoteList";
import EditPanel from "./EditPanel";
//import NotePreview from "./NotePreview";

function MainUI() {
  const apiUrl = "http://localhost:8000"; // TODO add as argument
  const [notes, setNotes] = useState([]);
  //const [newNote, setNewNote] = useState([]);
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

  // fetch notes
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/notes`);
  //       setNotes(response.data());
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, [backendName, apiUrl]);
  const createNote = async (e) => {
    e.preventDefault();
    // const testNote = {
    //   title: inputTitle,
    //   text: inputText,
    //   tag: inputTag,
    // };
    const testNote = {
      title: "Frontend Title",
      content: "frontend content",
      tag: "frontend tag",
    };
    try {
      await axios.post(`${apiUrl}/notes`, testNote);
      //setNotes([response.data, ...notes]);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    //clear the textarea
    setInputTitle("");
    setInputText("");
    setInputTag("");
  };
  // add new note to the state array
  // const saveHandler = () => {
  //   setNotes((prevState) => [
  //     ...prevState,
  //     {
  //       id: uuid(),
  //       title: inputTitle,
  //       text: inputText,
  //       tag: inputTag,
  //     },
  //   ]);
  //   //clear the textarea
  //   setInputTitle("");
  //   setInputText("");
  //   setInputTag("");
  // };
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
        //saveHandler={saveHandler}
        createNote={createNote}
        inputTitle={inputTitle}
        inputText={inputText}
        inputTag={inputTag}
      />
    </div>
  );
}
export default MainUI;
