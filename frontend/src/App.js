import { React, useState, useEffect, createContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HeaderBar from "./Components/HeaderBar";
import NoteList from "./Components/NotesBox";
import MainMenuDrawer from "./Components/MainMenuDrawer";
import CreateNoteBox from "./Components/CreateNoteBox";
import Toolbar from "@mui/material/Toolbar";
import { useColorScheme } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

  // Theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Notes State
  const [notes, setNotes] = useState([]);
  const getVisibleNotes = () =>
    notes.filter((note) =>
      getFilters().reduce((pass, curFilter) => pass && curFilter(note), true)
    );

  // Returns list of notes ordered by time created (latest first)
  const getTimeOrderedVisibleNotes = () =>
    getVisibleNotes().sort((a, b) => b.created_at - a.created_at);

  // Returns unique array of tags present in notes
  const getTagsList = () => [
    ...new Set(
      notes
        .filter(notArchivedFilter)
        .reduce((tagsList, note) => [...tagsList, ...note.tags], [])
    ),
  ];

  // Filters on Notes being shown
  const archivedFilter = (note) => note.is_archived;
  const notArchivedFilter = (note) => !note.is_archived;
  const tagFilter = (tag) => (note) => note.tags.includes(tag);
  const isSubstringInTags = (note, search) =>
    note.tags.reduce((pass, tag) => pass || tag.includes(search), false);
  const searchBarFilter = (search) => (note) =>
    note.title.includes(search) ||
    note.content.includes(search) ||
    isSubstringInTags(note, search);

  // Tab Filters
  const [tabFilters, setTabFilters] = useState([notArchivedFilter]);
  // Search Bar Filters
  const [searchFilters, setSearchFilters] = useState([searchBarFilter]);
  // Returns list of currently active filters
  const getFilters = () => [...tabFilters, ...searchFilters];

  // Header Title changes based on tab
  const [searchBarInput, setSearchBarInput] = useState("");
  const searchBarInputHandler = (e) => {
    setSearchBarInput(e.target.value);
  };

  useEffect(() => {
    setSearchFilters([searchBarFilter(searchBarInput)]);
  }, [searchBarInput]);

  const [currentTab, setCurrentTab] = useState("");
  const changeTab = (tab) => {
    switch (tab) {
      case "":
        setTabFilters([notArchivedFilter]);
        setCurrentTab("");
        break;
      case "Archived":
        setTabFilters([archivedFilter]);
        setCurrentTab("Archive");
        break;
      default:
        setTabFilters([tagFilter(tab), notArchivedFilter]);
        setCurrentTab(tab);
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <HeaderBar
          handleDrawerToggle={handleDrawerToggle}
          currentTab={currentTab}
          searchBarInput={searchBarInput}
          searchBarInputHandler={searchBarInputHandler}
          toggleDarkMode={toggleDarkMode}
        />
        <MainMenuDrawer
          drawer_open={drawer_open}
          changeTab={changeTab}
          getTagsList={getTagsList}
          currentTab={currentTab}
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
                  currentTab,
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
                <NoteList getVisibleNotes={getTimeOrderedVisibleNotes} />
              </NoteContext.Provider>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
