import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteNoteButton from "./DeleteNoteButton";
import Typography from "@mui/material/Typography";

function Note({ note, noteHover, deleteNote }) {
  return (
    <Card
      sx={{
        position: "relative",
        color: "#000",
        backgroundColor: "#fff",
        overflow: "visible",
        border: "1px solid",
        borderColor: "#5555",
        marginBottom: "0px",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "1em",
            fontWeight: 500,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          gutterBottom
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
      <CardActions sx={{ opacity: noteHover === true ? "100%" : "0%" }}>
        <DeleteNoteButton
          title={note.title}
          deleteNote={() => deleteNote(note.id)}
        ></DeleteNoteButton>
      </CardActions>
    </Card>
  );
}
export default Note;
