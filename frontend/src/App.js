import { React, useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles/AppStyle";
import Header from "./Components/Header";
import NoteList from "./Components/NoteList";
import EditPanel from "./Components/EditPanel";

//import { useStyles } from "styles/AppStyle";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  const classes = useStyles();
  const apiUrl = "http://localhost:8000"; // TODO add as argument
  const [notes, setNotes] = useState([]);
  //const [newNote, setNewNote] = useState([]);
  const [inputContent, setInputContent] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputTag, setInputTag] = useState("");

  // get text and store in state
  const contentHandler = (e) => {
    setInputContent(e.target.value);
  };
  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const tagHandler = (e) => {
    setInputTag(e.target.value);
  };

  //fetch notes
  const fetchNotes = async (apiUrl) => {
    try {
      const response = await axios.get(`${apiUrl}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchNotes(apiUrl);
  }, []);

  const createNote = async (e) => {
    e.preventDefault();
    const new_note = {
      title: inputTitle,
      content: inputContent,
      tag: inputTag,
    };
    try {
      await axios.post(`${apiUrl}/notes`, new_note);
      //setNotes([response.data, ...notes]);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    // Clear the textarea
    setInputTitle("");
    setInputContent("");
    setInputTag("");
    // Fetch the updated list
    fetchNotes(apiUrl);
  };

  // Delete note function
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${apiUrl}/notes`, {
        data: id,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    fetchNotes(apiUrl);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" className="notes">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <NoteList notes={notes} deleteNote={deleteNote} />
        </Grid>
      </Grid>
      <EditPanel
        titleHandler={titleHandler}
        contentHandler={contentHandler}
        tagHandler={tagHandler}
        createNote={createNote}
        inputTitle={inputTitle}
        inputContent={inputContent}
        inputTag={inputTag}
      />
    </div>
  );
}
export default App;
