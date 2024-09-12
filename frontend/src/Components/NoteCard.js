import { React, useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteNoteButton from "./DeleteNoteButton.js";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NoteContext } from "../App.js";
import EditPanel from "./EditPanel.js";
import UnarchivePanel from "./UnarchivePanel.js";
import ArchiveButton from "./ArchiveButton.js";

function Note({ note, noteHover }) {
  const { deleteNote, updateNote } = useContext(NoteContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const archiveNote = async () => {
    note.is_archived = true;
    updateNote(note);
  };

  const unarchiveNote = async () => {
    note.is_archived = false;
    updateNote(note);
  };
  return (
    <>
      <Card
        sx={{
          position: "relative",
          color: "#000",
          backgroundColor: "#fff",
          overflow: "visible",
          border: "1px solid",
          borderColor: "#5555",
          borderRadius: 2,
          marginBottom: "0px",
          boxShadow: noteHover === true ? "0 2px 4px #000" : "none",
        }}
      >
        <CardContent onClick={handleOpen} sx={{ paddingBottom: "0px" }}>
          <Typography
            sx={{
              fontSize: "1em",
              fontWeight: 500,
              whiteSpace: "normal",
              overflow: "hidden",
              marginBottom: "0.6em",
            }}
          >
            {note.title}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            sx={{
              overflow: "hidden",
              marginBottom: "0.6em",
            }}
          >
            {note.content}
          </Typography>
          <Grid container>
            {note.tag.map((stag) => (
              <Grid
                item
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#eee",
                  padding: "0.2em",
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{
                    fontSize: "0.9em",
                  }}
                >
                  {stag}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "right",
          }}
        >
          {note.is_archived ? (
            <IconButton
              onClick={unarchiveNote}
              aria-label="delete"
              type="button"
            >
              <UnarchiveOutlinedIcon />
            </IconButton>
          ) : (
            <ArchiveButton noteHover={noteHover} archiveNote={archiveNote} />
          )}

          <DeleteNoteButton
            title={note.title}
            deleteNote={() => deleteNote(note.id)}
          ></DeleteNoteButton>
        </CardActions>
      </Card>
      {note.is_archived ? (
        <UnarchivePanel
          open={open}
          handleClose={handleClose}
          unarchiveNote={unarchiveNote}
        />
      ) : (
        <EditPanel
          open={open}
          handleClose={handleClose}
          updateNote={updateNote}
          note={note}
        />
      )}
    </>
  );
}
export default Note;
