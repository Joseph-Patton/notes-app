import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
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
