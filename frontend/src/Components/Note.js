import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteNoteButton from "./DeleteNoteButton";
import Typography from "@mui/material/Typography";

function Note({ id, content, title, tag, deleteNote }) {
  return (
    <Card
      sx={{
        position: "relative",
        color: "#000",
        backgroundColor: "#fff",
        overflow: "visible",
        border: "1px solid",
        borderColor: "#5555",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "1.2em",
            fontWeight: 500,
            marginLeft: "1em",
            marginRight: "4em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          gutterBottom
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          sx={{
            overflow: "hidden",
          }}
        >
          {content}
        </Typography>

        <Typography variant="body1" component="div">
          {tag}
          {/* {DateFormatter(note.date)} */}
        </Typography>
        <DeleteNoteButton
          title={title}
          deleteNote={() => deleteNote(id)}
          sx={{ right: ".2em" }}
        ></DeleteNoteButton>
      </CardContent>
    </Card>
  );
}
export default Note;
