import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "../styles/NoteStyle";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";

function Note({ id, content, title, tag, deleteNote }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ backgroundColor: grey }}>
      <CardContent>
        {/* <Checkbox
          checked={completed}
          onChange={toggleStatus}
          className={classes.iconBtn}
          style={{ left: ".2em" }}
        /> */}
        {/* 
        <IconButton
          aria-label="edit"
          className={classes.iconBtn}
          style={{ right: "1.8em" }}
          onClick={() => onEdit(note)}
        >
          <EditIcon />
        </IconButton> */}
        <DeleteForeverOutlinedIcon
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" component="p" className={content}>
          {content}
        </Typography>

        <Typography variant="body1" component="div" className={tag}>
          Placeholer Date
          {/* {DateFormatter(note.date)} */}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Note;
