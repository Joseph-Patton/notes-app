import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "../styles/NoteStyle";
import DeleteNoteButton from "./DeleteNoteButton";
import { green, grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function Note({ id, content, title, tag, deleteNote }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ backgroundColor: green }}>
      <CardContent>
        <DeleteNoteButton
          title={title}
          deleteNote={() => deleteNote(id)}
          style={{ right: ".2em" }}
        ></DeleteNoteButton>

        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" component="p" className={content}>
          {content}
        </Typography>

        <Typography variant="body1" component="div" className={tag}>
          {tag}
          {/* {DateFormatter(note.date)} */}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Note;
