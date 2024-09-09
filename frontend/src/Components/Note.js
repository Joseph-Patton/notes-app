import { React, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteNoteButton from "./DeleteNoteButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { NoteContext } from "../App.js";

function Note({ note, noteHover }) {
  const { deleteNote, handleClickOpen, archiveNote } = useContext(NoteContext);

  const handleClickOpenNote = () => {
    handleClickOpen(note);
  };

  return (
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
      <CardContent onClick={handleClickOpenNote} sx={{ paddingBottom: "0px" }}>
        <Typography
          sx={{
            fontSize: "1em",
            fontWeight: 500,
            whiteSpace: "normal",
            overflow: "hidden",
            marginBottom: "0.6em",
          }}
        >
          {note.is_archived.toString()}
        </Typography>
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
              {note.tag}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          opacity: noteHover === true ? "100%" : "0%",
          justifyContent: "right",
        }}
      >
        <IconButton
          onClick={() => archiveNote(note)}
          aria-label="delete"
          type="button"
        >
          <ArchiveOutlinedIcon />
        </IconButton>
        <DeleteNoteButton
          title={note.title}
          deleteNote={() => deleteNote(note.id)}
        ></DeleteNoteButton>
      </CardActions>
    </Card>
  );
}
export default Note;
