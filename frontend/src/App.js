import { React, useState, useEffect, useCallback, createContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeaderBar from "./Components/HeaderBar";
import NoteList from "./Components/NotesBox";
import MainMenuDrawer from "./Components/MainMenuDrawer";
import CreateNoteBox from "./Components/CreateNoteBox";
import Toolbar from "@mui/material/Toolbar";

//import { useStyles } from "styles/AppStyle";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export const CreateNoteContext = createContext();
export const NoteContext = createContext();

function App() {
  const apiUrl = "http://localhost:8000"; // TODO add as argument
  const [notes, setNotes] = useState([]);

  const getVisibleNotes = () =>
    notes.filter((note) =>
      getFilters().reduce((pass, curFilter) => pass && curFilter(note), true)
    );

  // Returns array of tags present in notes (no duplicates)
  const getTagsList = () => [
    ...new Set(
      notes
        .filter(notArchivedFilter)
        .reduce((tagsList, note) => [...tagsList, ...note.tags], [])
    ),
  ];

  // Filters on Notes being displayed
  const archivedFilter = (note) => note.is_archived;
  const notArchivedFilter = (note) => !note.is_archived;
  const tagFilter = (tag) => (note) => note.tags.includes(tag);
  const isSubstringInTags = (note, search) =>
    note.tags.reduce((pass, tag) => pass || tag.includes(search), false);
  const searchBarFilter = (search) => (note) =>
    note.title.includes(search) ||
    note.content.includes(search) ||
    isSubstringInTags(note, search);

  // Tab filters e.g. is archived, is note tagged with corrisponding tag
  const [tabFilters, setTabFilters] = useState([notArchivedFilter]);
  // Search Bar filters, is current string in search bar also in note
  const [searchFilters, setSearchFilters] = useState([searchBarFilter]);
  // Returns list of currently active filters
  const getFilters = () => [...tabFilters, ...searchFilters];

  // Header Title changes based on tab
  const [headerTitle, setHeaderTitle] = useState("Notes");
  const [searchBarInput, setSearchBarInput] = useState("");
  const searchBarInputHandler = (e) => {
    setSearchBarInput(e.target.value);
  };

  useEffect(() => {
    setSearchFilters([searchBarFilter(searchBarInput)]);
  }, [searchBarInput]);

  const changeTab = (tab) => {
    switch (tab) {
      case "Notes":
        setTabFilters([notArchivedFilter]);
        setHeaderTitle("Notes");
        break;
      case "Archived":
        setTabFilters([archivedFilter]);
        setHeaderTitle("Archive");
        break;
      default:
        setTabFilters([tagFilter(tab), notArchivedFilter]);
        setHeaderTitle(tab);
        break;
    }
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

  // Fetch notes on initial page load
  useEffect(() => {
    refreshNotes();
  }, []);

  const createNote = async (new_note) => {
    //TODO better way to handle not creating empty notes
    if (new_note.title === "" && new_note.content === "") return;
    try {
      await axios.post(`${apiUrl}/notes`, new_note);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    // Fetch the updated list
    refreshNotes();
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

  const updateNote = async (note) => {
    try {
      await axios.put(`${apiUrl}/notes`, note);
      //setNotes([response.data, ...notes]);
    } catch (error) {
      console.error("Error creating notes:", error);
    }
    refreshNotes();
  };

  const [drawer_open, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    drawer_open ? setDrawerOpen(false) : setDrawerOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <HeaderBar
        handleDrawerToggle={handleDrawerToggle}
        headerTitle={headerTitle}
        searchBarInput={searchBarInput}
        searchBarInputHandler={searchBarInputHandler}
      />
      <MainMenuDrawer
        drawer_open={drawer_open}
        changeTab={changeTab}
        getTagsList={getTagsList}
      />
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
            <CreateNoteContext.Provider
              value={{
                createNote,
              }}
            >
              <CreateNoteBox />
            </CreateNoteContext.Provider>
          </Grid>
          <Grid item xs={12} paddingRight={"32px"}>
            <NoteContext.Provider
              value={{
                deleteNote,
                updateNote,
              }}
            >
              <NoteList getVisibleNotes={getVisibleNotes} />
            </NoteContext.Provider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default App;
