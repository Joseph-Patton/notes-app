import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "../styles/AddNoteButtonStyle";

export default function AddNoteButton({ handleClickOpen }) {
  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add note
      </Button>
    </>
  );
}
