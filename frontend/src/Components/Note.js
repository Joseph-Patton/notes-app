import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteNoteButton from "./DeleteNoteButton";
import Typography from "@mui/material/Typography";

function Note({ note, noteHover, deleteNote, handleClickOpen }) {
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
      <CardContent onClick={handleClickOpenNote}>
        <Typography
          sx={{
            fontSize: "1em",
            fontWeight: 500,
            whiteSpace: "normal",
            overflow: "hidden",
            //textOverflow: "ellipsis",
          }}
          gutterBottom={true}
        >
          {note.title}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          sx={{
            overflow: "hidden",
            marginBottom: "0.3em",
          }}
        >
          {note.content}
        </Typography>

        <Typography
          variant="body1"
          component="div"
          sx={{
            fontSize: "0.9em",
          }}
        >
          {note.tag}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          opacity: noteHover === true ? "100%" : "0%",
          justifyContent: "right",
        }}
      >
        <DeleteNoteButton
          title={note.title}
          deleteNote={() => deleteNote(note.id)}
        ></DeleteNoteButton>
      </CardActions>
    </Card>
  );
}
export default Note;
