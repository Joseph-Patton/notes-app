import { React, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeaderBar from "./Components/HeaderBar";
import NoteList from "./Components/NoteList";
import EditPanel from "./Components/EditPanel";
import MainMenuDrawer from "./Components/MainMenuDrawer";
import CreateNoteBoxSmall from "./Components/CreateNoteBoxSmall";
import CreateNoteBox from "./Components/CreateNoteBox";
import Toolbar from "@mui/material/Toolbar";

//import { useStyles } from "styles/AppStyle";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
function CreateNote({
  contentHandler,
  titleHandler,
  tagHandler,
  createNote,
  resetNote,
  inputContent,
  inputTitle,
  inputTag,
  create_note_open,
  handleNoteOpen,
  handleNoteClose,
}) {
  if (create_note_open) {
    return (
      <CreateNoteBox
        titleHandler={titleHandler}
        contentHandler={contentHandler}
        tagHandler={tagHandler}
        createNote={createNote}
        resetNote={resetNote}
        inputTitle={inputTitle}
        inputContent={inputContent}
        inputTag={inputTag}
        open={create_note_open}
        handleNoteClose={handleNoteClose}
      />
    );
  }
  return <CreateNoteBoxSmall handleNoteOpen={handleNoteOpen} />;
}

function App() {
  const apiUrl = "http://localhost:8000"; // TODO add as argument
  const [notes, setNotes] = useState([]);
  const [visibleNotes, setVisibleNotes] = useState([]);
  // const filterArchived = (note) => note.is_archived;
  // const filterNotArchived = (note) => !note.is_archived;
  const refreshFilter = (filter) => {
    setFilters(filter);
    refreshNotes();
  };
  const [filters, setFilters] = useState([(note) => !note.is_archived]);
  const getVisibleNotes = useCallback(() => {
    setVisibleNotes(
      notes.filter((note) =>
        filters.reduce((pass, curFilter) => pass && curFilter(note), true)
      )
    );
  }, [notes, filters]);

  const [inputContent, setInputContent] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputTag, setInputTag] = useState("");

  const contentHandler = (e) => {
    setInputContent(e.target.value);
  };
  const titleHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const tagHandler = (e) => {
    setInputTag(e.target.value);
  };

  const fetchNotes = async (apiUrl) => {
    try {
      const response = await axios.get(`${apiUrl}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const refreshNotes = () => {
    fetchNotes(apiUrl);
  };

  useEffect(() => {
    getVisibleNotes();
  }, [notes]);

  useEffect(() => {
    refreshNotes();
  }, []);

  const createNote = async () => {
    const new_note = {
      title: inputTitle,
      content: inputContent,
      tag: inputTag,
    };
    //TODO better way to handle not creating empty notes
    if (new_note.title === "" && new_note.content === "" && new_note.tag === "")
      return;
    try {
      await axios.post(`${apiUrl}/notes`, new_note);
      //setNotes([response.data, ...notes]);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    // Fetch the updated list
    refreshNotes();
  };

  const resetNote = () => {
    // Clear the textarea
    setInputTitle("");
    setInputContent("");
    setInputTag("");
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
    refreshNotes();
  };

  const [inputTitleEdit, setInputTitleEdit] = useState("");
  const [inputContentEdit, setInputContentEdit] = useState("");
  const [inputTagEdit, setInputTagEdit] = useState("");
  const [noteIdEdit, setNoteIdEdit] = useState();

  const titleHandlerEdit = (e) => {
    setInputTitleEdit(e.target.value);
  };
  const contentHandlerEdit = (e) => {
    setInputContentEdit(e.target.value);
  };
  const tagHandlerEdit = (e) => {
    setInputTagEdit(e.target.value);
  };

  const updateNote = async (note) => {
    const updated_note = {
      id: noteIdEdit,
      title: inputTitleEdit,
      content: inputContentEdit,
      tag: inputTagEdit,
      is_archived: false,
    };
    try {
      await axios.put(`${apiUrl}/notes`, updated_note);
      //setNotes([response.data, ...notes]);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    // Fetch the updated list
    refreshNotes();
  };

  const archiveNote = async (note) => {
    note.is_archived = true;
    try {
      await axios.put(`${apiUrl}/notes`, note);
    } catch (error) {
      console.error("Error archiving note:", error);
    }
    refreshNotes();
  };

  // const updateNote = async () => {
  //   console.log("calling updateNote");
  // };

  const [open, setOpen] = useState(false);
  const handleClickOpen = (note) => {
    console.log(note.id);
    setNoteIdEdit(note.id);
    setInputTitleEdit(note.title);
    setInputContentEdit(note.content);
    setInputTagEdit(note.tag);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [drawer_open, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    drawer_open ? setDrawerOpen(false) : setDrawerOpen(true);
  };

  const [create_note_open, setCreateNoteOpen] = useState(false);
  const handleNoteClose = () => {
    setCreateNoteOpen(false);
    console.log(`Handle note close called`);
  };
  const handleNoteOpen = () => {
    setCreateNoteOpen(true);
    console.log(`Handle note open called`);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <HeaderBar handleDrawerToggle={handleDrawerToggle} />
      <MainMenuDrawer drawer_open={drawer_open} refreshFilter={refreshFilter} />
      <Box sx={{ width: "100%" }}>
        <Toolbar />
        <Grid
          container
          spacing={2}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} paddingRight={"32px"}>
            <CreateNote
              titleHandler={titleHandler}
              contentHandler={contentHandler}
              tagHandler={tagHandler}
              createNote={createNote}
              resetNote={resetNote}
              inputTitle={inputTitle}
              inputContent={inputContent}
              inputTag={inputTag}
              create_note_open={create_note_open}
              handleNoteOpen={handleNoteOpen}
              handleNoteClose={handleNoteClose}
            />
          </Grid>
          <Grid item xs={12} paddingRight={"32px"}>
            <NoteList
              notes={visibleNotes}
              deleteNote={deleteNote}
              handleClickOpen={handleClickOpen}
              archiveNote={archiveNote}
            />
          </Grid>
        </Grid>
      </Box>

      <EditPanel
        open={open}
        handleClose={handleClose}
        titleHandlerEdit={titleHandlerEdit}
        contentHandlerEdit={contentHandlerEdit}
        tagHandlerEdit={tagHandlerEdit}
        inputTitleEdit={inputTitleEdit}
        inputContentEdit={inputContentEdit}
        inputTagEdit={inputTagEdit}
        updateNote={updateNote}
      />
    </Box>
  );
}
export default App;
